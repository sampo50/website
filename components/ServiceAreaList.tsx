export type ServiceArea = {
  title: string;
  bullets: string[];
};

type ServiceAreaListProps = {
  title: string;
  areas: ServiceArea[];
};

export function ServiceAreaList({ title, areas }: ServiceAreaListProps) {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {areas.map((area) => (
          <li key={area.title} className="card">
            <h3 className="font-semibold text-ink">{area.title}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {area.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
