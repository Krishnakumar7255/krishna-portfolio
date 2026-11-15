
import React from "react";


import facelogo from "../assets/facelogo.png";
import neon from "../assets/neon.png";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-black grid grid-cols-1 md:grid-cols-2 items-center px-5 sm:px-8 lg:px-12 overflow-hidden pt-20 pb-5 ">

      <img
        src={neon}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 text-white flex flex-col justify-center space-y-4 order-2 md:order-1 mt-8 md:mt-0">

        <h4 className="text-2xl font-lobster -mb-1">
          Hello, I'm
        </h4>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-saira">
          Krishna{" "}
          <span className="bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
            Kumar
          </span>
        </h1>

        <h3 className="text-gray-300 text-base sm:text-lg xl:text-xl font-semibold font-body">
          Web Developer <span className="text-green-400">|</span>{" "}
          Cybersecurity Enthusiast <span className="text-green-400">|</span>{" "}
          App Developer
        </h3>

        <p className="text-gray-400 leading-relaxed border-l-2 border-green-400 px-3 text-base sm:text-lg xl:text-2xl font-semibold mt-4">
          Build Secure, Scalable and Innovative Solutions for a{" "}
          <span className="text-green-400">
            Better Tomorrow.
          </span>
        </p>

        <div className="mt-5">
          <HeroFeature />
        </div>
      </div>

      <div className="relative z-10 flex justify-center order-1 md:order-2">
        <img
          src={facelogo}
          alt="Krishna Kumar"
          className="min-h-screen object-cover rounded-2xl drop-shadow-2xl -mt-60 md:-mt-70 lg:-mt-70 green-glow -mb-5 "
        />
      </div>

    </div>
  );
};

export default Hero;
