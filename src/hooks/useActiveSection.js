import { useEffect, useState } from "react";

/**
 * Tracks which section (by id) is currently most visible in the viewport.
 * @param {string[]} sectionIds - list of section element ids, in order
 * @param {number} navbarOffset - height of the sticky navbar, used to adjust the trigger line
 */
export function useActiveSection(sectionIds, navbarOffset = 64) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // trigger line sits just below the sticky navbar
        rootMargin: `-${navbarOffset + 10}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds, navbarOffset]);

  return activeId;
}
