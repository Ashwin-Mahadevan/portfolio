"use client";

import Link from "next/link";
import Image from "next/image";
import { LucideMenu } from "lucide-react";
import cover from "@/app/cover.png";
import { useState } from "react";

function Title() {
	return (
		<Link className="flex items-center gap-2" href="/">
			<div className="relative aspect-square h-8">
				<Image
					src={cover}
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

export function Header() {
	const [menu, setMenu] = useState<boolean>(false);

	return (
		<header className="flex flex-col items-stretch border-b border-black">
			<div className="container mx-auto flex h-16 items-center justify-center px-2">
				<Title />

				<div className="flex-1" />

				<button onClick={() => setMenu(!menu)} className="sm:hidden">
					<LucideMenu />
				</button>

				<nav className="hidden gap-4 sm:flex">
					<Link className="leading-none" href="/about">
						About
					</Link>

					<Link className="leading-none" href="/blog">
						Blog
					</Link>

					<Link className="leading-none" href="/projects">
						Projects
					</Link>
				</nav>
			</div>

			{menu && (
				<nav className="flex h-8 w-full items-center justify-center gap-4 sm:hidden">
					<Link className="leading-none" href="/about">
						About
					</Link>
					<Link className="leading-none" href="/blog">
						Blog
					</Link>
					<Link className="leading-none" href="/projects">
						Projects
					</Link>
				</nav>
			)}
		</header>
	);
}
