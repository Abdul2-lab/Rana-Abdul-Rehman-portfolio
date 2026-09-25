import { experience } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 dark:bg-darkcard2/40 py-16 md:py-20 transition-colors duration-300 scroll-mt-16"
    >
      <div className="section-container">
        <ScrollReveal variant="up">
        <h2 className="section-eyebrow">
          <span className="section-num">04</span> Experience &amp; Internships
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1 mb-8">
          My professional journey
        </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((e, i) => (
            <ScrollReveal
              key={e.title}
              delay={(i % 3) * 90}
              variant={i % 2 === 0 ? "up" : "scale"}
              className="h-full"
            >
              <div className="card overflow-hidden h-full flex flex-col group hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                <div className="overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-semibold text-slate-900 dark:text-white leading-tight">
                      {e.title}
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{e.org}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-auto pt-3">
                    {e.meta}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
