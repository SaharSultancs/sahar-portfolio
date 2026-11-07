import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Selected Work" title="All Projects" text="Live client builds — business websites, 3D experiences and e-commerce stores. Open any one to see the details and the live site." />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 md:grid-cols-2 lg:grid-cols-3 md:px-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </section>
    </>
  );
}
