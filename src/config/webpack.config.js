const TerserPlugin = require("terser-webpack-plugin");

/**
 * Centralized webpack configuration for better maintainability
 * Separates development and production optimizations
 */

// Terser configuration for production builds
const createTerserConfig = () => ({
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
      passes: 2,
      unsafe_arrows: true,
      unsafe_methods: true,
      unsafe_proto: true,
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
    },
  },
  extractComments: false,
  parallel: true,
});

// Split chunks configuration
const createSplitChunksConfig = () => ({
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

// Production webpack configuration
const getProductionConfig = () => ({
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(createTerserConfig())],
    splitChunks: createSplitChunksConfig(),
  },
});

// Development webpack configuration
const getDevelopmentConfig = () => ({
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

module.exports = {
  getProductionConfig,
  getDevelopmentConfig,
};
