import React, { useEffect, useCallback } from "react";
import { browserOnly } from "../utils/ssrSafeHelpers";

/**
 * Optimized resource preloading component
 * Batches DOM operations and prevents memory leaks
 */
export default function PreloadResources() {
	const createResourceHint = useCallback((rel, href, options = {}) => {
		const link = document.createElement("link");
		link.rel = rel;
		link.href = href;

		Object.entries(options).forEach(([key, value]) => {
			if (value !== undefined && value !== null) {
				if (key === "crossOrigin") {
					link.crossOrigin = value;
				} else {
					link[key] = value;
				}
			}
		});

		return link;
	}, []);

	const batchAppendToHead = useCallback((elements) => {
		const fragment = document.createDocumentFragment();
		elements.forEach((element) => fragment.appendChild(element));
		document.head.appendChild(fragment);
	}, []);

	useEffect(() => {
		if (typeof document === "undefined") return;

		const resourceHints = [];

		// Critical image preloads
		const criticalImages = ["/logo-2.svg"];
		criticalImages.forEach((src) => {
			resourceHints.push(
				createResourceHint("preload", src, {
					as: "image",
					importance: "high",
				}),
			);
		});

		// Critical font preloads
		const criticalFonts = ["https://fonts.gstatic.com/s/fredoka/v14/X7nP4R8wZKCVl-PGzj9pGlOqpKk.woff2"];
		criticalFonts.forEach((href) => {
			resourceHints.push(
				createResourceHint("preload", href, {
					as: "font",
					type: "font/woff2",
					crossOrigin: "anonymous",
					importance: "high",
				}),
			);
		});

		// DNS prefetches
		const dnsPrefetches = ["//fonts.googleapis.com", "//fonts.gstatic.com", "//www.google-analytics.com"];
		dnsPrefetches.forEach((domain) => {
			resourceHints.push(createResourceHint("dns-prefetch", domain));
		});

		// Preconnects
		const preconnects = [{ href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { href: "https://fonts.googleapis.com" }];
		preconnects.forEach(({ href, crossOrigin }) => {
			resourceHints.push(createResourceHint("preconnect", href, { crossOrigin }));
		});

		// Batch append all resource hints
		batchAppendToHead(resourceHints);

		// Font CSS loading with error handling
		const fontPreload = createResourceHint("preload", "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap", { as: "style" });

		fontPreload.onload = function () {
			this.onload = null; // Prevent memory leaks
			this.rel = "stylesheet";
		};

		fontPreload.onerror = function () {
			console.warn("Failed to load font CSS");
		};

		document.head.appendChild(fontPreload);

		// Noscript fallback
		const noscript = document.createElement("noscript");
		const fontFallback = createResourceHint("stylesheet", "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap");
		noscript.appendChild(fontFallback);
		document.head.appendChild(noscript);

		// Lazy load Vimeo resources with cleanup
		const lazyLoadVimeoResources = () => {
			const vimeoDomains = ["//vimeo.com", "//player.vimeo.com"];
			const vimeoHints = vimeoDomains.map((domain) => createResourceHint("dns-prefetch", domain));
			batchAppendToHead(vimeoHints);
		};

		const interactionEvents = ["mousedown", "touchstart", "keydown"];
		const loadVimeoOnce = () => {
			lazyLoadVimeoResources();
			cleanup();
		};

		const cleanup = () => {
			interactionEvents.forEach((event) => {
				document.removeEventListener(event, loadVimeoOnce, { passive: true });
			});
		};

		interactionEvents.forEach((event) => {
			document.addEventListener(event, loadVimeoOnce, { passive: true });
		});

		// Cleanup on unmount
		return cleanup;
	}, [createResourceHint, batchAppendToHead]);

	return null;
}
