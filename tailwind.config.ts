import { type Config } from "tailwindcss";
import DaisyUI from "daisyui";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [DaisyUI],
} satisfies Config;
