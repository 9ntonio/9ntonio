/**
 * Differential Serving Utilities
 *
 * Utilities for generating proper script tags for modern and legacy JavaScript bundles
 */

/**
 * Generate script tags for differential serving
 * @param {Array} scripts - Array of script objects with src and other attributes
 * @param {boolean} isModern - Whether to generate modern or legacy script tags
 */
const generateScriptTags = (scripts, isModern = true) => {
  if (!scripts || !Array.isArray(scripts)) {
    return '';
  }

  return scripts.map(script => {
    const attributes = [];

    // Add src attribute
    if (script.src) {
      attributes.push(`src="${script.src}"`);
    }

    // Add differential serving attributes
    if (isModern) {
      attributes.push('type="module"');
    } else {
      attributes.push('nomodule');
      // Add defer for legacy scripts to prevent blocking
      attributes.push('defer');
    }

    // Add other attributes
    if (script.async && !isModern) {
      attributes.push('async');
    }

    if (script.crossorigin) {
      attributes.push(`crossorigin="${script.crossorigin}"`);
    }

    if (script.integrity) {
      attributes.push(`integrity="${script.integrity}"`);
    }

    return `<script ${attributes.join(' ')}></script>`;
  }).join('\n');
};

/**
 * Filter scripts based on build type (modern vs legacy)
 * @param {Array} scripts - Array of all scripts
 * @param {boolean} isModern - Whether to filter for modern or legacy
 */
const filterScriptsByType = (scripts, isModern = true) => {
  if (!scripts || !Array.isArray(scripts)) {
    return [];
  }

  return scripts.filter(script => {
    if (!script.src) return false;

    const isModernScript = script.src.includes('.modern.js');
    const isLegacyScript = script.src.includes('.legacy.js');

    // If script doesn't have modern/legacy suffix, include in both
    if (!isModernScript && !isLegacyScript) {
      return true;
    }

    return isModern ? isModernScript : isLegacyScript;
  });
};

/**
 * Generate preload hints for critical JavaScript bundles
 * @param {Array} scripts - Array of critical scripts to preload
 * @param {boolean} isModern - Whether to generate modern or legacy preloads
 */
const generateScriptPreloads = (scripts, isModern = true) => {
  if (!scripts || !Array.isArray(scripts)) {
    return '';
  }

  const criticalScripts = scripts.filter(script =>
    script.critical && script.src
  );

  return criticalScripts.map(script => {
    const attributes = [
      'rel="modulepreload"',
      `href="${script.src}"`,
    ];

    if (script.crossorigin) {
      attributes.push(`crossorigin="${script.crossorigin}"`);
    }

    // Only add modulepreload for modern browsers
    if (isModern) {
      return `<link ${attributes.join(' ')}>`;
    }

    // For legacy browsers, use regular preload
    return `<link rel="preload" href="${script.src}" as="script" crossorigin="${script.crossorigin || 'anonymous'}">`;
  }).join('\n');
};

/**
 * Detect if current environment supports modern JavaScript
 * This is a server-side check based on user agent (if available)
 */
const detectModernSupport = (userAgent = '') => {
  if (!userAgent) {
    // Default to modern if no user agent available
    return true;
  }

  // Simple user agent detection for major modern browsers
  const modernBrowsers = [
    /Chrome\/([6-9]\d|[1-9]\d{2,})/,  // Chrome 60+
    /Firefox\/([6-9]\d|[1-9]\d{2,})/, // Firefox 60+
    /Safari\/([1-9]\d{2,})/,          // Safari 12+ (rough approximation)
    /Edge\/([7-9]\d|[1-9]\d{2,})/,    // Edge 79+
  ];

  return modernBrowsers.some(regex => regex.test(userAgent));
};

/**
 * Generate inline script for runtime feature detection and script loading
 */
const generateFeatureDetectionScript = () => {
  return `
    (function() {
      // Enhanced feature detection for modern JavaScript support
      var isModern = (
        'noModule' in HTMLScriptElement.prototype &&
        'import' in document.createElement('link') &&
        typeof Symbol !== 'undefined' &&
        typeof Symbol.iterator !== 'undefined' &&
        typeof Promise !== 'undefined' &&
        typeof Object.assign !== 'undefined' &&
        typeof Array.from !== 'undefined' &&
        typeof Map !== 'undefined' &&
        typeof Set !== 'undefined' &&
        typeof WeakMap !== 'undefined' &&
        typeof WeakSet !== 'undefined' &&
        typeof Proxy !== 'undefined' &&
        typeof Reflect !== 'undefined'
      );

      // Store modern browser detection for later use
      window.__MODERN_BROWSER__ = isModern;
      window.__DIFFERENTIAL_SERVING__ = true;

      // Add class to document for CSS targeting
      document.documentElement.className += isModern ? ' modern-js' : ' legacy-js';

      // Performance mark for modern browser detection
      if (typeof performance !== 'undefined' && performance.mark) {
        performance.mark('modern-detection-complete');
        performance.mark('differential-serving-ready');
      }

      // Log differential serving status in development
      if (typeof console !== 'undefined' && console.log) {
        var buildType = isModern ? 'modern' : 'legacy';
        console.log('🚀 Differential serving active: ' + buildType + ' JavaScript bundle loaded');
      }
    })();
  `.trim();
};

/**
 * Generate fallback script loader for browsers that don't support modules
 */
const generateLegacyFallbackLoader = (legacyScripts) => {
  if (!legacyScripts || !Array.isArray(legacyScripts)) {
    return '';
  }

  const scriptUrls = legacyScripts
    .filter(script => script.src)
    .map(script => script.src);

  if (scriptUrls.length === 0) {
    return '';
  }

  return `
    <script>
      // Fallback loader for legacy browsers
      (function() {
        if (!('noModule' in HTMLScriptElement.prototype)) {
          // Browser doesn't support modules, load legacy scripts
          var scripts = ${JSON.stringify(scriptUrls)};
          scripts.forEach(function(src) {
            var script = document.createElement('script');
            script.src = src;
            script.defer = true;
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
          });
        }
      })();
    </script>
  `.trim();
};

module.exports = {
  generateScriptTags,
  filterScriptsByType,
  generateScriptPreloads,
  detectModernSupport,
  generateFeatureDetectionScript,
  generateLegacyFallbackLoader,
};
