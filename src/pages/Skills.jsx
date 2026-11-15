import React from "react";
import neon from "../assets/neon.png";

import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import javascript from "../assets/js.png";

import html from "../assets/text.png";
import css from "../assets/css-3.png";
import react from "../assets/react.png";
import tailwind from "../assets/monitor.png";
import nodejs from "../assets/programing.png";
import fastapi from "../assets/api.png";

import sql from "../assets/sql-server.png";
import mongodb from "../assets/database.png";
import git from "../assets/git.png";
import github from "../assets/github.png";

import linux from "../assets/linux.png";
import security from "../assets/lock.png";
import vapt from "../assets/vulnerability-assessment.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: cpp },
        { name: "Java", icon: java },
        { name: "Python", icon: python },
        { name: "JavaScript", icon: javascript },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "React.js", icon: react },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "Node.js", icon: nodejs },
        { name: "FastAPI", icon: fastapi },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "SQL", icon: sql },
        { name: "MongoDB", icon: mongodb },
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
      ],
    },
    {
      title: "Core Computer Science",
      skills: ["OOPS", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Network Security", icon: security },
        { name: "Linux", icon: linux },
        { name: "Web Security", icon: security },
        { name: "VAPT", icon: vapt },
        { name: "Web Application Security", icon: security },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-black px-5 sm:px-8 lg:px-12 py-24 overflow-hidden"
    >
      {/* Background */}
      <img
        src={neon}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-saira text-white">
            My <span className="text-green-400">Skills</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mt-4 font-body">
            Technologies and tools I use to build innovative solutions.
          </p>

          <div className="w-24 h-1 bg-green-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-green-400/20 bg-black/60 backdrop-blur-md rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition duration-300"
            >
              <h3 className="text-xl sm:text-2xl text-green-400 font-bold font-saira mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const hasIcon = typeof skill !== "string";

                  return (
                    <div
                      key={hasIcon ? skill.name : skill}
                      className="flex items-center gap-2 px-3 py-2 text-gray-200 border border-green-400/30 rounded-lg bg-green-400/5 hover:bg-green-400 hover:text-black hover:-translate-y-1 transition duration-300"
                    >
                      {hasIcon && (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                        />
                      )}

                      <span className="text-sm sm:text-base font-medium">
                        {hasIcon ? skill.name : skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
