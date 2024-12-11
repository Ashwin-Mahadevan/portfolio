import { jsonb, pgTable, primaryKey, text, timestamp, varchar } from "drizzle-orm/pg-core";

type AppleAppStoreResults = Array<{
	id: string;
	name: string;
	url: string;
}>;

export const apple_app_store_top_apps = pgTable(
	"apple_app_store_top_apps",
	{
		// Two Letter Country Code
		country: varchar({ length: 2 }).notNull(),
		media: text().notNull(),
		feed: text().notNull(),
		type: text().notNull(),
		updated: timestamp().notNull(),
		results: jsonb().$type<AppleAppStoreResults>().notNull(),
	},
	(table) => [
		primaryKey({
			columns: [table.country, table.media, table.feed, table.type, table.updated],
		}),
	],
);
