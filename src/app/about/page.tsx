import type { Metadata } from "next";
import { industries, projectCount, projects, site, stack, stackCreative } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { Marquee, Reveal, SlideIn } from "@/components/motion";
import { Portrait } from "@/components/portrait";

export const metadata: Metadata = { title: "About" };

const values = [
  ["Design first", "Every project starts with how it should feel — typography, spacing and motion that match the brand."],
  ["Performance", "Animation and 3D never at the cost of speed. Sites are optimised for Lighthouse and Core Web Vitals."],
  ["Clear communication", "Regular updates, honest timelines and a site you can easily grow after launch."],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Me" title={`Hi, I'm ${site.name}`} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 md:grid-cols-2 md:px-8">
        <Reveal>
          <Portrait variant="about" className="mx-auto aspect-[4/5] w-full max-w-[400px]" />
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink/75">
          <p>
            I&apos;m {site.fullName}, a web developer and UI designer who builds premium, animated websites for brands that
            want to stand out — {industries}.
          </p>
          <p>
            I work with Next.js, TypeScript and Tailwind CSS, and bring sites to life with GSAP, ScrollTrigger, Lenis, Framer Motion and Three.js.
            Whether it&apos;s a brand-new website, an online store or a redesign of an outdated site, I handle everything from
            design to launch.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              [projectCount, "Projects delivered"],
              ["4", "Industries"],
              ["24h", "Reply time"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="heading text-5xl text-ink">{n}</p>
                <p className="mt-1 text-sm text-ink/50">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-night py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="eyebrow">WHAT I CARE ABOUT</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map(([t, d], i) => (
              <SlideIn key={t} index={i}>
                <div className="h-full rounded-2xl bg-night-card p-7 text-white">
                  <h3 className="heading text-2xl">{t}</h3>
                  <p className="mt-3 text-white/65">{d}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 bg-night pb-24">
        <Marquee items={stack} />
        <Marquee items={stackCreative} outline reverse />
      </section>
    </>
  );
}
