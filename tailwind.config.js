import tinycolor from "tinycolor2";

function generateShades(baseColor) {
	return {
		DEFAULT: tinycolor(baseColor).toHexString(),
		50: tinycolor(baseColor).lighten(52).toHexString(),
		100: tinycolor(baseColor).lighten(40).toHexString(),
		200: tinycolor(baseColor).lighten(30).toHexString(),
		300: tinycolor(baseColor).lighten(20).toHexString(),
		400: tinycolor(baseColor).lighten(10).toHexString(),
		500: tinycolor(baseColor).toHexString(),
		600: tinycolor(baseColor).darken(10).toHexString(),
		700: tinycolor(baseColor).darken(20).toHexString(),
		800: tinycolor(baseColor).darken(30).toHexString(),
		900: tinycolor(baseColor).darken(40).toHexString(),
	};
}

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: generateShades("#3D51EE"),
				secondary: generateShades("#65CD4E"),
				background: "#161616",
				"input-bg": "#3D3D3D",
				textSecondary: "#E7E7E7",
				bgSecondary: "#F6F6F6",
				borderColor: "#2E2E2E",
			},
			fontFamily: {
				sans: ["Plus Jakarta Sans", "Arial", "sans-serif"],
				heading: ["Space Grotesk", "Arial", "sans-serif"],
			},
			container: {
				center: true,
				padding: "1rem",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("tailwindcss-animate")],
};
