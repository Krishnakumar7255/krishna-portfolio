
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import homelogo from "../assets/home-button.png";
import skilllogo from "../assets/skills.png";
import projectlogo from "../assets/projects.png";
import contactlogo from "../assets/contact.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", logo: homelogo, to: "/", end: true },
    { name: "Skills", logo: skilllogo, to: "/skills" },
    { name: "Projects", logo: projectlogo, to: "/projects" },
    { name: "Contact Us", logo: contactlogo, to: "/contact" },
  ];

  const getLinkClass = ({ isActive }) =>
    `font-semibold border-2 rounded-xl transition duration-300 flex items-center gap-2 ${
      isActive
        ? "bg-green-400 text-black border-green-700"
        : "border-transparent hover:border-green-700 hover:bg-green-400 hover:text-black"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg text-white">
      <div className="flex items-center justify-between h-20 px-4 sm:px-8 lg:px-12">

        <div className="font-bold text-lg sm:text-xl">
          <NavLink to="/">
            My <span className="text-green-400 font-hand">Portfolio</span>
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3 lg:gap-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${getLinkClass({ isActive })} px-3 lg:px-4 py-2`
              }
            >
              <img src={link.logo} alt="" className="w-5 lg:w-6" />
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-green-400"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-5 pb-5 bg-black/95 border-t border-green-400/20">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${getLinkClass({ isActive })} p-3`
              }
            >
              <img src={link.logo} alt="" className="w-6" />
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
