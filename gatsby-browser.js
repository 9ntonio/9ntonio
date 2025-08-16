// Import Tailwind CSS
import "./src/styles/global.css";

// Service Worker Registration
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
};
