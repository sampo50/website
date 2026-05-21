type Step = { title: string; description: string };

type ProcessStepsProps = {
  steps: Step[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className="card">
          <span className="text-sm font-bold text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 text-sm text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
