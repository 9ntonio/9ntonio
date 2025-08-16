import React from "react";
import PropTypes from "prop-types";

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

				{/* Critical CSS inline */}
				<style
					dangerouslySetInnerHTML={{
						__html: `
						.font-fredoka{font-family:'Fredoka',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-display:swap}
						.container{max-width:1200px;margin:0 auto;padding:0 1rem}
						.circle-container{display:inline-flex;align-items:center;justify-content:center;width:3rem;height:3rem;margin:0 .5rem;border-radius:50%;background:rgba(255,255,255,.1);transition:background .3s ease;flex-shrink:0}
						.circle-container:hover{background:rgba(255,255,255,.2)}
						.player-wrapper{position:relative;width:100%;aspect-ratio:16/9;min-height:200px;background:#00474f;border-radius:.5rem;overflow:hidden}
						.react-player{position:absolute;top:0;left:0;width:100%!important;height:100%!important}
						img{max-width:100%;height:auto}
						.loading-placeholder{display:flex;align-items:center;justify-content:center;min-height:inherit;background:rgba(255,255,255,.1);border-radius:inherit}
						.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}
						@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
						*{box-sizing:border-box}
						body{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
					`,
					}}
				/>

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
