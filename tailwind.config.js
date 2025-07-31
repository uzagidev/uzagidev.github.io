/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
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
};
export const plugins = [];
