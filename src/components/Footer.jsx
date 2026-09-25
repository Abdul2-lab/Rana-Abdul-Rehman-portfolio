import { navLinks, profile } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons/BrandIcons";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] dark:bg-black text-slate-400 py-10 transition-colors duration-300">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-bold">
            R
          </span>
          <div>
            <p className="text-white font-semibold text-sm">{profile.name}</p>
            <p className="text-xs">{profile.title}</p>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center gap-5 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary-light transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-primary-light" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
          <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="hover:text-primary-light" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a href="#" className="hover:text-primary-light" aria-label="Twitter / X">
            <XIcon size={16} />
          </a>
        </div>
      </div>
      <p className="text-center text-xs mt-6">
        © 2026 {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
