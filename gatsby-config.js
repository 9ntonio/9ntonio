module.exports = {
	adapter: require("gatsby-adapter-netlify").default({
		excludeDatastoreFromEngineFunction: false,
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
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Fredoka\:300,400,500,600,700`],
				display: "swap",
				preconnect: true,
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
					quality: 85,
					breakpoints: [750, 1080, 1366, 1920],
				},
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`, `avif`],
					placeholder: `blurred`,
					quality: 85,
					breakpoints: [750, 1080, 1366, 1920],
				},
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
	],
	trailingSlash: "always",
	graphqlTypegen: true,
	jsxRuntime: "automatic",
	flags: {
		DEV_SSR: true,
		FAST_DEV: true,
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PARALLEL_SOURCING: true,
	},
};
