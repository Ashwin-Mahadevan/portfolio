import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	pageExtensions: ["tsx", "mdx"],
};

export default withMDX(config);
