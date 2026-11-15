import React from "react";
import reactlogo from "../assets/react.png";
import pythonlogo from "../assets/python.png";
import sqllogo from "../assets/sql-server.png";
import cpplogo from "../assets/cpp.png";
import javalogo from "../assets/java.png";
import cyberlogo from "../assets/lock.png";
import gitlogo from "../assets/github.png";
import linklogo from "../assets/linkedin.png";

const HeroFeature = () => {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
        {[
          { name: "React", logo: reactlogo },
          { name: "C++", logo: cpplogo },
          { name: "Python", logo: pythonlogo },
          { name: "Java", logo: javalogo },
          { name: "SQL", logo: sqllogo },
          { name: "Cybersecurity", logo: cyberlogo },
        ].map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-3 p-4 rounded-xl border border-green-400/20 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition duration-300"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center mt-5 text-center">
        <a
          href=""
          className=" border-2 border-green-400 p-3 rounded-2xl text-lg  font-semibold hover:px-5 transition-all duration-300"
        >
          Explore My Work
        </a>
      </div>

      <div className="flex mt-8 items-center gap-8">
        <div className="flex gap-5">
          <a
            href="https://github.com/Krishnakumar7255"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition duration-300"
          >
            <img
              src={gitlogo}
              alt="Github"
              className="w-12 h-12 object-contain"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/krishna-kumar-8298b72a0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition duration-300"
          >
            <img
              src={linklogo}
              alt="LinkedIn"
              className="w-12 h-12 object-contain"
            />
          </a>
        </div>
        <div className="border-l-2 border-green-400 text-white font-semibold px-3 text-sm md:text-base">
          CODE <span className="text-green-400 font-extrabold">.</span> LEARN{" "}
          <span className="text-green-400 font-extrabold">.</span> INNOVATE
        </div>
      </div>
    </>
  );
};

export default HeroFeature;
