"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", accent: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          Sahar Sultan<span className="text-pink">.</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group relative text-sm ${l.accent ? "text-accent" : "text-ink/80 hover:text-ink"}`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 ${
                  pathname.startsWith(l.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>
        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(!open)}>
          <div className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-1 rotate-45" : ""}`} />
          <div className={`mt-1.5 h-0.5 w-6 bg-ink transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "100vh" }} exit={{ height: 0 }} className="overflow-hidden bg-paper md:hidden">
            <div className="flex flex-col gap-6 px-5 pt-10">
              {links.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.07 }}>
                  <Link href={l.href} onClick={() => setOpen(false)} className={`heading text-5xl ${l.accent ? "text-accent" : ""}`}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
