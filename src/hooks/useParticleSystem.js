import { useState, useEffect, useCallback } from "react";
import { SITE_CONFIG } from "../config/constants";

/**
 * Custom hook for managing particle system state and initialization
 * Encapsulates particle-related logic and provides clean interface
 */
export const useParticleSystem = () => {
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < SITE_CONFIG.PERFORMANCE.MOBILE_BREAKPOINT;

    // Only load particles on desktop after delay for better initial load
    if (!isMobile) {
      const timer = setTimeout(() => {
        setShowParticles(true);
      }, SITE_CONFIG.PERFORMANCE.PARTICLES_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  const particlesInit = useCallback(async (engine) => {
    try {
      const { loadTrianglesPreset } = await import("tsparticles-preset-triangles");
      await loadTrianglesPreset(engine);
    } catch (error) {
      console.error("Failed to initialize particles:", error);
      setHasError(true);
    }
  }, []);

  const handleParticlesLoaded = useCallback(() => {
    setIsParticlesLoaded(true);
  }, []);

  return {
    isParticlesLoaded,
    hasError,
    showParticles,
    particlesInit,
    handleParticlesLoaded,
  };
};
