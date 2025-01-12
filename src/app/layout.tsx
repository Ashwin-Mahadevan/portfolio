import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "./header";

const font = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-serif",
});

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={`${font.variable} font-serif`}>
				<Header />

				<main className="container relative mx-auto py-8">
					{props.children}
				</main>

				<footer className="h-16 text-center text-sm">
					&copy;{new Date().getFullYear()} Ashwin Mahadevan
				</footer>

				<Analytics />
			</body>
		</html>
	);
}
