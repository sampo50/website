type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="cursor-pointer list-none text-base font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span className="mt-1 shrink-0 text-muted transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
