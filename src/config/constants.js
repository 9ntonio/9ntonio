// Centralized configuration for consistent values across the application
export const SITE_CONFIG = {
	// External link settings
	EXTERNAL_LINK: {
		TARGET: "_blank",
		REL: "noreferrer",
	},

	// Visual design constants
	COLORS: {
		BACKGROUND: "#00474f",
		PRIMARY: "#b5f5ec",
		SECONDARY: "#5b8c00",
		HIGHLIGHT: "#FFE8BA",
		TEXT: "#fff",
	},

	// Performance settings
	PERFORMANCE: {
		PARTICLES_DELAY: 2000, // Increased for better initial load
		MOBILE_BREAKPOINT: 768,
		IMAGE_QUALITY: 75, // Reduced for better compression
		IMAGE_FORMATS: ["auto", "webp", "avif"],
		IMAGE_BREAKPOINTS: [480, 750, 1080, 1366, 1920],
		LARGE_BUNDLE_SIZE: 100 * 1024, // 100KB threshold
		MIN_FILE_SIZE_FOR_ANALYSIS: 10 * 1024, // 10KB
		WHITESPACE_RATIO_THRESHOLD: 0.15,
	},

	// Social media links
	SOCIAL_LINKS: {
		LINKEDIN: "https://www.linkedin.com/in/antonio-almena/",
		GITHUB: "https://www.github.com/9ntonio",
		MEDIUM: "https://www.medium.com/@9ntonio/unknown-pleasures-in-a-brave-new-world-ai-creativity-77f5560220bf",
	},

	// Project URLs
	PROJECT_URLS: {
		NEXTJS: "https://nextjs.org/",
		CLAUDE: "https://claude.ai/",
		WEB_APIS: "https://developer.mozilla.org/en-US/docs/Web/API",
	},
};

// Particle system configuration
export const PARTICLES_CONFIG = {
	preset: "triangles",
	particles: {
		color: { value: SITE_CONFIG.COLORS.TEXT },
		line_linked: {
			color: "#006d75",
			distance: 175,
			enable: true,
			opacity: 1,
			width: 1,
		},
	},
	detectRetina: true,
	fpsLimit: 60,
	fullScreen: { zIndex: -1 },
	background: { color: SITE_CONFIG.COLORS.BACKGROUND },
};
