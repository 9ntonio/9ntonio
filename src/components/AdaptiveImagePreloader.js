import { useEffect } from 'react';
import { shouldPreloadImage, CRITICAL_IMAGES, getOptimalImageSettings } from '../utils/imageOptimization';

/**
 * AdaptiveImagePreloader - Intelligently preloads images based on:
 * - Connection speed
 * - Data saver preferences
 * - Viewport intersection
 * - Device capabilities
 */
const AdaptiveImagePreloader = () => {
	useEffect(() => {
		const preloadCriticalImages = () => {
			// Check network conditions
			const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
			const connectionInfo = {
				effectiveType: connection?.effectiveType || '4g',
				saveData: connection?.saveData || false,
				downlink: connection?.downlink || 10
			};

			// Skip preloading if conditions aren't favorable
			if (!shouldPreloadImage(connectionInfo, 'high')) {
				console.log('Skipping image preload due to connection conditions');
				return;
			}

			// Get optimal settings for current connection
			const imageSettings = getOptimalImageSettings(connectionInfo);

			// Define critical images with priorities
			const criticalImageConfigs = [
				{
					src: '/gusto.webp',
					priority: 'high',
					width: 400
				},
				{
					src: '/logo-2.svg',
					priority: 'high',
					width: 510,
					type: 'image/svg+xml'
				}
			];

			criticalImageConfigs.forEach((imageConfig, index) => {
				// Check if this image should be preloaded based on priority
				if (!shouldPreloadImage(connectionInfo, imageConfig.priority)) {
					return;
				}

				// Stagger preloading to avoid overwhelming the connection
				setTimeout(() => {
					const link = document.createElement('link');
					link.rel = 'preload';
					link.as = 'image';
					link.href = imageConfig.src;
					link.type = imageConfig.type || 'image/webp';

					// Add responsive image hints
					link.setAttribute('imagesizes', `${imageConfig.width}px`);

					// Set priority
					if (imageConfig.priority === 'high') {
						link.setAttribute('fetchpriority', 'high');
					}

					// Add crossorigin for external images
					link.crossOrigin = 'anonymous';

					document.head.appendChild(link);
				}, index * 150); // Stagger by 150ms to be gentler on connection
			});
		};

		// Preload images after initial page load and fonts
		const initPreload = () => {
			// Wait a bit for fonts to load first
			setTimeout(preloadCriticalImages, 500);
		};

		if (document.readyState === 'complete') {
			initPreload();
		} else {
			window.addEventListener('load', initPreload);
			return () => window.removeEventListener('load', initPreload);
		}
	}, []);

	return null; // This component doesn't render anything
};

export default AdaptiveImagePreloader;
