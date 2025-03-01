module.exports = {
	siteMetadata: {
		title: `I use both sides of my brain 🧠...`,
		description: `Antonio Almena`,
		author: `@9ntonio`,
		image: "/social.jpg",
		siteUrl: "https://antonio.almena.io",
	},
	plugins: [
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				trackingId: `G-640WERC942`,
				head: true,
				anonymize: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Fredoka\:300,400,500,600,700,800`],
				display: "swap",
			},
		},
		`gatsby-plugin-preload-fonts`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
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
