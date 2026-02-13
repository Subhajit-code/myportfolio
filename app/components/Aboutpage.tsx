"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-6 sm:py-10 md:py-14 scroll-mt-24 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 border-l-4 border-red-600 pl-3 sm:pl-4 text-white">
            About Me
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6">
            I&apos;m a passionate student currently diving deep into the world
            of web development. I have a strong love for coding and a constant
            drive to explore new technologies, frameworks, and modern
            development practices. I enjoy transforming ideas into real-world
            applications that are both functional and visually engaging.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6">
            My journey in programming started with curiosity and quickly grew
            into a deep interest in building interactive, responsive, and
            performance-driven web experiences. I focus primarily on front-end
            development, but I am equally enthusiastic about learning backend
            technologies, databases, and full-stack development workflows.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6">
            I enjoy working with modern tools and technologies like React,
            Next.js, Tailwind CSS, and JavaScript to build clean, scalable, and
            user-friendly applications. Writing maintainable code, improving
            performance, and creating smooth user interactions are some of my
            key priorities while developing any project.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6">
            Beyond coding, I love exploring UI/UX design principles,
            experimenting with animations, and learning how to build visually
            compelling interfaces. I believe that a great product is not only
            functional but also intuitive and enjoyable to use.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            I&apos;m always eager to learn, collaborate, and take on new
            challenges that help me grow as a developer. Every project I work on
            is an opportunity to sharpen my skills, expand my knowledge, and
            push my creative boundaries. I am excited to continue evolving in
            this fast-moving tech world and contribute meaningfully to impactful
            projects.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
