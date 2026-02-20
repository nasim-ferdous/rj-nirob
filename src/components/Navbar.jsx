import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Experience", id: "experience" },
    { name: "Gallery", id: "gallery" },
    { name: "Media Presence", id: "media" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-wide cursor-pointer">
          RJ <span className="text-purple-500">Nirob</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-purple-500"
              className="cursor-pointer text-gray-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </ul>

        {/* Mobile icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-black/90 px-6 pb-6 space-y-4 text-gray-300">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              <li className="hover:text-white cursor-pointer">{link.name}</li>
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
