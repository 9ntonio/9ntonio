import { useEffect, useCallback } from "react";

const PERFORMANCE_METRICS = {
	MEASURE: "measure",
	NAVIGATION: "navigation",
	FIRST_PAINT: "first-paint",
	FIRST_CONTENTFUL_PAINT: "first-contentful-paint",
};

export default function PerformanceMonitor() {
	const logMetrics = useCallback((metrics) => {
		if (process.env.NODE_ENV === "development") {
			console.group("🚀 Performance Metrics");
			Object.entries(metrics).forEach(([key, value]) => {
				console.log(`${key}: ${typeof value === 'number' ? `${value.toFixed(2)}ms` : value}`);
			});
			console.groupEnd();
		}
	}, []);

	const handleLoad = useCallback(() => {
		// Use requestIdleCallback for better performance
		const measurePerformance = () => {
			try {
				const navigation = performance.getEntriesByType(PERFORMANCE_METRICS.NAVIGATION)[0];
				if (!navigation) return;

				const metrics = {
					"DOM Content Loaded": Math.max(0, navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
					"Load Complete": Math.max(0, navigation.loadEventEnd - navigation.loadEventStart),
					"First Paint": performance.getEntriesByName(PERFORMANCE_METRICS.FIRST_PAINT)[0]?.startTime || 0,
					"First Contentful Paint": performance.getEntriesByName(PERFORMANCE_METRICS.FIRST_CONTENTFUL_PAINT)[0]?.startTime || 0,
					"Total Load Time": Math.max(0, navigation.loadEventEnd - navigation.navigationStart),
				};

				// Filter out zero/invalid values
				const validMetrics = Object.fromEntries(
					Object.entries(metrics).filter(([, value]) => value > 0)
				);

				if (Object.keys(validMetrics).length > 0) {
					logMetrics(validMetrics);
				}
			} catch (error) {
				if (process.env.NODE_ENV === 'development') {
					console.warn("Performance measurement failed:", error);
				}
			}
		};

		if (window.requestIdleCallback) {
			window.requestIdleCallback(measurePerformance, { timeout: 5000 });
		} else {
			setTimeout(measurePerformance, 100);
		}
	}, [logMetrics]);

	useEffect(() => {
		if (typeof window === "undefined" || !("performance" in window)) {
			return;
		}

		let observer = null;

		try {
			// Only create observer if PerformanceObserver is supported
			if (window.PerformanceObserver) {
				observer = new PerformanceObserver((list) => {
					for (const entry of list.getEntries()) {
						if (entry.entryType === PERFORMANCE_METRICS.MEASURE) {
							logMetrics({ [entry.name]: entry.duration });
						}
					}
				});

				observer.observe({ entryTypes: [PERFORMANCE_METRICS.MEASURE] });
			}

			// Add load event listener
			window.addEventListener("load", handleLoad);

			return () => {
				observer?.disconnect();
				window.removeEventListener("load", handleLoad);
			};
		} catch (error) {
			console.warn("PerformanceMonitor initialization failed:", error);
			return () => {
				window.removeEventListener("load", handleLoad);
			};
		}
	}, [handleLoad, logMetrics]);

	return null;
}
