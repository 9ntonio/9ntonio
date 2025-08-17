const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("\n🔍 Analyzing JavaScript Bundle Sizes...\n");

const publicDir = path.join(process.cwd(), "public");
const jsFiles = [];

// Find all JavaScript files
function findJSFiles(dir) {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			findJSFiles(filePath);
		} else if (file.endsWith(".js") && !file.includes(".map")) {
			const size = stat.size;
			const relativePath = path.relative(publicDir, filePath);
			jsFiles.push({ path: relativePath, size });
		}
	});
}

try {
	findJSFiles(publicDir);

	// Sort by size (largest first)
	jsFiles.sort((a, b) => b.size - a.size);

	let totalSize = 0;
	let minifiedSize = 0;

	console.log("📦 JavaScript Bundle Analysis:");
	console.log("================================");

	jsFiles.forEach((file) => {
		const sizeKB = (file.size / 1024).toFixed(2);
		totalSize += file.size;

		// Check if file appears to be minified (no spaces, short variable names)
		const content = fs.readFileSync(path.join(publicDir, file.path), "utf8");
		const isMinified = content.length > 1000 && (content.match(/\s/g) || []).length / content.length < 0.1;

		if (isMinified) {
			minifiedSize += file.size;
		}

		const status = isMinified ? "✅ Minified" : "⚠️  Not minified";
		console.log(`${file.path.padEnd(40)} ${sizeKB.padStart(8)} KB ${status}`);
	});

	console.log("================================");
	console.log(`Total JS Size: ${(totalSize / 1024).toFixed(2)} KB`);
	console.log(`Minified Size: ${(minifiedSize / 1024).toFixed(2)} KB`);
	console.log(`Minification Rate: ${((minifiedSize / totalSize) * 100).toFixed(1)}%`);

	// Check for potential optimizations
	console.log("\n💡 Optimization Suggestions:");

	const largeFiles = jsFiles.filter((f) => f.size > 100 * 1024); // > 100KB
	if (largeFiles.length > 0) {
		console.log("⚠️  Large files detected (>100KB):");
		largeFiles.forEach((file) => {
			console.log(`   - ${file.path}: ${(file.size / 1024).toFixed(2)} KB`);
		});
	}

	const unminifiedFiles = jsFiles.filter((file) => {
		try {
			// Only check files larger than 10KB to avoid false positives
			if (file.size < 10 * 1024) return false;

			const content = fs.readFileSync(path.join(publicDir, file.path), "utf8");
			// More accurate minification detection
			const hasLongVariableNames = /\b[a-zA-Z_$][a-zA-Z0-9_$]{10,}\b/.test(content.slice(0, 5000));
			const hasComments = /\/\*[\s\S]*?\*\/|\/\/.*$/m.test(content.slice(0, 5000));
			const whitespaceRatio = (content.match(/\s/g) || []).length / content.length;

			return hasLongVariableNames || hasComments || whitespaceRatio > 0.15;
		} catch (error) {
			console.warn(`Could not analyze ${file.path}:`, error.message);
			return false;
		}
	});

	if (unminifiedFiles.length > 0) {
		console.log("⚠️  Potentially unminified files:");
		unminifiedFiles.forEach((file) => {
			console.log(`   - ${file.path}: ${(file.size / 1024).toFixed(2)} KB`);
		});
	}

	if (largeFiles.length === 0 && unminifiedFiles.length === 0) {
		console.log("✅ All files appear to be properly minified!");
	}
} catch (error) {
	console.error("❌ Error analyzing bundle:", error.message);
}
