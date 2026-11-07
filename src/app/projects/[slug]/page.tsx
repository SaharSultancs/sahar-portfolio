import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Reveal, SlideIn, SplitText } from "@/components/motion";

// Every slug is prerendered, so a blocking route costs nothing.
export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.name, description: p?.tagline };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const others = projects.filter((x) => x.slug !== slug);

  const snapshot: [string, string[]][] = [
    ["PROJECT", [p.name]],
    ["TYPE", [p.category]],
    ["SERVICES", p.services],
    ["TOOLS", p.tools],
    ["KEY CAPABILITIES", p.capabilities],
    ["STATUS", ["Live"]],
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-36 md:px-8 md:pt-44">
        <p className="eyebrow">{p.category.toUpperCase()}</p>
        <h1 className="heading mt-4 text-6xl md:text-8xl">
          <SplitText text={p.name} />
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/65">{p.tagline}</p>
        <Reveal className="mt-12">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[16/10]">
            <Image src={p.image} alt={`${p.name} homepage`} fill priority sizes="100vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
          </a>
        </Reveal>
      </section>

      {/* Snapshot */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="eyebrow">PROJECT SNAPSHOT</p>
          <p className="mt-4 max-w-3xl text-2xl leading-snug md:text-3xl">{p.snapshot}</p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {snapshot.map(([label, values], i) => (
            <SlideIn key={label} index={i} className="bg-white p-7">
              <p className="text-xs text-ink/40">{String(i + 1).padStart(2, "0")} · {label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {values.map((v) =>
                  label === "STATUS" ? (
                    <span key={v} className="flex items-center gap-2 font-medium">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" /> {v}
                    </span>
                  ) : (
                    <span key={v} className={values.length > 1 ? "rounded-full border border-ink/15 px-3 py-1 text-sm" : "text-lg font-medium"}>{v}</span>
                  ),
                )}
              </div>
            </SlideIn>
          ))}
        </div>
        <Reveal className="mt-10">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 rounded-full bg-ink px-8 py-4 text-white transition hover:scale-105">
            <span className="font-medium">VISIT LIVE PROJECT ↗</span>
            <span className="text-sm text-white/60">{p.url.replace(/^https:\/\/|\/$/g, "").toUpperCase()}</span>
          </a>
        </Reveal>
      </section>

      {/* Overview */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_2fr] md:px-8">
          <Reveal>
            <p className="eyebrow">01 / OVERVIEW</p>
            <h2 className="heading mt-4 text-4xl md:text-6xl">Project <br /> Overview</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink/75">
            {p.overview.map((t) => <p key={t}>{t}</p>)}
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="eyebrow">02 / KEY FEATURES</p>
          <h2 className="heading mt-4 text-4xl md:text-6xl">Key Features</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f, i) => (
            <SlideIn key={f.title} index={i}>
              <div className="h-full rounded-2xl border border-ink/10 p-8 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-xl">
                <p className="heading text-3xl text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-ink/65">{f.text}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </section>

      {/* More */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <p className="eyebrow">MORE PROJECTS</p>
        <h2 className="heading mt-4 text-4xl">Explore more work.</h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {others.map((o) => (
            <Link key={o.slug} href={`/projects/${o.slug}`} className="group flex items-center justify-between py-6 transition-all hover:pl-4">
              <span className="heading text-2xl md:text-4xl">{o.name}</span>
              <span className="text-xs tracking-[0.25em] text-ink/50 group-hover:text-ink">{o.category.toUpperCase()} →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
