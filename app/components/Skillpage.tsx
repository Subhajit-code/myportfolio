"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const frontendSkills = DATA.skills.filter((skill) =>
  [
    "React",
    "Next.js",
    "TypeScript",

    "HTML",
    "CSS",
    "Tailwind",
  ].some((s) => skill.toLowerCase().includes(s.toLowerCase())),
);

const backendSkills = DATA.skills.filter((skill) =>
  [
    "Node.js",
    "Express",
    "REST API",
    "GraphQL",
    "Socket.IO",
    "JWT",
    "Zod",
    "Arcjet",
  ].some((s) => skill.toLowerCase().includes(s.toLowerCase())),
);

const databaseSkills = DATA.skills.filter((skill) =>
  ["Postgres", "MongoDB", "MySQL", "Redis", "Firebase", "mongoose"].some((s) =>
    skill.toLowerCase().includes(s.toLowerCase()),
  ),
);

const devopsSkills = DATA.skills.filter((skill) =>
  [
    "Docker",
    "Kubernetes",
    "Git",
    "AWS",
    "Linux",
    "CI/CD",
    "Nginx",
    "CURSOR",
    "POSTMAN",
    "INTELLIJ IDEA",
  ].some((s) => skill.toLowerCase().includes(s.toLowerCase())),
);

const otherSkills = DATA.skills.filter(
  (skill) =>
    ["C++", "RabbitMQ", "Razorpay","PYTHON","JAVA"].some((s) =>
      skill.toLowerCase().includes(s.toLowerCase()),
    ) || skill === "C",
);

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="py-8 sm:py-10 scroll-mt-24 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 border-l-4 border-red-600 pl-3 sm:pl-4 text-white">
            My Skills
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6">
            Over the years, I&apos;ve gained experience with a variety of
            technologies and tools. Here&apos;s a comprehensive overview of my
            technical skill set that I use to build modern web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <p className="text-lg leading-relaxed text-gray-300 mb-3">
                <span className="text-white font-semibold">Frontend:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-300 mb-3">
                <span className="text-white font-semibold">Backend:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-300 mb-3">
                <span className="text-white font-semibold">Database:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {databaseSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-300 mb-3">
                <span className="text-white font-semibold">
                  Tools:
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {otherSkills.length > 0 && (
              <div>
                <p className="text-lg leading-relaxed text-gray-300 mb-3">
                  <span className="text-white font-semibold">LANGUAGES</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skill) => (
                    <Badge
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300"
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
