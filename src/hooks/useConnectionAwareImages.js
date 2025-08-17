import { useState, useEffect, useCallback } from 'react';
import { getOptimalImageSettings, shouldPreloadImage } from '../utils/imageOptimization';
import { cleanupImageCache } from '../utils/imageCache';

/**
 * Hook for connection-aware image loading and optimization
 */
export const useConnectionAwareImages = () => {
	const [connectionInfo, setConnectionInfo] = useState({
		effectiveType: '4g',
		saveData: false,
		downlink: 10,
		rtt: 100
	});

	const [imageSettings, setImageSettings] = useState({
		quality: 75,
		formats: ['avif', 'webp', 'auto'],
		loading: 'auto'
	});

	// Update connection info
	const updateConnectionInfo = useCallback(() => {
		if ('connection' in navigator) {
			const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

			const newConnectionInfo = {
				effectiveType: connection.effectiveType || '4g',
				saveData: connection.saveData || false,
				downlink: connection.downlink || 10,
				rtt: connection.rtt || 100
			};

			setConnectionInfo(newConnectionInfo);

			// Update image settings based on new connection
			const newImageSettings = getOptimalImageSettings(newConnectionInfo);
			setImageSettings(newImageSettings);

			// Cleanup cache if connection got worse
			if (newConnectionInfo.saveData || newConnectionInfo.effectiveType === '2g') {
				cleanupImageCache(newConnectionInfo);
			}
		}
	}, []);

	useEffect(() => {
		updateConnectionInfo();

		if ('connection' in navigator) {
			const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
			connection.addEventListener('change', updateConnectionInfo);

			return () => {
				connection.removeEventListener('change', updateConnectionInfo);
			};
		}
	}, [updateConnectionInfo]);

	// Get loading strategy for specific image
	const getLoadingStrategy = useCallback((priority = 'medium') => {
		const { effectiveType, saveData, downlink } = connectionInfo;

		// Force lazy loading on slow connections unless high priority
		if ((effectiveType === 'slow-2g' || effectiveType === '2g' || downlink < 1.5) && priority !== 'high') {
			return 'lazy';
		}

		// Eager loading only for high priority on good connections
		if (priority === 'high' && effectiveType === '4g' && downlink > 4) {
			return 'eager';
		}

		return 'lazy';
	}, [connectionInfo]);

	// Check if image should be preloaded
	const shouldPreload = useCallback((priority = 'medium') => {
		return shouldPreloadImage(connectionInfo, priority);
	}, [connectionInfo]);

	// Get responsive sizes based on connection
	const getResponsiveSizes = useCallback((maxWidth = 400, layout = 'constrained') => {
		const { effectiveType, saveData } = connectionInfo;

		// Smaller sizes for slow connections
		if (saveData || effectiveType === 'slow-2g' || effectiveType === '2g') {
			const reducedWidth = Math.floor(maxWidth * 0.8);
			return `(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 25vw, ${reducedWidth}px`;
		}

		// Standard responsive sizes
		switch (layout) {
			case 'hero':
				return `(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, ${maxWidth}px`;
			case 'card':
				return `(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, ${maxWidth}px`;
			default:
				return `(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, ${maxWidth}px`;
		}
	}, [connectionInfo]);

	// Connection quality indicator
	const getConnectionQuality = useCallback(() => {
		const { effectiveType, downlink, saveData } = connectionInfo;

		if (saveData) return 'data-saver';
		if (effectiveType === 'slow-2g' || downlink < 0.5) return 'very-slow';
		if (effectiveType === '2g' || downlink < 1.5) return 'slow';
		if (effectiveType === '3g' || downlink < 4) return 'medium';
		return 'fast';
	}, [connectionInfo]);

	return {
		connectionInfo,
		imageSettings,
		getLoadingStrategy,
		shouldPreload,
		getResponsiveSizes,
		getConnectionQuality,
		isSlowConnection: connectionInfo.effectiveType === '2g' || connectionInfo.effectiveType === 'slow-2g' || connectionInfo.downlink < 1.5,
		isDataSaverMode: connectionInfo.saveData
	};
};
