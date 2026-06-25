import { personalInfo } from "../../data/portfolio";

function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-400">
          {personalInfo.role}
        </p>

        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          Hi, I'm{" "}
          <span className="block">
            {personalInfo.firstName} {personalInfo.lastName}
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
          Building scalable web applications and digital experiences.
        </p>
      </div>
    </section>
  );
}

export default Hero;
