import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

const COLORS = ["#2563eb", "#6366f1", "#38bdf8", "#f472b6", "#facc15", "#34d399"];

function fireConfetti(canvas) {
  const ctx = canvas.getContext("2d");
  const { innerWidth: w, innerHeight: h } = window;
  canvas.width = w;
  canvas.height = h;

  const pieces = Array.from({ length: 140 }, () => ({
    x: w / 2,
    y: h / 3,
    vx: (Math.random() - 0.5) * 14,
    vy: Math.random() * -14 - 4,
    size: Math.random() * 7 + 4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotation: Math.random() * 360,
    spin: (Math.random() - 0.5) * 12,
    gravity: 0.35 + Math.random() * 0.15,
  }));

  let frame = 0;
  let raf;

  const draw = () => {
    frame++;
    ctx.clearRect(0, 0, w, h);
    let stillAlive = false;

    for (const p of pieces) {
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.spin;
      if (p.y < h + 20) stillAlive = true;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    }

    if (stillAlive && frame < 240) {
      raf = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, w, h);
    }
  };

  draw();
  return () => cancelAnimationFrame(raf);
}

export default function EasterEgg() {
  const [triggered, setTriggered] = useState(false);
  const canvasRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const onKeyDown = (e) => {
      const expected = KONAMI[progressRef.current];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      if (key === expected) {
        progressRef.current += 1;
        if (progressRef.current === KONAMI.length) {
          progressRef.current = 0;
          setTriggered(true);
          if (canvasRef.current) fireConfetti(canvasRef.current);
          setTimeout(() => setTriggered(false), 3200);
        }
      } else {
        progressRef.current = key === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[100]"
      />
      {triggered && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[101] bg-white dark:bg-darkcard shadow-2xl rounded-xl px-5 py-3 flex items-center gap-2 animate-modal-in">
          <span className="text-xl">🎉</span>
          <p className="text-sm font-semibold text-slate-800 dark:text-white">
            You found the secret! Thanks for exploring the code this closely —
            that's exactly the kind of attention to detail I like to bring to my work too.
          </p>
        </div>
      )}
    </>
  );
}
