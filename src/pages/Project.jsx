
import React from "react";
import neon from "../assets/neon.png";


const projects = [
  {
    name: "KisanSetu",
    description:
      "An agricultural procurement platform connecting farmers with procurement centres through digital solutions, real-time updates and offline support.",
    tech: ["React", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    github: "https://github.com/Krishnakumar7255/KisanSetu",
  },
  {
    name: "KRISHA",
    description:
      "A machine learning-based password strength checker that evaluates password security and helps users create stronger passwords.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/Krishnakumar7255",
  },
  {
    name: "Driver Drowsiness Detection",
    description:
      "A computer vision-based system designed to detect driver drowsiness and help improve road safety by identifying signs of fatigue.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/Krishnakumar7255",
  },
  {
    name: "USB Mitra Pro",
    description:
      "A cybersecurity-focused project designed to improve USB device security and help users identify potential risks from removable devices.",
    tech: ["Python", "Cybersecurity"],
    github: "https://github.com/Krishnakumar7255",
  },
  {
    name: "NetMitra",
    description:
      "A networking and cybersecurity project focused on helping users understand network-related information and security.",
    tech: ["Networking", "Python", "Cybersecurity"],
    github: "https://github.com/Krishnakumar7255",
  },
  {
    name: "Customer Support System",
    description:
      "An AI-powered customer support solution using document retrieval to help answer user queries with relevant information.",
    tech: ["Python", "MiniLM", "ChromaDB"],
    github: "https://github.com/Krishnakumar7255",
  },
  {
    name: "GitHub Finder",
    description:
      "A web application that allows users to search GitHub profiles and explore developer information and repositories.",
    tech: ["React", "JavaScript", "GitHub API"],
    github: "https://github.com/Krishnakumar7255",
  },
  {
    name: "Coming Soon",
    description:
      "Something exciting is in development. Stay tuned for the next project!",
    tech: ["Innovation", "Development"],
    github: null,
  },
];


const Project = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-black px-5 sm:px-8 lg:px-12 py-24 overflow-hidden"
    >
      <img
        src={neon}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-saira text-white">
            My <span className="text-green-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg font-body">
            Turning ideas into real-world solutions through code and creativity.
          </p>

          <div className="w-24 h-1 bg-green-400 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-black/70 backdrop-blur-md border border-green-400/20 rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] hover:-translate-y-2 transition duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold font-saira text-green-400 mb-4">
                {project.name}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-green-300 bg-green-400/10 border border-green-400/20 rounded-lg px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border border-green-400 text-green-400 rounded-lg py-2 font-semibold hover:bg-green-400 hover:text-black transition duration-300"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
