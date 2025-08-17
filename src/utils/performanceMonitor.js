/**
 * Performance monitoring utilities for critical CSS and font loading
 */

/**
 * Monitor font loading performance
 */
export const monitorFontLoading = () => {
  if (typeof window === 'undefined') return;

  const startTime = performance.now();

  // Check if fonts are already loaded
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      const loadTime = performance.now() - startTime;
      console.log(`Fonts loaded in ${loadTime.toFixed(2)}ms`);

      // Add font-loaded class to enable font-dependent styles
      document.documentElement.classList.add('font-loaded');

      // Report to analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', 'font_load_time', {
          event_category: 'Performance',
          value: Math.round(loadTime)
        });
      }
    });
  }
};

/**
 * Monitor critical CSS impact on LCP
 */
export const monitorCriticalCSS = () => {
  if (typeof window === 'undefined') return;

  // Use PerformanceObserver to track LCP
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];

      console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);

      // Report to analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', 'largest_contentful_paint', {
          event_category: 'Performance',
          value: Math.round(lastEntry.startTime)
        });
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
};

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = () => {
  if (process.env.NODE_ENV === 'development') {
    monitorFontLoading();
    monitorCriticalCSS();
  }
};
