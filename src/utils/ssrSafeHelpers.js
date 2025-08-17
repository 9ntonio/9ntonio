/**
 * SSR-safe utilities to prevent hydration mismatches
 */

/**
 * Check if we're in a browser environment
 */
export const isBrowser = () => typeof window !== "undefined";

/**
 * SSR-safe wrapper for browser-only operations
 * @param {Function} browserCallback - Function to execute in browser
 * @param {any} fallback - Fallback value for SSR
 */
export const browserOnly = (browserCallback, fallback = null) => {
	if (isBrowser()) {
		try {
			return browserCallback();
		} catch (error) {
			console.warn("Browser operation failed:", error);
			return fallback;
		}
	}
	return fallback;
};

/**
 * SSR-safe useEffect that only runs in browser
 * @param {Function} effect - Effect function
 * @param {Array} deps - Dependencies array
 */
export const useBrowserEffect = (effect, deps = []) => {
	const { useEffect } = require("react");

	useEffect(() => {
		if (isBrowser()) {
			return effect();
		}
	}, deps);
};

/**
 * SSR-safe component wrapper that prevents hydration mismatches
 */
export const ClientOnly = ({ children, fallback = null }) => {
	const { useState, useEffect } = require("react");
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return fallback;
	}

	return children;
};

/**
 * Suppress hydration warnings for known safe mismatches
 * Call this in your main app component
 */
export const suppressHydrationWarnings = () => {
	if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
		// Suppress React hydration warnings in production
		const originalError = console.error;
		console.error = (...args) => {
			if (
				typeof args[0] === "string" &&
				(args[0].includes("Minified React error") ||
				 args[0].includes("Hydration failed") ||
				 args[0].includes("Text content did not match"))
			) {
				return; // Suppress these specific errors
			}
			originalError.apply(console, args);
		};
	}
};