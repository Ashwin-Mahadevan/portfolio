/** @type {Exclude<import("next").NextConfig["redirects"], undefined>} */
async function redirects() {
	return await Promise.resolve([
		{
			source: "/blog",
			destination: "https://ashwinm.substack.com/",
			permanent: false,
		},
	]);
}

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	redirects,
};

export default config;
