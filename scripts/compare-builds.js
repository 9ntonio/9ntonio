/**
 * Build Comparison Script
 *
 * Compares modern and legacy builds to demonstrate the benefits
 * of differential serving and modern JavaScript optimizations.
 */

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const { glob } = require('glob');

// Configuration constants
const CONFIG = {
  DIRECTORIES: {
    PUBLIC: path.resolve('public'),
    MODERN_TEMP: path.resolve('public-modern-temp'),
    LEGACY_TEMP: path.resolve('public-legacy-temp')
  },
  ANALYSIS: {
    GZIP_COMPRESSION_RATIO: 0.3,
    EXCELLENT_SIZE_REDUCTION_THRESHOLD: 30,
    GOOD_SIZE_REDUCTION_THRESHOLD: 15,
    HIGH_FEATURE_COVERAGE_THRESHOLD: 0.8
  },
  BUILD_COMMANDS: {
    CLEAN: 'yarn clean',
    MODERN: 'GATSBY_MODERN_BUILD=true yarn build:modern',
    LEGACY: 'GATSBY_MODERN_BUILD=false yarn build:legacy'
  },
  FILE_PATTERNS: {
    JS_FILES: '**/*.js',
    IGNORE_PATTERNS: ['**/*.map', '**/sw.js', '**/*partytown*']
  }
};

const { DIRECTORIES, ANALYSIS, BUILD_COMMANDS, FILE_PATTERNS } = CONFIG;

/**
 * Compare modern and legacy builds
 */
async function compareBuilds() {
  console.log('🔄 Starting build comparison...');

  try {
    // Clean up any existing temp directories
    await cleanupTempDirectories();

    // Build modern version
    console.log('\n📦 Building modern version...');
    await buildVersion('modern', DIRECTORIES.MODERN_TEMP);

    // Build legacy version
    console.log('\n📦 Building legacy version...');
    await buildVersion('legacy', DIRECTORIES.LEGACY_TEMP);

    // Analyze both builds
    const modernStats = await analyzeBuild(DIRECTORIES.MODERN_TEMP, 'Modern');
    const legacyStats = await analyzeBuild(DIRECTORIES.LEGACY_TEMP, 'Legacy');

    // Generate comparison report
    generateComparisonReport(modernStats, legacyStats);

    // Clean up temp directories
    await cleanupTempDirectories();

    console.log('\n✅ Build comparison complete');
  } catch (error) {
    console.error('❌ Build comparison failed:', error);
    // Ensure cleanup even on failure
    await cleanupTempDirectories().catch(() => {});
    process.exit(1);
  }
}

/**
 * Clean up temporary directories
 */
async function cleanupTempDirectories() {
  await Promise.all([
    fs.remove(DIRECTORIES.MODERN_TEMP),
    fs.remove(DIRECTORIES.LEGACY_TEMP)
  ]);
}

/**
 * Build a specific version (modern or legacy)
 */
async function buildVersion(type, tempDir) {
  const command = type === 'modern' ? BUILD_COMMANDS.MODERN : BUILD_COMMANDS.LEGACY;

  execSync(BUILD_COMMANDS.CLEAN, { stdio: 'inherit' });
  execSync(command, { stdio: 'inherit' });
  await fs.copy(DIRECTORIES.PUBLIC, tempDir);
}

/**
 * Analyze a build directory
 */
