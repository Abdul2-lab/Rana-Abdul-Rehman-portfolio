export default function ArchitectureDiagram() {
  return (
    <div className="mt-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">
        Architecture
      </p>
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 p-3 overflow-x-auto">
        <svg
          viewBox="0 0 760 180"
          className="w-full min-w-[560px] h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dataset box */}
          <rect x="10" y="65" width="90" height="50" rx="10" className="fill-primary" />
          <text x="55" y="95" textAnchor="middle" className="fill-white text-[11px] font-semibold">
            Dataset
          </text>

          {/* arrow */}
          <line x1="100" y1="90" x2="135" y2="90" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* FastAPI backend box */}
          <rect x="140" y="55" width="110" height="70" rx="10" className="fill-indigo-500" />
          <text x="195" y="85" textAnchor="middle" className="fill-white text-[11px] font-semibold">
            FastAPI
          </text>
          <text x="195" y="100" textAnchor="middle" className="fill-white/80 text-[9px]">
            orchestrator
          </text>

          <line x1="250" y1="90" x2="285" y2="90" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* 11 agents cluster */}
          <rect x="290" y="10" width="190" height="160" rx="12" className="fill-none stroke-primary/40" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="385" y="28" textAnchor="middle" className="fill-primary text-[10px] font-semibold">
            11 AI Agents
          </text>

          {["Profiling", "Data Quality", "EDA", "Modeling", "Reporting"].map((label, i) => (
            <g key={label} transform={`translate(305, ${38 + i * 26})`}>
              <rect width="160" height="20" rx="6" className="fill-white dark:fill-slate-800 stroke-indigo-400" strokeWidth="1" />
              <text x="80" y="14" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[9px] font-medium">
                {label}
              </text>
            </g>
          ))}

          <line x1="480" y1="90" x2="515" y2="90" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* SHAP explainability */}
          <rect x="520" y="20" width="110" height="45" rx="10" className="fill-fuchsia-500" />
          <text x="575" y="47" textAnchor="middle" className="fill-white text-[10px] font-semibold">
            SHAP
          </text>

          {/* React dashboard + chat */}
          <rect x="520" y="115" width="110" height="45" rx="10" className="fill-sky-500" />
          <text x="575" y="135" textAnchor="middle" className="fill-white text-[10px] font-semibold">
            React
          </text>
          <text x="575" y="148" textAnchor="middle" className="fill-white/80 text-[8px]">
            dashboard + chat
          </text>

          <line x1="385" y1="170" x2="575" y2="170" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="575" y1="170" x2="575" y2="162" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" markerEnd="url(#arrow)" />

          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" className="fill-slate-400" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}
