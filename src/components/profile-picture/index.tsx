import Profile from "./profile-picture.png";
import Image from "next/image";

export function ProfilePicture() {
	return <Image src={Profile} alt="Ashwin Mahadevan" className="rounded-full" />;
}
