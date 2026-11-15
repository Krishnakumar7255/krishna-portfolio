
import React, { useState } from "react";
import neon from "../assets/neon.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const mailto = `mailto:krishnakumar015jan@gmail.com?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  window.location.href = mailto;
};

  return (
    <section
      id="contact"
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
            Contact <span className="text-green-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg font-body">
            Have a project or opportunity in mind? Let's connect.
          </p>

          <div className="w-24 h-1 bg-green-400 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="text-white space-y-7">

            <h3 className="text-2xl sm:text-3xl font-bold font-saira">
              Let's Build Something <span className="text-green-400">Amazing!</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              I'm always open to discussing new projects, creative ideas,
              internships and opportunities.
            </p>

            <div className="space-y-5">
              <div className="border-l-2 border-green-400 px-4">
                <h4 className="text-green-400 font-semibold">Email</h4>
                <a
                  href="mailto:krishnakumar015jan@gmail.com"
                  className="text-gray-300 hover:text-green-400 break-all"
                >
                  krishnakumar015jan@gmail.com
                </a>
              </div>

              <div className="border-l-2 border-green-400 px-4">
                <h4 className="text-green-400 font-semibold">GitHub</h4>
                <a
                  href="https://github.com/Krishnakumar7255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400"
                >
                  github.com/Krishnakumar7255
                </a>
              </div>

              <div className="border-l-2 border-green-400 px-4">
                <h4 className="text-green-400 font-semibold">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/krishna-kumar-8298b72a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-black/70 backdrop-blur-md border border-green-400/20 rounded-2xl p-5 sm:p-8 space-y-5"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-white/5 border border-green-400/30 rounded-lg px-4 py-3 text-white outline-none focus:border-green-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-white/5 border border-green-400/30 rounded-lg px-4 py-3 text-white outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-white/5 border border-green-400/30 rounded-lg px-4 py-3 text-white outline-none focus:border-green-400"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full bg-white/5 border border-green-400/30 rounded-lg px-4 py-3 text-white outline-none focus:border-green-400 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-green-400 text-black font-bold py-3 rounded-lg hover:bg-green-300 transition duration-300"
            >
              Send Message →
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
