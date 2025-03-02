const express = require('express');
const path = require('path');
const fs = require('fs-extra');

/**
 * Configure the development server
 * This sets up express middleware to serve the unknown-pleasures directory
 */
exports.onCreateDevServer = ({ app }) => {
  // Serve the unknown-pleasures directory from static folder during development
  app.use('/unknown-pleasures', express.static(path.resolve('static/unknown-pleasures')));

  // Serve assets from their original path for proper referencing
  app.use('/assets', express.static(path.resolve('static/unknown-pleasures/assets')));

  // Log that the middleware has been set up
  console.log('🔄 Development server middleware configured for /unknown-pleasures');
};

/**
 * Pre-build hook to copy files to the public directory
 * This ensures that the unknown-pleasures files are copied to the correct location
 * in the build output before Gatsby finishes building
 */
exports.onPreBuild = ({ reporter }) => {
  const sourceDir = path.join(process.cwd(), 'static', 'unknown-pleasures');
  const publicDir = path.join(process.cwd(), 'public', 'unknown-pleasures');
  const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');

  try {
    // Check if source directories exist
    if (!fs.existsSync(sourceDir)) {
      reporter.panic('❌ unknown-pleasures directory not found in static folder');
      return;
    }

    const sourceAssetsDir = path.join(sourceDir, 'assets');
    if (!fs.existsSync(sourceAssetsDir)) {
      reporter.panic('❌ assets directory not found in unknown-pleasures');
      return;
    }

    // Clean and recreate directories
    fs.removeSync(publicDir);
    fs.removeSync(publicAssetsDir);
    fs.ensureDirSync(publicDir);
    fs.ensureDirSync(publicAssetsDir);

    // Copy main directory
    fs.copySync(sourceDir, publicDir);
    reporter.info('✅ Copied unknown-pleasures directory to public');

    // Also copy assets to root assets directory
    fs.copySync(sourceAssetsDir, publicAssetsDir);
    reporter.info('✅ Copied assets to root assets directory');

    // Log directory contents to help with debugging
    const logDirectory = (dir, label) => {
      const files = fs.readdirSync(dir);
      reporter.info(`📂 Contents of ${label}:`);
      files.forEach((file) => {
        const stats = fs.statSync(path.join(dir, file));
        reporter.info(`- ${file} (${stats.size} bytes)`);
      });
    };

    logDirectory(publicDir, 'public/unknown-pleasures');
    logDirectory(publicAssetsDir, 'public/assets');
  } catch (error) {
    reporter.panic('❌ Failed to copy directories', error);
  }
};

/**
 * Post-build hook as a backup to ensure files are properly copied
 * This is an extra safety measure in case onPreBuild hook doesn't work as expected
 */
exports.onPostBuild = ({ reporter }) => {
  const sourceDir = path.join(process.cwd(), 'static', 'unknown-pleasures');
  const publicDir = path.join(process.cwd(), 'public', 'unknown-pleasures');
  const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');

  try {
    // Verify that the unknown-pleasures directory exists in the public folder
    if (!fs.existsSync(publicDir)) {
      reporter.info('🔄 unknown-pleasures directory not found in public folder, copying now');

      // If source directory exists, copy it
      if (fs.existsSync(sourceDir)) {
        fs.ensureDirSync(publicDir);
        fs.copySync(sourceDir, publicDir);
        reporter.info('✅ Copied unknown-pleasures directory to public in post-build');

        // Also copy assets
        const sourceAssetsDir = path.join(sourceDir, 'assets');
        if (fs.existsSync(sourceAssetsDir)) {
          fs.ensureDirSync(publicAssetsDir);
          fs.copySync(sourceAssetsDir, publicAssetsDir);
          reporter.info('✅ Copied assets to root assets directory in post-build');
        }
      } else {
        reporter.error('❌ Source unknown-pleasures directory not found');
      }
    } else {
      reporter.info('✅ unknown-pleasures directory exists in public folder');
    }
  } catch (error) {
    reporter.error('❌ Error in post-build check', error);
  }
};
