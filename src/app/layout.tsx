import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "./header";
import type { Metadata } from "next";

const font = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-serif",
});

export const metadata = {
	title: "Ashwin Mahadevan",
	description: "Personal Website of Ashwin Mahadevan",
} satisfies Metadata;

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={`${font.variable} font-serif`}>
				<Header />

				<main className="container relative mx-auto min-h-screen py-8">
					{props.children}
				</main>

				<footer className="flex h-16 items-center justify-center">
					<p className="text-sm">
						&copy;{new Date().getFullYear()} Ashwin Mahadevan
					</p>
				</footer>

				<Analytics />
			</body>
		</html>
	);
}
