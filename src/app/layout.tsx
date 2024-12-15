import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";

const font = Merriweather({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
	variable: "--font-serif",
});

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={`${font.variable} font-serif`}>
				<ThemeProvider attribute="class">
					<main className="container relative mx-auto">{props.children}</main>

					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
