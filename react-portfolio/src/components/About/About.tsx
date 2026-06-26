import { education, experience, skills } from "../../data/portfolio";

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-8 py-24">
      {/* Heading */}
      <div className="mb-16">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
          About
        </p>

        <h2 className="mb-6 text-4xl font-bold text-white">Get to Know Me</h2>

        <p className="max-w-3xl text-lg leading-8 text-gray-400">
          Software Engineer with experience building scalable web applications
          and business solutions. Passionate about creating responsive,
          maintainable, and user-focused applications using modern technologies.
        </p>
      </div>

      {/* Experience + Education */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Experience */}
        <div className="rounded-3xl border border-gray-800 p-8">
          <h3 className="mb-8 text-2xl font-semibold text-white">Experience</h3>

          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.company}>
                <h4 className="font-semibold text-white">{job.role}</h4>

                <p className="text-green-400">{job.company}</p>

                <p className="text-sm text-gray-500">{job.duration}</p>

                <p className="mt-3 text-gray-400">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rounded-3xl border border-gray-800 p-8">
          <h3 className="mb-8 text-2xl font-semibold text-white">Education</h3>

          <h4 className="font-semibold text-white">{education.degree}</h4>

          <p className="text-green-400">{education.school}</p>

          <p className="mt-2 text-gray-400">CGPA: {education.cgpa}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-8 rounded-3xl border border-gray-800 p-8">
        <h3 className="mb-8 text-2xl font-semibold text-white">Tech Stack</h3>

        <div className="space-y-6">
          <div>
            <h4 className="mb-3 font-semibold text-green-400">Frontend</h4>

            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-700 px-4 py-2 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-green-400">Backend</h4>

            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-700 px-4 py-2 text-gray-300"
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
