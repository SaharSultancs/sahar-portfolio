import Image from "next/image";
import { site } from "@/lib/data";

// Both variants show the original studio shot (public/me.webp); the hero adds name and role labels.
export function Portrait({ variant = "hero", className = "" }: { variant?: "hero" | "about"; className?: string }) {
  if (variant === "about") {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-night-card ${className}`}>
        <Image src="/me.webp" alt={site.fullName} fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover object-[center_25%]" />
      </div>
    );
  }
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e6e9ff] to-[#dfe3fc] ${className}`}>
      <span className="absolute top-4 left-4 z-10 rounded-full bg-white/80 px-3 py-1 font-mono text-[11px]">[ {site.fullName} ]</span>
      <Image
        src="/me.webp"
        alt={site.fullName}
        fill
        priority
        sizes="(min-width: 768px) 420px, 90vw"
        className="object-cover object-[center_25%] transition duration-700 group-hover:scale-[1.03]"
      />
      <span className="absolute bottom-4 left-4 z-10 rounded-full bg-ink px-4 py-1.5 font-mono text-[11px] tracking-[0.15em] text-white uppercase">
        {site.role}
      </span>
    </div>
  );
}
