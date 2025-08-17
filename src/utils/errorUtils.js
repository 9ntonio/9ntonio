/**
 * Error handling utilities for consistent error management
 */

/**
 * Safe async function wrapper that handles errors gracefully
 * @param {Function} asyncFn - Async function to wrap
 * @param {*} fallbackValue - Value to return on error
 * @param {Function} onError - Optional error handler
 * @returns {Function} - Wrapped function
 */
export function safeAsync(asyncFn, fallbackValue = null, onError = null) {
  return async (...args) => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Safe async error:', error);
      }

      if (onError) {
        onError(error);
      }

      return fallbackValue;
    }
  };
}

/**
 * Safe synchronous function wrapper
 * @param {Function} fn - Function to wrap
 * @param {*} fallbackValue - Value to return on error
 * @param {Function} onError - Optional error handler
 * @returns {Function} - Wrapped function
 */
export function safe(fn, fallbackValue = null, onError = null) {
  return (...args) => {
    try {
      return fn(...args);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Safe function error:', error);
      }

      if (onError) {
        onError(error);
      }

      return fallbackValue;
    }
  };
}

/**
 * Error logger with context
 * @param {Error} error - Error to log
 * @param {string} context - Context where error occurred
 * @param {Object} metadata - Additional metadata
 */
export function logError(error, context = 'Unknown', metadata = {}) {
  const errorInfo = {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
    ...metadata,
  };

  if (process.env.NODE_ENV === 'development') {
    console.group(`🚨 Error in ${context}`);
    console.error('Error:', error);
    console.table(errorInfo);
    console.groupEnd();
  } else {
    // In production, you might want to send to an error tracking service
    console.error('Error:', errorInfo);
  }
}

/**
 * React hook for error handling
 * @param {string} componentName - Name of the component
 * @returns {Function} - Error handler function
 */
export function useErrorHandler(componentName) {
  return React.useCallback((error, errorInfo = {}) => {
    logError(error, componentName, errorInfo);
  }, [componentName]);
}

/**
 * Higher-order component for error handling
 * @param {React.Component} WrappedComponent - Component to wrap
 * @param {string} componentName - Name for error context
 * @returns {React.Component} - Wrapped component with error handling
 */
export function withErrorHandling(WrappedComponent, componentName) {
  return function ErrorHandledComponent(props) {
    const handleError = useErrorHandler(componentName);

    return (
      <ErrorBoundary onError={handleError}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}
