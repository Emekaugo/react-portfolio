import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { contactInfo, footerInfo } from "../../data/portfolio";
import { navigationLinks } from "../../data/navigation";

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black lg:mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">CU</h2>

            <p className="mb-2 text-lg font-medium text-green-400">
              Software Engineer
            </p>

            <p className="max-w-sm leading-7 text-gray-400">
              {footerInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-green-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Connect</h3>

            <div className="flex gap-5">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-xl text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:text-green-400"
              >
                <FaGithub />
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-xl text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:text-green-400"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-xl text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:text-green-400"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-gray-500 md:flex-row">
          <p>{footerInfo.copyright}</p>

          <p>
            Built with <span className="text-green-400">React</span>,{" "}
            <span className="text-green-400">TypeScript</span> &{" "}
            <span className="text-green-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