async function analyzeBuild(buildDir, buildType) {
  console.log(`\n🔍 Analyzing ${buildType} build...`);

  // Validate build directory exists
  if (!await fs.pathExists(buildDir)) {
    throw new Error(`Build directory does not exist: ${buildDir}`);
  }

  const jsFiles = await glob(FILE_PATTERNS.JS_FILES, {
    cwd: buildDir,
    ignore: FILE_PATTERNS.IGNORE_PATTERNS
  });

  if (jsFiles.length === 0) {
    console.warn(`⚠️  No JavaScript files found in ${buildType} build`);
  }

  let totalSize = 0;
  let modernFeatures = 0;
  const featureStats = {};
  const errors = [];

  for (const jsFile of jsFiles) {
    try {
      const filePath = path.join(buildDir, jsFile);
      const stat = await fs.stat(filePath);
      const content = await fs.readFile(filePath, 'utf8');

      totalSize += stat.size;

      const features = checkModernFeatures(content);
      if (features.length > 0) {
        modernFeatures++;
        features.forEach(feature => {
          featureStats[feature] = (featureStats[feature] || 0) + 1;
        });
      }
    } catch (error) {
      errors.push({ file: jsFile, error: error.message });
      console.warn(`⚠️  Failed to analyze ${jsFile}: ${error.message}`);
    }
  }

  if (errors.length > 0) {
    console.warn(`⚠️  ${errors.length} files failed analysis in ${buildType} build`);
  }

  const validFiles = jsFiles.length - errors.length;

  return {
    buildType,
    totalFiles: validFiles,
    totalSize,
    modernFeatures,
    featureStats,
    averageFileSize: validFiles > 0 ? totalSize / validFiles : 0,
    estimatedGzipped: Math.floor(totalSize * ANALYSIS.GZIP_COMPRESSION_RATIO),
    errors
  };
}

/**
 * Check for modern JavaScript features
 */
function checkModernFeatures(content) {
  const features = [];

  if (/=>\s*{/.test(content) || /=>\s*[^{]/.test(content)) {
    features.push('arrow-functions');
  }
  if (/\bconst\s+\w+/.test(content)) {
    features.push('const');
  }
  if (/\blet\s+\w+/.test(content)) {
    features.push('let');
  }
  if (/`[^`]*\$\{[^}]*\}[^`]*`/.test(content)) {
    features.push('template-literals');
  }
  if (/\{[^}]*\}\s*=/.test(content) || /\[[^\]]*\]\s*=/.test(content)) {
    features.push('destructuring');
  }
  if (/\.\.\./.test(content)) {
    features.push('spread-operator');
  }
  if (/\basync\s+function/.test(content) || /\bawait\s+/.test(content)) {
    features.push('async-await');
  }
  if (/\bclass\s+\w+/.test(content)) {
    features.push('classes');
  }
  if (/\?\.\w+/.test(content)) {
    features.push('optional-chaining');
  }
  if (/\?\?/.test(content)) {
    features.push('nullish-coalescing');
  }

  return features;
}

/**
 * Calculate size metrics for comparison
 */
function calculateSizeMetrics(modernStats, legacyStats) {
  const sizeDiff = legacyStats.totalSize - modernStats.totalSize;
  const sizeReduction = ((sizeDiff / legacyStats.totalSize) * 100);

  return {
    sizeDiff,
    sizeReduction,
    modernSizeKB: (modernStats.totalSize / 1024).toFixed(1),
    legacySizeKB: (legacyStats.totalSize / 1024).toFixed(1),
    modernGzippedKB: (modernStats.estimatedGzipped / 1024).toFixed(1),
    legacyGzippedKB: (legacyStats.estimatedGzipped / 1024).toFixed(1)
  };
}

/**
 * Print bundle size analysis
 */
function printSizeAnalysis(metrics) {
  console.log('\n📦 Bundle Size Analysis:');
  console.log(`   Modern Build:  ${metrics.modernSizeKB} KB`);
  console.log(`   Legacy Build:  ${metrics.legacySizeKB} KB`);
  console.log(`   Size Reduction: ${(metrics.sizeDiff / 1024).toFixed(1)} KB (${metrics.sizeReduction.toFixed(1)}%)`);
  console.log(`   Gzipped Modern: ${metrics.modernGzippedKB} KB`);
  console.log(`   Gzipped Legacy: ${metrics.legacyGzippedKB} KB`);
}

/**
 * Print file analysis
 */
function printFileAnalysis(modernStats, legacyStats) {
  console.log('\n📁 File Analysis:');
  console.log(`   Modern Files:  ${modernStats.totalFiles}`);
  console.log(`   Legacy Files:  ${legacyStats.totalFiles}`);
  console.log(`   Avg File Size (Modern): ${(modernStats.averageFileSize / 1024).toFixed(1)} KB`);
  console.log(`   Avg File Size (Legacy): ${(legacyStats.averageFileSize / 1024).toFixed(1)} KB`);
}

