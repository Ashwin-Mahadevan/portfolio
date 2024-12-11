import { jsonb, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

type AppleAppStoreTopAppsResult = {
	id: string;
	name: string;
	artist: string;
	release: string;
	url: string;
};

export const apple_app_store_top_apps = pgTable("apple_app_store_top_apps", {
	// Two Letter Country Code
	country: varchar({ length: 2 }).notNull(),
	updated: timestamp(),
	results: jsonb().$type<Array<AppleAppStoreTopAppsResult>>().notNull(),
});
