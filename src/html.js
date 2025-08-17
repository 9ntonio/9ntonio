import React from "react"
import PropTypes from "prop-types"
import { getCriticalCSS } from "./utils/criticalCss"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Critical resource hints for font loading optimization */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Additional performance hints */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical font files to reduce FOUT */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/fredoka/v16/X7n64b87HMOzCX2Z-2rKCg.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/fredoka/v16/X7n-4b87HMOzCX2Z-2rKCg.woff2"
          crossOrigin="anonymous"
        />

        {/* Load Google Fonts CSS asynchronously to prevent render blocking */}
        <link
          rel="preload"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap"
          />
        </noscript>

        {/* Critical CSS inline - prevents layout shifts and improves LCP */}
        <style dangerouslySetInnerHTML={{ __html: getCriticalCSS() }} />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.arrayOf(PropTypes.node),
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.arrayOf(PropTypes.node),
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.arrayOf(PropTypes.node),
}
