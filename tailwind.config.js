module.exports = {
	content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#b5f5ec",
				secondary: "#5b8c00",
				background: "#00474f",
				highlight: "#FFE8BA",
				textColor: "#fff",
			},
			fontFamily: {
				fredoka: [
					"Fredoka",
					// System fonts with similar characteristics to Fredoka
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					// Rounded sans-serif fonts that match Fredoka's character
					"Nunito",
					"Comfortaa",
					"Quicksand",
					// Standard fallbacks
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"sans-serif",
				],
			},
		},
	},
	plugins: [],
};
