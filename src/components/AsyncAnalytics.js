import React from 'react';
import PropTypes from 'prop-types';
import { useAnalytics } from '../hooks/useAnalytics';
import { performanceTracker } from '../utils/performanceUtils';

/**
 * Async Analytics Loader Component
 * Loads Google Analytics only after user interaction to eliminate render blocking
 * Uses custom hook for better separation of concerns and testability
 */
const AsyncAnalytics = ({
  enabled = true,
  gaId,
  loadDelay,
  trackPerformance = false
}) => {
  // Track component performance if enabled
  React.useEffect(() => {
    if (trackPerformance) {
      performanceTracker.start('analytics-component');
      return () => {
        performanceTracker.end('analytics-component');
      };
    }
  }, [trackPerformance]);

  // Use the analytics hook with configuration
  const { isLoaded } = useAnalytics({
    enabled,
    gaId,
    loadDelay,
  });

  // Log loading status in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isLoaded) {
      console.log('📊 Google Analytics loaded successfully');
    }
  }, [isLoaded]);

  return null;
};

AsyncAnalytics.propTypes = {
  enabled: PropTypes.bool,
  gaId: PropTypes.string,
  loadDelay: PropTypes.number,
  trackPerformance: PropTypes.bool,
};

export default AsyncAnalytics;
