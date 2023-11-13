/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				accent: "#5755FF",
				accent_hover: "#7A78FF",
				accent_hover_light: "#F5F3FF",
				accent_focus: "#2726C0",
				accent_focus_light: "#D5D2FF",
				grey: "grey",
				grey_light: "#DDDEE0"
			}
		}
	},
	plugins: []
};
