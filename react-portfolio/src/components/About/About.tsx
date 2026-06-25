function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
          About
        </p>

        <h2 className="mb-6 text-4xl font-bold text-white">Get to know me</h2>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
          I am a Software Engineer with experience building scalable web
          applications and delivering solutions that improve user experience and
          business operations. I enjoy creating modern, responsive, and
          maintainable software using contemporary web technologies.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-800 p-8">
          <h3 className="mb-6 text-2xl font-semibold text-white">Education</h3>

          <div>
            <p className="font-medium text-white">B.Sc Computer Science</p>

            <p className="text-gray-400">Covenant University</p>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-800 p-8">
          <h3 className="mb-6 text-2xl font-semibold text-white">Experience</h3>

          <div className="space-y-6">
            <div>
              <p className="font-medium text-white">
                Junior Software Developer
              </p>

              <p className="text-gray-400">Systemspecs Limited</p>
            </div>

            <div>
              <p className="font-medium text-white">
                Frontend Developer Intern
              </p>

              <p className="text-gray-400">Seamfix</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-gray-800 p-8">
        <h3 className="mb-6 text-2xl font-semibold text-white">
          Core Technologies
        </h3>

        <div className="flex flex-wrap gap-4">
          {[
            "React",
            "Angular",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Java",
            "MongoDB",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-700 px-4 py-2 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="p-20 bg-red-500">TEST</div>
    </section>
  );
}

export default About;
