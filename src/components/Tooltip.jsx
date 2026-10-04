import { useState } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  if (!text) return children;

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          role="tooltip"
          className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] text-center text-xs font-normal text-white bg-slate-800 dark:bg-slate-900 px-2.5 py-1.5 rounded-lg shadow-lg pointer-events-none"
        >
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800 dark:border-t-slate-900" />
        </span>
      )}
    </span>
  );
}
