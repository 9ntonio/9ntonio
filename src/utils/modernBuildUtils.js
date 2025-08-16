/**
 * Modern Build Utilities
 *
 * Utilities for handling modern JavaScript builds and differential serving
 */

/**
 * Determine if the current build is targeting modern browsers
 */
const isModernBuild = () => {
  return process.env.GATSBY_MODERN_BUILD !== "false";
};

/**
 * Get the appropriate script attributes for differential serving
 */
const getScriptAttributes = (isModern = isModernBuild()) => {
  if (isModern) {
    return {
      type: 'module',
      // Modern browsers will load these scripts
    };
  } else {
    return {
      noModule: true,
      // Legacy browsers will load these scripts
    };
  }
};

/**
 * Get browser targets based on build type
 */
const getBrowserTargets = (isModern = isModernBuild()) => {
  if (isModern) {
    return [
      'last 2 Chrome versions',
      'last 2 Firefox versions',
      'last 2 Safari versions',
      'last 2 Edge versions',
      'not dead',
      '> 0.5%',
      'supports es6-module',
      'supports es6-module-dynamic-import',
      'supports async-functions'
    ];
  } else {
    return [
      '> 0.25%',
      'not dead',
      'ie >= 11',
      'Chrome >= 60',
      'Firefox >= 60',
      'Safari >= 12',
      'Edge >= 79'
    ];
  }
};

/**
 * Get Terser options based on build type
 */
const getTerserOptions = (isModern = isModernBuild()) => {
  const baseOptions = {
    extractComments: false,
    parallel: true,
  };

  if (isModern) {
    return {
      ...baseOptions,
      terserOptions: {
        ecma: 2020,
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: true,
          pure_funcs: process.env.NODE_ENV === 'production'
            ? ['console.log', 'console.info', 'console.debug']
            : [],
          passes: 3,
          // Modern JavaScript optimizations
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
          hoist_vars: false,
          if_return: true,
          inline: 3,
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
          // Modern unsafe optimizations
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
          safari10: false,
          properties: {
            regex: /^_/,
          },
        },
        format: {
          comments: false,
          ecma: 2020,
          ascii_only: false,
          beautify: false,
          braces: false,
          semicolons: false,
        },
      },
    };
  } else {
    return {
      ...baseOptions,
      terserOptions: {
        ecma: 5,
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: true,
          pure_funcs: process.env.NODE_ENV === 'production'
            ? ['console.log', 'console.info', 'console.debug']
            : [],
          passes: 2,
          // Conservative optimizations for legacy browsers
          arrows: false,
          unsafe_arrows: false,
          unsafe_methods: false,
          unsafe_proto: false,
          unsafe_Function: false,
          unsafe_math: false,
          unsafe_regexp: false,
          toplevel: false,
        },
        mangle: {
          safari10: true,
          properties: {
            regex: /^_/,
          },
        },
        format: {
          comments: false,
          ascii_only: true,
          ecma: 5,
        },
      },
    };
  }
};

/**
 * Get split chunks configuration based on build type
 */
const getSplitChunksConfig = (isModern = isModernBuild()) => {
  if (isModern) {
    return {
      chunks: "all",
      minSize: 15000,
      maxSize: 200000,
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
    };
  } else {
    return {
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
    };
  }
};

/**
 * Get webpack output environment configuration
 */
const getOutputEnvironment = (isModern = isModernBuild()) => {
  if (isModern) {
    return {
      arrowFunction: true,
      bigIntLiteral: true,
      const: true,
      destructuring: true,
      dynamicImport: true,
      forOf: true,
      module: false, // Keep false for Gatsby compatibility
      optionalChaining: true,
      templateLiteral: true,
    };
  } else {
    return {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
      optionalChaining: false,
      templateLiteral: false,
    };
  }
};

/**
 * Log build configuration information
 */
const logBuildInfo = (isModern = isModernBuild()) => {
  const buildType = isModern ? 'modern' : 'legacy';
  const target = isModern ? 'es2020' : 'es5';

  console.log(`🔧 Configuring Webpack for ${buildType} build (${target})`);

  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 Build optimizations:`);
    console.log(`   • Target: ${target}`);
    console.log(`   • Module concatenation: ${isModern ? 'enabled' : 'disabled'}`);
    console.log(`   • Advanced optimizations: ${isModern ? 'enabled' : 'disabled'}`);
  }
};

module.exports = {
  isModernBuild,
  getScriptAttributes,
  getBrowserTargets,
  getTerserOptions,
  getSplitChunksConfig,
  getOutputEnvironment,
  logBuildInfo,
};
