import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { certifications } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <section id="certifications" className="section-container py-16 md:py-20 scroll-mt-16">
      <ScrollReveal variant="up">
      <h2 className="section-eyebrow">
        <span className="section-num">05</span> Certifications
      </h2>
      <p className="text-slate-500 dark:text-slate-400 mt-1 mb-8">My achievements</p>
      </ScrollReveal>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2"
        >
          {certifications.map((c, i) => (
            <ScrollReveal key={c.name} variant="scale" delay={(i % 6) * 70} className="flex-shrink-0">
              <div
                className="card min-w-[180px] flex-shrink-0 p-5 flex flex-col items-start gap-3 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <img
                  src={c.logo}
                  alt={`${c.desc} logo`}
                  loading="lazy"
                  className="w-11 h-11 rounded-lg object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">
                    {c.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll certifications left"
          className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white dark:bg-darkcard shadow border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-500 hover:text-primary"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll certifications right"
          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white dark:bg-darkcard shadow border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-500 hover:text-primary"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
