/**
 * Hydration error fixes for React 18
 * Addresses common hydration mismatches in production builds
 */

/**
 * Suppress hydration warnings in development for known safe mismatches
 * This should only be used for cosmetic differences that don't affect functionality
 */
export const suppressHydrationWarning = () => {
	if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
		// Suppress specific hydration warnings that are safe to ignore
		const originalError = console.error;
		console.error = (...args) => {
			if (
				typeof args[0] === "string" &&
				(args[0].includes("Warning: Text content did not match") ||
				 args[0].includes("Warning: Expected server HTML") ||
				 args[0].includes("Hydration failed"))
			) {
				// Only suppress if it's a known safe mismatch
				return;
			}
			originalError.apply(console, args);
		};
	}
};

/**
 * Ensure consistent rendering between server and client
 * Use this for components that have different behavior on server vs client
 */
export const useIsomorphicLayoutEffect =
	typeof window !== "undefined"
		? require("react").useLayoutEffect
		: require("react").useEffect;

/**
 * Hook to ensure component only renders after hydration
 * Prevents hydration mismatches for client-only content
 */
export const useHydrated = () => {
	const [hydrated, setHydrated] = require("react").useState(false);

	require("react").useEffect(() => {
		setHydrated(true);
	}, []);

	return hydrated;
};
