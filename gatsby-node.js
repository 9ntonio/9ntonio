const express = require("express");
const path = require("path");
const fs = require("fs-extra");
const TerserPlugin = require("terser-webpack-plugin");

// Import modern build utilities
const { isModernBuild, getTerserOptions, getSplitChunksConfig, getOutputEnvironment, logBuildInfo } = require("./src/utils/modernBuildUtils");

/**
 * Webpack configuration for modern JavaScript builds with differential serving
 * Supports both modern ES2020+ builds and legacy ES5 fallbacks
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
	if (stage === "build-javascript") {
		// Determine build type and log configuration
		const isModern = isModernBuild();
		const buildTarget = isModern ? "es2020" : "es5";

		logBuildInfo(isModern);

		// Base configuration optimized for modern browsers
		const baseConfig = {
			target: ["web", "es2022"], // Target even more modern browsers

			resolve: {
				mainFields: ["browser", "module", "main"],
				extensions: [".mjs", ".js", ".jsx", ".json"],
			},

			module: {
				rules: [
					{
						test: /\.m?js$/,
						resolve: {
							fullySpecified: false, // Allow imports without file extensions
						},
					},
				],
			},

			output: {
				environment: getOutputEnvironment(isModern),
			},

			optimization: {
				minimize: true,
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							parse: { ecma: 2022 },
							compress: {
								ecma: 2022,
								drop_console: process.env.NODE_ENV === "production",
								drop_debugger: true,
								pure_funcs: ["console.log", "console.info", "console.debug"],
								passes: 2,
							},
							mangle: { safari10: false },
							format: { ecma: 2022 },
						},
						parallel: true,
						extractComments: false,
					}),
				],
				splitChunks: {
					chunks: "all",
					minSize: 20000,
					maxSize: 244000,
					cacheGroups: {
						vendor: {
							test: /[\\/]node_modules[\\/]/,
							name: "vendors",
							chunks: "all",
							priority: 10,
						},
						common: {
							name: "common",
							minChunks: 2,
							chunks: "all",
							priority: 5,
							reuseExistingChunk: true,
						},
					},
				},

				// Runtime chunk optimization - smaller runtime
				runtimeChunk: {
					name: "runtime",
				},

				// Module concatenation for better tree shaking
				concatenateModules: true,

				// Better module IDs for caching
				moduleIds: "deterministic",
				chunkIds: "deterministic",

				// Additional optimizations for performance
				usedExports: true,
				sideEffects: false,
				innerGraph: true,

				// Better tree shaking for unused code elimination
				providedExports: true,
				mangleExports: true,
			},

			// Performance hints
			performance: {
				maxAssetSize: 250000,
				maxEntrypointSize: 250000,
				hints: process.env.NODE_ENV === "production" ? "warning" : false,
			},
		};

		actions.setWebpackConfig(baseConfig);
	} else if (stage === "develop") {
		// Development optimizations with modern JavaScript
		actions.setWebpackConfig({
			target: ["web", "es2020"],
			resolve: {
				mainFields: ["browser", "module", "main"],
				extensions: [".mjs", ".js", ".jsx", ".json"],
			},
			optimization: {
				splitChunks: {
					chunks: "all",
					cacheGroups: {
						vendor: {
							test: /[\\/]node_modules[\\/]/,
							name: "vendors",
							chunks: "all",
						},
					},
				},
			},
		});
	}
};

/**
 * Configure the development server
 * This sets up express middleware to serve the unknown-pleasures directory
 */
exports.onCreateDevServer = ({ app }) => {
	// Serve the unknown-pleasures directory from static folder during development
	app.use("/unknown-pleasures", express.static(path.resolve("static/unknown-pleasures")));

	// Serve assets from their original path for proper referencing
	app.use("/assets", express.static(path.resolve("static/unknown-pleasures/assets")));

	// Log that the middleware has been set up
	console.log("🔄 Development server middleware configured for /unknown-pleasures");
};

/**
 * Pre-build hook to copy files to the public directory
 * This ensures that the unknown-pleasures files are copied to the correct location
 * in the build output before Gatsby finishes building
 */
