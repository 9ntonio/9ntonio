import React, { useEffect } from "react";

export default function PreloadResources() {
	useEffect(() => {
		if (typeof document !== "undefined") {
			// Preload critical fonts
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

			// Note: Logo preload removed to avoid unused preload warning
			// The logo loads quickly enough without preloading

			// DNS prefetch for external domains
			const dnsPrefetches = ["//fonts.googleapis.com", "//vimeo.com", "//player.vimeo.com"];

			dnsPrefetches.forEach((domain) => {
				const link = document.createElement("link");
				link.rel = "dns-prefetch";
				link.href = domain;
				document.head.appendChild(link);
			});

			// Preconnect to critical origins
			const preconnect = document.createElement("link");
			preconnect.rel = "preconnect";
			preconnect.href = "https://fonts.gstatic.com";
			preconnect.crossOrigin = "anonymous";
			document.head.appendChild(preconnect);
		}
	}, []);

	return null;
}
