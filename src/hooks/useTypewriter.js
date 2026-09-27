import { useEffect, useState } from "react";

/**
 * Cycles through `phrases`, typing each one out character by character,
 * pausing, then erasing it before moving to the next. Respects
 * prefers-reduced-motion (just shows the first phrase, static).
 */
export function useTypewriter(
  phrases,
  { typingSpeed = 70, deletingSpeed = 40, pauseTime = 1400 } = {}
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(phrases[0] ?? "");
      return;
    }

    const current = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime, reducedMotion]);

  return text;
}
