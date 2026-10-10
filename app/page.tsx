import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/data/site';

const pages = [
  { href: '/about', title: 'About', description: 'My background and learning journey.' },
  { href: '/projects', title: 'Projects', description: 'A place for real work as I build it.' },
  { href: '/skills', title: 'Skills', description: 'The technologies I am learning.' },
  { href: '/education', title: 'Education', description: 'My current studies and previous diploma.' },
  { href: '/experience', title: 'Experience', description: 'My internship at Automotive Axles.' },
  { href: '/contact', title: 'Contact', description: 'Get in touch by email or social profile.' },
];

export default function HomePage() {
  return (
    <div className="container page-shell">
      <PageTransition>
        <section className="hero">
          <div>
            <p className="section-label hero-kicker">Computer Science student · Bengaluru</p>
            <h1 className="heading-display hero-title">
              Hello, I’m
              <span className="accent-text block">Gagan KM.</span>
            </h1>
            <p className="body-copy hero-intro">
              I’m studying Computer Science and Engineering at REVA University and learning the fundamentals of software development.
            </p>
            <div className="hero-actions">
              <Button href="/about">About me <ArrowUpRight size={16} /></Button>
              <Button href={siteConfig.resumePdf} variant="secondary" external>View resume</Button>
            </div>
          </div>

          <aside className="hero-summary" aria-label="Education summary">
            <div className="meta-text">Currently studying</div>
            <h2 className="heading-medium" style={{ marginTop: '0.75rem' }}>Computer Science and Engineering</h2>
            <p className="body-copy" style={{ marginTop: '0.7rem' }}>REVA University · 3rd semester · Lateral entry</p>
            <div className="hero-summary-rule" />
            <div className="meta-text">Previous education</div>
            <p className="body-copy" style={{ marginTop: '0.4rem' }}>Diploma in Mechanical Engineering</p>
          </aside>
        </section>

        <section className="home-featured">
          <SectionHeading eyebrow="Portfolio" title="Explore" />
          <div className="grid-3">
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className="feature-card">
                <div className="flex items-center justify-between">
                  <span className="feature-card-number">{page.title}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
                <p className="body-copy" style={{ margin: '1.3rem 0 0', fontSize: '0.92rem' }}>{page.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </PageTransition>
    </div>
  );
}
