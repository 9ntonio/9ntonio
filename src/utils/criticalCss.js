/**
 * Critical CSS utilities
 * Centralized critical CSS to prevent duplication between html.js and global.css
 */

export const CRITICAL_CSS = `
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
    transition: transform 0.3s ease;
  }

  /* Font loading optimization */
  .font-loading {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .font-loaded .font-loading {
    opacity: 1;
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

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
  }

  @media (min-width: 768px) {
    .md\\:w-1\\/3 { width: 33.333333%; }
    .md\\:w-2\\/3 { width: 66.666667%; }
    .md\\:w-5\\/12 { width: 41.666667%; }
    .md\\:w-7\\/12 { width: 58.333333%; }
    .md\\:flex-row { flex-direction: row; }
    .md\\:items-center { align-items: center; }
    .md\\:mb-0 { margin-bottom: 0; }
    .md\\:mt-0 { margin-top: 0; }
    .md\\:block { display: block; }
  }
`;

/**
 * Get critical CSS for inlining in HTML head
 */
export const getCriticalCSS = () => CRITICAL_CSS;
