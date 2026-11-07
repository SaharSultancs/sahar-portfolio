"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      className="group h-full"
      initial={reduce ? false : { opacity: 0, x: index % 2 ? 120 : -120, rotate: index % 2 ? 3 : -3, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 70, damping: 16, mass: 0.9, delay: (index % 3) * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} data-cursor="view" className="flex h-full flex-col">
        {/* Screenshot: clip-path reveal on scroll, dark wash + zoom on hover */}
        <motion.div
          className="relative aspect-[16/10] overflow-hidden rounded-xl bg-accent/10"
          initial={reduce ? false : { clipPath: "inset(9% 7% round 12px)" }}
          whileInView={{ clipPath: "inset(0% 0% round 12px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.15, ease }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.14 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.5, ease }}
          >
            <Image
              src={project.image}
              alt={`${project.name} website`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-ink opacity-0 transition-opacity duration-[560ms] group-hover:opacity-45" />
        </motion.div>

        <div className="flex flex-1 flex-col pt-5">
          <p className="font-mono text-[11px] tracking-[0.15em] text-ink/50 uppercase">
            {String(index + 1).padStart(2, "0")} / {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight transition-transform duration-250 group-hover:translate-x-[3px]">
            {project.name}
          </h3>
          <p className="mt-1.5 flex-1 text-sm text-ink/60">{project.tagline}</p>
          <span className="mt-5 flex w-fit items-center gap-7 border-b border-ink/30 pb-1 text-xs font-medium">
            View project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
