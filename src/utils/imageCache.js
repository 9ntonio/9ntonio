/**
 * Image caching utilities for better performance and cellular data savings
 */

// Cache configuration for different image types
export const IMAGE_CACHE_CONFIG = {
	// Critical images - cache aggressively
	critical: {
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		maxEntries: 10,
		strategy: "CacheFirst",
	},
	// Regular images - cache with network fallback
	regular: {
		maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
		maxEntries: 50,
		strategy: "StaleWhileRevalidate",
	},
	// Low priority images - cache only if space available
	lowPriority: {
		maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
		maxEntries: 20,
		strategy: "NetworkFirst",
	},
};

/**
 * Check if image should be cached based on connection and size
 */
export const shouldCacheImage = (imageUrl, connectionInfo = {}) => {
	const { saveData = false, effectiveType = "4g", downlink = 10 } = connectionInfo;

	// Always cache critical images
	if (imageUrl.includes("logo") || imageUrl.includes("gusto")) {
		return true;
	}

	// Don't cache large images on slow connections
	if ((effectiveType === "slow-2g" || effectiveType === "2g" || downlink < 1.5) && !saveData) {
		return false;
	}

	// Cache selectively on data saver mode
	if (saveData) {
		return imageUrl.includes("logo") || imageUrl.includes("favicon");
	}

	return true;
};

/**
 * Get cache strategy based on image priority and connection
 */
export const getCacheStrategy = (imageUrl, connectionInfo = {}) => {
	const { saveData = false, effectiveType = "4g" } = connectionInfo;

	// Critical images
	if (imageUrl.includes("logo") || imageUrl.includes("gusto")) {
		return IMAGE_CACHE_CONFIG.critical;
	}

	// Low priority on slow connections
	if (effectiveType === "slow-2g" || effectiveType === "2g" || saveData) {
		return IMAGE_CACHE_CONFIG.lowPriority;
	}

	// Regular caching for most images
	return IMAGE_CACHE_CONFIG.regular;
};

/**
 * Preload and cache critical images
 */
export const preloadAndCacheImages = async (imageUrls, connectionInfo = {}) => {
	if (!("caches" in window)) {
		console.log("Cache API not supported");
		return;
	}

	try {
		const cache = await caches.open("images-v1");

		for (const imageUrl of imageUrls) {
			if (shouldCacheImage(imageUrl, connectionInfo)) {
				try {
					// Check if already cached
					const cachedResponse = await cache.match(imageUrl);
					if (!cachedResponse) {
						// Fetch and cache
						const response = await fetch(imageUrl);
						if (response.ok) {
							await cache.put(imageUrl, response.clone());
						}
					}
				} catch (error) {
					console.warn(`Failed to cache image: ${imageUrl}`, error);
				}
			}
		}
	} catch (error) {
		console.warn("Failed to access cache:", error);
	}
};

/**
 * Clean up old cached images based on connection
 */
export const cleanupImageCache = async (connectionInfo = {}) => {
	if (!("caches" in window)) return;

	const { saveData = false, effectiveType = "4g" } = connectionInfo;

	// More aggressive cleanup on slow connections or data saver mode
	if (saveData || effectiveType === "slow-2g" || effectiveType === "2g") {
		try {
			const cache = await caches.open("images-v1");
			const requests = await cache.keys();

			// Keep only critical images
			for (const request of requests) {
				if (!request.url.includes("logo") && !request.url.includes("favicon")) {
					await cache.delete(request);
				}
			}
		} catch (error) {
			console.warn("Failed to cleanup cache:", error);
		}
	}
};

/**
 * Get cached image or fetch with appropriate quality
 */
export const getCachedOrFetchImage = async (imageUrl, quality = 75, connectionInfo = {}) => {
	if (!("caches" in window)) {
		return fetch(imageUrl);
	}

	try {
		const cache = await caches.open("images-v1");
		const cachedResponse = await cache.match(imageUrl);

		if (cachedResponse) {
			return cachedResponse;
		}

		// Fetch with appropriate quality based on connection
		const { saveData = false, effectiveType = "4g" } = connectionInfo;
		let adjustedQuality = quality;

		if (saveData) adjustedQuality = Math.min(quality, 50);
		else if (effectiveType === "2g") adjustedQuality = Math.min(quality, 55);
		else if (effectiveType === "3g") adjustedQuality = Math.min(quality, 65);

		// For now, just fetch the original (Gatsby handles quality optimization)
		const response = await fetch(imageUrl);

		if (response.ok && shouldCacheImage(imageUrl, connectionInfo)) {
			cache.put(imageUrl, response.clone());
		}

		return response;
	} catch (error) {
		console.warn("Cache operation failed, falling back to network:", error);
		return fetch(imageUrl);
	}
};
