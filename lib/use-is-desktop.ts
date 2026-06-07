"use client";

import { useEffect, useState } from "react";

/**
 * Returns true only on viewports >= 768px (after mount). Used to disable
 * expensive scroll-linked effects (parallax) on mobile for smoother scrolling.
 * Defaults to false so SSR/first paint matches the mobile-first, no-parallax state.
 */
export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}
