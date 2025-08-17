/**
 * Differential Build Processor
 *
 * This script processes the output of modern and legacy builds to create
 * a differential serving setup where modern browsers get optimized bundles
 * and legacy browsers get compatible fallbacks.
 */

const fs = require("fs-extra");
const path = require("path");
const { glob } = require("glob");

const PUBLIC_DIR = path.resolve("public");
const MODERN_DIR = path.resolve("public-modern");
const LEGACY_DIR = path.resolve("public-legacy");

/**
 * Process differential builds and create optimized serving structure
 */
async function processDifferentialBuilds() {
	console.log("🔄 Processing differential builds...");

	try {
		// Check if both modern and legacy builds exist
		const hasModern = await fs.pathExists(MODERN_DIR);
		const hasLegacy = await fs.pathExists(LEGACY_DIR);

		if (!hasModern && !hasLegacy) {
			console.log("ℹ️  No differential builds found, using single build");
			return;
		}

		// If we have both builds, process them
		if (hasModern && hasLegacy) {
			await createDifferentialStructure();
		} else if (hasModern) {
			// Only modern build exists, use it as the main build
			console.log("📦 Using modern build as primary");
			await fs.copy(MODERN_DIR, PUBLIC_DIR);
			await fs.remove(MODERN_DIR);
		} else if (hasLegacy) {
			// Only legacy build exists, use it as the main build
			console.log("📦 Using legacy build as primary");
			await fs.copy(LEGACY_DIR, PUBLIC_DIR);
			await fs.remove(LEGACY_DIR);
		}

		console.log("✅ Differential build processing complete");
	} catch (error) {
		console.error("❌ Error processing differential builds:", error);
		process.exit(1);
	}
}

/**
 * Create differential serving structure with modern and legacy bundles
 */
async function createDifferentialStructure() {
	console.log("🏗️  Creating differential serving structure...");

	// Ensure public directory exists
	await fs.ensureDir(PUBLIC_DIR);

	// Copy modern build as the primary build
	await fs.copy(MODERN_DIR, PUBLIC_DIR);
	console.log("📦 Copied modern build to public directory");

	// Create legacy subdirectory for fallback bundles
	const legacyPublicDir = path.join(PUBLIC_DIR, "legacy");
	await fs.ensureDir(legacyPublicDir);

	// Copy legacy JavaScript bundles to legacy subdirectory
	const legacyJsFiles = await glob("**/*.js", { cwd: LEGACY_DIR });

	for (const jsFile of legacyJsFiles) {
		const srcPath = path.join(LEGACY_DIR, jsFile);
		const destPath = path.join(legacyPublicDir, jsFile);

		await fs.ensureDir(path.dirname(destPath));
		await fs.copy(srcPath, destPath);
	}

	console.log(`📦 Copied ${legacyJsFiles.length} legacy JavaScript files`);

	// Update HTML files to include differential serving logic
	await updateHtmlForDifferentialServing();

	// Clean up temporary directories
	await fs.remove(MODERN_DIR);
	await fs.remove(LEGACY_DIR);

	console.log("🧹 Cleaned up temporary build directories");
}

/**
 * Update HTML files to include differential serving script
 */
async function updateHtmlForDifferentialServing() {
	console.log("📝 Updating HTML files for differential serving...");

	const htmlFiles = await glob("**/*.html", { cwd: PUBLIC_DIR });

	const differentialScript = `
<script>
(function() {
  // Feature detection for modern JavaScript support
  var isModern = (
    'noModule' in HTMLScriptElement.prototype &&
    'import' in document.createElement('link') &&
    typeof Symbol !== 'undefined' &&
    typeof Symbol.iterator !== 'undefined' &&
    typeof Promise !== 'undefined' &&
    typeof Object.assign !== 'undefined' &&
    typeof Array.from !== 'undefined'
  );

  // If legacy browser detected, update script sources
  if (!isModern) {
    document.addEventListener('DOMContentLoaded', function() {
      var scripts = document.querySelectorAll('script[src*=".js"]');
      scripts.forEach(function(script) {
        if (script.src && !script.src.includes('/legacy/')) {
          var legacyUrl = script.src.replace(/\\/([^/]+\\.js)$/, '/legacy/$1');
          script.src = legacyUrl;
        }
      });
    });
  }
})();
</script>`;

	for (const htmlFile of htmlFiles) {
		const filePath = path.join(PUBLIC_DIR, htmlFile);
		let content = await fs.readFile(filePath, "utf8");

		// Insert differential serving script before closing head tag
		content = content.replace("</head>", `${differentialScript}\n</head>`);

		await fs.writeFile(filePath, content);
	}

	console.log(`📝 Updated ${htmlFiles.length} HTML files with differential serving`);
}

/**
 * Store build outputs in separate directories for processing
 */
async function storeBuildOutput(buildType) {
	const targetDir = buildType === "modern" ? MODERN_DIR : LEGACY_DIR;

	if (await fs.pathExists(PUBLIC_DIR)) {
		await fs.copy(PUBLIC_DIR, targetDir);
		await fs.remove(PUBLIC_DIR);
		console.log(`📦 Stored ${buildType} build output`);
	}
}

// Handle command line arguments
const command = process.argv[2];

if (command === "store-modern") {
	storeBuildOutput("modern");
} else if (command === "store-legacy") {
	storeBuildOutput("legacy");
} else {
	processDifferentialBuilds();
}
