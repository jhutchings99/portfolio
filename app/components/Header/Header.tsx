export default function Header() {
  return (
    <header
      className="bg-dark-bg h-[95vh] flex justify-center pt-64"
      id="header"
    >
      <div>
        <h5 className="text-accent text-2xl">Hey there, my name is</h5>
        <h1 className="text-header text-7xl font-bold pt-4">
          Jeremy Hutchings
        </h1>
        <h2 className="text-sub text-5xl pt-2">Full-Stack Software Engineer</h2>
        <h3 className=" text-text text-2xl pt-8 pb-8 max-w-4xl">
          I&apos;m a software engineering student with a passion for developing
          innovative software solutions, blending academic learning and
          practical project experience to address a variety of real-world
          challenges. Current I&apos;m building interactive VR software for{" "}
          <a
            className="text-accent"
            href="https://online.utahtech.edu/immersive/"
            target="_blank"
          >
            Utah Tech Online
          </a>
          .
        </h3>
        <button className="border-accent border-2 text-accent px-8 py-4 rounded text-2xl">
          Let&apos;s Connect
        </button>
      </div>
    </header>
  );
}