/**
 * Print modern features analysis
 */
function printFeaturesAnalysis(modernStats, legacyStats) {
  console.log('\n🚀 Modern Features Analysis:');
  const modernPercentage = ((modernStats.modernFeatures / modernStats.totalFiles) * 100).toFixed(1);
  const legacyPercentage = ((legacyStats.modernFeatures / legacyStats.totalFiles) * 100).toFixed(1);

  console.log(`   Modern Build Features: ${modernStats.modernFeatures}/${modernStats.totalFiles} files (${modernPercentage}%)`);
  console.log(`   Legacy Build Features: ${legacyStats.modernFeatures}/${legacyStats.totalFiles} files (${legacyPercentage}%)`);

  // Feature breakdown
  console.log('\n🔧 Feature Usage Breakdown:');
  const allFeatures = new Set([
    ...Object.keys(modernStats.featureStats),
    ...Object.keys(legacyStats.featureStats)
  ]);

  allFeatures.forEach(feature => {
    const modernCount = modernStats.featureStats[feature] || 0;
    const legacyCount = legacyStats.featureStats[feature] || 0;
    console.log(`   ${feature.padEnd(20)}: Modern ${modernCount.toString().padStart(2)}, Legacy ${legacyCount.toString().padStart(2)}`);
  });
}

/**
 * Print performance implications
 */
function printPerformanceImplications(sizeReduction) {
  console.log('\n⚡ Performance Implications:');
  console.log(`   • Modern browsers get ${sizeReduction.toFixed(1)}% smaller bundles`);
  console.log(`   • Reduced parse time due to native modern features`);
  console.log(`   • Better tree shaking and dead code elimination`);
  console.log(`   • Optimized runtime performance with modern JavaScript`);
}

/**
 * Print recommendations based on analysis
 */
function printRecommendations(sizeReduction, modernStats) {
  console.log('\n💡 Recommendations:');

  // Size reduction recommendations
  if (sizeReduction > ANALYSIS.EXCELLENT_SIZE_REDUCTION_THRESHOLD) {
    console.log('   ✅ Excellent size reduction achieved with modern builds');
  } else if (sizeReduction > ANALYSIS.GOOD_SIZE_REDUCTION_THRESHOLD) {
    console.log('   ✅ Good size reduction achieved with modern builds');
  } else {
    console.log('   ⚠️  Consider more aggressive modern optimizations');
  }

  // Feature coverage recommendations
  const featureCoverage = modernStats.modernFeatures / modernStats.totalFiles;
  if (featureCoverage > ANALYSIS.HIGH_FEATURE_COVERAGE_THRESHOLD) {
    console.log('   ✅ High modern feature coverage in build output');
  } else {
    console.log('   ⚠️  Consider enabling more modern JavaScript features');
  }
}

/**
 * Print next steps
 */
function printNextSteps() {
  console.log('\n🎯 Next Steps:');
  console.log('   • Implement differential serving in production');
  console.log('   • Monitor Core Web Vitals improvements');
  console.log('   • Consider module/nomodule pattern for HTML');
  console.log('   • Test on various browser versions');
}

/**
 * Generate comparison report
 */
function generateComparisonReport(modernStats, legacyStats) {
  console.log('\n📊 BUILD COMPARISON REPORT');
  console.log('═'.repeat(50));

  const metrics = calculateSizeMetrics(modernStats, legacyStats);

  printSizeAnalysis(metrics);
  printFileAnalysis(modernStats, legacyStats);
  printFeaturesAnalysis(modernStats, legacyStats);
  printPerformanceImplications(metrics.sizeReduction);
  printRecommendations(metrics.sizeReduction, modernStats);
  printNextSteps();
}

// Run comparison if called directly
if (require.main === module) {
  compareBuilds().catch(error => {
    console.error('❌ Comparison failed:', error);
    process.exit(1);
  });
}

module.exports = {
  compareBuilds,
  analyzeBuild,
  checkModernFeatures,
  generateComparisonReport,
};
