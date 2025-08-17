import { useEffect, useRef } from "react";

// Performance thresholds based on Core Web Vitals
const PERFORMANCE_THRESHOLDS = {
	CLS_GOOD: 0.1,
	LCP_GOOD: 2500, // milliseconds
};

// Custom hook for CLS monitoring
const useCLSMonitor = () => {
	const clsDataRef = useRef({ value: 0, entries: [] });

	useEffect(() => {
		if (typeof window === "undefined" || !("PerformanceObserver" in window)) return;

		const observer = new PerformanceObserver((list) => {
			for (const entry of list.getEntries()) {
				if (entry.entryType === "layout-shift" && !entry.hadRecentInput) {
					clsDataRef.current.value += entry.value;
					clsDataRef.current.entries.push(entry);

					const logData = {
						value: entry.value,
						cumulativeValue: clsDataRef.current.value,
						sources: entry.sources?.map((source) => ({
							element: source.node?.tagName || "unknown",
							className: source.node?.className || "",
							id: source.node?.id || "",
							previousRect: source.previousRect,
							currentRect: source.currentRect,
						})),
					};

					console.log("Layout Shift detected:", logData);

					if (clsDataRef.current.value > PERFORMANCE_THRESHOLDS.CLS_GOOD) {
						console.warn(`⚠️ CLS threshold exceeded: ${clsDataRef.current.value.toFixed(4)}`);
					}
				}
			}
		});

		observer.observe({ entryTypes: ["layout-shift"] });

		const reportFinalCLS = () => {
			console.log(`Final CLS score: ${clsDataRef.current.value.toFixed(4)}`, {
				totalShifts: clsDataRef.current.entries.length,
				entries: clsDataRef.current.entries,
			});
		};

		window.addEventListener("beforeunload", reportFinalCLS);

		return () => {
			observer.disconnect();
			window.removeEventListener("beforeunload", reportFinalCLS);
		};
	}, []);
};

// Custom hook for LCP monitoring
const useLCPMonitor = () => {
	useEffect(() => {
		if (typeof window === "undefined" || !("PerformanceObserver" in window)) return;

		const observer = new PerformanceObserver((list) => {
			for (const entry of list.getEntries()) {
				const logData = {
					element: entry.element?.tagName || "unknown",
					size: entry.size,
					startTime: entry.startTime,
					url: entry.url,
					loadTime: `${entry.startTime.toFixed(2)}ms`,
				};

				console.log("LCP detected:", logData);

				if (entry.startTime > PERFORMANCE_THRESHOLDS.LCP_GOOD) {
					console.warn(`⚠️ LCP threshold exceeded: ${entry.startTime.toFixed(2)}ms`);
				}
			}
		});

		observer.observe({ entryTypes: ["largest-contentful-paint"] });

		return () => observer.disconnect();
	}, []);
};

// Custom hook for font loading monitoring
const useFontLoadingMonitor = () => {
	useEffect(() => {
		if (typeof window === "undefined" || !("fonts" in document)) return;

		const handleFontLoadingDone = (event) => {
			console.log("Font loading completed:", {
				loadedFonts: event.fontfaces.length,
				fonts: event.fontfaces.map((font) => ({
					family: font.family,
					status: font.status,
					weight: font.weight,
					style: font.style,
				})),
			});
		};

		const handleFontLoadingError = (event) => {
			console.error("Font loading error:", event);
		};

		document.fonts.addEventListener("loadingdone", handleFontLoadingDone);
		document.fonts.addEventListener("loadingerror", handleFontLoadingError);

		return () => {
			document.fonts.removeEventListener("loadingdone", handleFontLoadingDone);
			document.fonts.removeEventListener("loadingerror", handleFontLoadingError);
		};
	}, []);
};

export default function LayoutStabilityMonitor() {
	useCLSMonitor();
	useLCPMonitor();
	useFontLoadingMonitor();

	return null;
}
