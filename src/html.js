import React from "react"
import PropTypes from "prop-types"

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

        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* Critical font preload - only the most essential */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/fredoka/v14/X7nP4R8wZKCVl-PGzj9pGlOqpKk.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body {
              margin: 0;
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background-color: #00474f;
              color: #fff;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            .font-fredoka {
              font-family: Fredoka, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
              font-display: swap;
            }

            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 1rem;
            }

            @media (min-width: 768px) {
              .container { padding: 0; }
            }

            /* Loading state */
            .loading-placeholder {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background: #00474f;
            }

            .animate-pulse {
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }

            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `
        }} />

        {/* Load non-critical CSS asynchronously */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = '/styles.css';
              link.media = 'print';
              link.onload = function() { this.media = 'all'; };
              document.head.appendChild(link);
            })();
          `
        }} />

        <noscript>
          <link rel="stylesheet" href="/styles.css" />
        </noscript>

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        {/* Prioritize critical scripts */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Modern browser detection
            (function() {
              var isModern = 'noModule' in HTMLScriptElement.prototype &&
                           'import' in document.createElement('link') &&
                           typeof Symbol !== 'undefined' && Symbol.iterator !== undefined &&
                           typeof Promise !== 'undefined' && Object.assign !== undefined &&
                           Array.from !== undefined &&
                           typeof Map !== 'undefined' && typeof Set !== 'undefined';

              window.__MODERN_BROWSER__ = isModern;
              document.documentElement.className += isModern ? ' modern-js' : ' legacy-js';

              if (typeof performance !== 'undefined' && performance.mark) {
                performance.mark('modern-detection-complete');
              }
            })();
          `
        }} />

        {/* Load scripts with priority */}
        {props.postBodyComponents.map((component, index) => {
          // Prioritize runtime and framework scripts
          if (component.props?.src?.includes('runtime-') ||
              component.props?.src?.includes('framework-')) {
            return React.cloneElement(component, {
              key: index,
              async: false, // Load synchronously for critical scripts
              defer: false
            });
          }

          // Defer non-critical scripts
          return React.cloneElement(component, {
            key: index,
            async: true,
            defer: true
          });
        })}
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
