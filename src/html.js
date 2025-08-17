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

        {/* Preload critical font files to reduce FOUT */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/fredoka/v16/X7n64b87HMOzCX2Z-2rKCg.woff2"
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
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles with font fallbacks */
            * { box-sizing: border-box; }

            body {
              margin: 0;
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background-color: #00474f;
              color: #fff;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              line-height: 1.5;
              overflow-x: hidden;
            }

            /* Font loading with size-adjusted fallbacks to prevent CLS */
            .font-fredoka {
              font-family: Fredoka, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
              font-display: swap;
              font-size-adjust: 0.5;
            }

            /* Container with consistent spacing */
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 1.5rem;
              width: 100%;
            }

            @media (min-width: 768px) {
              .container { padding: 0; }
            }

            /* Logo container - prevent CLS */
            .logo-container {
              width: 100%;
              max-width: 510px;
              height: 83px;
              aspect-ratio: 510/83;
              display: block;
            }

            .logo-container img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              display: block;
            }

            /* Text sizing to prevent CLS */
            .text-stable {
              font-size: 1.25rem;
              line-height: 1.75rem;
              margin-bottom: 1rem;
              min-height: 1.75rem;
            }

            .text-xl {
              font-size: 1.25rem;
              line-height: 1.75rem;
              margin-bottom: 1rem;
            }

            /* Circle containers - prevent shrinking */
            .circle-container {
              width: 46px;
              height: 46px;
              flex-shrink: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              background-color: #5b8c00;
              margin-right: 1rem;
            }

            /* Project image containers with fixed aspect ratios */
            .project-image-container {
              aspect-ratio: 3/2;
              width: 100%;
              overflow: hidden;
              border-radius: 0.5rem;
              position: relative;
            }

            .project-image-container img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            /* Prevent layout shifts during loading */
            .gatsby-image-wrapper {
              width: 100% !important;
              height: 100% !important;
            }

            /* Loading states */
            .animate-pulse {
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }

            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }

            /* Font loading optimization */
            .font-loading {
              visibility: hidden;
            }

            .font-loaded .font-loading {
              visibility: visible;
            }

            /* Prevent flash of unstyled content */
            .text-primary { color: #b5f5ec; }
            .text-highlight { color: #FFE8BA; }
            .bg-background { background-color: #00474f; }
            .bg-secondary { background-color: #5b8c00; }
            .bg-primary { background-color: #b5f5ec; }

            /* Critical layout styles */
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .flex-row { flex-direction: row; }
            .flex-wrap { flex-wrap: wrap; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .mb-1 { margin-bottom: 0.25rem; }
            .mb-2 { margin-bottom: 0.5rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mr-4 { margin-right: 1rem; }
            .mr-6 { margin-right: 1.5rem; }
            .mt-4 { margin-top: 1rem; }
            .w-full { width: 100%; }
            .h-full { height: 100%; }

            @media (min-width: 768px) {
              .md\\:flex-row { flex-direction: row; }
              .md\\:items-center { align-items: center; }
              .md\\:w-1\\/3 { width: 33.333333%; }
              .md\\:w-2\\/3 { width: 66.666667%; }
              .md\\:w-5\\/12 { width: 41.666667%; }
              .md\\:w-7\\/12 { width: 58.333333%; }
              .md\\:mb-0 { margin-bottom: 0; }
              .md\\:mt-0 { margin-top: 0; }
              .md\\:mt-6 { margin-top: 1.5rem; }
            }
          `
        }} />

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
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
