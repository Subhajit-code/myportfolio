"use client";
import Particles from "@/components/ui/Particles";
import TextType from "@/components/ui/TextType";
import Image from "next/image";
import React from "react";
import myprofile from "@/assets/an.jpeg";
import { DATA } from "@/data/resume";

import LightRays from "@/components/ui/LightRays ";

const Heropage = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={2.4}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.13}
          distortion={0.2}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1.2}
          saturation={1.2}
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <TextType
              text={[
                "Hi, I'm Subhajit.",
                "Building Scalable Web Solutions with Clean & Efficient Code.",
                "Code. Optimize. Deliver. Repeat",
                "SIH’25 Grand Finalist | Turning Ideas into Scalable Tech Solutions",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              cursorClassName="text-red-600"
            />
          </div>

          <p className="mt-4 md:mt-6 text-slate-400 leading-relaxed max-w-lg text-sm md:text-base mx-auto md:mx-0">
            Passionate about creating beautiful, performant, and user-friendly
            web experiences with modern technologies.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 md:px-6 py-2.5 md:py-3 bg-red-600 rounded-lg text-white font-medium hover:bg-violet-500 transition-colors text-sm md:text-base cursor-pointer"
            >
              View More
            </a>
            <a
              href={DATA.resumeUrl}
              download="SUBHAJIT BANERJEEE CV.pdf"
              className="px-4 md:px-6 py-2.5 md:py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800/50 hover:border-slate-600 transition-colors text-sm md:text-base"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative">
            <div className="relative w-130 h-110 sm:w-92 sm:h-92 md:w-102 md:h-102 lg:w-110 lg:h-110  overflow-hidden transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                <svg
                  className="w-24 h-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              {/* profile image */}
              <Image
                src={myprofile}
                alt="Ankit"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heropage;
