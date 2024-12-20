import Image from "next/image";
import Link from "next/link";
import profile from "@/../public/profile.png";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Image src={profile} alt="Profile" width={300} height={300} />

			<div className="">
				<h1 className="text-4xl font-bold">Hey! I'm Ashwin.</h1>
				<h3 className="text-2xl font-bold">I like math and software.</h3>

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
