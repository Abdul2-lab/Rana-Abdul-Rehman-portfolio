import { useEffect, useRef, useState } from "react";

const VARIANTS = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-10",
  right: "-translate-x-10",
  scale: "scale-95",
  none: "",
};

/**
 * Wraps children and animates them into view every time they cross into
 * the viewport — scrolling down OR scrolling back up. Respects
 * prefers-reduced-motion.
 *
 * variant: "up" | "down" | "left" | "right" | "scale" | "none"
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  duration = 700,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);

    if (mql.matches) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Re-trigger every time the element enters OR leaves the
        // viewport, so the animation replays when scrolling back up too.
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "-8% 0px -8% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = VARIANTS[variant] ?? VARIANTS.up;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transitionDuration: `${duration}ms`,
      }}
      className={`transition-all ease-out will-change-transform ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${hiddenTransform}`
      } ${reducedMotion ? "!transition-none" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
