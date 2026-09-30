import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/portfolioData";

export default function GithubStatsCard() {
  const { theme } = useTheme();
  const cardTheme = theme === "dark" ? "tokyonight" : "default";
  const username = profile.githubUsername;

  return (
    <div className="card p-4 sm:p-5">
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
        Live GitHub Activity
      </p>
      <div className="overflow-hidden rounded-lg">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_title=true&theme=${cardTheme}&bg_color=00000000&hide_border=true&count_private=true`}
          alt={`${username} GitHub stats`}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      <a
        href={`https://${profile.github}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
      >
        View full profile →
      </a>
    </div>
  );
}
