import { about } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-container py-16 md:py-20 scroll-mt-16">
      <ScrollReveal variant="up">
        <h2 className="section-eyebrow mb-6">
          <span className="section-num">01</span> About Me
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-10 items-center">
        <ScrollReveal variant="left" className="md:col-span-2">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {about.text}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="font-bold text-slate-900 dark:text-white">{s.label}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={120} className="relative">
          <div className="rounded-2xl overflow-hidden card">
            <img
              src={about.image}
              alt="Workspace"
              loading="lazy"
              className="w-full h-56 object-cover"
            />
          </div>
          <p className="absolute -right-2 top-2 text-[11px] text-slate-400 leading-5 rotate-6 hidden md:block">
            Code<br />Learn<br />Build<br />Repeat
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
