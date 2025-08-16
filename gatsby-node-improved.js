const express = require("express");
const path = require("path");
const fs = require("fs-extra");
const { getProductionConfig, getDevelopmentConfig } = require("./src/config/webpack.config");

/**
 * Improved Gatsby Node configuration with better separation of concerns
 * and enhanced error handling
 */

/**
 * Webpack configuration for performance optimization and minification
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig(getProductionConfig());
  } else if (stage === "develop") {
    actions.setWebpackConfig(getDevelopmentConfig());
  }
};

/**
 * Configure the development server with proper error handling
 */
exports.onCreateDevServer = ({ app, reporter }) => {
  try {
    // Serve the unknown-pleasures directory from static folder during development
    app.use("/unknown-pleasures", express.static(path.resolve("static/unknown-pleasures")));
    app.use("/assets", express.static(path.resolve("static/unknown-pleasures/assets")));

    reporter.info("🔄 Development server middleware configured for /unknown-pleasures");
  } catch (error) {
    reporter.error("❌ Failed to configure development server middleware", error);
  }
};

/**
 * Utility function to safely copy directories with validation
 */
const safeCopyDirectory = (source, destination, reporter, label) => {
  try {
    if (!fs.existsSync(source)) {
      reporter.warn(`⚠️ Source directory not found: ${source}`);
      return false;
    }

    // Clean and recreate destination
    fs.removeSync(destination);
    fs.ensureDirSync(destination);

    // Copy files
    fs.copySync(source, destination);
    reporter.info(`✅ Copied ${label} to ${destination}`);

    // Log directory contents for debugging
    const files = fs.readdirSync(destination);
    reporter.info(`📂 ${label} contains ${files.length} items`);

    return true;
  } catch (error) {
    reporter.error(`❌ Failed to copy ${label}`, error);
    return false;
  }
};

/**
 * Pre-build hook to copy files to the public directory
 */
exports.onPreBuild = ({ reporter }) => {
  const sourceDir = path.join(process.cwd(), "static", "unknown-pleasures");
  const publicDir = path.join(process.cwd(), "public", "unknown-pleasures");
  const publicAssetsDir = path.join(process.cwd(), "public", "assets");
  const sourceAssetsDir = path.join(sourceDir, "assets");

  // Copy main directory
  const mainCopySuccess = safeCopyDirectory(
    sourceDir,
    publicDir,
    reporter,
    "unknown-pleasures directory"
  );

  // Copy assets directory
  const assetsCopySuccess = safeCopyDirectory(
    sourceAssetsDir,
    publicAssetsDir,
    reporter,
    "assets directory"
  );

  if (!mainCopySuccess || !assetsCopySuccess) {
    reporter.panic("❌ Critical files failed to copy during pre-build");
  }
};

/**
 * Post-build verification hook
 */
exports.onPostBuild = ({ reporter }) => {
  const publicDir = path.join(process.cwd(), "public", "unknown-pleasures");
  const publicAssetsDir = path.join(process.cwd(), "public", "assets");

  // Verify files exist
  const checks = [
    { path: publicDir, name: "unknown-pleasures directory" },
    { path: publicAssetsDir, name: "assets directory" },
    { path: path.join(publicDir, "index.html"), name: "unknown-pleasures index.html" },
  ];

  let allChecksPass = true;

  checks.forEach(({ path: checkPath, name }) => {
    if (fs.existsSync(checkPath)) {
      reporter.info(`✅ ${name} exists in public folder`);
    } else {
      reporter.error(`❌ ${name} missing from public folder`);
      allChecksPass = false;
    }
  });

  if (allChecksPass) {
    reporter.info("🎉 All post-build checks passed");
  } else {
    reporter.warn("⚠️ Some post-build checks failed - site may have missing assets");
  }
};
