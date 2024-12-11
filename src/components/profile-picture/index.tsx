import Profile from "../../../public/profile.png";
import Image from "next/image";

export function ProfilePicture() {
	return <Image src={Profile} alt="Ashwin Mahadevan" className="rounded-full" />;
}
