import { useEffect } from "react";
import { useConnectionAwareImages } from "../hooks/useConnectionAwareImages";

/**
 * ConnectionAwareImageLoader - Monitors connection and adjusts image loading behavior
 * This component runs at runtime to optimize image loading based on current connection
 */
const ConnectionAwareImageLoader = () => {
	const { connectionInfo, isSlowConnection, isDataSaverMode, getConnectionQuality } = useConnectionAwareImages();

	useEffect(() => {
		// Add connection quality class to body for CSS-based optimizations
		const connectionQuality = getConnectionQuality();
		document.body.classList.remove("connection-fast", "connection-medium", "connection-slow", "connection-very-slow", "connection-data-saver");
		document.body.classList.add(`connection-${connectionQuality}`);

		// Set CSS custom properties for responsive image optimization
		document.documentElement.style.setProperty("--connection-quality", connectionQuality);
		document.documentElement.style.setProperty("--image-quality", connectionInfo.saveData ? "50" : "70");

		// Disable image loading on very slow connections
		if (isSlowConnection && isDataSaverMode) {
			document.documentElement.style.setProperty("--disable-non-critical-images", "1");
		} else {
			document.documentElement.style.setProperty("--disable-non-critical-images", "0");
		}

		// Log connection info for debugging
		if (process.env.NODE_ENV === "development") {
			console.log("Connection Info:", {
				effectiveType: connectionInfo.effectiveType,
				downlink: connectionInfo.downlink,
				saveData: connectionInfo.saveData,
				quality: connectionQuality,
			});
		}
	}, [connectionInfo, isSlowConnection, isDataSaverMode, getConnectionQuality]);

	useEffect(() => {
		// Lazy load images based on connection
		const images = document.querySelectorAll('img[loading="lazy"]');

		if (isSlowConnection) {
			// Increase intersection threshold for slow connections
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const img = entry.target;
							// Only load if image is closer to viewport on slow connections
							if (entry.intersectionRatio > 0.1) {
								img.loading = "eager";
								observer.unobserve(img);
							}
						}
					});
				},
				{
					rootMargin: "20px", // Smaller margin for slow connections
					threshold: 0.1,
				},
			);

			images.forEach((img) => observer.observe(img));

			return () => observer.disconnect();
		}
	}, [isSlowConnection]);

	return null; // This component doesn't render anything
};

export default ConnectionAwareImageLoader;
