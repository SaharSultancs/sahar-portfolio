import Link from "next/link";
import { site } from "@/lib/data";
import { Reveal } from "./motion";
import { whatsappLink } from "./whatsapp-button";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pt-10 pb-10 md:px-8">
      <Reveal>
        <div className="flex flex-col gap-8 rounded-3xl bg-accent px-8 py-12 text-white md:flex-row md:items-center md:justify-between md:px-14">
          <div>
            <h2 className="heading text-4xl uppercase md:text-5xl">
              Have a site that <br /> needs work?
            </h2>
            <p className="mt-4 text-white/85">Tell me about it. I&apos;ll reply with a plan and a quote.</p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-center">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:scale-105">
              Start a project
            </Link>
            <a href={`mailto:${site.email}`} className="font-mono text-xs text-white/85 hover:underline">{site.email}</a>
          </div>
        </div>
      </Reveal>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pr-16 text-sm text-ink/50">
        <p>© 2026 {site.fullName}</p>
        <div className="flex gap-5">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
