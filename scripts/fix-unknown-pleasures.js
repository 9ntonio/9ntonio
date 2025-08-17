#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to fix the unknown-pleasures iframe issue
 * This ensures the correct experiment files are in place
 */

// Helper functions to replicate fs-extra functionality
function removeSync(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copySync(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    ensureDirSync(dest);
    const files = fs.readdirSync(src);
    files.forEach(file => {
      copySync(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const sourceDir = path.join(process.cwd(), 'static', 'unknown-pleasures');
const publicDir = path.join(process.cwd(), 'public', 'unknown-pleasures');
const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');

console.log('🔧 Fixing Unknown Pleasures iframe issue...');

try {
  // Check if source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.error('❌ Source unknown-pleasures directory not found in static folder');
    process.exit(1);
  }

  // Remove any existing public directories
  if (fs.existsSync(publicDir)) {
    console.log('🗑️  Removing existing public/unknown-pleasures directory');
    removeSync(publicDir);
  }

  if (fs.existsSync(publicAssetsDir)) {
    console.log('🗑️  Removing existing public/assets directory');
    removeSync(publicAssetsDir);
  }

  // Create directories
  ensureDirSync(publicDir);
  ensureDirSync(publicAssetsDir);

  // Copy files
  console.log('📁 Copying unknown-pleasures files...');
  copySync(sourceDir, publicDir);

  // Copy assets
  const sourceAssetsDir = path.join(sourceDir, 'assets');
  if (fs.existsSync(sourceAssetsDir)) {
    console.log('📁 Copying assets files...');
    copySync(sourceAssetsDir, publicAssetsDir);
  }

  // Verify the correct files are in place
  const indexPath = path.join(publicDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    if (content.includes('Unknown Pleasures') && content.includes('canvas id="visualizer"')) {
      console.log('✅ Verified correct Unknown Pleasures experiment is in place');
    } else {
      console.warn('⚠️  Unknown Pleasures index.html may not be the correct file');
      console.log('Content preview:', content.substring(0, 200) + '...');
    }
  }

  console.log('✅ Unknown Pleasures iframe issue fixed!');
  console.log('🚀 You can now run your development server or build');

} catch (error) {
  console.error('❌ Error fixing unknown-pleasures:', error);
  process.exit(1);
}
