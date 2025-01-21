const express = require("express");
const path = require("path");
const fs = require("fs-extra");

exports.onCreateDevServer = ({ app }) => {
	// Serve static files with proper MIME types
	app.use(
		"/unknown-pleasures",
		express.static(path.resolve("static/unknown-pleasures"), {
			setHeaders: (res, filePath) => {
				if (path.extname(filePath) === ".js") {
					res.setHeader("Content-Type", "application/javascript");
				}
			},
		}),
	);
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

		// Clean the target directory if it exists
		fs.removeSync(publicDir);

		// Create the target directory
		fs.ensureDirSync(publicDir);

		// Copy directory with detailed logging
		fs.copySync(sourceDir, publicDir, {
			filter: (src) => {
				const isValid = fs.existsSync(src);
				const fileName = path.basename(src);
				reporter.info(`Copying: ${fileName} (${isValid ? "valid" : "invalid"})`);
				return isValid;
			},
		});

		// Verify JavaScript files
		const jsFiles = fs.readdirSync(publicDir).filter((file) => file.endsWith(".js"));
		reporter.info(`JavaScript files copied: ${jsFiles.join(", ")}`);

		// Verify file permissions
		jsFiles.forEach((file) => {
			const filePath = path.join(publicDir, file);
			fs.chmodSync(filePath, "644");
			reporter.info(`Set permissions for: ${file}`);
		});
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
