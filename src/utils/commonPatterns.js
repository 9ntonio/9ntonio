/**
 * Common utility functions and patterns used throughout the application
 * Reduces code duplication and improves maintainability
 */

/**
 * Creates external link props with consistent security attributes
 * @param {string} href - The URL to link to
 * @param {string} ariaLabel - Accessible label for the link
 * @returns {Object} - Props object for external links
 */
export function createExternalLinkProps(href, ariaLabel) {
  return {
    href,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": ariaLabel,
  };
}

/**
 * Debounce function to limit the rate of function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit function execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Checks if the current environment is browser (client-side)
 * @returns {boolean} - True if running in browser
 */
export function isBrowser() {
  return typeof window !== "undefined";
}

/**
 * Checks if the device is mobile based on screen width
 * @param {number} breakpoint - Mobile breakpoint in pixels (default: 768)
 * @returns {boolean} - True if mobile device
 */
export function isMobile(breakpoint = 768) {
  return isBrowser() && window.innerWidth < breakpoint;
}

/**
 * Safe localStorage wrapper with error handling
 * @param {string} key - Storage key
 * @param {any} value - Value to store (optional, for get operation)
 * @returns {any} - Stored value or null
 */
export function safeLocalStorage(key, value) {
  if (!isBrowser()) return null;

  try {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
      return value;
    } else {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  } catch (error) {
    console.warn(`localStorage operation failed for key "${key}":`, error);
    return null;
  }
}

/**
 * Creates a performance mark for measuring
 * @param {string} name - Mark name
 */
export function performanceMark(name) {
  if (isBrowser() && 'performance' in window && performance.mark) {
    performance.mark(name);
  }
}

/**
 * Measures performance between two marks
 * @param {string} name - Measure name
 * @param {string} startMark - Start mark name
 * @param {string} endMark - End mark name
 */
export function performanceMeasure(name, startMark, endMark) {
  if (isBrowser() && 'performance' in window && performance.measure) {
    try {
      performance.measure(name, startMark, endMark);
    } catch (error) {
      console.warn(`Performance measure failed: ${name}`, error);
    }
  }
}

/**
 * Lazy loads a component with error boundary
 * @param {Function} importFunc - Dynamic import function
 * @param {string} chunkName - Webpack chunk name
 * @returns {React.Component} - Lazy loaded component
 */
export function createLazyComponent(importFunc, chunkName) {
  return React.lazy(() =>
    importFunc().catch(error => {
      console.error(`Failed to load component chunk: ${chunkName}`, error);
      // Return a fallback component
      return {
        default: () => React.createElement('div', {
          className: 'text-red-500 p-4'
        }, `Failed to load ${chunkName}`)
      };
    })
  );
}
