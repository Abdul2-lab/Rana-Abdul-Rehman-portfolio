import { useRef } from "react";

/**
 * Wraps children in a card that tilts in 3D following the cursor,
 * with a soft glare highlight. Disabled on touch devices (no hover).
 */
export default function TiltCard({ children, className = "", maxTilt = 8 }) {
  const ref = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width; // 0 - 1
    const py = y / rect.height;

    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;

    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.16), transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    if (glareRef.current) glareRef.current.style.background = "transparent";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 rounded-xl z-10 transition-[background] duration-200"
      />
      {children}
    </div>
  );
}
