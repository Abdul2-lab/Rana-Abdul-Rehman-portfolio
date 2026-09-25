import { Download, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons/BrandIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0b1120] dark:bg-darkbg text-white scroll-mt-16"
    >
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob-slow" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob-slow [animation-delay:2s]" />

      <div className="section-container relative grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div className="animate-hero-in">
          <p className="text-slate-300 mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-primary-light">{profile.firstName}</span>{" "}
            <span className="text-white">{profile.lastName}</span>
          </h1>
          <p className="mt-3 text-lg text-slate-200 font-medium">{profile.title}</p>
          <p className="mt-4 text-slate-400 max-w-md leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-primary hover:scale-105 active:scale-95 transition-transform"
            >
              View Projects{" "}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/Rana-Abdul-Rehman-CV.pdf"
              download
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-primary hover:bg-primary/10 text-slate-200 font-medium px-5 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="/Rana-Abdul-Rehman-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-primary-light text-sm font-medium underline-offset-4 hover:underline transition-colors"
            >
              View CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-primary hover:bg-primary/10 text-slate-200 font-medium px-5 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-300">
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-primary-light hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="hover:text-primary-light hover:-translate-y-0.5 transition-all" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="#" className="hover:text-primary-light hover:-translate-y-0.5 transition-all" aria-label="Twitter / X">
              <XIcon size={18} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-hero-in [animation-delay:150ms]">
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img
              src={profile.photo}
              alt={profile.name}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="hidden md:block absolute top-4 -right-2 text-xs text-slate-400 leading-5 rotate-6">
            Better<br />Code<br />Bigger<br />Dreams
          </p>
        </div>
      </div>
    </section>
  );
}
