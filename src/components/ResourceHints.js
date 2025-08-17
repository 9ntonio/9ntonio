import React from "react";

/**
 * Enhanced Resource Hints Component
 * Adds DNS prefetch, preconnect, and preload hints to improve loading performance
 * Optimized for Core Web Vitals improvements
 */
const ResourceHints = () => {
	React.useEffect(() => {
		if (typeof document === "undefined") return;

		// Critical resource preloading for LCP improvement
		const preloadCriticalResources = () => {
			// Preload hero image (LCP candidate)
			const heroImageLink = document.createElement("link");
			heroImageLink.rel = "preload";
			heroImageLink.as = "image";
			heroImageLink.href = "/gusto.webp";
			heroImageLink.type = "image/webp";
			document.head.appendChild(heroImageLink);

			// Preload logo (above-the-fold)
			const logoLink = document.createElement("link");
			logoLink.rel = "preload";
			logoLink.as = "image";
			logoLink.href = "/logo-2.svg";
			logoLink.type = "image/svg+xml";
			document.head.appendChild(logoLink);
		};

		// DNS prefetch for external domains
		const dnsPrefetches = ["//fonts.googleapis.com", "//fonts.gstatic.com", "//www.google-analytics.com", "//www.googletagmanager.com", "//player.vimeo.com"];

		dnsPrefetches.forEach((href) => {
			const link = document.createElement("link");
			link.rel = "dns-prefetch";
			link.href = href;
			document.head.appendChild(link);
		});

		// Preconnect to critical origins
		const preconnects = [{ href: "https://fonts.googleapis.com" }, { href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }];

		preconnects.forEach(({ href, crossOrigin }) => {
			const link = document.createElement("link");
			link.rel = "preconnect";
			link.href = href;
			if (crossOrigin) {
				link.crossOrigin = crossOrigin;
			}
			document.head.appendChild(link);
		});

		// Preload critical resources after a short delay
		setTimeout(preloadCriticalResources, 100);
	}, []);

	return null;
};

export default ResourceHints;
