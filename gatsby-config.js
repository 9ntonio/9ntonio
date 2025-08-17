module.exports = {
	adapter: require("gatsby-adapter-netlify").default({
		excludeDatastoreFromEngineFunction: false,
		imageCDN: false, // Let Netlify handle image optimization
	}),
	siteMetadata: {
		title: `Design Technologist`,
		description: `Antonio Almena`,
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
				// Optimize GA loading with delayed initialization
				gtagConfig: {
					anonymize_ip: true,
					cookie_expires: 63072000, // 2 years
					send_page_view: false, // Manual page view tracking for better control
				},
				pluginConfig: {
					// Delay GA loading until user interaction to improve performance
					respectDNT: true,
					exclude: ["/preview/**", "/do-not-track/me/too/"],
					delayOnRouteUpdate: 0, // No delay on route updates
					// Critical: Delay GA loading until after page is interactive
					defer: true,
					// Add these performance optimizations
					async: true,
					// Load GA only after user interaction
					delayOnFirstInteraction: true,
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Fredoka:400,600&display=swap`], // Ensure font-display: swap
				display: "swap",
				preconnect: true,
				crossOrigin: "anonymous",
				preload: true, // Preload critical fonts for better performance
				subsets: ['latin'],
				// Only load characters we actually use for better performance
				text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?:;()[]{}@#$%&*+-=<>/"\'',
			},
		},
		`gatsby-plugin-postcss`,
		`gatsby-plugin-preload-fonts`,
		{
			resolve: `gatsby-plugin-image`,
			options: {
				defaults: {
					formats: [`auto`, `webp`, `avif`],
					placeholder: `blurred`,
					quality: 75, // Reduced from 85 for better compression
					breakpoints: [480, 750, 1080, 1366, 1920],
					backgroundColor: `transparent`,
				},
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`, `avif`],
					placeholder: `blurred`,
					quality: 75, // Reduced from 85 for better compression
					breakpoints: [480, 750, 1080, 1366, 1920],
					backgroundColor: `transparent`,
				},
				// Optimize image processing
				stripMetadata: true,
				defaultQuality: 75,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Antonio Almena - Design Technologist`,
				short_name: `Antonio Almena`,
				start_url: `/`,
				background_color: `#00474f`,
				theme_color: `#b5f5ec`,
				display: `minimal-ui`,
				icon: `static/favicon.ico`,
			},
		},
		{
			resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
			options: {
				devMode: false,
			},
		},
		{
			resolve: `gatsby-plugin-minify`,
			options: {
				// Minify HTML, CSS, and inline JavaScript
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				excludes: [`/404`, `/404.html`],
				query: `
					{
						site {
							siteMetadata {
								siteUrl
							}
						}
						allSitePage {
							nodes {
								path
							}
						}
					}
				`,
				resolveSiteUrl: () => "https://antonio.almena.io",
				serialize: ({ path }) => {
					return {
						url: path,
						changefreq: `monthly`,
						priority: path === "/" ? 1.0 : 0.7,
					}
				},
			},
		},
	],
	trailingSlash: "always",
	graphqlTypegen: true,
	jsxRuntime: "automatic",
	flags: {
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PARALLEL_SOURCING: true,
	},
	// Configure modern JavaScript builds
	polyfill: process.env.GATSBY_MODERN_BUILD !== "false" ? false : true, // Disable polyfills for modern builds only
};
