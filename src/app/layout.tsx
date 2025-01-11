import "@/styles/globals.css";
import { LucideMenu } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import Avatar from "@/../public/profile.png";
import Image from "next/image";
import Link from "next/link";

const font = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-serif",
});

function Title() {
	return (
		<div className="flex items-center gap-2">
			<Link className="relative aspect-square h-10 rounded-full" href="/">
				<Image
					src={Avatar}
					alt="Profile Picture"
					className="rounded-full"
					fill
				/>
			</Link>

			<h1 className="text-2xl tracking-tighter">Ashwin Mahadevan</h1>
		</div>
	);
}

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={`${font.variable} font-serif`}>
				<header className="container mx-auto flex h-16 items-center border-b border-black px-2">
					<Title />

					<div className="flex-1" />

					<LucideMenu />

					<nav className="hidden justify-self-end sm:contents">
						<ul className="flex gap-4">
							<li>About</li>
							<li>Blog</li>
							<li>Projects</li>
						</ul>
					</nav>
				</header>
				<main className="container relative mx-auto">{props.children}</main>

				<Analytics />
			</body>
		</html>
	);
}
