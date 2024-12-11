import { z } from "zod";

const rss_schema = z.object({
	feed: z.object({
		title: z.string(),
		country: z.string(),
		updated: z.coerce.date(),
		results: z
			.object({
				artistName: z.string(),
				id: z.string(),
				releaseDate: z.string(),
				name: z.string(),
				url: z.string(),
			})
			.array(),
	}),
});

const handler = async (request: Request, props: { params: Promise<{ country: string; type: string }> }) => {
	const { country, type } = await props.params;

	const url = `https://rss.applemarketingtools.com/api/v2/${country}/apps/top-${type}/100/apps.json`;
	const response = await fetch(url);

	// TODO: Handle Error.
	if (!response.ok) throw new Error();

	const {feed} = rss_schema.parse(await response.json());

	const data = 

	return new Response("OK");
};

export const GET = handler;
export const POST = handler;
