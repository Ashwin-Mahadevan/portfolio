import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme";
import { Noto_Serif_Display, Noto_Sans_Display } from "next/font/google";

export const runtime = "edge";

const serif = Noto_Serif_Display({
	subsets: ["latin"],
	variable: "--font-serif",
});

const sans = Noto_Sans_Display({
	subsets: ["latin"],
	variable: "--font-sans",
});

const menulinks = [
	{ href: "/about", text: "About Me" },
	{ href: "/blog", text: "Blog" },
];

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="en"
			// We add the `dark` class here so that Tailwind doesn't purge the dark mode styles.
			// We suppress the hydration warning since this class will be removed by next-themes before hydration.
			className="dark"
			suppressHydrationWarning
		>
			<body className={`${serif.variable} ${sans.variable} font-sans`}>
				<ThemeProvider>
					<nav className="container sticky top-0 mx-auto flex h-16 items-center">
						<div className="flex flex-1">
							<h1 className="font-serif text-3xl font-bold">Ashwin Mahadevan</h1>
						</div>
						<div className="flex-0 flex gap-4">
							{menulinks.map((link, index) => (
								<a key={index} href={link.href} className="text-lg font-semibold">
									{link.text}
								</a>
							))}
						</div>
					</nav>

					<main>{children}</main>
				</ThemeProvider>

				<Analytics />
			</body>
		</html>
	);
}
