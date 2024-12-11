import { db, schema } from "@/lib/db";
import { z } from "zod";
import countries from "./countries.json";

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

async function handle(request: Request) {
	await Promise.all(countries.map(({ country, type }) => scrape(country, type)));
	return new Response("OK");
}

export const GET = handle;
export const POST = handle;

const scrape = async (country: string, type: string) => {
	if (type !== "free" && type !== "paid") throw new Error("invalid type");

	const response = await fetch(`https://rss.applemarketingtools.com/api/v2/${country}/apps/top-${type}/100/apps.json`);

	// TODO: Handle Error.
	if (!response.ok) {
		console.log(response.status, response.statusText, await response.text());
		throw new Error("bad response");
	}

	console.log("OK");

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
};
