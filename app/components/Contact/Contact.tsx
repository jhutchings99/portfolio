export default function Contact() {
  return (
    <section
      className="flex justify-center bg-dark-bg h-full pb-12"
      id="contact"
    >
      <div>
        <div className="flex items-center pt-24 md:pt-48 pb-8">
          <div className="w-6 md:w-12 lg:w-24 xl:w-32 h-px bg-accent mx-4"></div>
          <h2 className="text-header text-xl md:text-3xl">Contact</h2>
          <div className="w-24 md:w-48 lg:w-52 xl:w-96 h-px bg-accent mx-4"></div>
        </div>
        <p className="max-w-5xl text-sub p-8">
          Thanks for stopping by! If you&apos;d like to get in touch with me,
          feel free to use the form below or send me an{" "}
          <a href="mailto:jeremyhutchings99@gmail.com" className="text-accent">
            email
          </a>
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-4 p-8"
        >
          <input type="hidden" name="subject" value="Message from portfolio" />
          <div className="flex flex-col text-text">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="rounded text-lg p-2 w-full md:w-[40vw] bg-sub text-dark-bg"
              required
            />
          </div>
          <div className="flex flex-col text-text">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="rounded text-lg p-2 w-full md:w-[40vw] bg-sub text-dark-bg"
              required
            />
          </div>
          <div className="flex flex-col text-text">
            <label>Message</label>
            <textarea
              name="message"
              cols={30}
              rows={10}
              className="rounded text-lg p-2 w-full md:w-[40vw] bg-sub text-dark-bg"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-accent px-8 py-2 rounded-md w-full md:w-[40vw]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
