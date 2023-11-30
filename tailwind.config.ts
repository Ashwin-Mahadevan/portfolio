import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			serif: ["var(--font-serif)"],
			sans: ["var(--font-sans)"],
		},
		extend: {},
	},
} satisfies Config;
