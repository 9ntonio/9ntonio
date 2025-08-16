import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

/**
 * SEO component using Gatsby's Head API for proper SSR and hydration
 * This approach is more performant and follows React best practices
 */
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

	const metaDescription = description || site.siteMetadata?.description || "";
	const siteTitle = site.siteMetadata?.title || "Design Technologist";
	const siteUrl = site.siteMetadata?.siteUrl || "";
	const imageSEO = site.siteMetadata?.image || "/social.jpg";
	const author = site.siteMetadata?.author || "@9ntonio";
	const fullTitle = `${Sitetitle} | ${siteTitle}`;

	// Default meta tags with proper structure
	const defaultMeta = [
		{ name: "description", content: metaDescription },
		{ name: "keywords", content: "software development, engineering, AI, design systems, front end development, web development, design technology" },
		{ name: "robots", content: "index, follow" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: siteUrl },
		{ property: "og:title", content: fullTitle },
		{ property: "og:description", content: metaDescription },
		{ property: "og:image", content: `${siteUrl}${imageSEO}` },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:creator", content: author },
		{ name: "twitter:title", content: fullTitle },
		{ name: "twitter:description", content: metaDescription },
		{ name: "twitter:image", content: `${siteUrl}${imageSEO}` },
	];

	// Merge default meta with user-provided meta
	const allMeta = [...defaultMeta, ...(Array.isArray(meta) ? meta : [])];

	return (
		<>
			<title>{fullTitle}</title>
			<html lang="en" />
			{allMeta.map((tag, index) => {
				if (!tag || !tag.content) return null;

				const key = `${tag.name || tag.property}-${index}`;

				if (tag.name) {
					return <meta key={key} name={tag.name} content={tag.content} />;
				} else if (tag.property) {
					return <meta key={key} property={tag.property} content={tag.content} />;
				}

				return null;
			})}
		</>
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
	Sitetitle: PropTypes.string,
};

export default Seo;
