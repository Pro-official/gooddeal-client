module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				title: ["Source Serif Pro", "serif"],
				links: ["Roboto Condensed", "sans-serif"],
				normal: ["Roboto", "sans-serif"],
				header: ["Inter", "sans-serif"],
			},
			spacing: {
				98: "450px",
				100: "500px",
			},
			lineHeight: {
				12: "3rem",
			},
		},
	},
	plugins: [],
};
