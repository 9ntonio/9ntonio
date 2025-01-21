const express = require("express");
const path = require("path");
const fs = require("fs-extra");

exports.onCreateDevServer = ({ app }) => {
	// Serve the directory with minimal middleware
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

exports.onPreBuild = ({ reporter }) => {
	const sourceDir = path.join(__dirname, "static", "unknown-pleasures");
	const publicDir = path.join(__dirname, "public", "unknown-pleasures");

	try {
		// Ensure source directory exists
		if (!fs.existsSync(sourceDir)) {
			reporter.panic("unknown-pleasures directory not found in static folder");
			return;
		}

		// Clean and recreate the target directory
		fs.removeSync(publicDir);
		fs.ensureDirSync(publicDir);

		// Copy directory
		fs.copySync(sourceDir, publicDir);

		// Verify the HTML file was copied correctly
		const htmlPath = path.join(publicDir, "index.html");
		if (fs.existsSync(htmlPath)) {
			const content = fs.readFileSync(htmlPath, "utf8");
			reporter.info(`Successfully copied index.html (${content.length} bytes)`);
		} else {
			reporter.error("index.html not found in built directory");
		}
	} catch (error) {
		reporter.panic("Failed to copy unknown-pleasures directory", error);
	}
};
