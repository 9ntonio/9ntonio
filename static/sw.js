const CACHE_NAME = "antonio-almena-v5";
const urlsToCache = ["/", "/logo-2.svg", "/google.webp", "/vue.webp", "/unknown-pleasures.webp"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				// Add URLs one by one to handle failures gracefully
				return Promise.allSettled(
					urlsToCache.map((url) =>
						cache.add(url).catch((err) => {
							console.log(`Failed to cache ${url}:`, err);
							return null;
						}),
					),
				);
			})
			.then(() => {
				// Force the waiting service worker to become the active service worker
				return self.skipWaiting();
			}),
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames.map((cacheName) => {
						if (cacheName !== CACHE_NAME) {
							return caches.delete(cacheName);
						}
					}),
				);
			})
			.then(() => {
				return self.clients.claim();
			}),
	);
});

self.addEventListener("fetch", (event) => {
	// Only handle GET requests
	if (event.request.method !== "GET") {
		return;
	}

	// Skip cross-origin requests
	if (!event.request.url.startsWith(self.location.origin)) {
		return;
	}

	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				return response;
			}

			// Clone the request because it's a stream
			const fetchRequest = event.request.clone();

			return fetch(fetchRequest)
				.then((response) => {
					// Check if we received a valid response
					if (!response || response.status !== 200 || response.type !== "basic") {
						return response;
					}

					// Clone the response because it's a stream
					const responseToCache = response.clone();

					caches.open(CACHE_NAME).then((cache) => {
						cache.put(event.request, responseToCache);
					});

					return response;
				})
				.catch((error) => {
					console.log("Fetch failed for:", event.request.url, error);
					// Return a fallback response or let it fail gracefully
					return new Response("Network error occurred", {
						status: 408,
						statusText: "Network error",
					});
				});
		}),
	);
});
