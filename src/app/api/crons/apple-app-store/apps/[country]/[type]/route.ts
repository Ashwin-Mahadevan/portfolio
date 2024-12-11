import { db, schema } from "@/lib/db";
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

const handler = async (request: Request, props: { params: Promise<{ country: string; type: "free" | "paid" }> }) => {
	const { country, type } = await props.params;

	const response = await fetch(`https://rss.applemarketingtools.com/api/v2/${country}/apps/top-${type}/100/apps.json`);

	// TODO: Handle Error.
	if (!response.ok) throw new Error();

	const { feed } = rss_schema.parse(await response.json());

	await db.insert(schema.apple_app_store_top_apps).values({
		country: feed.country,
		updated: feed.updated,
		type,
		results: feed.results.map((result) => ({
			id: result.id,
			name: result.name,
			artist: result.artistName,
			release: result.releaseDate,
			url: result.url,
		})),
	});

	return new Response("OK");
};

export const GET = handler;
export const POST = handler;
