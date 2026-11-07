import { SplitText } from "./motion";

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-36 pb-14 md:px-8 md:pt-40">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="heading mt-4 text-5xl md:text-7xl">
        <SplitText text={title} />
      </h1>
      {text && <p className="mt-5 max-w-xl text-ink/65">{text}</p>}
    </section>
  );
}
