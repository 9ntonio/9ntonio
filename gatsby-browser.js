// Critical CSS is inlined in HTML, so we defer the main CSS loading
// Import Tailwind CSS - this will be processed by Critters
import "./src/styles/global.css";

// Service Worker Registration and CSS loading optimization
export const onClientEntry = () => {
	// Register service worker
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/sw.js")
			.then((registration) => {
				console.log("SW registered: ", registration);
			})
			.catch((registrationError) => {
				console.log("SW registration failed: ", registrationError);
			});
	}

	// Optimize CSS loading by ensuring non-critical CSS is loaded asynchronously
	const optimizeCSSLoading = () => {
		// Find all preloaded stylesheets and convert them to regular stylesheets
		const preloadedStyles = document.querySelectorAll('link[rel="preload"][as="style"]');
		preloadedStyles.forEach((link) => {
			// Convert preload to stylesheet after a short delay to prioritize critical rendering
			setTimeout(() => {
				if (link.onload) {
					link.onload();
				} else {
					link.rel = 'stylesheet';
				}
			}, 100);
		});
	};

	// Run CSS optimization after DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', optimizeCSSLoading);
	} else {
		optimizeCSSLoading();
	}
};

// Handle route updates to ensure CSS is properly loaded
export const onRouteUpdate = ({ location, prevLocation }) => {
	// Ensure CSS is loaded for new routes
	if (prevLocation && location.pathname !== prevLocation.pathname) {
		// Check if main stylesheet is loaded
		const mainStylesheet = document.querySelector('link[href*="styles"]');
		if (!mainStylesheet) {
			// Load main stylesheet if not present
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = '/styles.css';
			document.head.appendChild(link);
		}
	}
};
