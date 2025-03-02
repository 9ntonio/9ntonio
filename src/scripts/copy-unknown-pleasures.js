const fs = require('fs-extra');
const path = require('path');

// Define paths
const sourceDir = path.resolve('static/unknown-pleasures');
const publicDir = path.resolve('public/unknown-pleasures');
const sourceAssetsDir = path.resolve('static/unknown-pleasures/assets');
const publicAssetsDir = path.resolve('public/assets');

console.log('🔄 Starting Unknown Pleasures file copy process...');

// Make sure directories exist
if (!fs.existsSync(sourceDir)) {
  console.error('❌ Source directory not found:', sourceDir);
  process.exit(1);
}

// Copy main directory
try {
  console.log(`Copying from ${sourceDir} to ${publicDir}`);
  fs.ensureDirSync(publicDir);
  fs.copySync(sourceDir, publicDir, { overwrite: true });
  console.log('✅ Successfully copied Unknown Pleasures files to public directory');
} catch (err) {
  console.error('❌ Error copying Unknown Pleasures files:', err);
}

// Copy assets to root assets directory
try {
  if (fs.existsSync(sourceAssetsDir)) {
    console.log(`Copying from ${sourceAssetsDir} to ${publicAssetsDir}`);
    fs.ensureDirSync(publicAssetsDir);
    fs.copySync(sourceAssetsDir, publicAssetsDir, { overwrite: true });
    console.log('✅ Successfully copied assets to public/assets directory');

    // List files that were copied
    const files = fs.readdirSync(publicAssetsDir);
    console.log('📁 Files in public/assets:');
    files.forEach(file => console.log(`  - ${file}`));
  } else {
    console.error('❌ Source assets directory not found:', sourceAssetsDir);
  }
} catch (err) {
  console.error('❌ Error copying assets:', err);
}

// Verify the audio file exists in both locations
const audioPaths = [
  path.join(publicDir, 'assets', 'disorder.mp3'),
  path.join(publicAssetsDir, 'disorder.mp3')
];

audioPaths.forEach(audioPath => {
  if (fs.existsSync(audioPath)) {
    console.log('✅ Audio file found at:', audioPath);
  } else {
    console.error('❌ Audio file missing from:', audioPath);
  }
});

console.log('🏁 Unknown Pleasures file copy process completed');
