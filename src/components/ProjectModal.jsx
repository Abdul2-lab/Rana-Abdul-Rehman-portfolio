import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const { title, description, tags, image, liveDemo, github, details } = project;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} case study`}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* modal panel */}
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-darkcard shadow-2xl animate-modal-in">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-800/90 shadow flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
        >
          <X size={18} />
        </button>

        <img src={image} alt={title} className="w-full h-48 sm:h-56 object-cover" />

        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2">{description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((t) => (
              <span key={t} className="badge bg-primary/10 text-primary dark:bg-primary/15">
                {t}
              </span>
            ))}
          </div>

          {details && (
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                  Problem
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {details.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                  Approach
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {details.approach}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                  Result
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {details.result}
                </p>
              </div>
            </div>
          )}

          {details?.hasDiagram && <ArchitectureDiagram />}

          <div className="flex items-center gap-4 mt-7 pt-5 border-t border-slate-200 dark:border-slate-700">
            <a
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-primary hover:underline font-medium text-sm"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-primary font-medium text-sm"
            >
              <GithubIcon size={15} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
