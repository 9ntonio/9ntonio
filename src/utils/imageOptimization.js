/**
 * Image optimization utilities for responsive images and cellular data savings
 */

// RESPONSIVE_BREAKPOINTS removed - using inline breakpoints in components

// Connection-based quality settings
export const CONNECTION_QUALITY_MAP = {
	"slow-2g": { quality: 45, formats: ["webp"] },
	"2g": { quality: 50, formats: ["webp"] },
	"3g": { quality: 65, formats: ["webp", "avif"] },
	"4g": { quality: 75, formats: ["avif", "webp", "auto"] },
};

// Data saver quality settings
export const DATA_SAVER_QUALITY = 40;

// generateResponsiveSizes removed - using inline implementation in useConnectionAwareImages hook

/**
 * Get optimal image settings based on network conditions
 */
export const getOptimalImageSettings = (connection = {}) => {
	const { effectiveType = "4g", saveData = false, downlink = 10 } = connection;

	// Data saver mode takes precedence
	if (saveData) {
		return {
			quality: DATA_SAVER_QUALITY,
			formats: ["webp"],
			loading: "lazy",
		};
	}

	// Use connection type or downlink speed to determine quality
	let connectionType = effectiveType;
	if (downlink < 1.5) connectionType = "2g";
	else if (downlink < 4) connectionType = "3g";
	else if (downlink >= 4) connectionType = "4g";

	const settings = CONNECTION_QUALITY_MAP[connectionType] || CONNECTION_QUALITY_MAP["4g"];

	return {
		...settings,
		loading: connectionType === "2g" || connectionType === "slow-2g" ? "lazy" : "auto",
	};
};

/**
 * Check if image should be preloaded based on connection and priority
 */
export const shouldPreloadImage = (connection = {}, priority = "low") => {
	const { effectiveType = "4g", saveData = false, downlink = 10 } = connection;

	// Never preload on data saver mode
	if (saveData) return false;

	// Never preload on very slow connections
	if (effectiveType === "slow-2g" || downlink < 1) return false;

	// Only preload high priority images on 2G
	if ((effectiveType === "2g" || downlink < 1.5) && priority !== "high") return false;

	// Preload medium+ priority on 3G+
	if ((effectiveType === "3g" || downlink < 4) && priority === "low") return false;

	return true;
};

/**
 * Critical image paths that should be preloaded on fast connections
 */
export const CRITICAL_IMAGES = ["/gusto.webp", "/logo-2.svg"];
