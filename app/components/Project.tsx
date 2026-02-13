import { BlurFade } from "@/components/ui/blur-fade";

import { ProjectCard } from "./ProjectPage";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  if (!DATA.projects) {
    return null;
  }

  return (
    <section
      id="projects"
      className="py-8 sm:py-10 scroll-mt-24 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 border-l-4 border-red-600 pl-3 sm:pl-4 text-white">
            My Projects
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6">
            Over the years, I&apos;ve gained experience with a variety of
            technologies and tools. Here&apos;s a comprehensive overview of my
            technical skill set that I use to build modern web applications.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={id}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
