#!/usr/bin/env node

/**
 * Differential Serving Build Script
 *
 * This script builds both modern and legacy JavaScript bundles for differential serving
 */

const { execSync } = require("child_process");
const fs = require("fs-extra");
const path = require("path");

const BUILD_DIR = path.join(process.cwd(), "public");
const MODERN_BUILD_DIR = path.join(process.cwd(), "public-modern");
const LEGACY_BUILD_DIR = path.join(process.cwd(), "public-legacy");

/**
 * Log with timestamp
 */
const log = (message) => {
	const timestamp = new Date().toISOString();
	console.log(`[${timestamp}] ${message}`);
};

/**
 * Execute command with error handling
 */
const exec = (command, options = {}) => {
	try {
		log(`Executing: ${command}`);
		return execSync(command, {
			stdio: "inherit",
			encoding: "utf8",
			...options,
		});
	} catch (error) {
		log(`Error executing command: ${command}`);
		log(`Error: ${error.message}`);
		process.exit(1);
	}
};

/**
 * Clean build directories
 */
const cleanBuildDirs = () => {
	log("🧹 Cleaning build directories...");

	[BUILD_DIR, MODERN_BUILD_DIR, LEGACY_BUILD_DIR].forEach((dir) => {
		if (fs.existsSync(dir)) {
			fs.removeSync(dir);
			log(`   Removed: ${dir}`);
		}
	});
};

/**
 * Build modern JavaScript bundle
 */
const buildModern = () => {
	log("🚀 Building modern JavaScript bundle (ES2020)...");

	const env = {
		...process.env,
		GATSBY_MODERN_BUILD: "true",
		NODE_ENV: "production",
	};

	exec("yarn gatsby build", { env });

	// Move build to modern directory
	if (fs.existsSync(BUILD_DIR)) {
		fs.moveSync(BUILD_DIR, MODERN_BUILD_DIR);
		log("   Modern build moved to public-modern/");
	}
};

/**
 * Build legacy JavaScript bundle
 */
const buildLegacy = () => {
	log("🏛️ Building legacy JavaScript bundle (ES5)...");

	const env = {
		...process.env,
		GATSBY_MODERN_BUILD: "false",
		NODE_ENV: "production",
	};

	exec("yarn gatsby build", { env });

	// Move build to legacy directory
	if (fs.existsSync(BUILD_DIR)) {
		fs.moveSync(BUILD_DIR, LEGACY_BUILD_DIR);
		log("   Legacy build moved to public-legacy/");
	}
};

/**
 * Merge modern and legacy builds
 */
const mergeBuilds = () => {
	log("🔀 Merging modern and legacy builds...");

	// Start with modern build as base
	if (fs.existsSync(MODERN_BUILD_DIR)) {
		fs.copySync(MODERN_BUILD_DIR, BUILD_DIR);
		log("   Copied modern build as base");
	}

	// Add legacy JavaScript files
	if (fs.existsSync(LEGACY_BUILD_DIR)) {
		const legacyJsDir = path.join(LEGACY_BUILD_DIR);
		const targetJsDir = path.join(BUILD_DIR);

		// Copy all .js files from legacy build, renaming them
		const copyJsFiles = (sourceDir, targetDir) => {
			if (!fs.existsSync(sourceDir)) return;

			const files = fs.readdirSync(sourceDir);

			files.forEach((file) => {
				const sourcePath = path.join(sourceDir, file);
				const stat = fs.statSync(sourcePath);

				if (stat.isDirectory()) {
					const targetSubDir = path.join(targetDir, file);
					fs.ensureDirSync(targetSubDir);
					copyJsFiles(sourcePath, targetSubDir);
				} else if (file.endsWith(".js") && !file.includes(".legacy.js")) {
					// Rename .js files to .legacy.js
					const legacyFileName = file.replace(".js", ".legacy.js");
					const targetPath = path.join(targetDir, legacyFileName);
					fs.copySync(sourcePath, targetPath);
					log(`   Copied: ${file} -> ${legacyFileName}`);
				}
			});
		};

		copyJsFiles(legacyJsDir, targetJsDir);
	}

	log("   Build merge completed");
};

/**
 * Generate build manifest
 */
const generateManifest = () => {
	log("📋 Generating differential serving manifest...");

	const manifest = {
		buildTime: new Date().toISOString(),
		modern: {
			target: "es2020",
			features: ["modules", "async-await", "arrow-functions", "classes", "destructuring"],
		},
		legacy: {
			target: "es5",
			features: ["polyfills", "transpiled-syntax"],
		},
	};

	const manifestPath = path.join(BUILD_DIR, "differential-serving-manifest.json");
	fs.writeJsonSync(manifestPath, manifest, { spaces: 2 });

	log(`   Manifest written to: ${manifestPath}`);
};

/**
 * Cleanup temporary directories
 */
const cleanup = () => {
	log("🧹 Cleaning up temporary directories...");

	[MODERN_BUILD_DIR, LEGACY_BUILD_DIR].forEach((dir) => {
		if (fs.existsSync(dir)) {
			fs.removeSync(dir);
			log(`   Removed: ${dir}`);
		}
	});
};

/**
 * Analyze bundle sizes
 */
const analyzeBundles = () => {
	log("📊 Analyzing bundle sizes...");

	const getDirectorySize = (dirPath) => {
		if (!fs.existsSync(dirPath)) return 0;

		let totalSize = 0;
		const files = fs.readdirSync(dirPath);

		files.forEach((file) => {
			const filePath = path.join(dirPath, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				totalSize += getDirectorySize(filePath);
			} else if (file.endsWith(".js")) {
				totalSize += stat.size;
			}
		});

		return totalSize;
	};

	const formatSize = (bytes) => {
		const kb = bytes / 1024;
		return `${kb.toFixed(2)} KB`;
	};

	const totalSize = getDirectorySize(BUILD_DIR);
	log(`   Total JavaScript bundle size: ${formatSize(totalSize)}`);

	// Count modern vs legacy files
	const countFiles = (dir, pattern) => {
		if (!fs.existsSync(dir)) return 0;

		let count = 0;
		const files = fs.readdirSync(dir);

		files.forEach((file) => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				count += countFiles(filePath, pattern);
			} else if (file.includes(pattern)) {
				count++;
			}
		});

		return count;
	};

	const modernFiles = countFiles(BUILD_DIR, ".modern.js");
	const legacyFiles = countFiles(BUILD_DIR, ".legacy.js");

	log(`   Modern bundles: ${modernFiles} files`);
	log(`   Legacy bundles: ${legacyFiles} files`);
};

/**
 * Main build process
 */
const main = async () => {
	const startTime = Date.now();

	log("🏗️ Starting differential serving build process...");

	try {
		// Step 1: Clean previous builds
		cleanBuildDirs();

		// Step 2: Build modern bundle
		buildModern();

		// Step 3: Build legacy bundle
		buildLegacy();

		// Step 4: Merge builds
		mergeBuilds();

		// Step 5: Generate manifest
		generateManifest();

		// Step 6: Analyze bundles
		analyzeBundles();

		// Step 7: Cleanup
		cleanup();

		const duration = ((Date.now() - startTime) / 1000).toFixed(2);
		log(`✅ Differential serving build completed in ${duration}s`);
	} catch (error) {
		log(`❌ Build failed: ${error.message}`);
		process.exit(1);
	}
};

// Run the build process
if (require.main === module) {
	main();
}

module.exports = {
	main,
	buildModern,
	buildLegacy,
	mergeBuilds,
};
