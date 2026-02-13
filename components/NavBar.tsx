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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

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

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`fixed top-4 right-4 z-[60] p-3 rounded-full transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "bg-slate-800 border-red-500/50"
            : isScrolled
              ? "backdrop-blur-md bg-slate-900/80"
              : "bg-slate-900/70"
        } border border-slate-700 shadow-lg`}
        aria-label="Toggle menu"
      >
        <svg
          className={`w-6 h-6 transition-colors duration-300 ${
            isMobileMenuOpen ? "text-red-500" : "text-white"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <nav
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-sm bg-slate-900/95 border border-slate-700 rounded-2xl p-6 transition-all duration-300 ${
            isMobileMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li
                  key={item.href}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                  className={`transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block px-5 py-4 text-lg font-medium rounded-xl transition-all duration-300 text-center ${
                      isActive
                        ? "text-white bg-red-600/20 border border-red-500/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-800 border border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
