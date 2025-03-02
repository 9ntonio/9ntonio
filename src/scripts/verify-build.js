const fs = require('fs');
const path = require('path');

const requiredPaths = [
  'public/unknown-pleasures/index.html',
  'public/unknown-pleasures/assets',
  'public/assets',
  'public/index.html',
];

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
    console.error('❌ Build verification failed! Missing critical files');
    process.exit(1);
  } else {
    console.log('✅ Build verification successful! All required files present.');
  }
}

verifyFiles();
