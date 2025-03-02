const express = require("express");
const path = require("path");
const fs = require("fs-extra");

exports.onCreateDevServer = ({ app }) => {
	// Serve the unknown-pleasures directory
	app.use("/unknown-pleasures", express.static(path.resolve("static/unknown-pleasures")));

	// Important: Also serve assets from their original path for Vite
	app.use("/assets", express.static(path.resolve("static/unknown-pleasures/assets")));
};

exports.onPreBuild = ({ reporter }) => {
	const sourceDir = path.join(__dirname, "static", "unknown-pleasures");
	const publicDir = path.join(__dirname, "public", "unknown-pleasures");
	const publicAssetsDir = path.join(__dirname, "public", "assets");

	try {
		// Ensure source directories exist
		if (!fs.existsSync(sourceDir)) {
			reporter.panic("!!! unknown-pleasures directory not found in static folder");
			return;
		}

		const sourceAssetsDir = path.join(sourceDir, "assets");
		if (!fs.existsSync(sourceAssetsDir)) {
			reporter.panic("!!! assets directory not found in unknown-pleasures");
			return;
		}

		// Clean and recreate directories
		fs.removeSync(publicDir);
		fs.removeSync(publicAssetsDir);
		fs.ensureDirSync(publicDir);
		fs.ensureDirSync(publicAssetsDir);

		// Copy main directory
		fs.copySync(sourceDir, publicDir);
		reporter.info("!!! Copied unknown-pleasures directory to public");

		// Also copy assets to root assets directory
		fs.copySync(sourceAssetsDir, publicAssetsDir);
		reporter.info("!!! Copied assets to root assets directory");

		// Log copied files
		const logDirectory = (dir, label) => {
			const files = fs.readdirSync(dir);
			reporter.info(`!!! Contents of ${label}:`);
			files.forEach((file) => {
				const stats = fs.statSync(path.join(dir, file));
				reporter.info(`- ${file} (${stats.size} bytes)`);
			});
		};

		logDirectory(publicDir, "public/unknown-pleasures");
		logDirectory(publicAssetsDir, "public/assets");
	} catch (error) {
		reporter.panic("!!! Failed to copy directories", error);
	}
};
