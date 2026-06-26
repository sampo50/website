import Link from "next/link";

type CTASectionProps = {
  headline: string;
  text: string;
  buttonLabel: string;
  secondaryButtonLabel?: string;
  href?: string;
};

export function CTASection({
  headline,
  text,
  buttonLabel,
  secondaryButtonLabel,
  href = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-accent py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-normal md:text-4xl">{headline}</h2>
        <p className="mt-4 text-white/85">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-canvas"
          >
            {buttonLabel}
          </Link>
          {secondaryButtonLabel && (
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryButtonLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
