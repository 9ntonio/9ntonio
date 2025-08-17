import { useState, useEffect, useCallback } from "react";
import { PARTICLE_CONFIG } from "../config/particleConfig";

// Performance constants
const PARTICLE_LOAD_DELAY = 750;
const INTERACTION_EVENTS = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
const MOBILE_BREAKPOINT = 768;

/**
 * Custom hook for managing particle system loading
 * Handles device detection, user interaction, and loading states
 */
export const useParticleLoader = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [showParticles, setShowParticles] = useState(false);
	const [fadeInParticles, setFadeInParticles] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsMounted(true);
			const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

			if (!isMobile) {
				let hasInteracted = false;

				const handleInteraction = () => {
					if (!hasInteracted) {
						hasInteracted = true;
						setShowParticles(true);
					}
				};

				INTERACTION_EVENTS.forEach((event) => {
					document.addEventListener(event, handleInteraction, { once: true, passive: true });
				});

				const timer = setTimeout(() => {
					if (!hasInteracted) {
						setShowParticles(true);
					}
				}, PARTICLE_LOAD_DELAY);

				return () => {
					clearTimeout(timer);
					INTERACTION_EVENTS.forEach((event) => {
						document.removeEventListener(event, handleInteraction);
					});
				};
			}
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
		// Slight delay for smoother fade-in
		setTimeout(() => setFadeInParticles(true), 100);
	}, []);

	const getParticleOptions = useCallback(() => {
		return PARTICLE_CONFIG.getParticleOptions();
	}, []);

	return {
		isMounted,
		isParticlesLoaded,
		hasError,
		showParticles,
		fadeInParticles,
		particlesInit,
		handleParticlesLoaded,
		getParticleOptions,
	};
};
