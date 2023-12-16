export default function Experience() {
  return (
    <section
      className="flex justify-center bg-dark-bg h-[60vh]"
      id="experience"
    >
      <div>
        <div className="flex items-center pt-48 pb-8 w-[55vw]">
          <div className="w-32 h-px bg-accent mx-4"></div>
          <h2 className="text-header text-5xl">Experience</h2>
          <div className="w-96 h-px bg-accent mx-4"></div>
        </div>
        <ol className="relative border-s border-text">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5 border border-accent"></div>
            <time className="mb-1 text-sm font-normal leading-none text-link">
              August 2023 - Present
            </time>
            <h3 className="text-xl font-semibold text-header">
              VR Software Engineer
            </h3>
            <h5 className="text-lg font-medium text-sub">Utah Tech Online</h5>
            <p className="mb-4 text-base font-normal text-text max-w-5xl pt-4">
              Currently creating interactive VR multiplayer software for Utah
              Tech Online&apos;s online lab courses using Unity and C# ensuring
              that students have a seemless experience.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-header rounded-full mt-1.5 -start-1.5 border border-header"></div>
            <time className="mb-1 text-sm font-normal leading-none text-link">
              August 2022 - August 2023
            </time>
            <h3 className="text-xl font-semibold text-header">Lab Assistant</h3>
            <h5 className="text-lg font-medium text-sub">
              Utah Tech University
            </h5>
            <p className="mb-4 text-base font-normal text-text pt-4">
              Tutored students in computer science courses such as C++, Python
              and Data Structures, and Algorithms.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
