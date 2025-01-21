const express = require("express");
const path = require("path");
const fs = require("fs-extra");

// Development server configuration
exports.onCreateDevServer = ({ app }) => {
	app.use("/unknown-pleasures", express.static(path.resolve("static/unknown-pleasures")));

	// Log middleware to debug requests
	app.use("/unknown-pleasures", (req, res, next) => {
		console.log(`[Dev Server] Accessing: ${req.path}`);
		next();
	});
};

// Build-time configuration
exports.onPreBuild = ({ reporter }) => {
	const sourceDir = path.join(__dirname, "static", "unknown-pleasures");
	const publicDir = path.join(__dirname, "public", "unknown-pleasures");

	try {
		// Ensure source directory exists
		if (!fs.existsSync(sourceDir)) {
			reporter.panic("unknown-pleasures directory not found in static folder");
			return;
		}

		// Ensure public directory exists
		fs.ensureDirSync(publicDir);

		// Copy directory with detailed logging
		fs.copySync(sourceDir, publicDir);

		// Verify copy
		const files = fs.readdirSync(publicDir);
		reporter.info(`Copied unknown-pleasures directory to public folder. Contents: ${files.join(", ")}`);
	} catch (error) {
		reporter.panic("Failed to copy unknown-pleasures directory", error);
	}
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html" || stage === "develop-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /react-player|tsparticles/,
						use: loaders.null(),
					},
				],
			},
		});
	}
};

// Create dedicated page for unknown-pleasures
exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	createPage({
		path: "/unknown-pleasures",
		component: require.resolve("./src/pages/unknown-pleasures.js"),
		context: {
			layout: "unknown-pleasures",
		},
	});
};
