import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	pageExtensions: ["tsx", "mdx"],
	eslint: {
		// TODO: Remove this. Right now, the ESLint config is broken during builds.
		ignoreDuringBuilds: true,
	},
};

export default withMDX(config);
