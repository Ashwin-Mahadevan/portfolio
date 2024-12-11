import { Client } from "@upstash/qstash";
import { z } from "zod";

const schema = z.string();
const token = schema.parse(process.env.QSTASH_TOKEN);

export const qstash = new Client({ token });
