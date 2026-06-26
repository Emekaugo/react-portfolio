import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { contactInfo } from "../../data/portfolio";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24"
    >
      {/* Section Heading */}
      <div className="mb-12 text-center lg:mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
          Contact
        </p>

        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Let's Build Something Great Together
        </h2>

        <p className="mx-auto max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
          I'm currently open to Software Engineering opportunities, Frontend
          Engineering roles, freelance work, and exciting collaborations. If
          you'd like to work together, I'd love to hear from you.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        {/* Email */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] sm:p-8">
          <FaEnvelope className="mb-6 text-3xl text-green-400" />

          <h3 className="mb-3 text-xl font-semibold text-white">Email</h3>

          <a
            href={`mailto:${contactInfo.email}`}
            className="break-all text-gray-400 transition-colors duration-300 hover:text-green-400"
          >
            {contactInfo.email}
          </a>
        </div>

        {/* Phone */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] sm:p-8">
          <FaPhone className="mb-6 text-3xl text-green-400" />

          <h3 className="mb-3 text-xl font-semibold text-white">Phone</h3>

          <a
            href={`tel:${contactInfo.phone}`}
            className="text-gray-400 transition-colors duration-300 hover:text-green-400"
          >
            {contactInfo.phone}
          </a>
        </div>

        {/* Location */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] sm:p-8">
          <FaMapMarkerAlt className="mb-6 text-3xl text-green-400" />

          <h3 className="mb-3 text-xl font-semibold text-white">Location</h3>

          <p className="text-gray-400">{contactInfo.location}</p>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
        <a
          href={`mailto:${contactInfo.email}`}
          className="rounded-xl bg-green-500 px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-green-400"
        >
          Email Me
        </a>

        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-green-400 hover:text-green-400"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-green-400 hover:text-green-400"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
