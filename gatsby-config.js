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
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// !! You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-640WERC942", // !! Google Analytics / GA
				],
				// !! This object gets passed directly to the gtag config command
				// !! This config will be shared across all trackingIds
				gtagConfig: {
					// optimize_id: "8432808549",
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// !! This object is used for configuration specific to this plugin
				pluginConfig: {
					// !! Puts tracking script in the head instead of the body
					head: true,

					// !! Setting this parameter is also optional
					respectDNT: true,
					// !! Avoids sending pageview hits from custom paths
					// exclude: ["/secret/**"],
					// !! Defaults to https://www.googletagmanager.com
					origin: "https://antonio.almena.io/",
					// !! Delays processing pageview events on route update (in milliseconds)
					// delayOnRouteUpdate: 0,
				},
			},
		},
	],
	pathPrefix: "/",
};
