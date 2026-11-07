"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Card entrance: slides in from the left (even index) or right (odd index) with a slight tilt.
export function SlideIn({ children, index = 0, className }: { children: ReactNode; index?: number; className?: string }) {
  const reduce = useReducedMotion();
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x: fromLeft ? -120 : 120, rotate: fromLeft ? -3 : 3, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 70, damping: 16, mass: 0.9, delay: (index % 3) * 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// Splits a line into words that slide up from a mask.
export function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Endless row of big words; `outline` draws hollow text, `reverse` scrolls the other way.
export function Marquee({ items, outline = false, reverse = false }: { items: string[]; outline?: boolean; reverse?: boolean }) {
  const row = (hidden?: boolean) => (
    <div aria-hidden={hidden} className={`marquee flex shrink-0 items-center ${reverse ? "marquee-reverse" : ""}`}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`heading px-6 text-5xl whitespace-nowrap uppercase md:px-10 md:text-7xl ${
              outline ? "text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255/0.75)]" : "text-white"
            }`}
          >
            {t}
          </span>
          <span className="text-sm text-white/40">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      {row()}
      {row(true)}
    </div>
  );
}
