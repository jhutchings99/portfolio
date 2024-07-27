export default function Experience() {
  return (
    <section
      className="flex justify-center bg-dark-bg h-[70vh]"
      id="experience"
    >
      <div>
        <div className="flex items-center pt-24 pb-8">
          <div className="w-6 md:w-12 lg:w-24 xl:w-32 h-px bg-accent mx-4"></div>
          <h2 className="text-header text-xl md:text-3xl">Experience</h2>
          <div className="w-24 md:w-48 lg:w-52 xl:w-96 h-px bg-accent mx-4"></div>
        </div>
        <div className="p-8">
          <ol className="relative border-s border-text">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5 border border-accent"></div>
              <time className="mb-1 text-xs font-normal leading-none text-link">
                May 2024 - Present
              </time>
              <h3 className="text-lg font-semibold text-header">
                Code School Instructor
              </h3>
              <h5 className="text-md font-medium text-sub">
                Utah Tech University
              </h5>
              <p className="mb-4 text-base font-normal text-text max-w-5xl pt-4">
                As a Code School Instructor, I taught web development, covering
                HTML, CSS, Vue.js, and MongoDB. Over a 6-week instructional
                period, me and one other instructor guided students through
                fundamental web technologies, followed by a 3-week project phase
                where students applied their skills to real-world projects.
                Their final projects garnered attention and praise from local
                tech industry professionals.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5 border border-accent"></div>
              <time className="mb-1 text-xs font-normal leading-none text-link">
                August 2023 - Present
              </time>
              <h3 className="text-lg font-semibold text-header">
                VR Software Engineer
              </h3>
              <h5 className="text-md font-medium text-sub">Utah Tech Online</h5>
              <p className="mb-4 text-base font-normal text-text max-w-5xl pt-4">
                As a VR Software Engineer, I collaborate with other developers
                and artists to create interactive courses that enable professors
                to offer their classes online. My primary tools are C# and
                Unity, and I take pride in delivering immersive and engaging
                educational experiences.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-header rounded-full mt-1.5 -start-1.5 border border-header"></div>
              <time className="mb-1 text-xs font-normal leading-none text-link">
                August 2022 - August 2023
              </time>
              <h3 className="text-lg font-semibold text-header">
                Lab Assistant
              </h3>
              <h5 className="text-md font-medium text-sub">
                Utah Tech University
              </h5>
              <p className="mb-4 text-base font-normal text-text max-w-5xl pt-4">
                As a Computer Science Tutor, I assisted students in courses like
                C++, Python, Data Structures, and Algorithms. I developed
                tailored lesson plans, clarified complex concepts, and enhanced
                students&apos; problem-solving skills, fostering a supportive
                learning environment.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
