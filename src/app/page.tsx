import Link from "next/link";
import { dashboards, websites, industries, projects, services, site, stack, stackCreative } from "@/lib/data";
import { Marquee, Reveal, SlideIn, SplitText } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { Portrait } from "@/components/portrait";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 md:grid-cols-[1.3fr_1fr] md:px-8 md:pt-36">
        <div>
          <Reveal>
            <p className="text-ink/75">Hi, my name is {site.name} and I am a freelance</p>
          </Reveal>
          <h1 className="heading mt-5 text-6xl uppercase md:text-[5.5rem]">
            <SplitText text="Web Dev &" delay={0.1} />
            <br />
            <SplitText text="Redesign" delay={0.3} className="text-accent" />
            <br />
            <SplitText text="Expert" delay={0.45} />
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-7 text-ink/75">Available for remote work worldwide.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-accent/30">
                I need a developer
              </Link>
              <Link href="/services#redesign" className="rounded-full border border-ink px-6 py-3 text-sm font-semibold transition hover:bg-ink hover:text-white">
                I need a redesign
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Portrait className="mx-auto aspect-[4/5] w-full max-w-[400px]" />
        </Reveal>
      </section>


      {/* Selected projects */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">01 / Selected Work</p>
            <h2 className="heading mt-3 text-4xl md:text-5xl">Selected Projects</h2>
            <p className="mt-4 text-ink/65">A few recent builds, from business websites to animated 3D experiences.</p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {websites.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          {/* Dashboards & web apps, in the same white band as the websites */}
          {dashboards.length > 0 && (
            <div className="mt-24">
              <Reveal>
                <p className="eyebrow">02 / Dashboards &amp; Web Apps</p>
                <h2 className="heading mt-3 text-4xl md:text-5xl">Dashboards &amp; Web Apps</h2>
                <p className="mt-4 text-ink/65">Admin panels that turn day-to-day business data into clear, usable screens.</p>
              </Reveal>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {dashboards.map((d, i) => (
                  <ProjectCard key={d.slug} project={d} index={i} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 mb-4 flex justify-center">
            <Link
              href="/projects"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-lg shadow-accent/25 transition hover:shadow-xl hover:shadow-accent/35 active:scale-[0.98] sm:w-auto"
            >
              View all {projects.length} projects
              <span className="transition-transform duration-300 group-hover:translate-x-1.5 group-active:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="eyebrow">03 / What I Do</p>
          <h2 className="heading mt-3 text-4xl md:text-5xl">I build websites that work.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.slice(0, 4).map((s, i) => (
            <SlideIn key={s.id} index={i} className={i === 3 ? "md:col-span-3" : ""}>
              <Link
                href={`/services#${s.id}`}
                className="group block h-full rounded-2xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
              >
                <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-ink/65">{s.short}</p>
              </Link>
            </SlideIn>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-night py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.4fr] md:px-8">
          <Reveal>
            <Portrait variant="about" className="aspect-square w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">04 / About</p>
            <h2 className="heading mt-3 text-4xl md:text-5xl">About Me</h2>
            <p className="mt-5 leading-relaxed text-white/70">
              I&apos;m {site.name}, a web developer who builds new websites and redesigns old ones. I work with Next.js, GSAP
              and Three.js to create fast, animated sites for {industries} — and I work with clients
              from the first call through design, build and launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-10">
              {[
                ["10+", "Projects delivered"],
                ["2", "Disciplines: Build & Redesign"],
                ["24h", "Reply time"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="heading text-4xl">{n}</p>
                  <p className="mt-1 text-xs text-white/60">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/60">Location: working worldwide, available for remote work.</p>
            <Link href="/about" className="mt-6 inline-block border-b border-white/40 pb-0.5 text-sm">More about me →</Link>
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-night py-24 text-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="eyebrow">05 / Tech Stack</p>
          <h2 className="heading mt-3 mb-14 text-5xl md:text-7xl">Tools I build with.</h2>
        </div>
        <div className="space-y-6">
          <Marquee items={stack} />
          <Marquee items={stackCreative} outline reverse />
        </div>
      </section>
    </>
  );
}
