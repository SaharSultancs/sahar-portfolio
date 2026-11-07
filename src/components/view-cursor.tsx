"use client";

import { useEffect, useRef, useState } from "react";

// Round "View" badge that follows the pointer over any [data-cursor="view"] element.
export function ViewCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      ref.current?.style.setProperty("--cx", `${e.clientX}px`);
      ref.current?.style.setProperty("--cy", `${e.clientY}px`);
      setOn(!!(e.target as Element).closest?.('[data-cursor="view"]'));
    };
    const leave = () => setOn(false);
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] -mt-[46px] -ml-[46px] grid h-[92px] w-[92px] place-items-center rounded-full bg-ink text-xs font-bold tracking-[0.14em] text-white uppercase transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ transform: `translate3d(var(--cx, -200px), var(--cy, -200px), 0) scale(${on ? 1 : 0})` }}
    >
      View
    </div>
  );
}
