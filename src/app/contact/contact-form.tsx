"use client";

import { useState } from "react";
import { site } from "@/lib/data";
import { whatsappLink } from "@/components/whatsapp-button";

const types = ["New website", "Website redesign", "E-commerce store", "Landing page", "Other"];

type Status = "idle" | "sending" | "sent" | "error";

// Sends the enquiry straight to site.email through FormSubmit (no backend or API key needed).
export function ContactForm() {
  const [type, setType] = useState(types[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New project enquiry: ${type}`,
          _template: "table",
          _captcha: "false",
          _replyto: f.get("email"),
          Name: f.get("name"),
          Email: f.get("email"),
          Phone: f.get("phone") || "-",
          "Project type": type,
          Budget: f.get("budget") || "-",
          Message: f.get("message"),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== "true") throw new Error(data.message);
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "");
      setStatus("error");
    }
  }

  const input = "w-full border-b border-ink/20 bg-transparent py-4 text-lg outline-none transition focus:border-accent";

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
        <p className="heading text-3xl">Message sent ✓</p>
        <p className="mt-3 text-ink/65">Thanks! I&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 border-b border-ink/30 pb-0.5 text-sm">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`rounded-full border px-4 py-2 text-sm transition ${type === t ? "border-accent bg-accent text-white" : "border-ink/20 bg-white hover:border-accent"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <input name="name" required placeholder="Your name" className={input} />
      <input name="email" type="email" required placeholder="Your email" className={input} />
      <input name="phone" type="tel" placeholder="Phone / WhatsApp (optional)" className={input} />
      <input name="budget" placeholder="Budget (optional)" className={input} />
      <textarea name="message" required rows={5} placeholder="Tell me about your project" className={input} />
      <button
        disabled={status === "sending"}
        className="rounded-full bg-accent px-10 py-4 font-medium text-white transition hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          {error && !/activat/i.test(error) ? `${error} ` : "Your message could not be sent. "}
          Please email me at <a href={`mailto:${site.email}`} className="underline">{site.email}</a> or{" "}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="underline">message me on WhatsApp</a>.
        </p>
      )}
    </form>
  );
}
