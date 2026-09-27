import { useEffect, useRef } from "react";

/**
 * A fixed, pointer-events-none radial glow that follows the mouse,
 * giving dark sections a subtle cinematic spotlight feel. No-op on
 * touch-only devices and respects prefers-reduced-motion.
 */
export default function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    let raf = null;
    const handleMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
        raf = null;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-[1] hidden dark:block opacity-0 dark:opacity-100 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
