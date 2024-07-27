"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className="flex-col items-center px-16 py-4 fixed z-50 hidden xl:flex">
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
      <>
        <nav className="bg-dark-bg items-center justify-between px-16 py-4 hidden xl:flex">
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
        <Image
          src={Logo}
          alt="Logo"
          height={35}
          width={35}
          className="absolute top-4 left-4 text-accent xl:hidden z-50"
        />

        {isOpen && (
          <IoMdClose
            className="absolute top-4 right-4 h-8 w-8 text-accent xl:hidden z-50"
            onClick={() => {
              setIsOpen(!isOpen);
              console.log(isOpen);
            }}
          />
        )}

        {!isOpen && (
          <RxHamburgerMenu
            className="absolute top-4 right-4 h-8 w-8 text-accent xl:hidden z-50"
            onClick={() => {
              setIsOpen(!isOpen);
              console.log(isOpen);
            }}
          />
        )}

        {isOpen && (
          <nav className="absolute top-0 bg-dark-bg shadow-xl w-full pb-9 z-40">
            <div className="flex flex-col gap-6 pl-4 pt-24">
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                className="flex items-center gap-1"
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
        )}
      </>
    );
  }
}
