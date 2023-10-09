import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="border-base-300 bg-base-100 border-b shadow">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
				<div className="flex lg:flex-1">
					<Title />
				</div>

				<div className="flex lg:hidden">
					<button type="button" onClick={() => setMobileMenuOpen(true)}>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				<div className="hidden lg:flex lg:gap-x-12">
					<NavLinks />
				</div>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
					<Socials />
				</div>
			</nav>

			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
				<Dialog.Panel className="bg-base-100 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:border sm:border-l sm:shadow">
					<div className="flex items-center justify-between border-b pb-6">
						<Title />

						<button type="button" onClick={() => setMobileMenuOpen(false)}>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>

					<div className="flex flex-col py-6">
						<div className="flex flex-col gap-2 ">
							<NavLinks />
						</div>

						<div className="py-4" />

						<div className="flex justify-center gap-4">
							<Socials />
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}

const Title = () => {
	return (
		<Link href="/" className="flex items-center gap-4">
			<Image
				alt="Ashwin Mahadevan"
				src="/avatar.avif"
				className="ring-primary rounded-full ring-2"
				width={48}
				height={48}
			/>

			<p className="text-xl font-medium">Ashwin Mahadevan</p>
		</Link>
	);
};

const NavLinks = () => (
	<>
		<Link href="/about" className="font-semibold">
			About
		</Link>

		<Link href="/blog" className="font-semibold">
			Blog
		</Link>

		<Link href="/contact" className="font-semibold">
			Contact
		</Link>
	</>
);

const SOCIAL_ICON_SIZE = 32;

const Socials = () => (
	<>
		<Link href="https://www.github.com/Ashwin-Mahadevan">
			<svg className="fill-base-content" viewBox="0 0 100 100" width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE}>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
				/>
			</svg>
		</Link>

		<Link href="https://www.twitter.com/@shwin_m">
			<svg className="fill-base-content" viewBox="0 0 300 300" width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE}>
				<path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
			</svg>
		</Link>

		<Link href="https://www.instagram.com/ashwin_mahadevan">
			<svg viewBox="0 0 132 132" width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE}>
				<path
					className="fill-base-content"
					d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
				/>
				<path
					className="fill-base-100"
					d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
				/>
			</svg>
		</Link>
	</>
);
