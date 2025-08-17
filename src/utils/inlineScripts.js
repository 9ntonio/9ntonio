/**
 * Utility functions for inline scripts used in html.js
 * Extracted for better maintainability and testing
 */

/**
 * Generates CSS loading script with fallback and memory leak prevention
 * @param {string} cssPath - Path to the CSS file
 * @returns {string} - Minified script string
 */
export function generateCSSLoadingScript(cssPath = '/styles.css') {
  return `
    (function() {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '${cssPath}';
      link.media = 'print';
      link.onload = function() {
        this.media = 'all';
        this.onload = null;
      };
      setTimeout(function() {
        if (link.media === 'print') {
          link.media = 'all';
        }
      }, 100);
      document.head.appendChild(link);
    })();
  `.replace(/\s+/g, ' ').trim();
}

/**
 * Generates modern browser detection script
 * @returns {string} - Minified script string
 */
export function generateModernBrowserDetectionScript() {
  return `
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
  `.replace(/\s+/g, ' ').trim();
}

/**
 * Generates critical CSS styles
 * @returns {string} - Critical CSS string
 */
export function generateCriticalCSS() {
  return `
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
  `.replace(/\s+/g, ' ').replace(/\/\*[\s\S]*?\*\//g, '').trim();
}
