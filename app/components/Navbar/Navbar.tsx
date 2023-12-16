"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const threshold = 100;
    setIsScrolled(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    initial: {
      position: "absolute",
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    scrolled: {
      position: "fixed",
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (isScrolled) {
    return (
      <nav className="bg-dark-bg flex flex-col items-center px-16 py-4 fixed">
        <Image src={Logo} alt="Logo" height={50} width={50} />
        <div className="flex flex-col gap-8 pt-8">
          <button className="flex items-center gap-1">
            <p className="text-accent">01.</p>
            <p className="text-link">About</p>
          </button>
          <button className="flex items-center gap-1">
            <p className="text-accent">02.</p>
            <p className="text-link">Experience</p>
          </button>
          <button className="flex items-center gap-1">
            <p className="text-accent">03.</p>
            <p className="text-link">Projects</p>
          </button>
          <button className="flex items-center gap-1">
            <p className="text-accent">04.</p>
            <p className="text-link">Contact</p>
          </button>
          <button className="flex items-center gap-1">
            <p className="text-accent">05.</p>
            <p className="text-link">Resume</p>
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="bg-dark-bg flex items-center justify-between px-16 py-4">
        <Image src={Logo} alt="Logo" height={50} width={50} />
        <div className="flex gap-8">
          <button className="flex items-center gap-1">
            <p className="text-accent">01.</p>
            <p className="text-link">About</p>
          </button>
          <button className="flex items-center gap-1">
            <p className="text-accent">02.</p>
            <p className="text-link">Experience</p>
          </button>
          <button className="flex items-center gap-1">
            <p className="text-accent">03.</p>
            <p className="text-link">Projects</p>
          </button>
          <button className="flex items-center gap-1">
            <p className="text-accent">04.</p>
            <p className="text-link">Contact</p>
          </button>
          <button className="flex items-center gap-1">
            <p className="text-accent">05.</p>
            <p className="text-link">Resume</p>
          </button>
        </div>
      </nav>
    );
  }
}
