import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
};

export function Section({ children, className = "", id, alt }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${alt ? "bg-white/60 border-y border-border" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
