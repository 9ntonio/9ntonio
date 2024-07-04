/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: `I use both sides of my brain 🧠`,
		description: `Antonio Almena`,
		author: `@9ntonio`,
		image: "/social.jpg",
		siteUrl: "https://antonio.almena.io",
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Fredoka\:300,400,500,600,700`, // you can also specify font weights and styles
				],
				display: "swap",
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// !! The property ID; the tracking code won't be generated without it
				trackingId: "G-640WERC942",
				// !! Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// !! Setting this parameter is optional
				anonymize: false,
			},
		},
	],
	pathPrefix: "/",
};
