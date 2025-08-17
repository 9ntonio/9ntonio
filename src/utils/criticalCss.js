/**
 * Critical CSS utilities
 * Centralized critical CSS to prevent duplication between html.js and global.css
 */

import { COLORS, LOGO_DIMENSIONS, CIRCLE_SIZE, FONT_FAMILIES } from "./designTokens";

/**
 * Generate critical CSS with design tokens
 */
const generateCriticalCSS = () => `
  /* Critical above-the-fold styles with font fallbacks */
  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: ${COLORS.background};
    color: ${COLORS.textColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    overflow-x: hidden;
  }

  /* Font loading with size-adjusted fallbacks to prevent CLS */
  .font-fredoka {
    font-family: ${FONT_FAMILIES.fredoka};
    font-display: swap;
    font-size-adjust: 0.5;
    /* Prevent layout shift during font loading */
    font-synthesis: none;
    text-rendering: optimizeSpeed;
  }

  /* Font loading states to prevent FOUT/FOIT */
  .fonts-loading .font-fredoka {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size-adjust: 0.5;
  }

  .fonts-loaded .font-fredoka {
    font-family: ${FONT_FAMILIES.fredoka};
  }

  /* Container with consistent spacing - single source of truth */
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    /* Prevent layout shifts */
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }

  /* Logo container - prevent CLS */
  .logo-container {
    width: 100%;
    max-width: ${LOGO_DIMENSIONS.width}px;
    height: ${LOGO_DIMENSIONS.height}px;
    aspect-ratio: ${LOGO_DIMENSIONS.aspectRatio};
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
    width: ${CIRCLE_SIZE.width};
    height: ${CIRCLE_SIZE.height};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${COLORS.secondary};
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

  /* Image loading placeholder to prevent CLS */
  .project-image-container::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.secondary};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
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

  .fonts-loaded .font-loading {
    visibility: visible;
  }

  /* Prevent flash of unstyled content */
  .text-primary { color: ${COLORS.primary}; }
  .text-highlight { color: ${COLORS.highlight}; }
  .bg-background { background-color: ${COLORS.background}; }
  .bg-secondary { background-color: ${COLORS.secondary}; }
  .bg-primary { background-color: ${COLORS.primary}; }

  /* Connection-aware image optimizations */
  .connection-data-saver img:not([data-critical="true"]),
  .connection-very-slow img:not([data-critical="true"]) {
    opacity: 0.8;
    filter: blur(0.5px);
    transition: opacity 0.3s ease, filter 0.3s ease;
  }

  .connection-slow img,
  .connection-very-slow img {
    image-rendering: optimizeSpeed;
  }

  .connection-fast img {
    image-rendering: optimizeQuality;
  }

  /* Data saver indicator */
  .connection-data-saver .project-image-container::after {
    content: '📱';
    position: absolute;
    top: 4px;
    right: 4px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 10px;
    z-index: 10;
  }

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
  .mb-8 { margin-bottom: 2rem; }
  .mb-12 { margin-bottom: 3rem; }
  .mr-2 { margin-right: 0.5rem; }
  .mr-4 { margin-right: 1rem; }
  .mr-6 { margin-right: 1.5rem; }
  .mt-4 { margin-top: 1rem; }
  .mt-6 { margin-top: 1.5rem; }
  .my-8 { margin-top: 2rem; margin-bottom: 2rem; }
  .w-full { width: 100%; }
  .w-12 { width: 3rem; }
  .w-16 { width: 4rem; }
  .h-12 { height: 3rem; }
  .h-16 { height: 4rem; }
  .h-full { height: 100%; }
  .rounded-full { border-radius: 9999px; }
  .rounded-lg { border-radius: 0.5rem; }
  .border-primary { border-color: #b5f5ec; }
  .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
  .font-bold { font-weight: 700; }
  .font-semibold { font-weight: 600; }
  .leading-tight { line-height: 1.25; }
  .text-pretty { text-wrap: pretty; }
  .list-disc { list-style-type: disc; }
  .pl-8 { padding-left: 2rem; }
  .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

  @media (min-width: 768px) {
    .md\\:w-1\\/3 { width: 33.333333%; }
    .md\\:w-2\\/3 { width: 66.666667%; }
    .md\\:w-5\\/12 { width: 41.666667%; }
    .md\\:w-7\\/12 { width: 58.333333%; }
    .md\\:flex-row { flex-direction: row; }
    .md\\:items-center { align-items: center; }
    .md\\:mb-0 { margin-bottom: 0; }
    .md\\:mr-6 { margin-right: 1.5rem; }
    .md\\:pr-6 { padding-right: 1.5rem; }
    .md\\:mt-0 { margin-top: 0; }
    .md\\:mt-6 { margin-top: 1.5rem; }
    .md\\:block { display: block; }
  }
`;

/**
 * Get critical CSS for inlining in HTML head
 * @returns {string} Critical CSS string
 */
export const getCriticalCSS = () => {
	try {
		return generateCriticalCSS();
	} catch (error) {
		console.error("Error generating critical CSS:", error);
		// Return minimal fallback CSS to prevent complete styling failure
		return `
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: system-ui, sans-serif;
        background-color: #00474f;
        color: #fff;
      }
    `;
	}
};
