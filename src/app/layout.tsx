import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Noto_Sans_Display as NotoSansDisplay, Noto_Serif_Display as NotoSerifDisplay } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";

export const runtime = "edge";

const sans = NotoSansDisplay({ subsets: ["latin"], variable: "--font-sans" });
const serif = NotoSerifDisplay({ subsets: ["latin"], variable: "--font-serif" });

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
			<body className={`${sans.variable} ${serif.variable} font-sans`}>
				<ThemeProvider attribute="class">
					<nav className="container sticky top-0 mx-auto my-4 flex-col items-center justify-center">
						<div className="flex items-center justify-center">
							<Link href="/">
								<h1 className="font-serif text-3xl font-bold">Ashwin Mahadevan</h1>
							</Link>
						</div>

						<div className="flex items-center justify-center gap-8">
							<Link href="/about">
								<p className="text-lg">About</p>
							</Link>

							<Link href="/about">
								<p className="text-lg">Work</p>
							</Link>

							<Link href="/contact">
								<p className="text-lg">Contact</p>
							</Link>
						</div>
					</nav>

					<main>{props.children}</main>
				</ThemeProvider>

				<Analytics />
			</body>
		</html>
	);
}
