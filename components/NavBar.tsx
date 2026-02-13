"use client";

import { useState, useEffect } from "react";
import Dock from "./ui/Dock";
import { Home, Info, Settings, Folder, Contact } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const items = [
  {
    icon: <Home size={25} />,
    label: "Home",
    onClick: () =>
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Info size={25} />,
    label: "About",
    onClick: () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Settings size={25} />,
    label: "Skills",
    onClick: () =>
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Folder size={25} />,
    label: "Projects",
    onClick: () =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Contact size={25} />,
    label: "Contact",
    onClick: () =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = navItems.map((item) => item.href.slice(1));

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 rounded-2xl px-3 py-2">
        <Dock
          items={items}
          panelHeight={75}
          baseItemSize={55}
          magnification={90}
        />
      </div>
    </>
  );
}
