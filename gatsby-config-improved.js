// Centralized image configuration to avoid duplication
const IMAGE_CONFIG = {
	formats: [`auto`, `webp`, `avif`],
	placeholder: `blurred`,
	quality: 85,
	breakpoints: [750, 1080, 1366, 1920],
};

// Site colors for consistent theming
const SITE_COLORS = {
	background: `#00474f`,
	primary: `#b5f5ec`,
};

module.exports = {
	adapter: require("gatsby-adapter-netlify")(),
	siteMetadata: {
		title: `Design Technologist`,
		description: `Senior Full Stack Engineer with 12+ years of experience building high-performance web applications using React, Angular, TypeScript, and C#/Blazor. Expert in developing scalable component libraries, optimizing application performance, and implementing modern frontend architectures.`,
		author: `@9ntonio`,
		image: "/social.jpg",
		siteUrl: "https://antonio.almena.io",
	},
	plugins: [
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				trackingId: `G-640WERC942`,
				head: false, // Load in body to reduce render blocking
				anonymize: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Fredoka:300,400,500,600,700`], // Fixed escape character
				display: "swap",
				preconnect: true,
			},
		},
		`gatsby-plugin-postcss`,
		`gatsby-plugin-preload-fonts`,
		{
			resolve: `gatsby-plugin-image`,
			options: {
				defaults: IMAGE_CONFIG, // Use centralized config
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: IMAGE_CONFIG, // Use centralized config
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Antonio Almena - Design Technologist`,
				short_name: `Antonio Almena`,
				start_url: `/`,
				background_color: SITE_COLORS.background,
				theme_color: SITE_COLORS.primary,
				display: `minimal-ui`,
				icon: `static/favicon.ico`,
				// Add PWA features
				cache_busting_mode: "none",
				include_favicon: true,
				legacy: true,
				theme_color_in_head: false,
			},
		},
		// Only include bundle analyzer in development
		...(process.env.NODE_ENV === "development"
			? [
					{
						resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
						options: {
							devMode: true,
							analyzerMode: "server",
							analyzerPort: 3001,
						},
					},
				]
			: []),
		{
			resolve: `gatsby-plugin-minify`,
			options: {
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				// Additional optimizations
				removeEmptyAttributes: true,
				removeOptionalTags: true,
				sortAttributes: true,
				sortClassName: true,
			},
		},
		// Add sitemap for SEO
		`gatsby-plugin-sitemap`,
		// Add robots.txt
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://antonio.almena.io",
				sitemap: "https://antonio.almena.io/sitemap-index.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
	],
	trailingSlash: "always",
	graphqlTypegen: true,
	jsxRuntime: "automatic",
	flags: {
		DEV_SSR: true,
		FAST_DEV: true,
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PARALLEL_SOURCING: true,
		FAST_REFRESH: true,
		// Add new performance flags
		PARTIAL_HYDRATION: true,
		LAZY_IMAGES: true,
	},
};
