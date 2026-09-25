import { useEffect, useState, useMemo } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace("#", "")),
    []
  );
  const activeId = useActiveSection(sectionIds, 64);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-darkbg/90 backdrop-blur border-b border-slate-200 dark:border-slate-800"
          : "bg-white dark:bg-darkbg border-b border-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm">
            R
          </span>
          <span className="hidden sm:inline">Rana Abdul Rehman</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-[1px] h-0.5 rounded-full bg-primary transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-darkbg">
          <ul className="section-container py-4 flex flex-col gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`transition-colors ${
                      isActive ? "text-primary font-semibold" : "hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
