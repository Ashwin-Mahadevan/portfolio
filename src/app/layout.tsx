import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Open_Sans } from "next/font/google";
import type { ReactNode } from "react";

const font = Open_Sans({
	subsets: ["latin"],
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
