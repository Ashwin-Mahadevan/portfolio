import profile_image from "./_profile.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-12 lg:p-16">
      <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">
        <Image
          src={profile_image}
          alt="Ashwin Mahadevan"
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
        <h1 className="text-5xl font-bold leading-tight">
          Hi! I'm
          <br />
          Ashwin
          <br />
          Mahadevan
        </h1>

        <div className="flex flex-col gap-2 justify-end flex-1">
          <button className="bg-mauve-ui text-mauve-base-subtle px-4 py-2 rounded-md">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
