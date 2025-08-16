import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

/**
 * Wrapper component for lazy-loaded components with error handling
 * Provides consistent loading states and error recovery
 */
const LazyComponentWrapper = ({
  children,
  fallback = null,
  errorFallback = null,
  name = "Component"
}) => {
  const defaultFallback = fallback || (
    <div className="flex items-center justify-center p-4">
      <div className="animate-pulse bg-gray-300 rounded w-full h-12" />
    </div>
  );

  const defaultErrorFallback = errorFallback || (
    <div className="flex items-center justify-center p-4 text-gray-500">
      <span>Failed to load {name}. Please refresh the page.</span>
    </div>
  );

  return (
    <ErrorBoundary fallback={defaultErrorFallback}>
      <Suspense fallback={defaultFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyComponentWrapper;
