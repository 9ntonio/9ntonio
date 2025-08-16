import { useEffect } from "react";

export default function LayoutStabilityMonitor() {
	useEffect(() => {
		if (typeof window !== "undefined" && "PerformanceObserver" in window) {
			// Monitor Cumulative Layout Shift (CLS)
			const observer = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (entry.entryType === "layout-shift" && !entry.hadRecentInput) {
						console.log("Layout Shift detected:", {
							value: entry.value,
							sources: entry.sources?.map((source) => ({
								element: source.node?.tagName || "unknown",
								className: source.node?.className || "",
								previousRect: source.previousRect,
								currentRect: source.currentRect,
							})),
						});
					}
				}
			});

			observer.observe({ entryTypes: ["layout-shift"] });

			// Monitor Largest Contentful Paint (LCP)
			const lcpObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					console.log("LCP detected:", {
						element: entry.element?.tagName || "unknown",
						size: entry.size,
						startTime: entry.startTime,
						url: entry.url,
					});
				}
			});

			lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

			return () => {
				observer.disconnect();
				lcpObserver.disconnect();
			};
		}
	}, []);

	return null;
}
