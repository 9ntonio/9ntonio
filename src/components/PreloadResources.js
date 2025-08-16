import React, { useEffect } from "react";

export default function PreloadResources() {
	useEffect(() => {
		if (typeof document !== "undefined") {
			// Preload critical above-the-fold images
			const criticalImages = [
				"/logo-2.svg",
				"/gusto.webp"
			];

			criticalImages.forEach((src) => {
				const link = document.createElement("link");
				link.rel = "preload";
				link.href = src;
				link.as = "image";
				document.head.appendChild(link);
			});

			// Preload critical font files directly (not CSS)
			const criticalFonts = [
				"https://fonts.gstatic.com/s/fredoka/v14/X7nP4R8wZKCVl-PGzj9pGlOqpKk.woff2", // Fredoka 400
				"https://fonts.gstatic.com/s/fredoka/v14/X7nO4R8wZKCVl-PGzj9pGlOqpKkFcw.woff2" // Fredoka 600
			];

			criticalFonts.forEach((href) => {
				const link = document.createElement("link");
				link.rel = "preload";
				link.href = href;
				link.as = "font";
				link.type = "font/woff2";
				link.crossOrigin = "anonymous";
				document.head.appendChild(link);
			});

			// Load font CSS with optimized strategy
			const fontPreload = document.createElement("link");
			fontPreload.rel = "preload";
			fontPreload.href = "https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap";
			fontPreload.as = "style";
			fontPreload.onload = function () {
				this.onload = null;
				this.rel = "stylesheet";
			};
			document.head.appendChild(fontPreload);

			// Noscript fallback
			const noscript = document.createElement("noscript");
			const fontFallback = document.createElement("link");
			fontFallback.rel = "stylesheet";
			fontFallback.href = "https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap";
			noscript.appendChild(fontFallback);
			document.head.appendChild(noscript);

			// DNS prefetch for external domains (only when needed)
			const dnsPrefetches = [
				"//fonts.googleapis.com",
				"//fonts.gstatic.com",
				"//www.google-analytics.com"
			];

			dnsPrefetches.forEach((domain) => {
				const link = document.createElement("link");
				link.rel = "dns-prefetch";
				link.href = domain;
				document.head.appendChild(link);
			});

			// Preconnect to critical origins
			const preconnects = [
				{ href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
				{ href: "https://fonts.googleapis.com", crossOrigin: false }
			];

			preconnects.forEach(({ href, crossOrigin }) => {
				const link = document.createElement("link");
				link.rel = "preconnect";
				link.href = href;
				if (crossOrigin) {
					link.crossOrigin = "anonymous";
				}
				document.head.appendChild(link);
			});

			// Lazy load Vimeo resources only when video modal might be opened
			const lazyLoadVimeoResources = () => {
				const vimeoDomains = ["//vimeo.com", "//player.vimeo.com"];
				vimeoDomains.forEach((domain) => {
					const link = document.createElement("link");
					link.rel = "dns-prefetch";
					link.href = domain;
					document.head.appendChild(link);
				});
			};

			// Delay Vimeo resource loading until user interaction
			const interactionEvents = ['mousedown', 'touchstart', 'keydown'];
			const loadVimeoOnce = () => {
				lazyLoadVimeoResources();
				interactionEvents.forEach(event => {
					document.removeEventListener(event, loadVimeoOnce, { passive: true });
				});
			};

			interactionEvents.forEach(event => {
				document.addEventListener(event, loadVimeoOnce, { passive: true });
			});
		}
	}, []);

	return null;
}
