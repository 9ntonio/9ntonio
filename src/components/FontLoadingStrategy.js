import { useEffect } from "react";

/**
 * Enhanced font loading strategy to prevent render-blocking and layout shifts
 * Uses optimized font loading with proper fallbacks
 */
export default function FontLoadingStrategy() {
	useEffect(() => {
		if (typeof window === "undefined") return;

		// Add font-loaded class immediately to prevent FOIT
		document.documentElement.classList.add("font-loaded");

		// Enhanced font loading with better error handling
		if ("fonts" in document) {
			// Check if fonts are already loaded
			if (document.fonts.check("1em Fredoka")) {
				return; // Fonts already loaded
			}

			// Load fonts with timeout
			const fontLoadTimeout = setTimeout(() => {
				console.warn("Font loading timeout - using fallback fonts");
				document.documentElement.classList.add("font-fallback");
			}, 2000); // 2 second timeout

			document.fonts.ready.then(() => {
				clearTimeout(fontLoadTimeout);
				console.log("✅ Fonts loaded successfully");
			}).catch((error) => {
				clearTimeout(fontLoadTimeout);
				console.warn("Font loading error:", error);
				document.documentElement.classList.add("font-fallback");
			});

			// Listen for font load events
			document.fonts.addEventListener('loadingdone', (event) => {
				clearTimeout(fontLoadTimeout);
				console.log(`✅ ${event.fontfaces.length} fonts loaded`);
			});

			document.fonts.addEventListener('loadingerror', (event) => {
				clearTimeout(fontLoadTimeout);
				console.warn("Font loading error event:", event);
				document.documentElement.classList.add("font-fallback");
			});
		}

		// Preload next critical resources after font loading
		const preloadCriticalResources = () => {
			// Preload critical images
			const criticalImages = [
				'/gusto.webp',
				'/google.webp'
			];

			criticalImages.forEach(src => {
				const link = document.createElement('link');
				link.rel = 'preload';
				link.as = 'image';
				link.href = src;
				document.head.appendChild(link);
			});
		};

		// Delay resource preloading to not interfere with font loading
		setTimeout(preloadCriticalResources, 1000);

	}, []);

	return null;
}
