import React from "react";
import PropTypes from "prop-types";

const { getCriticalCSS } = require("./utils/criticalCss");

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

				{/* Favicon */}
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<link rel="icon" type="image/png" href="/favicon.png" />

				{/* Resource hints for performance */}
				<link rel="dns-prefetch" href="//fonts.googleapis.com" />
				<link rel="dns-prefetch" href="//fonts.gstatic.com" />
				<link rel="dns-prefetch" href="//vimeo.com" />
				<link rel="dns-prefetch" href="//player.vimeo.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />

				{/* Preload critical font weights with proper priorities */}
				<link
					rel="preload"
					href="https://fonts.gstatic.com/s/fredoka/v14/X7nP4R8wZKCVl-PGzj9pGlOqpKk.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="https://fonts.gstatic.com/s/fredoka/v14/X7nO4R8wZKCVl-PGzj9pGlOqpKkFcw.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>

				{/* Critical CSS inline for immediate rendering */}
				<style
					dangerouslySetInnerHTML={{
						__html: getCriticalCSS(),
					}}
				/>

				{/* Load non-critical CSS asynchronously */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								var link = document.createElement('link');
								link.rel = 'stylesheet';
								link.href = '/styles.css';
								link.media = 'print';
								link.onload = function() { this.media = 'all'; };
								document.head.appendChild(link);
							})();
						`,
					}}
				/>

				{/* Noscript fallback for CSS loading */}
				<noscript>
					<link rel="stylesheet" href="/styles.css" />
				</noscript>

				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
