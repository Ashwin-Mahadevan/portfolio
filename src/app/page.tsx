import Image from "next/image";
import social_links from "@/lib/socials.json";
import Link from "next/link";
import profile from "@/../public/profile.png";

export default function HomePage() {
	return (
		<div className="flex flex-col justify-center gap-8 py-16 sm:flex-row">
			<Image src={profile} alt="Profile" className="rounded" fill />

			<div className="prose prose-invert">
				<h1 className="font-bold">{"Hi! I'm Ashwin!"}</h1>

				<h2 className="text-balance">
					I'm a math and software guy <br />
					in Berkeley, California.
				</h2>

				<Link href={social_links.bluesky}>
					<p>Bluesky</p>
				</Link>

				<Link href={social_links.github}>
					<p>GitHub</p>
				</Link>

				<Link href={social_links.instagram}>
					<p>Instagram</p>
				</Link>

				<Link href={social_links.x}>
					<p>X / Twitter</p>
				</Link>
			</div>
		</div>
	);
}
