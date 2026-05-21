import Link from "next/link";

type CTASectionProps = {
  headline: string;
  text: string;
  buttonLabel: string;
  href?: string;
};

export function CTASection({
  headline,
  text,
  buttonLabel,
  href = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-accent py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-normal md:text-4xl">{headline}</h2>
        <p className="mt-4 text-white/85">{text}</p>
        <Link
          href={href}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-canvas"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
