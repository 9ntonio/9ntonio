import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../../static/favicon.png";

function Seo({ description = "", meta = [], Sitetitle = "Antonio Almena" }) {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
					image
					siteUrl
				}
			}
		}
	`);

	const metaDescription = description || site.siteMetadata.description;
	const imageSEO = site.siteMetadata.image;

	const defaultMeta = [
		{
			name: `description`,
			content: metaDescription,
		},
		{
			property: `og:type`,
			content: `website`,
		},
		{
			property: `og:url`,
			content: site.siteMetadata.siteUrl,
		},
		{
			property: `og:title`,
			content: `${Sitetitle} | ${site.siteMetadata.title}`,
		},
		{
			property: `og:description`,
			content: metaDescription,
		},
		{
			property: `og:image`,
			content: `${site.siteMetadata.siteUrl}${imageSEO}`,
		},
		{
			name: `twitter:card`,
			content: `summary_large_image`,
		},
		{
			property: `twitter:url`,
			content: site.siteMetadata.siteUrl,
		},
		{
			name: `twitter:creator`,
			content: site.siteMetadata?.author || "",
		},
		{
			name: `twitter:title`,
			content: `${Sitetitle} | ${site.siteMetadata.title}`,
		},
		{
			name: `twitter:description`,
			content: metaDescription,
		},
		{
			name: `twitter:image`,
			content: `${site.siteMetadata.siteUrl}${imageSEO}`,
		},
	];

	// Ensure meta is always an array before concatenating
	const metaArray = Array.isArray(meta) ? meta : [];

	return (
		<Helmet
			htmlAttributes={{
				lang: "en",
			}}
			title={`${Sitetitle} | ${site.siteMetadata.title}`}
			meta={defaultMeta.concat(metaArray)}
			link={[{ rel: "icon", href: favicon }]}
		/>
	);
}

Seo.propTypes = {
	description: PropTypes.string,
	meta: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			content: PropTypes.string.isRequired,
			property: PropTypes.string,
		}),
	),
	Sitetitle: PropTypes.string.isRequired,
};

export default Seo;
