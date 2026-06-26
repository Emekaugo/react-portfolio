import { personalInfo } from "../../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center gap-16 px-8 py-20 lg:flex-row lg:items-center"
    >
      {/* LEFT SIDE */}
      <div className="flex-1">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-green-400">
          {personalInfo.role}
        </p>

        <h1 className="mb-8 text-6xl font-bold leading-none text-white lg:text-8xl">
          Hi, I'm
          <span className="mt-3 block">{personalInfo.firstName}</span>
          <span className="block">{personalInfo.lastName}</span>
        </h1>

        <p className="mb-10 max-w-xl text-xl leading-relaxed text-gray-400">
          {personalInfo.summary}
        </p>

        <div className="flex flex-wrap gap-5">
          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
            View Projects →
          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white">
            Contact Me ✉
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 justify-end">
        <div
          className="w-full max-w-2xl rounded-[32px] border border-gray-800 bg-gradient-to-br from-zinc-900 to-black shadow-2xl"
          style={{ padding: "20px" }}
        >
          {/* Terminal Header */}
          <div className="mb-10 flex gap-3">
            <div className="h-4 w-4 rounded-full bg-red-500"></div>
            <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
          </div>

          {/* Terminal Content */}
          <div className="font-mono">
            <div className="pb-8">
              <p className="mb-3 text-green-400">$ whoami</p>
              <p className="text-2xl text-white">
                {personalInfo.firstName} {personalInfo.lastName}
              </p>
            </div>

            <div className="my-2 h-px bg-gray-800"></div>

            <div className="py-8">
              <p className="mb-3 text-green-400">$ role</p>
              <p className="text-xl text-white">{personalInfo.role}</p>
            </div>

            <div className="my-2 h-px bg-gray-800"></div>

            <div className="py-8">
              <p className="mb-3 text-green-400">$ location</p>
              <p className="text-xl text-white">{personalInfo.location}</p>
            </div>

            <div className="my-2 h-px bg-gray-800"></div>

            <div className="pt-8">
              <p className="mb-3 text-green-400">$ stack</p>

              <div className="flex flex-wrap gap-2 text-gray-300">
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
