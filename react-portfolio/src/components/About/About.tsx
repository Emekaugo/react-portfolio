import { education, experience, skills } from "../../data/portfolio";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24"
    >
      {/* Section Heading */}
      <div className="mb-12 lg:mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
          About
        </p>

        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Get to Know Me
        </h2>

        <p className="max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
          Software Engineer with 3+ years of experience building scalable web
          applications and business solutions. Passionate about creating
          responsive, maintainable, and user-focused applications using modern
          web technologies while continuously learning and improving.
        </p>
      </div>

      {/* Experience & Education */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Experience */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <FaBriefcase className="text-2xl text-green-400" />

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Experience
            </h3>
          </div>

          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="border-l-2 border-white/10 pl-5 transition-colors hover:border-green-400"
              >
                <h4 className="text-lg font-semibold text-white">{job.role}</h4>

                <p className="mt-1 text-green-400">{job.company}</p>

                <p className="mt-1 text-sm text-gray-500">{job.duration}</p>

                <p className="mt-4 leading-7 text-gray-400">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-2xl text-green-400" />

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Education
            </h3>
          </div>

          <div className="border-l-2 border-white/10 pl-5 transition-colors hover:border-green-400">
            <h4 className="text-lg font-semibold text-white">
              {education.degree}
            </h4>

            <p className="mt-2 text-green-400">{education.school}</p>

            <p className="mt-2 text-gray-400">CGPA: {education.cgpa}</p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] sm:p-8">
        <div className="mb-8 flex items-center gap-3">
          <FaCode className="text-2xl text-green-400" />

          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Tech Stack
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Frontend */}
          <div>
            <h4 className="mb-4 font-semibold text-green-400">Frontend</h4>

            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-green-400 hover:bg-green-400/10 hover:text-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="mb-4 font-semibold text-green-400">Backend</h4>

            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-green-400 hover:bg-green-400/10 hover:text-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud */}
          <div>
            <h4 className="mb-4 font-semibold text-green-400">Cloud</h4>

            <div className="flex flex-wrap gap-3">
              {skills.cloud.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-green-400 hover:bg-green-400/10 hover:text-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="mb-4 font-semibold text-green-400">Tools</h4>

            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-green-400 hover:bg-green-400/10 hover:text-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
