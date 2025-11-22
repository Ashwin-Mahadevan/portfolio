"use client";

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
        </h1>

        <div className="flex flex-col gap-2 justify-center items-center flex-1">
          <p>About</p>
          <hr className="border-mauve-ui-hover w-full" />
          <p>Blog</p>
          <hr className="border-mauve-ui-hover w-full" />
          <p>Contact</p>
        </div>
      </div>

      <hr className="border-mauve-ui-hover my-8 w-full" />
    </div>
  );
}
