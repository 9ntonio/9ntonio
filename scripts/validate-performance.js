#!/usr/bin/env node

/**
 * Performance validation script
 * Validates that performance optimizations are working correctly
 */

const fs = require("fs");
const path = require("path");

// Validation configuration
const VALIDATION_CONFIG = {
	criticalCSS: { weight: 2, description: "Critical CSS inlining" },
	fontPreconnect: { weight: 1, description: "Font preconnect hints" },
	fontPreload: { weight: 1, description: "Font preload hints" },
	fontDisplaySwap: { weight: 2, description: "Font-display: swap" },
	analyticsDelay: { weight: 2, description: "Analytics delayed loading" },
	polyfillsDisabled: { weight: 1, description: "Polyfills disabled" },
	imageContainers: { weight: 1, description: "Image containers optimized" },
	layoutStability: { weight: 2, description: "Layout stability measures" },
	criticalCSSCentralized: { weight: 1, description: "Critical CSS centralized" },
};

const validationResults = Object.keys(VALIDATION_CONFIG).reduce((acc, key) => {
	acc[key] = false;
	return acc;
}, {});

console.log("🔍 Validating performance optimizations...\n");

/**
 * Validates a file exists and contains expected content
 * @param {string} filePath - Path to the file
 * @param {Array} checks - Array of {pattern, key, successMsg, failMsg}
 */
function validateFileContent(filePath, checks) {
	if (!fs.existsSync(filePath)) {
		console.log(`❌ File not found: ${filePath}`);
		return;
	}

	const content = fs.readFileSync(filePath, "utf8");

	checks.forEach(({ pattern, key, successMsg, failMsg }) => {
		const found = typeof pattern === "string" ? content.includes(pattern) : pattern.test(content);

		validationResults[key] = found;
		console.log(found ? `✅ ${successMsg}` : `❌ ${failMsg}`);
	});
}

// Check HTML template optimizations
const htmlPath = path.join(__dirname, "../src/html.js");
validateFileContent(htmlPath, [
	{
		pattern: "Critical CSS inline",
		key: "criticalCSS",
		successMsg: "Critical CSS is properly inlined",
		failMsg: "Critical CSS inlining not found",
	},
	{
		pattern: "preconnect",
		key: "fontPreconnect",
		successMsg: "Font preconnect hints are present",
		failMsg: "Font preconnect hints missing",
	},
	{
		pattern: "preload",
		key: "fontPreload",
		successMsg: "Font preload hints are present",
		failMsg: "Font preload hints missing",
	},
]);

// Critical CSS is now inlined directly in html.js template

// Check Gatsby config optimizations
const configPath = path.join(__dirname, "../gatsby-config.js");
validateFileContent(configPath, [
	{
		pattern: 'display: "swap"',
		key: "fontDisplaySwap",
		successMsg: "Font-display: swap is configured",
		failMsg: "Font-display: swap not found",
	},
	{
		pattern: "delayOnFirstInteraction: true",
		key: "analyticsDelay",
		successMsg: "Google Analytics delayed loading is configured",
		failMsg: "Google Analytics delayed loading not configured",
	},
	{
		pattern: "polyfill: false",
		key: "polyfillsDisabled",
		successMsg: "Polyfills are disabled for modern builds",
		failMsg: "Polyfills are still enabled",
	},
]);

// Check global CSS optimizations
const cssPath = path.join(__dirname, "../src/styles/global.css");
validateFileContent(cssPath, [
	{
		pattern: "project-image-container",
		key: "imageContainers",
		successMsg: "Project image containers with fixed aspect ratios",
		failMsg: "Project image containers not optimized",
	},
	{
		pattern: "flex-shrink: 0",
		key: "layoutStability",
		successMsg: "Circle containers prevent layout shifts",
		failMsg: "Circle containers may cause layout shifts",
	},
]);

// Generate weighted summary report
const passedChecks = Object.values(validationResults).filter(Boolean).length;
const totalChecks = Object.keys(validationResults).length;
const successRate = Math.round((passedChecks / totalChecks) * 100);

// Calculate weighted score
const weightedScore = Object.entries(validationResults).reduce((score, [key, passed]) => {
	const weight = VALIDATION_CONFIG[key]?.weight || 1;
	return score + (passed ? weight : 0);
}, 0);

const maxWeightedScore = Object.values(VALIDATION_CONFIG).reduce((sum, config) => sum + config.weight, 0);
const weightedSuccessRate = Math.round((weightedScore / maxWeightedScore) * 100);

console.log("\n🎯 Performance validation complete!");
console.log(`\n📊 Results: ${passedChecks}/${totalChecks} checks passed (${successRate}%)`);
console.log(`📊 Weighted Score: ${weightedScore}/${maxWeightedScore} (${weightedSuccessRate}%)`);

if (successRate < 100) {
	console.log("\n⚠️  Failed checks:");
	Object.entries(validationResults)
		.filter(([, passed]) => !passed)
		.forEach(([key]) => {
			const config = VALIDATION_CONFIG[key];
			console.log(`   • ${config?.description || key} (weight: ${config?.weight || 1})`);
		});
}

console.log("\n🚀 Expected improvements:");
console.log("• CLS score should improve from 0.500 to < 0.1");
console.log("• Font loading should no longer block render (260ms saved)");
console.log("• Unused JavaScript reduced by ~27KB");
console.log("• Google Analytics loads only after user interaction");

// Exit with error code if validations failed
process.exit(successRate === 100 ? 0 : 1);
