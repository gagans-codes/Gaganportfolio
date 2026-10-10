import Link from 'next/link';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects',
  description: 'Project gallery for Gagan KM. Real project entries will be added here as the portfolio grows.',
};

export default function ProjectsPage() {
  return (
    <div className="container page-shell">
      <PageTransition>
        <SectionHeading
          eyebrow="Projects"
          title="A portfolio section that is ready to grow."
          description="No public projects are listed in the current resume, so this gallery is intentionally structured for future work. When real results are added, they will appear here with a dedicated detail page for each project."
        />

        {projects.length > 0 ? (
          <div className="grid-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="panel" style={{ borderRadius: '2rem', padding: '2rem 1.5rem', textAlign: 'center' }}>
            <div className="section-label">Current status</div>
            <h3 className="heading-medium" style={{ marginTop: '1rem' }}>No public projects yet.</h3>
            <p className="body-copy" style={{ margin: '1rem auto 0', maxWidth: '42rem' }}>
              This portfolio is intentionally empty of fake project claims. As I build real work, project cards and case studies can be added in the project data file and published here.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a href="https://github.com/gagan98-icchhu" target="_blank" rel="noreferrer" className="button-secondary">
                <Code2 size={18} /> Visit GitHub
              </a>
              <Link href="/contact" className="link-arrow" style={{ fontWeight: 600 }}>
                Contact me <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </PageTransition>
    </div>
  );
}
