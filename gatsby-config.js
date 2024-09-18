/**
 * !! Configure your Gatsby site with this file.
 * !! See: https://www.gatsbyjs.org/docs/gatsby-config/
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
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				// your google analytics tracking id
				trackingId: `G-640WERC942`,
				// Puts tracking script in the head instead of the body
				head: false,
				// enable ip anonymization
				anonymize: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Fredoka\:300,400,500,600,700`, // you can also specify font weights and styles
				],
				display: "swap",
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
	pathPrefix: "/",
};
