"use client";

import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="h-24 flex flex-col items-center justify-center bg-dark-bg text-header">
      <p>© 2023 Jeremy Hutchings</p>
      <div className="flex gap-2">
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          className="flex items-center gap-1"
        >
          <p className="text-sub hover:text-text">About</p>
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          className="flex items-center gap-1"
        >
          <p className="text-sub hover:text-text">Experience</p>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          className="flex items-center gap-1"
        >
          <p className="text-sub hover:text-text">Projects</p>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          className="flex items-center gap-1"
        >
          <p className="text-sub hover:text-text">Contact</p>
        </Link>
        <a href="/resume.pdf" download="Resume.pdf">
          <p className="text-sub hover:text-text">Resume</p>
        </a>
      </div>
    </div>
  );
}
