const fs = require("fs-extra");
const path = require("path");
const { minify } = require("terser");

async function optimizeJavaScript() {
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
			} else if (file.endsWith(".js") && !file.endsWith(".min.js")) {
				jsFiles.push(filePath);
			}
		});
	}

	findJSFiles(publicDir);

	console.log(`Found ${jsFiles.length} JavaScript files to optimize`);

	for (const filePath of jsFiles) {
		try {
			const code = fs.readFileSync(filePath, "utf8");
			const result = await minify(code, {
				compress: {
					drop_console: true,
					drop_debugger: true,
					passes: 3,
					unsafe_arrows: true,
					unsafe_methods: true,
					unsafe_proto: true,
					unsafe_comps: true,
					unsafe_Function: true,
					unsafe_math: true,
					unsafe_symbols: true,
					unsafe_regexp: true,
					hoist_funs: true,
					hoist_props: true,
					hoist_vars: true,
					if_return: true,
					join_vars: true,
					cascade: true,
					collapse_vars: true,
					reduce_vars: true,
					ecma: 2020,
					toplevel: true,
				},
				mangle: {
					safari10: true,
					toplevel: true,
				},
				format: {
					comments: false,
					ascii_only: true,
					ecma: 2020,
				},
			});

			if (result.code) {
				const originalSize = code.length;
				const minifiedSize = result.code.length;
				const savings = (((originalSize - minifiedSize) / originalSize) * 100).toFixed(2);

				fs.writeFileSync(filePath, result.code);
				console.log(`✅ Optimized ${path.relative(publicDir, filePath)} - ${savings}% reduction`);
			}
		} catch (error) {
			console.error(`❌ Failed to optimize ${filePath}:`, error.message);
		}
	}
}

async function optimizeCSS() {
	const publicDir = path.join(process.cwd(), "public");
	const cssFiles = [];

	// Find all CSS files
	function findCSSFiles(dir) {
		const files = fs.readdirSync(dir);
		files.forEach((file) => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				findCSSFiles(filePath);
			} else if (file.endsWith(".css")) {
				cssFiles.push(filePath);
			}
		});
	}

	findCSSFiles(publicDir);

	console.log(`Found ${cssFiles.length} CSS files to optimize`);

	for (const filePath of cssFiles) {
		try {
			let css = fs.readFileSync(filePath, "utf8");
			const originalSize = css.length;

			// Basic CSS minification
			css = css
				.replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments
				.replace(/\s+/g, " ") // Collapse whitespace
				.replace(/;\s*}/g, "}") // Remove unnecessary semicolons
				.replace(/\s*{\s*/g, "{") // Clean up braces
				.replace(/;\s*/g, ";") // Clean up semicolons
				.replace(/,\s*/g, ",") // Clean up commas
				.replace(/:\s*/g, ":") // Clean up colons
				.trim();

			const minifiedSize = css.length;
			const savings = (((originalSize - minifiedSize) / originalSize) * 100).toFixed(2);

			fs.writeFileSync(filePath, css);
			console.log(`✅ Optimized ${path.relative(publicDir, filePath)} - ${savings}% reduction`);
		} catch (error) {
			console.error(`❌ Failed to optimize ${filePath}:`, error.message);
		}
	}
}

async function main() {
	console.log("🚀 Starting performance optimization...");

	try {
		await optimizeJavaScript();
		await optimizeCSS();
		console.log("✅ Performance optimization completed successfully!");
	} catch (error) {
		console.error("❌ Performance optimization failed:", error);
		process.exit(1);
	}
}

if (require.main === module) {
	main();
}

module.exports = { optimizeJavaScript, optimizeCSS };
