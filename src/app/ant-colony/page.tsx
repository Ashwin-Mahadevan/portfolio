import type { Metadata } from "next";
import { Map } from "./colony";

export const metadata: Metadata = {
	title: "Ant Colony Optimization",
};

export default function AntColonyPage() {
	return (
		<>
			<h1>Ant Colony Optimization</h1>
			<p>Coming soon</p>

			<Map />
		</>
	);
}
