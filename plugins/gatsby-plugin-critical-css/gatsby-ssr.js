const fs = require("fs");
const path = require("path");

/**
 * Custom Gatsby plugin for critical CSS inlining
 * Lightweight alternative to heavy webpack plugins
 */

exports.onRenderBody = ({ setHeadComponents, pathname }) => {
	// Only process critical CSS in production
	if (process.env.NODE_ENV !== "production") {
		return;
	}

	try {
		// Read critical CSS file
		const criticalCssPath = path.join(process.cwd(), "src/styles/critical.css");

		if (fs.existsSync(criticalCssPath)) {
			const criticalCss = fs.readFileSync(criticalCssPath, "utf8");

			// Minify CSS
			const minifiedCss = criticalCss
				.replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments
				.replace(/\s+/g, " ") // Collapse whitespace
				.replace(/;\s*}/g, "}") // Remove unnecessary semicolons
				.replace(/\s*{\s*/g, "{") // Clean up braces
				.replace(/;\s*/g, ";") // Clean up semicolons
				.replace(/,\s*/g, ",") // Clean up commas
				.trim();

			// Add critical CSS as inline style
			setHeadComponents([
				<style
					key="critical-css"
					data-critical-css="true"
					dangerouslySetInnerHTML={{
						__html: minifiedCss,
					}}
				/>,
			]);
		}
	} catch (error) {
		console.warn("Failed to inline critical CSS:", error.message);
	}
};

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
	// Only process in production
	if (process.env.NODE_ENV !== "production") {
		return;
	}

	const headComponents = getHeadComponents();

	// Find and defer non-critical CSS
	const processedComponents = headComponents.map((component) => {
		if (component.type === "link" && component.props && component.props.rel === "stylesheet" && component.props.href && !component.props.href.includes("fonts.googleapis.com")) {
			// Convert stylesheet links to deferred loading
			return <link key={component.key || component.props.href} rel="preload" href={component.props.href} as="style" onLoad="this.onload=null;this.rel='stylesheet'" />;
		}
		return component;
	});

	// Add noscript fallback for deferred CSS
	const noscriptFallbacks = headComponents
		.filter((component) => component.type === "link" && component.props && component.props.rel === "stylesheet" && component.props.href && !component.props.href.includes("fonts.googleapis.com"))
		.map((component) => (
			<noscript key={`noscript-${component.key || component.props.href}`}>
				<link rel="stylesheet" href={component.props.href} />
			</noscript>
		));

	replaceHeadComponents([...processedComponents, ...noscriptFallbacks]);
};
