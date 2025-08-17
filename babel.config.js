/**
 * Babel configuration for differential serving
 * Supports both modern ES2020+ builds and legacy ES5 fallbacks
 */

const isModernBuild = process.env.GATSBY_MODERN_BUILD !== "false";
const isProduction = process.env.NODE_ENV === "production";

console.log(`🔧 Babel configured for ${isModernBuild ? "modern" : "legacy"} build`);

module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				// Use browserslist configuration for target browsers
				useBuiltIns: "usage",
				corejs: {
					version: 3,
					proposals: true,
				},
				// Different module handling for modern vs legacy builds
				modules: false, // Let webpack handle modules

				// Modern builds can use more aggressive optimizations
				bugfixes: isModernBuild,

				// Simplified configuration to avoid transform conflicts
				// exclude: [],
			},
		],
		[
			"@babel/preset-react",
			{
				runtime: "automatic", // Use new JSX transform
				development: !isProduction,
			},
		],
	],

	plugins: [
		// Modern builds can use more advanced syntax (temporarily disabled)
		// ...(isModernBuild ? [
		//   "@babel/plugin-proposal-nullish-coalescing-operator",
		//   "@babel/plugin-proposal-optional-chaining",
		// ] : []),

		// Dynamic imports for code splitting
		"@babel/plugin-syntax-dynamic-import",

		// Production optimizations (temporarily disabled)
		// ...(isProduction ? [
		//   // Remove prop-types in production for smaller bundles
		//   "babel-plugin-transform-react-remove-prop-types",
		// ] : []),
	],

	// Environment-specific configurations
	env: {
		development: {
			plugins: [
				// Development-only plugins for better debugging
			],
		},
		production: {
			plugins: [
				// Additional production optimizations
			],
		},
	},

	// Ignore node_modules except for specific packages that need transpilation
	ignore: [/node_modules\/(?!(react-tsparticles|tsparticles|@fortawesome)\/).*/],
};
