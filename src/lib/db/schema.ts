import { jsonb, pgEnum, pgTable, primaryKey, timestamp, varchar } from "drizzle-orm/pg-core";

type AppleAppStoreTopAppsResults = Array<{
	id: string;
	name: string;
	artist: string;
	release: string;
	url: string;
}>;

export const apple_app_store_top_apps_type = pgEnum("apple_app_store_top_apps_type", ["free", "paid"]);
export const apple_app_store_top_apps = pgTable(
	"apple_app_store_top_apps",
	{
		// Two Letter Country Code
		country: varchar({ length: 2 }).notNull(),
		type: apple_app_store_top_apps_type("type").notNull(),
		updated: timestamp().notNull(),
		results: jsonb().$type<AppleAppStoreTopAppsResults>().notNull(),
	},
	(table) => [primaryKey({ columns: [table.country, table.type, table.updated] })],
);
