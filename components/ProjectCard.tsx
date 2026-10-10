import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)' }}>
        <div
          style={{
            aspectRatio: '1.55',
            border: '1px solid rgba(255,255,255,0.08)',
            background:
              'radial-gradient(circle at top, rgba(255, 117, 157, 0.2), transparent 35%), linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,242,245,0.7)',
            fontSize: '0.82rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          {project.category}
        </div>
      </div>
      <div style={{ padding: '1.2rem 1.2rem 1.5rem' }}>
        <div className="meta-text" style={{ marginBottom: '0.7rem' }}>{project.status}</div>
        <h3 className="heading-medium" style={{ fontSize: '1.6rem', marginBottom: '0.7rem' }}>
          {project.title}
        </h3>
        <p className="body-copy" style={{ margin: '0 0 1rem' }}>{project.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.1rem' }}>
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
                padding: '0.35rem 0.55rem',
                borderRadius: '999px',
                fontSize: '0.72rem',
                color: 'var(--muted)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="link-arrow" style={{ fontWeight: 600 }}>
          View details <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
