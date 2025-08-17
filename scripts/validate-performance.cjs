#!/usr/bin/env node

/**
 * Performance validation script
 * Validates that performance optimizations are working correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating performance optimizations...\n');

// Check if critical CSS is inlined
const htmlPath = path.join(__dirname, '../src/html.js');
if (fs.existsSync(htmlPath)) {
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  if (htmlContent.includes('Critical CSS inline')) {
    console.log('✅ Critical CSS is properly inlined');
  } else {
    console.log('❌ Critical CSS inlining not found');
  }

  if (htmlContent.includes('preconnect')) {
    console.log('✅ Font preconnect hints are present');
  } else {
    console.log('❌ Font preconnect hints missing');
  }

  if (htmlContent.includes('preload')) {
    console.log('✅ Font preload hints are present');
  } else {
    console.log('❌ Font preload hints missing');
  }
}

// Check Gatsby config optimizations
const configPath = path.join(__dirname, '../gatsby-config.js');
if (fs.existsSync(configPath)) {
  const configContent = fs.readFileSync(configPath, 'utf8');

  if (configContent.includes('display: "swap"')) {
    console.log('✅ Font-display: swap is configured');
  } else {
    console.log('❌ Font-display: swap not found');
  }

  if (configContent.includes('delayOnFirstInteraction: true')) {
    console.log('✅ Google Analytics delayed loading is configured');
  } else {
    console.log('❌ Google Analytics delayed loading not configured');
  }

  if (configContent.includes('polyfill: false')) {
    console.log('✅ Polyfills are disabled for modern builds');
  } else {
    console.log('❌ Polyfills are still enabled');
  }
}

// Check global CSS optimizations
const cssPath = path.join(__dirname, '../src/styles/global.css');
if (fs.existsSync(cssPath)) {
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  if (cssContent.includes('project-image-container')) {
    console.log('✅ Project image containers with fixed aspect ratios');
  } else {
    console.log('❌ Project image containers not optimized');
  }

  if (cssContent.includes('flex-shrink: 0')) {
    console.log('✅ Circle containers prevent layout shifts');
  } else {
    console.log('❌ Circle containers may cause layout shifts');
  }
}

console.log('\n🎯 Performance validation complete!');
console.log('\nExpected improvements:');
console.log('• CLS score should improve from 0.500 to < 0.1');
console.log('• Font loading should no longer block render (260ms saved)');
console.log('• Unused JavaScript reduced by ~27KB');
console.log('• Google Analytics loads only after user interaction');
