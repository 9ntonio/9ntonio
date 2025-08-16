import { useEffect } from "react";

export default function PerformanceMonitor() {
	useEffect(() => {
		if (typeof window !== "undefined" && "performance" in window) {
			// Log Core Web Vitals
			const observer = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (entry.entryType === "measure") {
						console.log(`${entry.name}: ${entry.duration}ms`);
					}
				}
			});

			observer.observe({ entryTypes: ["measure"] });

			// Measure key metrics
			window.addEventListener("load", () => {
				setTimeout(() => {
					const navigation = performance.getEntriesByType("navigation")[0];
					if (navigation) {
						console.log("Performance Metrics:", {
							"DOM Content Loaded": navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
							"Load Complete": navigation.loadEventEnd - navigation.loadEventStart,
							"First Paint": performance.getEntriesByName("first-paint")[0]?.startTime,
							"First Contentful Paint": performance.getEntriesByName("first-contentful-paint")[0]?.startTime,
						});
					}
				}, 0);
			});

			return () => observer.disconnect();
		}
	}, []);

	return null;
}
