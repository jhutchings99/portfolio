"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-scroll";

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

  if (isScrolled) {
    return (
      <nav className="flex flex-col items-center px-16 py-4 fixed z-50">
        <Image src={Logo} alt="Logo" height={50} width={50} />
        <div className="flex flex-col gap-6 pt-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            className="flex items-center gap-1"
          >
            <p className="text-accent">01.</p>
            <p className="text-link hover:text-header">About</p>
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            className="flex items-center gap-1"
          >
            <p className="text-accent">02.</p>
            <p className="text-link hover:text-header">Experience</p>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            className="flex items-center gap-1"
          >
            <p className="text-accent">03.</p>
            <p className="text-link hover:text-header">Projects</p>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            className="flex items-center gap-1"
          >
            <p className="text-accent">04.</p>
            <p className="text-link hover:text-header">Contact</p>
          </Link>
          <a
            href="/resume.pdf"
            download="Resume.pdf"
            className="flex items-center gap-1"
          >
            <p className="text-accent">05.</p>
            <p className="text-link hover:text-header">Resume</p>
          </a>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="bg-dark-bg flex items-center justify-between px-16 py-4">
        <Image src={Logo} alt="Logo" height={50} width={50} />
        <div className="flex gap-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            className="flex items-center gap-1"
          >
            <p className="text-accent">01.</p>
            <p className="text-link hover:text-header">About</p>
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            className="flex items-center gap-1"
          >
            <p className="text-accent">02.</p>
            <p className="text-link hover:text-header">Experience</p>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            className="flex items-center gap-1"
          >
            <p className="text-accent">03.</p>
            <p className="text-link hover:text-header">Projects</p>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            className="flex items-center gap-1"
          >
            <p className="text-accent">04.</p>
            <p className="text-link hover:text-header">Contact</p>
          </Link>

          <a
            href="/resume.pdf"
            download="Resume.pdf"
            className="flex items-center gap-1"
          >
            <p className="text-accent">05.</p>
            <p className="text-link hover:text-header">Resume</p>
          </a>
        </div>
      </nav>
    );
  }
}
