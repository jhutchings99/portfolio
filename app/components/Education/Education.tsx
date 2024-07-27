import Image from "next/image";
import UTULogo from "../../assets/utu-logo.png";

export default function Education() {
  return (
    <section className="flex justify-center bg-dark-bg" id="education">
      <div>
        <div className="flex items-center pt-96 pb-16">
          <div className="w-6 md:w-12 lg:w-24 xl:w-32 h-px bg-accent mx-4"></div>
          <h2 className="text-header text-xl md:text-3xl">Education</h2>
          <div className="w-24 md:w-48 lg:w-52 xl:w-96 h-px bg-accent mx-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
          <div className="relative">
            <Image
              src={UTULogo}
              alt="Logo"
              className="relative shadow-sm h-[75px] md:h-[150px] w-full"
            />
          </div>
          <p className="max-w-3xl text-sub text-md md:text-lg">
            I graduated from Utah Tech University in St. George, Utah, in May
            2024 with a Bachelor of Science in Software Engineering, achieving a
            GPA of 3.91. My coursework included Advanced Algorithms, Data
            Structures, Distributed Systems, Embedded Systems, Database
            Management and Design, Software Design, and Web Application
            Development.
          </p>
        </div>
      </div>
    </section>
  );
}
