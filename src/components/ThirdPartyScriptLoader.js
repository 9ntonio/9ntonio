import React, { useEffect, useState } from "react";

/**
 * Component to handle delayed loading of third-party scripts
 * Improves performance by loading non-critical scripts after user interaction
 */
export default function ThirdPartyScriptLoader() {
	const [hasUserInteracted, setHasUserInteracted] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		// Track user interaction to delay third-party script loading
		const handleUserInteraction = () => {
			setHasUserInteracted(true);
		};

		// Listen for various user interaction events
		const interactionEvents = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];

		const addInteractionListeners = () => {
			interactionEvents.forEach((event) => {
				document.addEventListener(event, handleUserInteraction, {
					passive: true,
					once: true,
				});
			});
		};

		// Add listeners immediately
		addInteractionListeners();

		// Fallback: load after 5 seconds if no interaction (increased delay)
		const fallbackTimer = setTimeout(() => {
			setHasUserInteracted(true);
		}, 5000);

		return () => {
			clearTimeout(fallbackTimer);
			interactionEvents.forEach((event) => {
				document.removeEventListener(event, handleUserInteraction);
			});
		};
	}, []);

	useEffect(() => {
		if (!hasUserInteracted || typeof window === "undefined") return;

		// Load Google Analytics after user interaction
		if (window.gtag) {
			// Send initial page view after GA is loaded
			window.gtag("config", "G-640WERC942", {
				page_title: document.title,
				page_location: window.location.href,
			});
		}

		// Preconnect to additional third-party domains after interaction
		const additionalPreconnects = ["https://www.google-analytics.com", "https://www.googletagmanager.com"];

		additionalPreconnects.forEach((href) => {
			const link = document.createElement("link");
			link.rel = "preconnect";
			link.href = href;
			document.head.appendChild(link);
		});
	}, [hasUserInteracted]);

	return null;
}
