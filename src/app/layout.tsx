import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const runtime = "edge";

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
				<Analytics />
			</body>
		</html>
	);
}
