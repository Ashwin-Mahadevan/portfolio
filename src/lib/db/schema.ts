import { text, sqliteTable as pgTable, primaryKey } from "drizzle-orm/sqlite-core";

type AppleAppStoreResults = Array<{
	id: string;
	name: string;
	url: string;
}>;

export const apple_app_store_top_apps = pgTable(
	"apple_app_store_top_apps",
	{
		// Two Letter Country Code
		country: text({ length: 2 }).notNull(),
		media: text().notNull(),
		feed: text().notNull(),
		type: text().notNull(),
		updated: text().notNull(),
		results: text({ mode: "json" }).$type<AppleAppStoreResults>().notNull(),
	},
	(table) => [
		primaryKey({
			columns: [table.country, table.media, table.feed, table.type, table.updated],
		}),
	],
);
