"use client";

import Image from "next/image";
import Orbit from "../../assets/orbit.svg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header
      className="bg-dark-bg h-[80vh] flex justify-center items-center p-8"
      id="header"
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <Image
          src={Orbit}
          alt="Orbit pattern"
          className="absolute z-0 opacity-30 h-[1500px] w-[1500px] spinning pointer-events-none"
        />
        <div className="z-10 relative">
          <h5 className="text-accent text-md md:text-xl">
            Hey there, my name is
          </h5>
          <TypeAnimation
            sequence={["Jeremy Hutchings"]}
            speed={10}
            className="text-header text-3xl md:text-5xl font-bold pt-4"
          />
          <h2 className="text-sub text-xl md:text-3xl pt-2">
            Software Engineer
          </h2>
          <h3 className="text-text text-md md:text-xl pt-8 pb-8 max-w-4xl">
            I&apos;m a software engineer specializing in building applications.
            Currently, I&apos;m creating immersive VR courses and teaching web
            development, blending academic knowledge with hands-on experience to
            solve real-world challenges.
          </h3>
          <Link
            className="border-accent border-2 px-4 py-2 text-accent md:px-8 md:py-4 rounded md:text-xl"
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </header>
  );
}
