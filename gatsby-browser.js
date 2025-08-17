// Critical CSS is inlined in HTML, so we defer the main CSS loading
// Import Tailwind CSS - this will be processed by Critters
import "./src/styles/global.css";

// Service Worker Registration and CSS loading optimization
export const onClientEntry = () => {
	// Register service worker with performance optimization
	if ("serviceWorker" in navigator && process.env.NODE_ENV === 'production') {
		// Delay service worker registration to not block initial page load
		setTimeout(() => {
			navigator.serviceWorker
				.register("/sw.js")
				.then((registration) => {
					console.log("SW registered: ", registration);
				})
				.catch((registrationError) => {
					console.log("SW registration failed: ", registrationError);
				});
		}, 1000);
	}

	// Simple CSS optimization - let Gatsby handle CSS loading naturally
};

// Handle route updates - let Gatsby handle CSS loading
export const onRouteUpdate = ({ location, prevLocation }) => {
	// Simple route update handling
	if (prevLocation && location.pathname !== prevLocation.pathname) {
		// Scroll to top on route change
		window.scrollTo(0, 0);
	}
};
