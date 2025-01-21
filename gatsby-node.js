const express = require("express");
const path = require("path");
const fs = require("fs-extra");

exports.onCreateDevServer = ({ app }) => {
	// Serve the entire unknown-pleasures directory statically
	app.use(
		"/unknown-pleasures",
		express.static(path.resolve("static/unknown-pleasures"), {
			index: "index.html",
		}),
	);

	// Log requests to help with debugging
	app.use("/unknown-pleasures", (req, res, next) => {
		console.log(`Request to unknown-pleasures: ${req.path}`);
		next();
	});
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

exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions;

	if (page.path === "/unknown-pleasures") {
		deletePage(page);
		createPage({
			...page,
			context: {
				...page.context,
				noWrapper: true,
			},
		});
	}
};
