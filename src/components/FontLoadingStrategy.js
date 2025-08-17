import { useEffect } from "react";

/**
 * Enhanced font loading strategy to prevent render-blocking and layout shifts
 * Uses optimized font loading with proper fallbacks and CLS prevention
 */
export default function FontLoadingStrategy() {
	useEffect(() => {
		if (typeof window === "undefined") return;

		// Start with fonts-loading state to prevent layout shifts
		document.documentElement.classList.add("fonts-loading");
		document.documentElement.classList.remove("fonts-loaded");

		// Enhanced font loading with better error handling
		if ("fonts" in document) {
			// Check if fonts are already loaded
			if (document.fonts.check("1em Fredoka")) {
				document.documentElement.classList.remove("fonts-loading");
				document.documentElement.classList.add("fonts-loaded");
				return; // Fonts already loaded
			}

			// Load fonts with timeout
			const fontLoadTimeout = setTimeout(() => {
				console.warn("Font loading timeout - using fallback fonts");
				document.documentElement.classList.remove("fonts-loading");
				document.documentElement.classList.add("font-fallback");
			}, 1500); // Reduced timeout for better UX

			// Use font loading API for better control
			const loadFonts = async () => {
				try {
					// Load specific font weights we use
					await Promise.all([
						document.fonts.load("400 1em Fredoka"),
						document.fonts.load("600 1em Fredoka"),
					]);

					clearTimeout(fontLoadTimeout);
					document.documentElement.classList.remove("fonts-loading");
					document.documentElement.classList.add("fonts-loaded");
					console.log("✅ Fonts loaded successfully");
				} catch (error) {
					clearTimeout(fontLoadTimeout);
					document.documentElement.classList.remove("fonts-loading");
					document.documentElement.classList.add("font-fallback");
					console.warn("Font loading error:", error);
				}
			};

			loadFonts();

			// Fallback using fonts.ready
			document.fonts.ready
				.then(() => {
					if (!document.documentElement.classList.contains("fonts-loaded")) {
						clearTimeout(fontLoadTimeout);
						document.documentElement.classList.remove("fonts-loading");
						document.documentElement.classList.add("fonts-loaded");
					}
				})
				.catch((error) => {
					clearTimeout(fontLoadTimeout);
					document.documentElement.classList.remove("fonts-loading");
					document.documentElement.classList.add("font-fallback");
					console.warn("Font loading error:", error);
				});
		} else {
			// Fallback for browsers without Font Loading API
			setTimeout(() => {
				document.documentElement.classList.remove("fonts-loading");
				document.documentElement.classList.add("fonts-loaded");
			}, 1000);
		}

		// Preload next critical resources after font loading
		const preloadCriticalResources = () => {
			// Preload critical images with proper priorities
			const criticalImages = [
				{ src: "/gusto.webp", priority: "high" },
				{ src: "/google.webp", priority: "low" },
			];

			criticalImages.forEach(({ src, priority }) => {
				const link = document.createElement("link");
				link.rel = "preload";
				link.as = "image";
				link.href = src;
				link.fetchPriority = priority;
				document.head.appendChild(link);
			});
		};

		// Delay resource preloading to not interfere with font loading
		setTimeout(preloadCriticalResources, 800);
	}, []);

	return null;
}
