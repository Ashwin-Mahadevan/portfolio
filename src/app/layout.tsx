import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";

const font = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-serif" });

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html
			lang="en"
			// The `dark` class is only here to ensure that TailwindCSS doesn't purge the dark mode styles.
			// It may be removed by `next-themes` while rendering.
			className="dark"
			// This is needed due to `next-themes`.
			suppressHydrationWarning
		>
			<body className={`${font.variable} font-serif`}>
				<ThemeProvider attribute="class">
					<TopNavigation />
					<main className="container mx-auto">{props.children}</main>
				</ThemeProvider>

				<Analytics />
			</body>
		</html>
	);
}

function TopNavigation() {
	return (
		<nav className="container sticky top-0 mx-auto my-4 flex flex-col items-center justify-center gap-4">
			<div className="flex items-center justify-center">
				<Link href="/">
					<h1 className="text-3xl font-bold leading-none">Ashwin Mahadevan</h1>
				</Link>
			</div>

			<div className="flex items-center justify-center gap-8">
				<Link href="/about">
					<p className="text-lg leading-none">About</p>
				</Link>

				<Link href="/tools">
					<p className="text-lg leading-none">Tools</p>
				</Link>
			</div>
		</nav>
	);
}
