import React from 'react';

/**
 * Resource Hints Component
 * Adds DNS prefetch and preconnect hints to improve loading performance
 * This is a non-breaking addition that won't affect layout
 */
const ResourceHints = () => {
  React.useEffect(() => {
    if (typeof document === 'undefined') return;

    // Add DNS prefetch hints
    const dnsPrefetches = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.google-analytics.com',
      '//www.googletagmanager.com'
    ];

    dnsPrefetches.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = href;
      document.head.appendChild(link);
    });

    // Add preconnect hints
    const preconnects = [
      { href: 'https://fonts.googleapis.com' },
      { href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    preconnects.forEach(({ href, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      if (crossOrigin) {
        link.crossOrigin = crossOrigin;
      }
      document.head.appendChild(link);
    });

  }, []);

  return null;
};

export default ResourceHints;
