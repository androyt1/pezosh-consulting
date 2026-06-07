"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useIsDesktop } from "@/lib/use-is-desktop";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Total vertical travel in pixels across the scroll range. */
  distance?: number;
};

/**
 * Wraps content and shifts it vertically as it passes through the viewport,
 * creating a depth/parallax effect. Disabled when reduced motion is preferred.
 */
export function Parallax({
  children,
  className,
  distance = 70,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const enabled = isDesktop && !reduce;

  return (
    <motion.div
      ref={ref}
      style={enabled ? { y } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
