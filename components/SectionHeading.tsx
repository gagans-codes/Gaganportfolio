export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="section-label">{eyebrow}</div>
      <h2 className="heading-large" style={{ marginTop: '0.85rem' }}>{title}</h2>
      {description ? (
        <p className="body-copy" style={{ marginTop: '1rem', maxWidth: '42rem' }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
