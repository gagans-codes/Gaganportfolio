import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container top-border" style={{ padding: '2.25rem 0 4rem' }}>
      <div className="content-grid" style={{ alignItems: 'end' }}>
        <div style={{ gridColumn: 'span 5' }}>
          <div className="section-label">Gagan KM</div>
          <p className="body-copy" style={{ marginTop: '0.8rem', maxWidth: '28rem' }}>
            Learning software development through Computer Science Engineering, building the foundation for future projects and digital products.
          </p>
        </div>

        <div style={{ gridColumn: 'span 3' }}>
          <div className="meta-text" style={{ marginBottom: '0.8rem' }}>Connect</div>
          <div style={{ display: 'grid', gap: '0.55rem' }}>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div style={{ gridColumn: 'span 4' }}>
          <div className="meta-text" style={{ marginBottom: '0.8rem' }}>Navigate</div>
          <div style={{ display: 'grid', gap: '0.55rem' }}>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="body-copy" style={{ marginTop: '2rem', fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
