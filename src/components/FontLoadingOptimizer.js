import React, { useEffect } from "react";

/**
 * FontLoadingOptimizer component
 * Optimizes font loading by detecting when fonts are loaded and applying appropriate classes
 * Prevents FOIT (Flash of Invisible Text) and FOUT (Flash of Unstyled Text)
 */
const FontLoadingOptimizer = () => {
	useEffect(() => {
		// Check if Font Loading API is supported
		if ("fonts" in document) {
			// Add font-loading class initially
			document.documentElement.classList.add("font-loading");

			// Load critical fonts
			const loadFonts = async () => {
				try {
					// Load the most critical font weights first
					await Promise.all([document.fonts.load("400 1em Fredoka"), document.fonts.load("500 1em Fredoka")]);

					// Remove loading class and add loaded class
					document.documentElement.classList.remove("font-loading");
					document.documentElement.classList.add("font-loaded");

					// Preload additional weights in the background
					setTimeout(() => {
						Promise.all([document.fonts.load("300 1em Fredoka"), document.fonts.load("600 1em Fredoka"), document.fonts.load("700 1em Fredoka")]).catch((error) => {
							console.warn("Additional font weights failed to load:", error);
						});
					}, 100);
				} catch (error) {
					console.warn("Font loading failed, using fallbacks:", error);
					// Still remove loading class to show fallback fonts
					document.documentElement.classList.remove("font-loading");
					document.documentElement.classList.add("font-fallback");
				}
			};

			loadFonts();

			// Set a timeout fallback in case font loading takes too long
			const fallbackTimeout = setTimeout(() => {
				if (document.documentElement.classList.contains("font-loading")) {
					document.documentElement.classList.remove("font-loading");
					document.documentElement.classList.add("font-timeout");
				}
			}, 3000); // 3 second timeout

			return () => {
				clearTimeout(fallbackTimeout);
			};
		} else {
			// Fallback for browsers without Font Loading API
			document.documentElement.classList.add("font-no-api");
		}
	}, []);

	return null; // This component doesn't render anything
};

export default FontLoadingOptimizer;
