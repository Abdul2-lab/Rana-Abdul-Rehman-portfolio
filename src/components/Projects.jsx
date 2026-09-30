import { useState } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { projects, profile } from "../data/portfolioData";
import { GithubIcon } from "./icons/BrandIcons";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-container py-16 md:py-20 scroll-mt-16">
      <ScrollReveal variant="up">
      <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
        <div>
          <h2 className="section-eyebrow">
            <span className="section-num">03</span> Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Some of my recent work — click a card for the full case study
          </p>
        </div>
        <a
          href={`https://${profile.github}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
        >
          View All Projects <span aria-hidden>→</span>
        </a>
      </div>
      </ScrollReveal>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal
            key={p.title}
            delay={(i % 3) * 100}
            variant={i % 2 === 0 ? "left" : "right"}
            className="h-full"
          >
            <TiltCard className="h-full">
            <div
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
              className="card overflow-hidden flex flex-col h-full group hover:shadow-xl hover:border-primary/40 transition-shadow duration-300 cursor-pointer"
            >
              <div className="overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-1.5 bg-white/95 text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <BookOpen size={13} /> View Case Study
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="badge bg-primary/10 text-primary dark:bg-primary/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-primary font-medium"
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
