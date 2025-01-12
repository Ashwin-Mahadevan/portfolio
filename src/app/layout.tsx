import "@/styles/globals.css";
import { LucideMenu } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import Avatar from "@/../public/profile.png";
import Image from "next/image";
import Link from "next/link";

function Title() {
	return (
		<Link className="flex items-center gap-2" href="/">
			<div className="relative aspect-square h-8">
				<Image
					src={Avatar}
					alt="Profile Picture"
					className="rounded-full"
					fill
				/>
			</div>

			<p className="text-2xl font-medium leading-none tracking-tighter">
				Ashwin Mahadevan
			</p>
		</Link>
	);
}

const font = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-serif",
});

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={`${font.variable} font-serif`}>
				<div className="h-16 border-b border-black">
					<header className="container mx-auto flex h-full items-center justify-center px-2">
						<Title />

						<div className="flex-1" />

						<LucideMenu className="sm:hidden" />

						<nav className="hidden justify-self-end sm:contents">
							<ul className="flex gap-4">
								<li className="leading-none">About</li>
								<li className="leading-none">Blog</li>
								<li className="leading-none">Projects</li>
							</ul>
						</nav>
					</header>
				</div>
				<div className="h-8" />
				<main className="container relative mx-auto">{props.children}</main>

				<div className="h-8" />

				<footer className="h-16 text-center text-sm">
					&copy;{new Date().getFullYear()} Ashwin Mahadevan
				</footer>

				<Analytics />
			</body>
		</html>
	);
}
