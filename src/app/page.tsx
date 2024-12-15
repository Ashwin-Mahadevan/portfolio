import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Image src="/profile.png" alt="Profile" width={300} height={300} />

			<div className="flex flex-col">
				<h1 className="text-5xl">Hi! I'm Ashwin!</h1>
				<p className="text-2xl">I like math and software.</p>

				<div className="py-2" />

				<div className="flex items-center justify-center gap-2">
					<Link
						href="/about"
						className="flex items-center justify-center border px-2 py-1"
					>
						<p className="text-lg">About Me</p>
					</Link>

					<Link
						href="/contact"
						className="flex items-center justify-center border px-2 py-1"
					>
						<p className="text-lg">Get in Touch</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
