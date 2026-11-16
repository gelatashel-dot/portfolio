export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="eyebrow mb-4">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {description && <p className="muted mt-5 max-w-xl text-sm leading-7">{description}</p>}
    </div>
  );
}
