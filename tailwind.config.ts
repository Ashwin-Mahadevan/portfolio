import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			serif: ["var(--font-serif)"],
			sans: ["var(--font-sans)"],
		},
		screens: {
			sm: "640px",
			md: "960px",
			lg: "1280px",
		},

		container: {
			padding: {
				DEFAULT: "0.5rem",
			},
		},
		extend: {},
	},
	plugins: [typography],
} satisfies Config;
