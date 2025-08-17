import React from 'react';

/**
 * Performance monitoring utilities
 * Provides consistent performance tracking across the application
 */

/**
 * Performance metrics collector
 */
export class PerformanceTracker {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
  }

  /**
   * Start tracking a performance metric
   * @param {string} name - Metric name
   */
  start(name) {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(`${name}-start`);
    }
  }

  /**
   * End tracking a performance metric
   * @param {string} name - Metric name
   */
  end(name) {
    if (typeof performance !== 'undefined' && performance.mark && performance.measure) {
      try {
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);

        const measure = performance.getEntriesByName(name, 'measure')[0];
        if (measure) {
          this.metrics.set(name, measure.duration);
          this.logMetric(name, measure.duration);
        }
      } catch (error) {
        console.warn(`Performance tracking failed for ${name}:`, error);
      }
    }
  }

  /**
   * Log a performance metric
   * @param {string} name - Metric name
   * @param {number} duration - Duration in milliseconds
   */
  logMetric(name, duration) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`⚡ ${name}: ${duration.toFixed(2)}ms`);
    }
  }

  /**
   * Get all collected metrics
   * @returns {Object} - Metrics object
   */
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  /**
   * Clear all metrics
   */
  clear() {
    this.metrics.clear();
    if (typeof performance !== 'undefined' && performance.clearMarks) {
      performance.clearMarks();
      performance.clearMeasures();
    }
  }

  /**
   * Setup Core Web Vitals monitoring
   */
  setupCoreWebVitals() {
    if (typeof window === 'undefined') return;

    // Monitor Largest Contentful Paint (LCP)
    this.observePerformanceEntry('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1];
      this.logMetric('LCP', lastEntry.startTime);
    });

    // Monitor First Input Delay (FID)
    this.observePerformanceEntry('first-input', (entries) => {
      entries.forEach(entry => {
        this.logMetric('FID', entry.processingStart - entry.startTime);
      });
    });

    // Monitor Cumulative Layout Shift (CLS)
    this.observePerformanceEntry('layout-shift', (entries) => {
      let clsValue = 0;
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      if (clsValue > 0) {
        this.logMetric('CLS', clsValue);
      }
    });
  }

  /**
   * Observe performance entries of a specific type
   * @param {string} type - Entry type to observe
   * @param {Function} callback - Callback function
   */
  observePerformanceEntry(type, callback) {
    if (typeof PerformanceObserver === 'undefined') return;

    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });

      observer.observe({ type, buffered: true });
      this.observers.set(type, observer);
    } catch (error) {
      console.warn(`Failed to observe ${type}:`, error);
    }
  }

  /**
   * Disconnect all observers
   */
  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

// Global performance tracker instance
export const performanceTracker = new PerformanceTracker();

/**
 * Higher-order component for performance tracking
 * @param {React.Component} WrappedComponent - Component to wrap
 * @param {string} componentName - Name for tracking
 * @returns {React.Component} - Wrapped component
 */
export function withPerformanceTracking(WrappedComponent, componentName) {
  return function PerformanceTrackedComponent(props) {
    React.useEffect(() => {
      performanceTracker.start(`${componentName}-render`);

      return () => {
        performanceTracker.end(`${componentName}-render`);
      };
    }, []);

    return React.createElement(WrappedComponent, props);
  };
}

/**
 * Hook for component-level performance tracking
 * @param {string} componentName - Component name
 */
export function usePerformanceTracking(componentName) {
  React.useEffect(() => {
    performanceTracker.start(`${componentName}-mount`);

    return () => {
      performanceTracker.end(`${componentName}-mount`);
    };
  }, [componentName]);
}
