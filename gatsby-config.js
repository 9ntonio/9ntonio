module.exports = {
	siteMetadata: {
		title: `I use both sides of my brain 🧠...`,
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
				head: true, // Changed to true to ensure tracking script loads properly
				anonymize: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Fredoka\:300,400,500,600,700`],
				display: "swap",
			},
		},
		`gatsby-plugin-preload-fonts`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
	flags: {
		DEV_SSR: true,
		FAST_DEV: true, // Added for better development performance
		PRESERVE_FILE_DOWNLOAD_CACHE: true, // Added for better caching
		PARALLEL_SOURCING: true, // Added for better build performance
	},
	// Remove assetPrefix - let Netlify handle this
};
