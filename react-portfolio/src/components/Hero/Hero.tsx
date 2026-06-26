import { personalInfo } from "../../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center gap-16 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:gap-24 lg:py-20"
    >
      {/* LEFT SIDE */}
      <div className="flex-1">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-green-400">
          {personalInfo.role}
        </p>

        <h1 className="mb-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-8xl">
          Hi, I'm
          <span className="mt-3 block">{personalInfo.firstName}</span>
          <span className="block">{personalInfo.lastName}</span>
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl">
          {personalInfo.summary}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          {/* <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
            View Projects →
          </button> */}
          <a
            href="/Chukwuemeka-Ugochukwu-Resume.pdf"
            download
            className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Download Resume ↓
          </a>

          {/* <button className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white">
            Contact Me ✉
          </button> */}
          <a
            href="#contact"
            className="rounded-xl border border-gray-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white"
          >
            Contact Me ✉
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 justify-center lg:justify-end">
        <div
          className="w-full max-w-lg rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-2xl lg:max-w-2xl"
          style={{ padding: "20px" }}
        >
          {/* Terminal Header */}
          <div className="mb-8 flex gap-3">
            <div className="h-4 w-4 rounded-full bg-red-500"></div>
            <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
          </div>

          {/* Terminal Content */}
          <div className="font-mono">
            <div className="pb-8">
              <p className="mb-3 text-green-400">$ whoami</p>

              <p className="text-xl text-white sm:text-2xl">
                {personalInfo.firstName} {personalInfo.lastName}
              </p>
            </div>

            <div className="my-2 h-px bg-white/10"></div>

            <div className="py-8">
              <p className="mb-3 text-green-400">$ role</p>

              <p className="text-lg text-white sm:text-xl">
                {personalInfo.role}
              </p>
            </div>

            <div className="my-2 h-px bg-white/10"></div>

            <div className="py-8">
              <p className="mb-3 text-green-400">$ location</p>

              <p className="text-lg text-white sm:text-xl">
                {personalInfo.location}
              </p>
            </div>

            <div className="my-2 h-px bg-white/10"></div>

            <div className="pt-8">
              <p className="mb-3 text-green-400">$ stack</p>

              <div className="flex flex-wrap gap-2 text-sm text-gray-300 sm:text-base">
                <span>React</span>
                <span>•</span>
                <span>Angular</span>
                <span>•</span>
                <span>TypeScript</span>
                <span>•</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
