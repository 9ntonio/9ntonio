#!/usr/bin/env node

/**
 * Font Loading Optimization Validation Script
 * Validates that font loading optimizations are properly implemented
 */

const fs = require("fs");
const path = require("path");

console.log("🔍 Validating Font Loading Optimizations...\n");

// Test 1: Check Gatsby config for proper Google Fonts configuration
function validateGatsbyConfig() {
	console.log("1. Checking Gatsby configuration...");

	try {
		const configPath = path.join(process.cwd(), "gatsby-config.js");
		const configContent = fs.readFileSync(configPath, "utf8");

		const checks = [
			{ test: /display:\s*["']swap["']/, name: "font-display: swap" },
			{ test: /preconnect:\s*true/, name: "preconnect enabled" },
			{ test: /crossOrigin:\s*["']anonymous["']/, name: "crossOrigin anonymous" },
			{ test: /preload:\s*true/, name: "preload enabled" },
			{ test: /fallback:\s*true/, name: "fallback enabled" },
			{ test: /subsets:\s*\[['"]latin['"]\]/, name: "latin subset specified" },
		];

		let passed = 0;
		checks.forEach((check) => {
			if (check.test.test(configContent)) {
				console.log(`   ✅ ${check.name}`);
				passed++;
			} else {
				console.log(`   ❌ ${check.name}`);
			}
		});

		console.log(`   Result: ${passed}/${checks.length} checks passed\n`);
		return passed === checks.length;
	} catch (error) {
		console.log(`   ❌ Error reading gatsby-config.js: ${error.message}\n`);
		return false;
	}
}

// Test 2: Check HTML template for font preload hints
function validateHtmlTemplate() {
	console.log("2. Checking HTML template for font preloads...");

	try {
		const htmlPath = path.join(process.cwd(), "src/html.js");
		const htmlContent = fs.readFileSync(htmlPath, "utf8");

		const checks = [
			{ test: /rel=["']preconnect["'].*fonts\.gstatic\.com/, name: "preconnect to fonts.gstatic.com" },
			{ test: /rel=["']preconnect["'].*fonts\.googleapis\.com/, name: "preconnect to fonts.googleapis.com" },
			{ test: /rel=["']preload["'][\s\S]*?as=["']font["']/, name: "font preload hints" },
			{ test: /crossOrigin=["']anonymous["']/, name: "crossOrigin for font preloads" },
			{ test: /importance=["']high["']/, name: "high importance for critical fonts" },
			{ test: /dns-prefetch.*fonts\.googleapis\.com/, name: "DNS prefetch for Google Fonts" },
		];

		let passed = 0;
		checks.forEach((check) => {
			if (check.test.test(htmlContent)) {
				console.log(`   ✅ ${check.name}`);
				passed++;
			} else {
				console.log(`   ❌ ${check.name}`);
			}
		});

		console.log(`   Result: ${passed}/${checks.length} checks passed\n`);
		return passed >= 4; // Allow some flexibility
	} catch (error) {
		console.log(`   ❌ Error reading src/html.js: ${error.message}\n`);
		return false;
	}
}

// Test 3: Check critical CSS for font loading optimizations
function validateCriticalCSS() {
	console.log("3. Checking critical CSS for font optimizations...");

	try {
		const cssPath = path.join(process.cwd(), "src/styles/critical.css");
		const cssContent = fs.readFileSync(cssPath, "utf8");

		const checks = [
			{ test: /font-display:\s*swap/, name: "font-display: swap in CSS" },
			{ test: /font-size-adjust/, name: "font-size-adjust for layout stability" },
			{ test: /\.font-loading/, name: "font loading state class" },
			{ test: /\.font-loaded/, name: "font loaded state class" },
			{ test: /\.font-fallback/, name: "font fallback state class" },
			{ test: /transition:.*font-family/, name: "smooth font transition" },
		];

		let passed = 0;
		checks.forEach((check) => {
			if (check.test.test(cssContent)) {
				console.log(`   ✅ ${check.name}`);
				passed++;
			} else {
				console.log(`   ❌ ${check.name}`);
			}
		});

		console.log(`   Result: ${passed}/${checks.length} checks passed\n`);
		return passed >= 4; // Allow some flexibility
	} catch (error) {
		console.log(`   ❌ Error reading src/styles/critical.css: ${error.message}\n`);
		return false;
	}
}

// Test 4: Check Tailwind config for proper font fallbacks
function validateTailwindConfig() {
	console.log("4. Checking Tailwind configuration for font fallbacks...");

	try {
		const tailwindPath = path.join(process.cwd(), "tailwind.config.js");
		const tailwindContent = fs.readFileSync(tailwindPath, "utf8");

		const checks = [
			{ test: /fredoka:\s*\[/, name: "Fredoka font family defined" },
			{ test: /"Fredoka"/, name: "Fredoka as primary font" },
			{ test: /"system-ui"/, name: "system-ui fallback" },
			{ test: /"-apple-system"/, name: "Apple system font fallback" },
			{ test: /"BlinkMacSystemFont"/, name: "Blink system font fallback" },
			{ test: /"sans-serif"/, name: "Generic sans-serif fallback" },
		];

		let passed = 0;
		checks.forEach((check) => {
			if (check.test.test(tailwindContent)) {
				console.log(`   ✅ ${check.name}`);
				passed++;
			} else {
				console.log(`   ❌ ${check.name}`);
			}
		});

		console.log(`   Result: ${passed}/${checks.length} checks passed\n`);
		return passed >= 5; // Allow some flexibility
	} catch (error) {
		console.log(`   ❌ Error reading tailwind.config.js: ${error.message}\n`);
		return false;
	}
}

// Test 5: Check that FontLoadingOptimizer component exists and is used
function validateFontLoadingOptimizer() {
	console.log("5. Checking FontLoadingOptimizer component...");

	try {
		const componentPath = path.join(process.cwd(), "src/components/FontLoadingOptimizer.js");
		const componentContent = fs.readFileSync(componentPath, "utf8");

		const checks = [
			{ test: /document\.fonts\.load/, name: "Font Loading API usage" },
			{ test: /font-loading/, name: "Loading state class management" },
			{ test: /font-loaded/, name: "Loaded state class management" },
			{ test: /setTimeout.*Timeout/, name: "Fallback timeout mechanism" },
			{ test: /Promise\.all/, name: "Parallel font loading" },
		];

		let passed = 0;
		checks.forEach((check) => {
			if (check.test.test(componentContent)) {
				console.log(`   ✅ ${check.name}`);
				passed++;
			} else {
				console.log(`   ❌ ${check.name}`);
			}
		});

		// Check if component is imported in pages
		const indexPath = path.join(process.cwd(), "src/pages/index.js");
		const indexContent = fs.readFileSync(indexPath, "utf8");

		if (/import.*FontLoadingOptimizer/.test(indexContent) && /<FontLoadingOptimizer/.test(indexContent)) {
			console.log(`   ✅ Component imported and used in index page`);
			passed++;
		} else {
			console.log(`   ❌ Component not properly imported/used in index page`);
		}

		console.log(`   Result: ${passed}/6 checks passed\n`);
		return passed >= 4; // Allow some flexibility
	} catch (error) {
		console.log(`   ❌ Error reading FontLoadingOptimizer component: ${error.message}\n`);
		return false;
	}
}

// Run all validations
async function runValidation() {
	const results = [validateGatsbyConfig(), validateHtmlTemplate(), validateCriticalCSS(), validateTailwindConfig(), validateFontLoadingOptimizer()];

	const passed = results.filter(Boolean).length;
	const total = results.length;

	console.log("📊 VALIDATION SUMMARY");
	console.log("=".repeat(50));
	console.log(`Tests passed: ${passed}/${total}`);

	if (passed === total) {
		console.log("🎉 All font loading optimizations are properly implemented!");
		console.log("\n✨ Expected improvements:");
		console.log("   • Reduced font loading time");
		console.log("   • Eliminated layout shifts during font loading");
		console.log("   • Better fallback font matching");
		console.log("   • Improved Core Web Vitals scores");
		process.exit(0);
	} else {
		console.log("⚠️  Some optimizations may need attention.");
		console.log("   Review the failed checks above and ensure all optimizations are in place.");
		process.exit(1);
	}
}

runValidation().catch((error) => {
	console.error("❌ Validation failed:", error);
	process.exit(1);
});
