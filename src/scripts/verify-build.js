/**
 * Build verification script
 *
 * This script checks that all required files exist in the build output directory
 * before deploying to Netlify. It's run as part of the build process.
 */

const fs = require('fs');
const path = require('path');

/**
 * List of critical paths that must exist in the build output
 */
const requiredPaths = [
  // Main Unknown Pleasures files
  'public/unknown-pleasures/index.html',
  'public/unknown-pleasures/assets',

  // Assets directory at root level
  'public/assets',

  // Main site files
  'public/index.html',
];

/**
 * Verifies that all files in the critical paths list exist
 */
function verifyFiles() {
  console.log('🔍 Verifying build output...');

  const missingPaths = requiredPaths.filter(reqPath => {
    const exists = fs.existsSync(path.resolve(reqPath));
    if (!exists) {
      console.error(`❌ Missing: ${reqPath}`);
    } else {
      console.log(`✅ Found: ${reqPath}`);
    }
    return !exists;
  });

  if (missingPaths.length > 0) {
    console.error('❌ Build verification failed! Missing critical files:');
    missingPaths.forEach(p => console.error(`   - ${p}`));

    // List the contents of the public directory for debugging
    console.log('\n📂 Public directory contents:');
    listDirectoryContents('public', 1);

    // Exit with error code to fail the build
    process.exit(1);
  } else {
    console.log('✅ Build verification successful! All required files present.');

    // Check assets directory content
    console.log('\n📂 Checking assets directory:');
    if (fs.existsSync(path.resolve('public/assets'))) {
      const assetFiles = fs.readdirSync(path.resolve('public/assets'));
      console.log(`Found ${assetFiles.length} files in assets directory`);

      if (assetFiles.length > 0) {
        console.log('Sample assets:', assetFiles.slice(0, 5).join(', ') + (assetFiles.length > 5 ? '...' : ''));
      } else {
        console.warn('⚠️ Assets directory is empty!');
      }
    }

    // Check unknown-pleasures assets
    console.log('\n📂 Checking unknown-pleasures assets:');
    if (fs.existsSync(path.resolve('public/unknown-pleasures/assets'))) {
      const upAssetFiles = fs.readdirSync(path.resolve('public/unknown-pleasures/assets'));
      console.log(`Found ${upAssetFiles.length} files in unknown-pleasures/assets directory`);

      if (upAssetFiles.length > 0) {
        console.log('Sample assets:', upAssetFiles.slice(0, 5).join(', ') + (upAssetFiles.length > 5 ? '...' : ''));
      } else {
        console.warn('⚠️ unknown-pleasures/assets directory is empty!');
      }
    }
  }
}

/**
 * Helper function to list directory contents recursively
 */
function listDirectoryContents(dirPath, depth = 0, maxDepth = 2) {
  if (depth > maxDepth) return;

  try {
    const items = fs.readdirSync(path.resolve(dirPath));

    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(path.resolve(itemPath));

      console.log(`${'  '.repeat(depth)}${stats.isDirectory() ? '📁' : '📄'} ${item}`);

      if (stats.isDirectory()) {
        listDirectoryContents(itemPath, depth + 1, maxDepth);
      }
    });
  } catch (error) {
    console.error(`Error listing directory ${dirPath}:`, error);
  }
}

// Run verification
verifyFiles();
