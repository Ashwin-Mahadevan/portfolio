import * as schema from "@/lib/db/schema";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({ url: "file:local.db" });
export const db = drizzle(client, { schema });

export { schema };
