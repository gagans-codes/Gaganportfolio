import Link from 'next/link';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/Button';
import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata = {
  title: 'About',
  description: 'About Gagan KM, a Computer Science Engineering student transitioning from Mechanical Engineering to software development.',
};

export default function AboutPage() {
  return (
    <div className="container page-shell">
      <PageTransition>
        <section className="grid items-start gap-8 pb-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel" style={{ borderRadius: '2rem', padding: '1.2rem' }}>
            <div
              style={{
                borderRadius: '1.7rem',
                minHeight: '440px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.4rem',
                border: '1px solid rgba(255,201,216,0.12)',
                background:
                  'radial-gradient(circle at top, rgba(255,117,157,0.2), transparent 25%), linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
              }}
            >
              <div>
                <div className="meta-text">Current focus</div>
                <h2 className="heading-medium" style={{ marginTop: '0.6rem' }}>Learning software development</h2>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About"
              title="A learner building a path into software development."
              description="I am Gagan KM, currently pursuing Computer Science and Engineering through lateral entry at REVA University, Bengaluru. My earlier academic foundation was in Diploma in Mechanical Engineering, and I am now learning the fundamentals of programming, web technologies, and digital product thinking."
            />

            <p className="body-copy" style={{ marginTop: '1.5rem' }}>
              My transition into Computer Science is rooted in curiosity and a practical drive to learn how digital systems are built. I am developing a strong understanding of programming concepts and user-facing web fundamentals, with a focus on consistency, structured learning, and long-term growth.
            </p>
            <p className="body-copy" style={{ marginTop: '1rem' }}>
              I approach learning as a gradual process: understand the basics, build small things, and improve through repetition. This portfolio reflects that process as it grows with real projects, skills, and experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/education">Education</Button>
              <Button href="/skills" variant="secondary">Skills</Button>
            </div>
          </div>
        </section>

        <section className="panel" style={{ borderRadius: '2rem', padding: '2rem' }}>
          <div className="flex items-center gap-3">
            <GraduationCap className="text-[var(--accent)]" />
            <span className="meta-text">Academic journey</span>
          </div>

          <div className="mt-8 space-y-6">
            <div style={{ borderLeft: '1px solid rgba(255,142,174,0.45)', paddingLeft: '1.25rem' }}>
              <div className="meta-text">Current</div>
              <h3 className="heading-medium" style={{ fontSize: '1.75rem', marginTop: '0.6rem' }}>REVA University</h3>
              <p className="body-copy" style={{ marginTop: '0.3rem' }}>
                Computer Science and Engineering — 3rd semester, lateral entry
              </p>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,142,174,0.45)', paddingLeft: '1.25rem' }}>
              <div className="meta-text">Previous</div>
              <h3 className="heading-medium" style={{ fontSize: '1.75rem', marginTop: '0.6rem' }}>Diploma in Mechanical Engineering</h3>
              <p className="body-copy" style={{ marginTop: '0.3rem' }}>
                Academic foundation before moving into Computer Science.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/education" className="link-arrow" style={{ fontWeight: 600 }}>
              View education page <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </PageTransition>
    </div>
  );
}
