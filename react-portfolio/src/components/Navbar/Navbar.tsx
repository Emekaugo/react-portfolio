import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { navigationLinks } from "../../data/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold text-white">CU</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          {navigationLinks.map((link) => (
            <li
              key={link.name}
              className="transition-colors duration-300 hover:text-green-400"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-white transition hover:text-green-400 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block py-4 text-gray-300 transition-colors duration-300 hover:text-green-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
