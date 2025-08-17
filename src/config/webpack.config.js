const TerserPlugin = require("terser-webpack-plugin");

/**
 * Centralized webpack configuration for modern JavaScript builds
 * Optimized for modern browsers with differential serving support
 */

// Modern Terser configuration for production builds
const createModernTerserConfig = () => ({
	terserOptions: {
		ecma: 2020, // Target modern JavaScript
		compress: {
			// Modern browser optimizations
			drop_console: true,
			drop_debugger: true,
			pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
			passes: 3, // More passes for better optimization

			// Modern JavaScript features
			arrows: true,
			booleans_as_integers: true,
			collapse_vars: true,
			comparisons: true,
			computed_props: true,
			conditionals: true,
			dead_code: true,
			directives: true,
			drop_unreachable: true,
			evaluate: true,
			hoist_funs: true,
			hoist_props: true,
			hoist_vars: false, // Keep false for let/const
			if_return: true,
			inline: 3, // Aggressive inlining for modern builds
			join_vars: true,
			keep_fargs: false,
			loops: true,
			negate_iife: true,
			properties: true,
			reduce_funcs: true,
			reduce_vars: true,
			sequences: true,
			side_effects: true,
			switches: true,
			toplevel: true,
			typeofs: true,
			unused: true,

			// Modern unsafe optimizations (safe for modern browsers)
			unsafe_arrows: true,
			unsafe_comps: true,
			unsafe_Function: true,
			unsafe_math: true,
			unsafe_methods: true,
			unsafe_proto: true,
			unsafe_regexp: true,
			unsafe_undefined: true,
		},
		mangle: {
			toplevel: true,
			safari10: false, // Not needed for modern builds
			properties: {
				regex: /^_/,
			},
		},
		format: {
			comments: false,
			ecma: 2020, // Use modern syntax in output
			ascii_only: false, // Allow unicode for smaller output
			beautify: false,
			braces: false,
			semicolons: false, // Use ASI for smaller output
		},
	},
	extractComments: false,
	parallel: true,
});

// Legacy Terser configuration for fallback builds
const createLegacyTerserConfig = () => ({
	terserOptions: {
		ecma: 5, // Target legacy browsers
		compress: {
			drop_console: true,
			drop_debugger: true,
			pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
			passes: 2,
			// Conservative optimizations for legacy browsers
			unsafe_arrows: false,
			unsafe_methods: false,
			unsafe_proto: false,
			unsafe_Function: false,
			unsafe_math: false,
			unsafe_regexp: false,
			toplevel: false,
		},
		mangle: {
			safari10: true, // Keep Safari 10 compatibility
			properties: {
				regex: /^_/,
			},
		},
		format: {
			comments: false,
			ascii_only: true, // Ensure ASCII for legacy browsers
			ecma: 5,
		},
	},
	extractComments: false,
	parallel: true,
});

// Modern split chunks configuration with enhanced caching strategy
const createModernSplitChunksConfig = () => ({
	chunks: "all",
	minSize: 15000, // Smaller chunks for better caching
	maxSize: 200000, // Smaller max size for modern builds
	minChunks: 1,
	maxAsyncRequests: 30,
	maxInitialRequests: 30,
	enforceSizeThreshold: 50000,
	cacheGroups: {
		// Framework chunk (React, ReactDOM)
		framework: {
			test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
			name: "framework",
			chunks: "all",
			priority: 40,
			enforce: true,
		},

		// Core libraries chunk
		lib: {
			test: /[\\/]node_modules[\\/](@babel|core-js|regenerator-runtime)[\\/]/,
			name: "lib",
			chunks: "all",
			priority: 30,
			enforce: true,
		},

		// FontAwesome chunk
		fontawesome: {
			test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
			name: "fontawesome",
			chunks: "all",
			priority: 25,
			enforce: true,
		},

		// Particles system chunk
		particles: {
			test: /[\\/]node_modules[\\/](react-tsparticles|tsparticles)[\\/]/,
			name: "particles",
			chunks: "all",
			priority: 25,
			enforce: true,
		},

		// React Player chunk
		reactPlayer: {
			test: /[\\/]node_modules[\\/]react-player[\\/]/,
			name: "react-player",
			chunks: "all",
			priority: 25,
			enforce: true,
		},

		// Gatsby runtime chunk
		gatsby: {
			test: /[\\/]node_modules[\\/](gatsby|@gatsbyjs)[\\/]/,
			name: "gatsby",
			chunks: "all",
			priority: 20,
			enforce: true,
		},

		// Common vendor libraries
		vendor: {
			test: /[\\/]node_modules[\\/]/,
			name: "vendors",
			chunks: "all",
			priority: 10,
			minChunks: 2,
		},

		// Common application code
		common: {
			name: "common",
			minChunks: 2,
			chunks: "all",
			priority: 5,
			reuseExistingChunk: true,
		},
	},
});

