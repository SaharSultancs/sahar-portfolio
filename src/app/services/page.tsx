import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { Reveal, SlideIn } from "@/components/motion";

export const metadata: Metadata = { title: "Services" };

const process = [
  ["Discover", "A short call to understand your business, goals and audience."],
  ["Design", "Layout and visual direction, shared for feedback before any code."],
  ["Build", "Fast, responsive development with animation and clean code."],
  ["Launch", "Testing on every device, SEO basics and deployment on Vercel."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="What I Do" title="Services" text="New websites, redesigns and online stores — designed to look premium and built to perform." />
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        {services.map((s, i) => (
          <SlideIn key={s.id} index={i}>
            <div id={s.id} className="grid scroll-mt-28 gap-8 border-t border-ink/10 py-14 md:grid-cols-[auto_1fr_1fr]">
              <span className="font-mono text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="heading text-3xl md:text-5xl">{s.title}</h2>
                <p className="mt-4 text-lg text-ink/65">{s.text}</p>
              </div>
              <ul className="space-y-3">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 border-b border-ink/5 pb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>
        ))}
      </section>

      <section className="bg-night py-24 text-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="eyebrow">HOW I WORK</p>
          <h2 className="heading mt-4 text-4xl md:text-6xl">The Process</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {process.map(([t, d], i) => (
              <SlideIn key={t} index={i}>
                <div className="h-full rounded-2xl border border-white/15 p-8 transition hover:bg-white hover:text-ink hover:border-white">
                  <p className="text-sm opacity-50">STEP {i + 1}</p>
                  <h3 className="heading mt-4 text-2xl">{t}</h3>
                  <p className="mt-3 opacity-70">{d}</p>
                </div>
              </SlideIn>
            ))}
          </div>
          <Link href="/contact" className="mt-14 inline-block rounded-full bg-white px-8 py-4 font-medium text-ink transition hover:scale-105">
            Start a project →
          </Link>
        </div>
      </section>
    </>
  );
}
