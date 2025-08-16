const fs = require("fs");
const path = require("path");
const terser = require("terser");

console.log("\n🔧 JavaScript Minification Report\n");

async function analyzeMinification() {
	const srcDir = path.join(process.cwd(), "src");
	const jsFiles = [];

	// Find all source JS files
	function findSourceFiles(dir) {
		const files = fs.readdirSync(dir);

		files.forEach((file) => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				findSourceFiles(filePath);
			} else if (file.endsWith(".js") || file.endsWith(".jsx")) {
				jsFiles.push(filePath);
			}
		});
	}

	findSourceFiles(srcDir);

	let totalOriginal = 0;
	let totalMinified = 0;

	console.log("File".padEnd(50) + "Original".padStart(12) + "Minified".padStart(12) + "Savings".padStart(12));
	console.log("=".repeat(86));

	for (const file of jsFiles) {
		try {
			const content = fs.readFileSync(file, "utf8");
			const originalSize = Buffer.byteLength(content, "utf8");

			// Skip JSX files (they need to be transpiled first)
			if (content.includes("JSX") || (content.includes("<") && content.includes("/>"))) {
				console.log(`${path.relative(process.cwd(), file).padEnd(50)} ${"JSX - Skipped".padStart(24)}`);
				continue;
			}

			// Minify the content
			const minified = await terser.minify(content, {
				compress: {
					drop_console: true,
					drop_debugger: true,
					passes: 2,
				},
				mangle: true,
				format: {
					comments: false,
				},
			});

			const minifiedSize = Buffer.byteLength(minified.code || "", "utf8");
			const savings = (((originalSize - minifiedSize) / originalSize) * 100).toFixed(1);

			totalOriginal += originalSize;
			totalMinified += minifiedSize;

			const relativePath = path.relative(process.cwd(), file);
			console.log(relativePath.padEnd(50) + `${(originalSize / 1024).toFixed(2)} KB`.padStart(12) + `${(minifiedSize / 1024).toFixed(2)} KB`.padStart(12) + `${savings}%`.padStart(12));
		} catch (error) {
			console.log(`Error processing ${file}: ${error.message}`);
		}
	}

	const totalSavings = (((totalOriginal - totalMinified) / totalOriginal) * 100).toFixed(1);

	console.log("=".repeat(86));
	console.log("TOTAL".padEnd(50) + `${(totalOriginal / 1024).toFixed(2)} KB`.padStart(12) + `${(totalMinified / 1024).toFixed(2)} KB`.padStart(12) + `${totalSavings}%`.padStart(12));

	console.log(`\n💾 Total space saved: ${((totalOriginal - totalMinified) / 1024).toFixed(2)} KB`);
	console.log(`📊 Average compression ratio: ${totalSavings}%`);
}

analyzeMinification().catch(console.error);
