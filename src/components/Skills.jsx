import {
  Terminal,
  BarChart3,
  BrainCircuit,
  Cpu,
  MessagesSquare,
  Sparkles,
  Atom,
  Server,
  Database,
  Wind,
  Network,
} from "lucide-react";
import { skills } from "../data/portfolioData";
import { GithubIcon } from "./icons/BrandIcons";
import ScrollReveal from "./ScrollReveal";

const iconMap = {
  python: { icon: Terminal, bg: "bg-indigo-100 dark:bg-indigo-500/10", color: "text-indigo-500" },
  data: { icon: BarChart3, bg: "bg-teal-100 dark:bg-teal-500/10", color: "text-teal-500" },
  ai: { icon: BrainCircuit, bg: "bg-purple-100 dark:bg-purple-500/10", color: "text-purple-500" },
  dl: { icon: Cpu, bg: "bg-fuchsia-100 dark:bg-fuchsia-500/10", color: "text-fuchsia-500" },
  nlp: { icon: MessagesSquare, bg: "bg-rose-100 dark:bg-rose-500/10", color: "text-rose-500" },
  llm: { icon: Sparkles, bg: "bg-pink-100 dark:bg-pink-500/10", color: "text-pink-500" },
  react: { icon: Atom, bg: "bg-sky-100 dark:bg-sky-500/10", color: "text-sky-500" },
  node: { icon: Server, bg: "bg-green-100 dark:bg-green-500/10", color: "text-green-600" },
  mongo: { icon: Database, bg: "bg-emerald-100 dark:bg-emerald-500/10", color: "text-emerald-600" },
  tailwind: { icon: Wind, bg: "bg-cyan-100 dark:bg-cyan-500/10", color: "text-cyan-500" },
  network: { icon: Network, bg: "bg-blue-100 dark:bg-blue-500/10", color: "text-blue-600" },
  github: { icon: GithubIcon, bg: "bg-slate-100 dark:bg-slate-500/10", color: "text-slate-600 dark:text-slate-300" },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-darkcard2/40 py-16 md:py-20 transition-colors duration-300 scroll-mt-16">
      <div className="section-container">
        <ScrollReveal variant="up">
        <h2 className="section-eyebrow">
          <span className="section-num">02</span> Skills
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1 mb-8">
          Technologies and tools I work with
        </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, i) => {
            const conf = iconMap[skill.icon] || iconMap.python;
            const Icon = conf.icon;
            return (
              <ScrollReveal key={skill.name} variant="scale" delay={(i % 6) * 60}>
                <div
                  className="card flex flex-col items-center justify-center gap-2 py-6 px-2 h-full hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${conf.bg}`}>
                    <Icon size={20} className={conf.color} />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center">
                    {skill.name}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
