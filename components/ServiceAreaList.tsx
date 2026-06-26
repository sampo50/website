type ServiceArea = {
  title: string;
  description: string;
};

type ServiceAreaListProps = {
  title: string;
  areas: ServiceArea[];
};

export function ServiceAreaList({ title, areas }: ServiceAreaListProps) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink md:text-3xl">{title}</h2>
      <ul className="mt-8 space-y-6">
        {areas.map((area) => (
          <li key={area.title} className="card">
            <h3 className="font-semibold text-ink">{area.title}</h3>
            <p className="mt-2 text-sm text-muted">{area.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
