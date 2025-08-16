import React, { useEffect, useState } from 'react';

/**
 * Critical CSS Loader Component
 * This component manages the loading of non-critical CSS after the initial render
 */
const CriticalCSSLoader = ({ children }) => {
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    // Function to load non-critical CSS
    const loadNonCriticalCSS = () => {
      // Check if we're in the browser
      if (typeof window === 'undefined') return;

      // Find preloaded stylesheets and activate them
      const preloadedLinks = document.querySelectorAll('link[rel="preload"][as="style"]');

      preloadedLinks.forEach((link) => {
        // Create a new stylesheet link
        const stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.href = link.href;
        stylesheet.media = link.media || 'all';

        // Add load event listener
        stylesheet.onload = () => {
          setCssLoaded(true);
          // Remove the preload link to avoid duplication
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
        };

        // Insert the stylesheet
        document.head.appendChild(stylesheet);
      });

      // Also handle any existing stylesheets that might not be loaded
      const existingStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      if (existingStylesheets.length > 0) {
        setCssLoaded(true);
      }
    };

    // Load CSS after a short delay to ensure critical rendering is complete
    const timer = setTimeout(loadNonCriticalCSS, 100);

    return () => clearTimeout(timer);
  }, []);

  // Provide CSS loading state to children if needed
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { cssLoaded });
    }
    return child;
  });
};

/**
 * Hook to check if non-critical CSS has been loaded
 */
export const useCSSLoaded = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkCSSLoaded = () => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      const allLoaded = Array.from(stylesheets).every((link) => {
        return link.sheet !== null;
      });

      if (allLoaded && stylesheets.length > 0) {
        setLoaded(true);
      }
    };

    // Check immediately
    checkCSSLoaded();

    // Also check after a delay
    const timer = setTimeout(checkCSSLoaded, 500);

    return () => clearTimeout(timer);
  }, []);

  return loaded;
};

export default CriticalCSSLoader;
