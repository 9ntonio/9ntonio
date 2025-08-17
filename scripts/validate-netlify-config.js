#!/usr/bin/env node

/**
 * Netlify Configuration Validation Script
 * Validates that asset optimization settings are properly configured
 */

const fs = require("fs");
const path = require("path");

function validateNetlifyConfig() {
	console.log("🔍 Validating Netlify configuration...\n");

	const netlifyTomlPath = path.join(process.cwd(), "netlify.toml");

	if (!fs.existsSync(netlifyTomlPath)) {
		console.error("❌ netlify.toml not found");
		process.exit(1);
	}

	const config = fs.readFileSync(netlifyTomlPath, "utf8");

	const checks = [
		{
			name: "Asset processing enabled",
			test: () => config.includes("[build.processing]") && config.includes("skip_processing = false"),
		},
		{
			name: "CSS optimization enabled",
			test: () => config.includes("[build.processing.css]") && config.includes("bundle = true") && config.includes("minify = true"),
		},
		{
			name: "JS optimization enabled",
			test: () => config.includes("[build.processing.js]") && config.includes("bundle = true") && config.includes("minify = true"),
		},
		{
			name: "Image compression enabled",
			test: () => config.includes("[build.processing.images]") && config.includes("compress = true"),
		},
		{
			name: "Proper caching headers for JS/CSS",
			test: () => config.includes("/*.js") && config.includes("/*.css") && config.includes("max-age=31536000"),
		},
		{
			name: "Security headers configured",
			test: () => config.includes("X-Frame-Options") && config.includes("X-Content-Type-Options"),
		},
		{
			name: "Gatsby plugin configured",
			test: () => config.includes("@netlify/plugin-gatsby"),
		},
	];

	let passed = 0;
	let failed = 0;

	checks.forEach((check) => {
		if (check.test()) {
			console.log(`✅ ${check.name}`);
			passed++;
		} else {
			console.log(`❌ ${check.name}`);
			failed++;
		}
	});

	console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

	if (failed === 0) {
		console.log("🎉 All Netlify optimizations are properly configured!");
		console.log("\n📝 Next steps:");
		console.log("1. Deploy to Netlify");
		console.log("2. Test performance with Lighthouse");
		console.log("3. Compare with local build performance");
	} else {
		console.log("⚠️  Some optimizations are missing. Please review the configuration.");
		process.exit(1);
	}
}

if (require.main === module) {
	validateNetlifyConfig();
}

module.exports = { validateNetlifyConfig };
