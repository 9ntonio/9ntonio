#!/usr/bin/env node

/**
 * Performance Optimization Validation Script
 * Validates that all performance optimizations are properly configured
 */

const fs = require("fs");
const path = require("path");

function validatePerformanceOptimizations() {
	console.log("🚀 Validating performance optimizations...\n");

	const checks = [
		{
			name: "Image optimization - constrained layout",
			test: () => {
				const indexPath = path.join(process.cwd(), "src/pages/index.js");
				if (!fs.existsSync(indexPath)) return false;
				const content = fs.readFileSync(indexPath, "utf8");
				return content.includes('layout="constrained"') && content.includes('sizes="(max-width: 768px) 100vw, 33vw"');
			},
		},
		{
			name: "Image quality optimization (75%)",
			test: () => {
				const indexPath = path.join(process.cwd(), "src/pages/index.js");
				if (!fs.existsSync(indexPath)) return false;
				const content = fs.readFileSync(indexPath, "utf8");
				return content.includes("quality={75}");
			},
		},
		{
			name: "Font preloading configured",
			test: () => {
				const htmlPath = path.join(process.cwd(), "src/html.js");
				if (!fs.existsSync(htmlPath)) return false;
				const content = fs.readFileSync(htmlPath, "utf8");
				return content.includes('rel="preload"') && content.includes('as="font"');
			},
		},
		{
			name: "Google Analytics optimized",
			test: () => {
				const configPath = path.join(process.cwd(), "gatsby-config.js");
				if (!fs.existsSync(configPath)) return false;
				const content = fs.readFileSync(configPath, "utf8");
				return content.includes("head: false") && content.includes("respectDNT: true");
			},
		},
		{
			name: "Gatsby image defaults optimized",
			test: () => {
				const configPath = path.join(process.cwd(), "gatsby-config.js");
				if (!fs.existsSync(configPath)) return false;
				const content = fs.readFileSync(configPath, "utf8");
				return content.includes("quality: 75") && content.includes("stripMetadata: true");
			},
		},
		{
			name: "Resource hints configured",
			test: () => {
				const netlifyPath = path.join(process.cwd(), "netlify.toml");
				if (!fs.existsSync(netlifyPath)) return false;
				const content = fs.readFileSync(netlifyPath, "utf8");
				return content.includes("rel=preload") && content.includes("rel=preconnect");
			},
		},
		{
			name: "Robots.txt exists",
			test: () => {
				const robotsPath = path.join(process.cwd(), "static/robots.txt");
				return fs.existsSync(robotsPath);
			},
		},
		{
			name: "Sitemap plugin configured",
			test: () => {
				const configPath = path.join(process.cwd(), "gatsby-config.js");
				if (!fs.existsSync(configPath)) return false;
				const content = fs.readFileSync(configPath, "utf8");
				return content.includes("gatsby-plugin-sitemap");
			},
		},
	];

	let passed = 0;
	let failed = 0;

	checks.forEach((check) => {
		try {
			if (check.test()) {
				console.log(`✅ ${check.name}`);
				passed++;
			} else {
				console.log(`❌ ${check.name}`);
				failed++;
			}
		} catch (error) {
			console.log(`❌ ${check.name} (Error: ${error.message})`);
			failed++;
		}
	});

	console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

	if (failed === 0) {
		console.log("🎉 All performance optimizations are properly configured!");
		console.log("\n📈 Expected improvements:");
		console.log("• Image sizes reduced by ~50% (constrained layout + quality 75%)");
		console.log("• Font loading optimized (preload + display swap)");
		console.log("• Google Analytics non-blocking");
		console.log("• SEO score improved (robots.txt + sitemap)");
		console.log("\n📝 Next steps:");
		console.log("1. Build and deploy to Netlify");
		console.log("2. Test with Lighthouse");
		console.log("3. Verify performance score 90+");
	} else {
		console.log("⚠️  Some optimizations are missing. Please review the configuration.");
		process.exit(1);
	}
}

if (require.main === module) {
	validatePerformanceOptimizations();
}

module.exports = { validatePerformanceOptimizations };
