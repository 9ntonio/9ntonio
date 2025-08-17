import { useState, useEffect, useCallback, useMemo } from "react";
import { SITE_CONFIG } from "../config/constants";

/**
 * Custom hook for managing particle system state and initialization
 * Encapsulates particle-related logic and provides clean interface
 */
export const useParticleSystem = () => {
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  // Memoize particle options to prevent unnecessary re-renders
  const particleOptions = useMemo(() => ({
    preset: "triangles",
    particles: {
      color: { value: "#fff" },
      line_linked: {
        color: "#006d75",
        distance: 175,
        enable: true,
        opacity: 1,
        width: 1,
      },
    },
    detectRetina: true,
    fpsLimit: 60,
    fullScreen: { zIndex: -1 },
    background: { color: "#00474f" },
  }), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < (SITE_CONFIG?.PERFORMANCE?.MOBILE_BREAKPOINT || 768);

    // Only load particles on desktop with user interaction or delay
    if (!isMobile) {
      let hasInteracted = false;
      let timeoutId;

      const handleInteraction = () => {
        if (!hasInteracted) {
          hasInteracted = true;
          setShowParticles(true);
          clearTimeout(timeoutId);
        }
      };

      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

      // Add event listeners for user interaction
      events.forEach(event => {
        document.addEventListener(event, handleInteraction, {
          once: true,
          passive: true
        });
      });

      // Fallback timer - load after delay if no interaction
      timeoutId = setTimeout(() => {
        if (!hasInteracted) {
          setShowParticles(true);
        }
      }, SITE_CONFIG?.PERFORMANCE?.PARTICLES_DELAY || 2000);

      // Cleanup function
      return () => {
        clearTimeout(timeoutId);
        events.forEach(event => {
          document.removeEventListener(event, handleInteraction);
        });
      };
    }
  }, []);

  const particlesInit = useCallback(async (engine) => {
    try {
      const { loadTrianglesPreset } = await import("tsparticles-preset-triangles");
      await loadTrianglesPreset(engine);
    } catch (error) {
      console.error("Failed to initialize particles:", error);
      setHasError(true);
      // Re-throw to allow component-level error handling
      throw error;
    }
  }, []);

  const handleParticlesLoaded = useCallback(() => {
    setIsParticlesLoaded(true);
  }, []);

  const resetError = useCallback(() => {
    setHasError(false);
  }, []);

  return {
    isParticlesLoaded,
    hasError,
    showParticles,
    particlesInit,
    handleParticlesLoaded,
    particleOptions,
    resetError,
  };
};
