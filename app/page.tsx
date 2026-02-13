import AboutSection from "./components/Aboutpage";
import Heropage from "./components/Heropage";
import SkillSection from "./components/Skillpage";
import ProjectsSection from "./components/Project";
import NavBar from "@/components/NavBar";
import ContactSection from "./components/Contactpage";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col justify-start items-center min-h-screen">
        <Heropage />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="px-4 sm:px-8">
        <p className="font-lexend w-full text-center py-4 sm:py-6 text-xs sm:text-sm text-gray-500">
          &copy;{new Date().getFullYear()} Subhajit Banerjee. All rights reserved.
        </p>
      </footer>
    </>
  );
}
