import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/lib/db/schema";

const url = process.env.DATABASE_URL!;
export const db = drizzle(url, { schema });

export { schema };
