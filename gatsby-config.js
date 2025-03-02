module.exports = {
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
				head: true,
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
		`gatsby-plugin-postcss`,
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
