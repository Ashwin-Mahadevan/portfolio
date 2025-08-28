"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import profile from "@/app/icon.png";
import { LucideX, LucideMenu } from "lucide-react";

function Title() {
	return (
		<Link className="flex items-center gap-2" href="/">
			<div className="relative aspect-square h-8">
				<Image src={profile} alt="Avatar of Ashwin Mahadevan" fill />
			</div>

			<p className="text-2xl font-medium leading-none tracking-tighter">
				Ashwin Mahadevan
			</p>
		</Link>
	);
}

export function Header() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<header className="flex flex-col items-stretch border-b border-black">
			<div className="container mx-auto flex h-16 items-center">
				<Title />

				<div className="flex-1" />
				<button onClick={() => setOpen(!open)} className="sm:hidden">
					{open ? <LucideX /> : <LucideMenu />}
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

			{open && (
				<nav className="flex h-8 w-full items-center justify-center gap-4 sm:hidden">
					<Link
						className="leading-none"
						href="/about"
						onClick={() => setOpen(false)}
					>
						About
					</Link>

					<Link
						className="leading-none"
						href="/blog"
						onClick={() => setOpen(false)}
					>
						Blog
					</Link>

					<Link
						className="leading-none"
						href="/projects"
						onClick={() => setOpen(false)}
					>
						Projects
					</Link>
				</nav>
			)}
		</header>
	);
}
