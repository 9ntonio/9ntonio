/**
 * Particle system configuration
 */
export const PARTICLE_CONFIG = {
	BACKGROUND_COLOR: "#00474f",

	getParticleOptions: (backgroundColor = "#00474f") => ({
		preset: "triangles",
		particles: {
			color: {
				value: "#fff",
			},
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
		fullScreen: {
			zIndex: -1,
		},
		background: {
			color: backgroundColor,
		},
	}),
};
