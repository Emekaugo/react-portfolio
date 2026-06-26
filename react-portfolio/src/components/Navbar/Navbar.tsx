import { navigationLinks } from "../../data/navigation";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-white">CU</h2>
        </div>

        <ul className="flex gap-8 text-sm font-medium text-gray-300">
          {navigationLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer transition-colors hover:text-white"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