// Legacy split chunks configuration
const createLegacySplitChunksConfig = () => ({
	chunks: "all",
	minSize: 20000,
	maxSize: 244000,
	cacheGroups: {
		vendor: {
			test: /[\\/]node_modules[\\/]/,
			name: "vendors",
			chunks: "all",
			priority: 1,
		},
		fontawesome: {
			test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
			name: "fontawesome",
			chunks: "all",
			priority: 10,
		},
		particles: {
			test: /[\\/]node_modules[\\/](react-tsparticles|tsparticles)[\\/]/,
			name: "particles",
			chunks: "all",
			priority: 10,
		},
		reactPlayer: {
			test: /[\\/]node_modules[\\/]react-player[\\/]/,
			name: "react-player",
			chunks: "all",
			priority: 10,
		},
	},
});

// Production webpack configuration with differential serving support
const getProductionConfig = (isModern = true) => ({
	target: isModern ? ["web", "es2020"] : ["web", "es5"],

	resolve: {
		mainFields: isModern ? ["browser", "module", "main"] : ["browser", "main", "module"],
		extensions: [".mjs", ".js", ".jsx", ".json"],
	},

	output: {
		environment: isModern
			? {
					arrowFunction: true,
					bigIntLiteral: true,
					const: true,
					destructuring: true,
					dynamicImport: true,
					forOf: true,
					module: false, // Keep false for Gatsby compatibility
					optionalChaining: true,
					templateLiteral: true,
				}
			: {
					arrowFunction: false,
					bigIntLiteral: false,
					const: false,
					destructuring: false,
					dynamicImport: false,
					forOf: false,
					module: false,
					optionalChaining: false,
					templateLiteral: false,
				},
	},

	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(isModern ? createModernTerserConfig() : createLegacyTerserConfig())],
		splitChunks: isModern ? createModernSplitChunksConfig() : createLegacySplitChunksConfig(),

		// Runtime chunk optimization
		runtimeChunk: {
			name: "runtime",
		},

		// Module concatenation for better tree shaking (modern builds only)
		concatenateModules: isModern,

		// Better module IDs for caching
		moduleIds: "deterministic",
		chunkIds: "deterministic",
	},
});

// Development webpack configuration
const getDevelopmentConfig = () => ({
	target: ["web", "es2020"],

	resolve: {
		mainFields: ["browser", "module", "main"],
		extensions: [".mjs", ".js", ".jsx", ".json"],
	},

	optimization: {
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
});

// Utility function to determine build type
const getBuildType = () => {
	return process.env.GATSBY_MODERN_BUILD !== "false";
};

// Helper function to create build-specific configuration
const createBuildConfig = (stage) => {
	const isProduction = stage === "build-javascript";
	const isModern = getBuildType();

	if (isProduction) {
		return getProductionConfig(isModern);
	} else {
		return getDevelopmentConfig();
	}
};

module.exports = {
	getProductionConfig,
	getDevelopmentConfig,
	createModernTerserConfig,
	createLegacyTerserConfig,
	createModernSplitChunksConfig,
	createLegacySplitChunksConfig,
	getBuildType,
	createBuildConfig,
};
