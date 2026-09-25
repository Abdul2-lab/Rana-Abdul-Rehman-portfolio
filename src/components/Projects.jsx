import { ExternalLink } from "lucide-react";
import { projects, profile } from "../data/portfolioData";
import { GithubIcon } from "./icons/BrandIcons";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="section-container py-16 md:py-20 scroll-mt-16">
      <ScrollReveal variant="up">
      <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
        <div>
          <h2 className="section-eyebrow">
            <span className="section-num">03</span> Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Some of my recent work
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
            <div className="card overflow-hidden flex flex-col h-full group hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                    className="flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-primary font-medium"
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
