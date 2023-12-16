import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center fixed bottom-0 left-24 gap-4">
      <div className="w-px h-12 bg-header mx-4"></div>
      <BsLinkedin className="text-header h-10 w-10" />
      <BsGithub className="text-header h-10 w-10" />
      <div className="w-px h-52 bg-header mx-4"></div>
    </div>
  );
}
