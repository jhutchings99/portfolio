"use client";

import Image from "next/image";
import Orbit from "../../assets/orbit.svg";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <header
      className="bg-dark-bg h-[80vh] flex justify-center items-center"
      id="header"
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <Image
          src={Orbit}
          alt="Orbit pattern"
          className="absolute z-0 opacity-30 h-[2000px] w-[2000px] spinning pointer-events-none"
        />
        <div className="z-10 relative">
          <h5 className="text-accent text-xl">Hey there, my name is</h5>
          <TypeAnimation
            sequence={["Jeremy Hutchings"]}
            speed={10}
            className="text-header text-5xl font-bold pt-4"
          />
          <h2 className="text-sub text-3xl pt-2">
            Full-Stack Software Engineer
          </h2>
          <h3 className="text-text text-xl pt-8 pb-8 max-w-4xl">
            I&apos;m a software engineering student with a passion for
            developing innovative software solutions, blending academic learning
            and practical project experience to address a variety of real-world
            challenges. Currently, I&apos;m building interactive VR software for{" "}
            <a
              className="text-accent"
              href="https://online.utahtech.edu/immersive/"
              target="_blank"
            >
              Utah Tech Online
            </a>
          </h3>
          <button className="border-accent border-2 text-accent px-8 py-4 rounded text-xl">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </header>
  );
}
