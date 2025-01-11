import createMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	pageExtensions: ["tsx", "mdx"],

	redirects() {
		const redirects = [
			{
				source: "/social/bluesky",
				destination: "https://bsky.app/profile/ashwinm.com",
				permanent: false,
			},

			{
				source: "/social/github",
				destination: "https://github.com/Ashwin-Mahadevan",

				permanent: false,
			},

			{
				source: "/social/instagram",
				destination: "https://instagram.com/ashwin_mahadevan/",
				permanent: false,
			},

			{
				source: "/social/:domain(x|twitter)",
				destination: "https://:domain.com/shwin_m",
				permanent: false,
			},
		];
		// TODO: Fix type bug in Nextjs.
		return Promise.resolve(redirects);
	},
};

const withMDX = createMDX();

export default withMDX(config);
