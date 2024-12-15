import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			serif: ["var(--font-serif)"],
			sans: ["var(--font-sans)"],
		},
		extend: {},
	},
	plugins: [typography],
} satisfies Config;
