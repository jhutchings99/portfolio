import Image from "next/image";
import GoGas from "../../assets/gogas.png";
import CertSitter from "../../assets/certsitter.png";
import Munchy from "../../assets/munchy.png";
import Tag from "../Tag/Tag";
import { TbArrowUpRight } from "react-icons/tb";

export default function Projects() {
  return (
    <section
      className="flex justify-center bg-dark-bg h-full pb-12"
      id="projects"
    >
      <div>
        <div className="flex items-center pt-48 pb-8">
          <div className="w-32 h-px bg-accent mx-4"></div>
          <h2 className="text-header text-3xl">Projects</h2>
          <div className="w-96 h-px bg-accent mx-4"></div>
        </div>

        {/* Project List */}
        <div>
          {/* Munchy */}
          <a
            href="https://whimsical-sherbet-0f678c.netlify.app/"
            target="_blank"
          >
            <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
              <div>
                <Image
                  src={Munchy}
                  alt="Project 1"
                  width={200}
                  height={48}
                  className="rounded border-2 border-slate-200/10 hover:border-slate-200/30"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                  Munchy <TbArrowUpRight />
                </h3>
                <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                  Munchy is a social media web application built using the MERN
                  stack and provides users with a place to share and discover
                  recipes. It has a user-friendly interface that allows users to
                  search for a specific recipe, create a recipe, follow and
                  unfollow users, and interact with recipes that you find.
                </p>
                <div className="flex gap-2 max-w-[20vw] flex-wrap">
                  <Tag name="MongoDB" />
                  <Tag name="Express" />
                  <Tag name="React" />
                  <Tag name="Node.js" />
                  <Tag name="Tailwind" />
                </div>
              </div>
            </div>
          </a>

          {/* CertSitter */}
          <a href="https://github.com/88jpl/codeCamp23" target="_blank">
            <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
              <div>
                <Image
                  src={CertSitter}
                  alt="Project 1"
                  width={200}
                  height={48}
                  className="rounded border-2 border-slate-200/10 hover:border-slate-200/30"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                  CertSitter
                  <TbArrowUpRight />
                </h3>
                <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                  CertSitter is a web application that me and my three team
                  members built for a 24 hour hackathon. It allows restauraunts
                  to easily manage their employees certifications e.g food
                  handlers permit and alcohol handlers permit.
                </p>
                <div className="flex gap-2 max-w-[20vw] flex-wrap">
                  <Tag name="React" />
                  <Tag name="Firebase" />
                </div>
              </div>
            </div>
          </a>

          {/* Go Gas */}
          <a
            href="https://delightful-profiterole-d1df4c.netlify.app/"
            target="_blank"
          >
            <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
              <div>
                <Image
                  src={GoGas}
                  alt="Project 1"
                  width={200}
                  height={48}
                  className="rounded border-2 border-slate-200/10 hover:border-slate-200/30"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                  Go Gas <TbArrowUpRight />
                </h3>
                <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                  Go Gas is a web application built using the MERN stack and
                  provides users with current gas prices. It has a user-friendly
                  interface that allows users to search for gas prices at nearby
                  locations and add prices to the database. With its sleek
                  design and advanced functionality, Go Gas is a convenient and
                  reliable way to keep track of gas prices in real-time.
                </p>
                <div className="flex gap-2 max-w-[20vw] flex-wrap">
                  <Tag name="MongoDB" />
                  <Tag name="Express" />
                  <Tag name="React" />
                  <Tag name="Node.js" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
