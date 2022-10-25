/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Collected Works`,
    description: `Portfolio site fro 9NTONIO`,
    author: `@9ntonio`,
    twitterUsername: "@9ntonio",
    image: "/twitter-img.png",
    siteUrl: "https://antonio.almena.io",
  },
  plugins: [`gatsby-plugin-react-helmet`,
  			`gatsby-plugin-sass`,
			`gatsby-plugin-image`,
			`gatsby-plugin-sharp`,
			`gatsby-transformer-sharp`,
			{
				resolve: 'gatsby-plugin-react-svg',
				options: {
					rule: {
						include: /\.inline\.svg$/,
					},
				},
			}],
  pathPrefix: "/",
}
