import { db, schema } from "@/lib/db";
import { z } from "zod";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const types = ["free", "paid"] as const;

function* list() {
	for (const first_letter of alphabet) {
		for (const second_letter of alphabet) {
			for (const type of types) yield { country: `${first_letter}${second_letter}`, type };
		}
	}
}

const countries = Array.from(list());

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

async function handle() {
	const results = countries.map(({ country, type }) =>
		fetch(`https://rss.applemarketingtools.com/api/v2/${country}/apps/top-${type}/100/apps.json`)
			.then(async (response) => rss_schema.parse(await response.json()))
			.then(({ feed }) =>
				db
					.insert(schema.apple_app_store_top_apps)
					.values({
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
					})
					.execute(),
			)
			.then(() => console.log(`Scraped: country='${country}', type='${type}'`))
			.catch(() => console.error(`Failed to Scrape: country='${country}', type='${type}'`)),
	);

	await Promise.allSettled(results);
	return new Response("OK");
}

export const GET = handle;
export const POST = handle;
