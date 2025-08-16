/**
 * Modern Build Validation Script
 *
 * Validates that the modern build configuration is working correctly
 * and that differential serving is properly implemented.
 */

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Validate modern JavaScript features in build output
 */
async function validateModernBuild() {
  console.log('🔍 Validating modern build configuration...');

  const publicDir = path.resolve('public');

  if (!await fs.pathExists(publicDir)) {
    console.error('❌ Public directory not found. Run build first.');
    process.exit(1);
  }

  // Check for modern JavaScript features in built files
  const jsFiles = await findJavaScriptFiles(publicDir);

  if (jsFiles.length === 0) {
    console.error('❌ No JavaScript files found in build output');
    process.exit(1);
  }

  console.log(`📁 Found ${jsFiles.length} JavaScript files to validate`);

  let modernFeaturesFound = 0;
  let totalFiles = 0;

  for (const jsFile of jsFiles) {
    const content = await fs.readFile(jsFile, 'utf8');
    const features = checkModernFeatures(content);

    if (features.length > 0) {
      modernFeaturesFound++;
      console.log(`✅ ${path.relative(publicDir, jsFile)}: Found modern features: ${features.join(', ')}`);
    }

    totalFiles++;
  }

  // Validate build configuration
  await validateBuildConfig();

  // Summary
  console.log('\n📊 Validation Summary:');
  console.log(`   Total JS files: ${totalFiles}`);
  console.log(`   Files with modern features: ${modernFeaturesFound}`);
  console.log(`   Modern feature coverage: ${((modernFeaturesFound / totalFiles) * 100).toFixed(1)}%`);

  if (modernFeaturesFound > 0) {
    console.log('✅ Modern build validation passed');
  } else {
    console.log('⚠️  No modern features detected - build may not be optimized');
  }
}

/**
 * Find all JavaScript files in the build output
 */
async function findJavaScriptFiles(dir) {
  const files = [];

  async function scan(currentDir) {
    const entries = await fs.readdir(currentDir);

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        await scan(fullPath);
      } else if (entry.endsWith('.js') && !entry.includes('.map')) {
        files.push(fullPath);
      }
    }
  }

  await scan(dir);
  return files;
}

/**
 * Check for modern JavaScript features in file content
 */
function checkModernFeatures(content) {
  const features = [];

  // Check for arrow functions
  if (/=>\s*{/.test(content) || /=>\s*[^{]/.test(content)) {
    features.push('arrow-functions');
  }

  // Check for const/let
  if (/\bconst\s+\w+/.test(content)) {
    features.push('const');
  }
  if (/\blet\s+\w+/.test(content)) {
    features.push('let');
  }

  // Check for template literals
  if (/`[^`]*\$\{[^}]*\}[^`]*`/.test(content)) {
    features.push('template-literals');
  }

  // Check for destructuring
  if (/\{[^}]*\}\s*=/.test(content) || /\[[^\]]*\]\s*=/.test(content)) {
    features.push('destructuring');
  }

  // Check for spread operator
  if (/\.\.\./.test(content)) {
    features.push('spread-operator');
  }

  // Check for async/await
  if (/\basync\s+function/.test(content) || /\bawait\s+/.test(content)) {
    features.push('async-await');
  }

  // Check for classes
  if (/\bclass\s+\w+/.test(content)) {
    features.push('classes');
  }

  // Check for optional chaining
  if (/\?\.\w+/.test(content)) {
    features.push('optional-chaining');
  }

  // Check for nullish coalescing
  if (/\?\?/.test(content)) {
    features.push('nullish-coalescing');
  }

  return features;
}

/**
 * Validate build configuration files
 */
async function validateBuildConfig() {
  console.log('\n🔧 Validating build configuration...');

  // Check babel config
  const babelConfigPath = path.resolve('babel.config.js');
  if (await fs.pathExists(babelConfigPath)) {
    console.log('✅ Babel configuration found');
  } else {
    console.log('⚠️  Babel configuration not found');
  }

  // Check browserslist config
  const browserslistPath = path.resolve('.browserslistrc');
  if (await fs.pathExists(browserslistPath)) {
    const browserslistContent = await fs.readFile(browserslistPath, 'utf8');
    if (browserslistContent.includes('es6-module')) {
      console.log('✅ Browserslist configured for modern builds');
    } else {
      console.log('⚠️  Browserslist may not be optimized for modern builds');
    }
  } else {
    console.log('⚠️  Browserslist configuration not found');
  }

  // Check webpack config
  const webpackConfigPath = path.resolve('src/config/webpack.config.js');
  if (await fs.pathExists(webpackConfigPath)) {
    console.log('✅ Webpack configuration found');
  } else {
    console.log('⚠️  Webpack configuration not found');
  }
}

/**
 * Check bundle sizes and optimization
 */
async function checkBundleOptimization() {
  console.log('\n📦 Checking bundle optimization...');

  const publicDir = path.resolve('public');
  const jsFiles = await findJavaScriptFiles(publicDir);

  let totalSize = 0;
  let gzippedSize = 0;

  for (const jsFile of jsFiles) {
    const stat = await fs.stat(jsFile);
    totalSize += stat.size;

    // Estimate gzipped size (rough approximation)
    const content = await fs.readFile(jsFile, 'utf8');
    gzippedSize += Math.floor(content.length * 0.3); // Rough gzip ratio
  }

  console.log(`📊 Bundle Analysis:`);
  console.log(`   Total JS size: ${(totalSize / 1024).toFixed(1)} KB`);
  console.log(`   Estimated gzipped: ${(gzippedSize / 1024).toFixed(1)} KB`);
  console.log(`   Compression ratio: ${((1 - gzippedSize / totalSize) * 100).toFixed(1)}%`);

  // Check for code splitting
  const chunkFiles = jsFiles.filter(file =>
    path.basename(file).includes('chunk') ||
    path.basename(file).includes('vendor') ||
    path.basename(file).includes('framework')
  );

  console.log(`   Code splitting: ${chunkFiles.length} chunks detected`);

  if (chunkFiles.length > 0) {
    console.log('✅ Code splitting is working');
  } else {
    console.log('⚠️  Code splitting may not be optimal');
  }
}

// Run validation
if (require.main === module) {
  validateModernBuild()
    .then(() => checkBundleOptimization())
    .catch(error => {
      console.error('❌ Validation failed:', error);
      process.exit(1);
    });
}

module.exports = {
  validateModernBuild,
  checkModernFeatures,
  checkBundleOptimization,
};
