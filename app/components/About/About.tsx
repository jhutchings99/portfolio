import Image from "next/image";
import Headshot from "../../assets/headshot.jpg";

export default function About() {
  return (
    <section className="flex justify-center bg-dark-bg h-[60vh]" id="about">
      <div>
        <div className="flex items-center pt-48 pb-8">
          <div className="w-32 h-px bg-accent mx-4"></div>
          <h2 className="text-header text-5xl">About Me</h2>
          <div className="w-96 h-px bg-accent mx-4"></div>
        </div>
        <div className="flex items-center gap-12 w-[55vw]">
          <div className="relative">
            <div className="h-[300px] w-[300px] border-accent border-2 absolute -top-5 -left-5 shadow-lg"></div>
            <Image
              src={Headshot}
              alt="Logo"
              height={300}
              width={300}
              className="relative shadow-sm"
            />
          </div>
          <p className="max-w-4xl text-sub text-2xl">
            Back in 2016 I took my first programming class in high school and
            fell in love, now I am a senior Software Engineering student at Utah
            Tech University, graduating in May 2024. My journey has taken me
            from tutoring peers as a lab assistant to pioneering VR lab
            development for Utah Tech Online&apos;s courses. Living in St.
            George, Utah, I balance my passion for programming with outdoor
            adventures, pickleball, and gym sessions, embracing both technology
            and an active lifestyle. I am planning on getting into photography
            and astrophotography in the near future.
          </p>
        </div>
      </div>
    </section>
  );
}
