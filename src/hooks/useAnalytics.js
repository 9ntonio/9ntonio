import { useEffect, useCallback, useRef } from 'react';
import { SITE_CONFIG } from '../config/constants';
import { isBrowser } from '../utils/commonPatterns';

/**
 * Custom hook for managing Google Analytics loading and initialization
 * Provides clean separation of concerns and better testability
 */
export const useAnalytics = (config = {}) => {
  const hasLoadedRef = useRef(false);
  const cleanupRef = useRef(null);

  const {
    gaId = SITE_CONFIG.ANALYTICS.GA_ID,
    loadDelay = SITE_CONFIG.ANALYTICS.LOAD_DELAY,
    interactionEvents = SITE_CONFIG.ANALYTICS.INTERACTION_EVENTS,
    cookieExpires = SITE_CONFIG.ANALYTICS.COOKIE_EXPIRES,
    enabled = true,
  } = config;

  const initializeGtag = useCallback(() => {
    if (!isBrowser() || !enabled) return;

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', gaId, {
      anonymize_ip: true,
      cookie_expires: cookieExpires,
      send_page_view: false
    });

    return gtag;
  }, [gaId, cookieExpires, enabled]);

  const sendPageView = useCallback((gtag) => {
    if (!gtag || !isBrowser()) return;

    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }, []);

  const loadAnalyticsScript = useCallback(() => {
    if (hasLoadedRef.current || !isBrowser() || !enabled) return;

    hasLoadedRef.current = true;

    try {
      // Create and load gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.onerror = () => {
        console.warn('Failed to load Google Analytics script');
        hasLoadedRef.current = false;
      };

      document.head.appendChild(script);

      // Initialize gtag and send page view
      const gtag = initializeGtag();
      if (gtag) {
        sendPageView(gtag);
      }
    } catch (error) {
      console.warn('Error loading Google Analytics:', error);
      hasLoadedRef.current = false;
    }
  }, [gaId, initializeGtag, sendPageView, enabled]);

  const setupInteractionListeners = useCallback(() => {
    if (!isBrowser() || !enabled) return null;

    let isCleanedUp = false;

    const loadOnce = () => {
      if (isCleanedUp) return;
      loadAnalyticsScript();
      cleanup();
    };

    const cleanup = () => {
      if (isCleanedUp) return;
      isCleanedUp = true;

      interactionEvents.forEach(event => {
        document.removeEventListener(event, loadOnce);
      });
      cleanupRef.current = null;
    };

    // Add event listeners for user interaction
    interactionEvents.forEach(event => {
      document.addEventListener(event, loadOnce, {
        passive: true,
        once: true
      });
    });

    // Store cleanup function
    cleanupRef.current = cleanup;
    return cleanup;
  }, [interactionEvents, loadAnalyticsScript, enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Set up interaction-based loading
    const cleanupInteractionListeners = setupInteractionListeners();

    // Fallback: load after delay if no interaction
    const fallbackTimer = setTimeout(() => {
      if (!hasLoadedRef.current) {
        loadAnalyticsScript();
      }
    }, loadDelay);

    // Cleanup function
    return () => {
      clearTimeout(fallbackTimer);
      if (cleanupInteractionListeners) {
        cleanupInteractionListeners();
      }
    };
  }, [setupInteractionListeners, loadAnalyticsScript, loadDelay, enabled]);

  return {
    isLoaded: hasLoadedRef.current,
    loadAnalytics: loadAnalyticsScript,
  };
};
