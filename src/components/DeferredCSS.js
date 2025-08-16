import React, { useEffect } from 'react';

/**
 * Component to handle deferred loading of non-critical CSS
 * This ensures that non-critical CSS is loaded after the critical rendering path
 */
const DeferredCSS = ({ href, media = 'all' }) => {
  useEffect(() => {
    // Create a link element for the non-critical CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;

    // Add the link to the document head
    document.head.appendChild(link);

    // Cleanup function to remove the link when component unmounts
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [href, media]);

  return null; // This component doesn't render anything
};

/**
 * Hook to load CSS asynchronously
 * This can be used in components that need specific CSS loaded
 */
export const useAsyncCSS = (href, media = 'all') => {
  useEffect(() => {
    // Check if the CSS is already loaded
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) {
      return;
    }

    // Create and load the CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;

    // Add loading state management
    link.onload = () => {
      console.log(`CSS loaded: ${href}`);
    };

    link.onerror = () => {
      console.warn(`Failed to load CSS: ${href}`);
    };

    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [href, media]);
};

export default DeferredCSS;
