const express = require("express");
const path = require("path");
const fs = require("fs-extra");

/**
 * Webpack configuration for performance optimization and minification
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
	if (stage === "build-javascript") {
		const TerserPlugin = require("terser-webpack-plugin");

		// Production build optimizations with enhanced minification
		actions.setWebpackConfig({
			optimization: {
				minimize: true,
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							compress: {
								drop_console: true, // Remove console.log statements
								drop_debugger: true, // Remove debugger statements
								pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"], // Remove specific console methods
								passes: 2, // Run compression twice for better results
								unsafe_arrows: true, // Convert arrow functions when safe
								unsafe_methods: true, // Optimize method calls
								unsafe_proto: true, // Optimize prototype access
							},
							mangle: {
								safari10: true, // Fix Safari 10 issues
								properties: {
									regex: /^_/, // Mangle properties starting with underscore
								},
							},
							format: {
								comments: false, // Remove all comments
								ascii_only: true, // Ensure ASCII output
							},
						},
						extractComments: false, // Don't create separate license files
						parallel: true, // Use multiple processes for faster builds
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
							priority: 1,
						},
						fontawesome: {
							test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
							name: "fontawesome",
							chunks: "all",
							priority: 10,
						},
						particles: {
							test: /[\\/]node_modules[\\/](react-tsparticles|tsparticles)[\\/]/,
							name: "particles",
							chunks: "all",
							priority: 10,
						},
						reactPlayer: {
							test: /[\\/]node_modules[\\/]react-player[\\/]/,
							name: "react-player",
							chunks: "all",
							priority: 10,
						},
					},
				},
			},
		});
	} else if (stage === "develop") {
		// Development optimizations (no minification for faster builds)
		actions.setWebpackConfig({
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
 * Post-build hook as a backup to ensure files are properly copied
 * This is an extra safety measure in case onPreBuild hook doesn't work as expected
 */
exports.onPostBuild = ({ reporter }) => {
	const sourceDir = path.join(process.cwd(), "static", "unknown-pleasures");
	const publicDir = path.join(process.cwd(), "public", "unknown-pleasures");
	const publicAssetsDir = path.join(process.cwd(), "public", "assets");

	try {
		// Verify that the unknown-pleasures directory exists in the public folder
		if (!fs.existsSync(publicDir)) {
			reporter.info("🔄 unknown-pleasures directory not found in public folder, copying now");

			// If source directory exists, copy it
			if (fs.existsSync(sourceDir)) {
				fs.ensureDirSync(publicDir);
				fs.copySync(sourceDir, publicDir);
				reporter.info("✅ Copied unknown-pleasures directory to public in post-build");

				// Also copy assets
				const sourceAssetsDir = path.join(sourceDir, "assets");
				if (fs.existsSync(sourceAssetsDir)) {
					fs.ensureDirSync(publicAssetsDir);
					fs.copySync(sourceAssetsDir, publicAssetsDir);
					reporter.info("✅ Copied assets to root assets directory in post-build");
				}
			} else {
				reporter.error("❌ Source unknown-pleasures directory not found");
			}
		} else {
			reporter.info("✅ unknown-pleasures directory exists in public folder");
		}
	} catch (error) {
		reporter.error("❌ Error in post-build check", error);
	}
};
