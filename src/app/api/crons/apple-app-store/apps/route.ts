import { db, schema } from "@/lib/db";
import { z } from "zod";

const alphabet = "abcdefghijklmnopqrstuvwxyz" as const;
const types = ["free", "paid"] as const;

function* generate_parameters() {
	for (const first_letter of alphabet) {
		for (const second_letter of alphabet) {
			yield* [
				{ media: "music", feed: "most-played", type: "albums" },
				{ media: "music", feed: "most-played", type: "music-videos" },
				{ media: "music", feed: "most-played", type: "playlists" },
				{ media: "music", feed: "most-played", type: "songs" },

				{ media: "podcasts", feed: "top", type: "podcasts" },
				{ media: "podcasts", feed: "top-subscriber", type: "podcasts" },
				{ media: "podcasts", feed: "top", type: "podcast-episodes" },
				{ media: "podcasts", feed: "top-subscriber", type: "podcast-channels" },

				{ media: "apps", feed: "top-free", type: "apps" },
				{ media: "apps", feed: "top-paid", type: "apps" },

				{ media: "books", feed: "top-free", type: "books" },
				{ media: "books", feed: "top-paid", type: "books" },

				{ media: "audio-books", feed: "top", type: "audio-books" },
			].map((parameters) => ({ ...parameters, country: `${first_letter}${second_letter}`, count: 100 }));
		}
	}
}

const rss_parameters = Array.from(generate_parameters());

const rss_schema = z.object({
	feed: z.object({
		title: z.string(),
		country: z.string(),
		updated: z.string(),
		results: z
			.object({
				id: z.string(),
				name: z.string(),
				url: z.string(),
			})
			.array(),
	}),
});

async function handle() {
	const results = rss_parameters.map(async (parameters) => {
		try {
			const url = `https://rss.applemarketingtools.com/api/v2/${parameters.country}/${parameters.media}/${parameters.feed}/${parameters.count}/${parameters.type}.json`;
			const response = await fetch(url);

			const data = rss_schema.parse(await response.json());

			console.log(`Scraped parameters: ${JSON.stringify(parameters)}`);

			return {
				country: data.feed.country,
				media: parameters.media,
				feed: parameters.feed,
				type: parameters.type,
				updated: data.feed.updated,
				results: data.feed.results.map((result) => ({ id: result.id, name: result.name, url: result.url })),
			};
		} catch (error) {
			console.error(`Failed to scrape parameters: ${JSON.stringify(parameters)}`);
			return null;
		}
	});

	const filtered = (await Promise.all(results)).filter((result) => result !== null);

	console.log(`Scraped ${filtered.length} RSS feeds`);

	await db.insert(schema.apple_app_store_top_apps).values(filtered).execute();

	return new Response("OK");
}

export const GET = handle;
export const POST = handle;
