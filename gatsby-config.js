/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Collected Works`,
    description: `Portfolio site for 9NTONIO`,
    author: `@9ntonio`,
    twitterUsername: "@9ntonio",
    image: "/favicon.png",
    siteUrl: "https://antonio.almena.io",
  },
  plugins: [`gatsby-plugin-react-helmet`,
  			`gatsby-plugin-sass`,
			`gatsby-plugin-image`,
			`gatsby-plugin-sharp`,
			`gatsby-transformer-sharp`,
			{
				resolve: `gatsby-plugin-google-fonts`,
				options: {
				  fonts: [
					`Fredoka\:300,400,500,600,700` // you can also specify font weights and styles
				  ],
				  display: 'swap'
				}
			  }],
  pathPrefix: "/",
}
