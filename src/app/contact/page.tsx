import type { Metadata } from "next";
import { site } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { whatsappLink } from "@/components/whatsapp-button";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's work together" text="Tell me about your project — a new website, a redesign or an online store. I usually reply within 24 hours." />
      <section className="mx-auto grid max-w-6xl gap-14 px-5 pb-24 md:grid-cols-[1fr_1.5fr] md:px-8">
        <Reveal className="space-y-10">
          <div>
            <p className="eyebrow">EMAIL</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-xl font-medium hover:underline">{site.email}</a>
          </div>
          <div>
            <p className="eyebrow">WHATSAPP</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xl font-medium hover:underline">
              +92 327 8197299
            </a>
          </div>
          <div>
            <p className="eyebrow">CONNECT</p>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xl font-medium hover:underline">
              LinkedIn ↗
            </a>
          </div>
          <div>
            <p className="eyebrow">LOCATION</p>
            <p className="mt-2 text-xl font-medium">Working worldwide · Remote</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
