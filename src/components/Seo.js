import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect } from "react";

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

	useEffect(() => {
		if (typeof document !== "undefined") {
			// Set document title
			document.title = `${Sitetitle} | ${siteTitle}`;

			// Set HTML lang attribute
			document.documentElement.lang = "en";

			// Favicon is handled in HTML template

			// Clear existing meta tags that we manage
			const existingMeta = document.querySelectorAll('meta[data-seo="true"]');
			existingMeta.forEach((meta) => meta.remove());

			// Create and append new meta tags
			const metaTags = [
				{ name: "description", content: metaDescription },
				{ name: "keywords", content: "software development, engineering, AI, design systems, front end development, web development, design technology" },
				{ name: "robots", content: "index, follow" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: siteUrl },
				{ property: "og:title", content: `${Sitetitle} | ${siteTitle}` },
				{ property: "og:description", content: metaDescription },
				{ property: "og:image", content: `${siteUrl}${imageSEO}` },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:creator", content: author },
				{ name: "twitter:title", content: `${Sitetitle} | ${siteTitle}` },
				{ name: "twitter:description", content: metaDescription },
				{ name: "twitter:image", content: `${siteUrl}${imageSEO}` },
				// Add user-provided meta tags
				...(Array.isArray(meta) ? meta : []),
			];

			metaTags.forEach((tag) => {
				if (tag && tag.content) {
					const metaElement = document.createElement("meta");
					metaElement.setAttribute("data-seo", "true");

					if (tag.name) {
						metaElement.setAttribute("name", tag.name);
					} else if (tag.property) {
						metaElement.setAttribute("property", tag.property);
					}

					metaElement.setAttribute("content", tag.content);
					document.head.appendChild(metaElement);
				}
			});
		}
	}, [description, Sitetitle, meta, metaDescription, siteTitle, siteUrl, imageSEO, author]);

	// Return null since we're managing the head directly
	return null;
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
