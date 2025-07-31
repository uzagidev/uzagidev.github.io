/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			animation: {
				gradient: "gradient 8s linear infinite",
			},
			keyframes: {
				gradient: {
					to: {
						backgroundPosition: "var(--bg-size) 0",
					},
				},
			},
			colors: {
				"my-orange": "#c2410c",
			},
		},
	},
	plugins: [],
};
