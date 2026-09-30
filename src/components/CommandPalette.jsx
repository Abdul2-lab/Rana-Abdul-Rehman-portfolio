import { useEffect, useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { toggleTheme } = useTheme();

  const commands = useMemo(() => {
    const nav = navLinks.map((link) => ({
      id: `nav-${link.href}`,
      label: `Go to ${link.label}`,
      hint: "Navigate",
      action: () => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    return [
      ...nav,
      {
        id: "toggle-theme",
        label: "Toggle Dark / Light Mode",
        hint: "Theme",
        action: toggleTheme,
      },
      {
        id: "download-cv",
        label: "Download CV",
        hint: "Action",
        action: () => {
          const a = document.createElement("a");
          a.href = "/Rana-Abdul-Rehman-CV.pdf";
          a.download = "";
          a.click();
        },
      },
      {
        id: "email",
        label: `Email ${profile.name}`,
        hint: "Contact",
        action: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: "github",
        label: "Open GitHub Profile",
        hint: "Link",
        action: () => window.open(`https://${profile.github}`, "_blank"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn Profile",
        hint: "Link",
        action: () => window.open(`https://${profile.linkedin}`, "_blank"),
      },
    ];
  }, [toggleTheme]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => setActiveIndex(0), [query, open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modifier = isMac ? e.metaKey : e.ctrlKey;
      if (modifier && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onCustomOpen = () => setOpen(true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onCustomOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const runCommand = (cmd) => {
    cmd.action();
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      runCommand(filtered[activeIndex]);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-24 sm:pt-32 px-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setOpen(false)}
      />

      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-darkcard shadow-2xl overflow-hidden animate-modal-in">
        <div className="flex items-center gap-3 px-4 border-b border-slate-200 dark:border-slate-700">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search…"
            className="w-full bg-transparent py-3.5 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          <kbd className="hidden sm:inline text-[10px] font-medium text-slate-400 border border-slate-300 dark:border-slate-600 rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="text-sm text-slate-400 text-center py-6">No matching commands</p>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.id}
              onClick={() => runCommand(cmd)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                i === activeIndex
                  ? "bg-primary/10 text-primary"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              <span className="flex items-center gap-2">
                <ArrowRight size={13} className={i === activeIndex ? "opacity-100" : "opacity-0"} />
                {cmd.label}
              </span>
              <span className="text-[11px] text-slate-400">{cmd.hint}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
