import { qstash } from "@/lib/qstash";
import { schedule as schedule_apple_app_store_apps } from "@/app/api/crons/apple-app-store/apps/[country]/[type]/schedule";

async function handler() {
	await Promise.all([
		// Apple App Store
		schedule_apple_app_store_apps(),
	]);

	return new Response("OK");
}
export const GET = handler;
export const POST = handler;