exports.onPreBuild = ({ reporter }) => {
	const sourceDir = path.join(process.cwd(), "static", "unknown-pleasures");
	const publicDir = path.join(process.cwd(), "public", "unknown-pleasures");
	const publicAssetsDir = path.join(process.cwd(), "public", "assets");

	try {
		// Check if source directories exist
		if (!fs.existsSync(sourceDir)) {
			reporter.panic("❌ unknown-pleasures directory not found in static folder");
			return;
		}

		const sourceAssetsDir = path.join(sourceDir, "assets");
		if (!fs.existsSync(sourceAssetsDir)) {
			reporter.panic("❌ assets directory not found in unknown-pleasures");
			return;
		}

		// Clean and recreate directories
		fs.removeSync(publicDir);
		fs.removeSync(publicAssetsDir);
		fs.ensureDirSync(publicDir);
		fs.ensureDirSync(publicAssetsDir);

		// Copy main directory
		fs.copySync(sourceDir, publicDir);
		reporter.info("✅ Copied unknown-pleasures directory to public");

		// Also copy assets to root assets directory
		fs.copySync(sourceAssetsDir, publicAssetsDir);
		reporter.info("✅ Copied assets to root assets directory");

		// Log directory contents to help with debugging
		const logDirectory = (dir, label) => {
			const files = fs.readdirSync(dir);
			reporter.info(`📂 Contents of ${label}:`);
			files.forEach((file) => {
				const stats = fs.statSync(path.join(dir, file));
				reporter.info(`- ${file} (${stats.size} bytes)`);
			});
		};

		logDirectory(publicDir, "public/unknown-pleasures");
		logDirectory(publicAssetsDir, "public/assets");
	} catch (error) {
		reporter.panic("❌ Failed to copy directories", error);
	}
};

/**
 * Post-build hook to ensure files are properly copied and not overwritten
 * This runs after Gatsby's build process to restore the correct files
 * Note: Adapter headers are generated AFTER this hook
 */
exports.onPostBuild = ({ reporter }) => {
	const sourceDir = path.join(process.cwd(), "static", "unknown-pleasures");
	const publicDir = path.join(process.cwd(), "public", "unknown-pleasures");
	const publicAssetsDir = path.join(process.cwd(), "public", "assets");

	try {
		// Always force copy to ensure we have the correct files
		reporter.info("🔄 Ensuring unknown-pleasures files are correct in public folder");

		// If source directory exists, copy it (overwriting any Gatsby-generated files)
		if (fs.existsSync(sourceDir)) {
			// Remove any existing directory to ensure clean copy
			fs.removeSync(publicDir);
			fs.ensureDirSync(publicDir);
			fs.copySync(sourceDir, publicDir);
			reporter.info("✅ Copied unknown-pleasures directory to public in post-build");

			// Also copy assets
			const sourceAssetsDir = path.join(sourceDir, "assets");
			if (fs.existsSync(sourceAssetsDir)) {
				fs.removeSync(publicAssetsDir);
				fs.ensureDirSync(publicAssetsDir);
				fs.copySync(sourceAssetsDir, publicAssetsDir);
				reporter.info("✅ Copied assets to root assets directory in post-build");
			}

			// Verify the correct files are in place
			const indexPath = path.join(publicDir, "index.html");
			if (fs.existsSync(indexPath)) {
				const content = fs.readFileSync(indexPath, "utf8");
				if (content.includes("Unknown Pleasures") && content.includes("canvas id=\"visualizer\"")) {
					reporter.info("✅ Verified correct Unknown Pleasures experiment is in place");
				} else {
					reporter.warn("⚠️ Unknown Pleasures index.html may not be the correct file");
				}
			}
		} else {
			reporter.error("❌ Source unknown-pleasures directory not found");
		}

		// Fix X-Frame-Options header to allow iframe embeds
		const headersPath = path.join(process.cwd(), "public", "_headers");
		if (fs.existsSync(headersPath)) {
			reporter.info("🔍 Checking _headers file for X-Frame-Options...");
			let headersContent = fs.readFileSync(headersPath, "utf8");
			const beforeCount = (headersContent.match(/x-frame-options:\s*DENY/gi) || []).length;
			reporter.info(`Found ${beforeCount} instances of X-Frame-Options: DENY`);

			// Replace ALL instances of DENY with SAMEORIGIN (global + case insensitive)
			headersContent = headersContent.replace(/x-frame-options:\s*DENY/gi, "x-frame-options: SAMEORIGIN");

			const afterCount = (headersContent.match(/x-frame-options:\s*DENY/gi) || []).length;
			fs.writeFileSync(headersPath, headersContent);
			reporter.info(`✅ Fixed X-Frame-Options header (${beforeCount} → ${afterCount} DENY instances)`);
		} else {
			reporter.warn("⚠️ _headers file not found");
		}
	} catch (error) {
		reporter.error("❌ Error in post-build check", error);
	}
};
