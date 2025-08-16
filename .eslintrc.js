module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:gatsby/recommended",
		"prettier", // Must be last to override other configs
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "react-hooks", "jsx-a11y", "gatsby"],
	rules: {
		// React specific rules
		"react/prop-types": "warn",
		"react/react-in-jsx-scope": "off", // Not needed in React 17+
		"react/jsx-uses-react": "off", // Not needed in React 17+
		"react/jsx-uses-vars": "error",

		// React Hooks rules
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",

		// General JavaScript rules
		"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"no-console": "warn",
		"prefer-const": "error",
		"no-var": "error",

		// Accessibility rules
		"jsx-a11y/anchor-is-valid": "warn",
		"jsx-a11y/alt-text": "error",

		// Gatsby specific rules
		"gatsby/no-anonymous-exports-page-templates": "warn",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	ignorePatterns: ["public/", ".cache/", "node_modules/", "static/unknown-pleasures/assets/"],
};
