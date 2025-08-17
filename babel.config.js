/**
 * Babel configuration optimized for modern JavaScript
 * Reduces legacy JavaScript output for better performance
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
				modules: false, // Let webpack handle modules
				bugfixes: true,

				// For modern builds, exclude unnecessary transforms
				...(isModernBuild && {
					exclude: [
						"@babel/plugin-transform-regenerator",
						"@babel/plugin-transform-async-to-generator",
						"@babel/plugin-proposal-async-generator-functions",
						"@babel/plugin-transform-classes",
						"@babel/plugin-transform-arrow-functions",
						"@babel/plugin-transform-block-scoping",
						"@babel/plugin-transform-destructuring",
						"@babel/plugin-transform-parameters",
						"@babel/plugin-transform-shorthand-properties",
						"@babel/plugin-transform-spread",
						"@babel/plugin-transform-template-literals",
					],
				}),
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
		// Dynamic imports for code splitting
		"@babel/plugin-syntax-dynamic-import",

		// Production optimizations
		...(isProduction ? [
			"babel-plugin-transform-react-remove-prop-types",
		] : []),
	],

	// Environment-specific configurations
	env: {
		development: {
			plugins: [],
		},
		production: {
			plugins: [],
		},
	},

	// Ignore node_modules except for specific packages that need transpilation
	ignore: [/node_modules\/(?!(react-tsparticles|tsparticles|@fortawesome)\/).*/],
};
