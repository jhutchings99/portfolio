import Image from "next/image";
import GoGas from "../../assets/gogas.png";
import CertSitter from "../../assets/certsitter.png";
import Munchy from "../../assets/munchy.png";
import Trveld from "../../assets/trveld.png";
import RPCChat from "../../assets/rpc-chat.png";
import Chord from "../../assets/chord.png";
import CashFlow from "../../assets/cashflow.jpg";
import PlantStats from "../../assets/plant-stats.jpg";
import Fractal from "../../assets/fractal.png";
import Showcase from "../../assets/showcase.png";
import Tag from "../Tag/Tag";
import { TbArrowUpRight } from "react-icons/tb";

export default function Projects() {
  return (
    <section
      className="flex justify-center bg-dark-bg h-full pb-8 pt-[850px] md:pt-48"
      id="projects"
    >
      <div>
        <div className="flex items-center md:pt-48 pb-16">
          <div className="w-6 md:w-12 lg:w-24 xl:w-32 h-px bg-accent mx-4"></div>
          <h2 className="text-header text-xl md:text-3xl">Projects</h2>
          <div className="w-24 md:w-48 lg:w-52 xl:w-96 h-px bg-accent mx-4"></div>
        </div>

        {/* Project List */}
        <div>
          {/* Trveld */}
          <a href="https://trveld.com" target="_blank">
            <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
              <div>
                <Image
                  src={Trveld}
                  alt="Project 1"
                  width={200}
                  height={48}
                  className="rounded border-2 border-slate-200/10 hover:border-slate-200/30"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                  Trveld <TbArrowUpRight />
                </h3>
                <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                  Trveld was my capstone project for my bachelor&apos;s degree.
                  It is a travel tracking application where users can use an
                  interactive map to track where they have been and upload all
                  of their memories in one central location. They can also post
                  about their travels to the social feed so that other users can
                  learn about new places to visit.
                </p>
                <div className="flex gap-2 max-w-[20vw] flex-wrap">
                  <Tag name="PostgreSQL" />
                  <Tag name="Go" />
                  <Tag name="Gin" />
                  <Tag name="GORM" />
                  <Tag name="AWS S3 Bucket" />
                  <Tag name="Next.js" />
                  <Tag name="TypeScript" />
                  <Tag name="Tailwind" />
                </div>
              </div>
            </div>
          </a>

          {/* CertSitter */}
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
              </h3>
              <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                CertSitter is a web application that me and my three team
                members built for a 24 hour hackathon. It allows restauraunts to
                easily manage their employees certifications e.g food handlers
                permit and alcohol handlers permit.
              </p>
              <div className="flex gap-2 max-w-[20vw] flex-wrap">
                <Tag name="React" />
                <Tag name="Firebase" />
              </div>
            </div>
          </div>

          {/* RPC Chat */}
          <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
            <div>
              <Image
                src={RPCChat}
                alt="Project 1"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 hover:border-slate-200/30"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                RPC Chat
              </h3>
              <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                Project from CS-3410 Distributed Systems where we built a
                real-time chat application using Remote Procedure Calls (RPC)
                with Go. The chat application allows users to create a server
                and join that server as a client to chat with other users in the
                server.
              </p>
              <div className="flex gap-2 max-w-[20vw] flex-wrap">
                <Tag name="Go" />
              </div>
            </div>
          </div>

          {/* Chord */}
          <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
            <div>
              <Image
                src={Chord}
                alt="Project 1"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 hover:border-slate-200/30"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                Chord
              </h3>
              <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                Project from CS-3410 Distributed Systems where we implemented
                Chord a distributed hash table (DHT) that provides a scalable
                way to store and retrieve key-value pairs in a distributed
                system.
              </p>
              <div className="flex gap-2 max-w-[20vw] flex-wrap">
                <Tag name="Go" />
              </div>
            </div>
          </div>

          {/* Student Showcase */}
          <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
            <div>
              <Image
                src={Showcase}
                alt="Project 1"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 hover:border-slate-200/30 object-scale-down h-24"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                Computing Student Showcase
              </h3>
              <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                The Computing Student Showcase is a web application that I built
                using Vue.js and MongoDB. It allows students to showcase their
                projects and connect with other students in the computing
                program at Utah Tech University. This was built for one of my
                professors after they approached me with the idea.
              </p>
              <div className="flex gap-2 max-w-[20vw] flex-wrap">
                <Tag name="HTML" />
                <Tag name="CSS" />
                <Tag name="Vue.js" />
                <Tag name="MongoDB" />
                <Tag name="AWS S3 Bucket" />
              </div>
            </div>
          </div>

          {/* Cash Flow */}
          <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
            <div>
              <Image
                src={CashFlow}
                alt="Project 1"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 hover:border-slate-200/30 object-scale-down h-24"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                CashFlow
              </h3>
              <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                CashFlow is an iOS project using Swift and Story Boards. It is a
                personal finance application that allows users to track their
                expenses and income. Users can add transactions, view their
                transaction history, and see a summary of their expenses and
                income.
              </p>
              <div className="flex gap-2 max-w-[20vw] flex-wrap">
                <Tag name="Swift" />
                <Tag name="xCode" />
                <Tag name="CocoaPods" />
              </div>
            </div>
          </div>

          {/* Plant Stats */}
          <a href="https://github.com/jhutchings99/plant-stats" target="_blank">
            <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
              <div>
                <Image
                  src={PlantStats}
                  alt="Project 1"
                  width={200}
                  height={48}
                  className="rounded border-2 border-slate-200/10 hover:border-slate-200/30"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                  PlantStats
                  <TbArrowUpRight />
                </h3>
                <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                  PlantStats is an embedded systems project where I built a
                  system that monitors the environment of a plant and sends the
                  data to a web application. The web application displays the
                  data in real-time and provides users with a way to monitor
                  their plant&rsquo;s health.
                </p>
                <div className="flex gap-2 max-w-[20vw] flex-wrap">
                  <Tag name="Arduino" />
                  <Tag name="Bluetooth" />
                  <Tag name="ESP32" />
                  <Tag name="Next.js" />
                  <Tag name="Tailwind" />
                </div>
              </div>
            </div>
          </a>

          {/* Cash Flow */}
          <div className="flex gap-4 hover:bg-hover px-6 py-6 rounded-xl hover:shadow-lg my-2">
            <div>
              <Image
                src={Fractal}
                alt="Project 1"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 hover:border-slate-200/30 object-scale-down h-24"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-header flex items-center gap-2">
                Fractal Image Generator
              </h3>
              <p className="mb-4 text-base font-normal text-sub max-w-3xl pt-1">
                Fractal Image Generator is a project from CS-3005 C++ where we
                built a program that generates fractal images. The program
                allows users to generate different types of fractals and
                customize the fractal image. It has both a GUI and CLI interface
              </p>
              <div className="flex gap-2 max-w-[20vw] flex-wrap">
                <Tag name="C++" />
              </div>
            </div>
          </div>

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
