import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function SocialLinks() {
  return (
    <>
      <div className="flex-col items-center fixed bottom-0 left-24 gap-4 z-10 hidden xl:flex">
        <div className="w-px h-12 bg-header mx-4"></div>
        <a
          href="https://www.linkedin.com/in/jeremy-hutchings99/"
          target="_blank"
        >
          <BsLinkedin className="text-header h-10 w-10 hover:text-sub" />
        </a>
        <a href="https://github.com/jhutchings99" target="_blank">
          <BsGithub className="text-header h-10 w-10 hover:text-sub" />
        </a>
        <div className="w-px h-52 bg-header mx-4"></div>
      </div>

      <div className="flex items-center fixed bottom-8 left-0 gap-4 z-10 xl:hidden">
        <div className="w-24 h-px bg-header"></div>
        <a
          href="https://www.linkedin.com/in/jeremy-hutchings99/"
          target="_blank"
        >
          <BsLinkedin className="text-header h-8 w-8 hover:text-sub" />
        </a>
        <a href="https://github.com/jhutchings99" target="_blank">
          <BsGithub className="text-header h-8 w-8 hover:text-sub" />
        </a>
        <div className="w-12 h-px bg-header mx-4"></div>
      </div>
    </>
  );
}
