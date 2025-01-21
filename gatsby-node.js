const express = require("express");
const path = require("path");
const fs = require("fs");

exports.onCreateDevServer = ({ app }) => {
	// Serve static files during development
	app.use("/unknown-pleasures", express.static(path.resolve("static/unknown-pleasures")));
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

// Create the unknown-pleasures page
exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	// Create the unknown-pleasures page
	createPage({
		path: "/unknown-pleasures",
		component: require.resolve("./src/pages/unknown-pleasures.js"),
		context: {
			layout: "unknown-pleasures",
		},
	});
};

// Ensure the static directory is copied during build
exports.onPreBuild = ({ reporter }) => {
	const staticDir = path.join(__dirname, "static", "unknown-pleasures");
	const publicDir = path.join(__dirname, "public", "unknown-pleasures");

	if (fs.existsSync(staticDir)) {
		fs.cpSync(staticDir, publicDir, { recursive: true });
		reporter.info("Copied unknown-pleasures directory to public folder");
	} else {
		reporter.warn("unknown-pleasures directory not found in static folder");
	}
};
