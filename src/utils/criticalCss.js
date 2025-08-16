const fs = require('fs');
const path = require('path');

/**
 * Read and minify critical CSS for inlining
 * This function reads the critical CSS file and returns minified CSS
 */
function getCriticalCSS() {
  try {
    const criticalCssPath = path.join(process.cwd(), 'src/styles/critical.css');
    const criticalCss = fs.readFileSync(criticalCssPath, 'utf8');

    // Basic CSS minification
    return criticalCss
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/;\s*}/g, '}') // Remove unnecessary semicolons
      .replace(/\s*{\s*/g, '{') // Clean up braces
      .replace(/;\s*/g, ';') // Clean up semicolons
      .replace(/,\s*/g, ',') // Clean up commas
      .trim();
  } catch (error) {
    console.warn('Could not read critical CSS file:', error.message);
    return '';
  }
}

module.exports = { getCriticalCSS };
