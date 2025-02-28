module.exports = {
	content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#b5f5ec",
				secondary: "#5b8c00",
				background: "#00474f",
				highlight: "#fff",
				textColor: "#fff",
			},
			fontFamily: {
				fredoka: ["Fredoka", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", "sans-serif"],
			},
		},
	},
	plugins: [],
};
