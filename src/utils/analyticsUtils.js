import { isBrowser } from './commonPatterns';

/**
 * Analytics utilities for consistent event tracking
 * Provides safe wrappers around gtag functionality
 */

/**
 * Safely track a custom event
 * @param {string} eventName - Event name
 * @param {Object} parameters - Event parameters
 */
export function trackEvent(eventName, parameters = {}) {
  if (!isBrowser() || typeof window.gtag !== 'function') {
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Analytics Event: ${eventName}`, parameters);
    }
    return;
  }

  try {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters
    });
  } catch (error) {
    console.warn('Failed to track analytics event:', error);
  }
}

/**
 * Track page view manually
 * @param {string} pagePath - Page path
 * @param {string} pageTitle - Page title
 */
export function trackPageView(pagePath, pageTitle) {
  if (!isBrowser() || typeof window.gtag !== 'function') {
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Page View: ${pagePath} - ${pageTitle}`);
    }
    return;
  }

  try {
    window.gtag('event', 'page_view', {
      page_title: pageTitle || document.title,
      page_location: window.location.href,
      page_path: pagePath || window.location.pathname
    });
  } catch (error) {
    console.warn('Failed to track page view:', error);
  }
}

/**
 * Track performance metrics
 * @param {string} metricName - Metric name
 * @param {number} value - Metric value
 * @param {string} unit - Unit of measurement
 */
export function trackPerformance(metricName, value, unit = 'ms') {
  trackEvent('performance_metric', {
    category: 'performance',
    label: metricName,
    value: Math.round(value),
    custom_parameters: {
      metric_name: metricName,
      metric_value: value,
      metric_unit: unit
    }
  });
}

/**
 * Track user interactions
 * @param {string} element - Element type or identifier
 * @param {string} action - Action performed
 * @param {Object} additionalData - Additional tracking data
 */
export function trackInteraction(element, action, additionalData = {}) {
  trackEvent('user_interaction', {
    category: 'interaction',
    label: `${element}_${action}`,
    ...additionalData
  });
}

/**
 * Check if analytics is loaded and ready
 * @returns {boolean} - True if gtag is available
 */
export function isAnalyticsReady() {
  return isBrowser() && typeof window.gtag === 'function';
}
