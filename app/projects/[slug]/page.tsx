import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageTransition } from '@/components/PageTransition';
import { projects } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container page-shell">
      <PageTransition>
        <div className="mb-8">
          <Link href="/projects" className="link-arrow">
            <ArrowLeft size={16} /> Back to projects
          </Link>
        </div>

        <article className="panel" style={{ borderRadius: '2rem', padding: '1.4rem' }}>
          <div className="mb-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <div className="meta-text">{project.category}</div>
            <h1 className="heading-large" style={{ marginTop: '0.8rem' }}>{project.title}</h1>
            <p className="body-copy" style={{ marginTop: '1rem', maxWidth: '52rem' }}>{project.description}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6">
                <div className="meta-text">Overview</div>
                <p className="body-copy" style={{ marginTop: '0.7rem' }}>{project.overview || 'Project details will be added here as real work becomes available.'}</p>
              </div>

              {project.problem ? (
                <div className="mb-6">
                  <div className="meta-text">Problem</div>
                  <p className="body-copy" style={{ marginTop: '0.7rem' }}>{project.problem}</p>
                </div>
              ) : null}

              {project.goals && project.goals.length > 0 ? (
                <div className="mb-6">
                  <div className="meta-text">Goals</div>
                  <ul className="body-copy" style={{ marginTop: '0.7rem', paddingLeft: '1.1rem', lineHeight: 2 }}>
                    {project.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.features && project.features.length > 0 ? (
                <div className="mb-6">
                  <div className="meta-text">Key features</div>
                  <ul className="body-copy" style={{ marginTop: '0.7rem', paddingLeft: '1.1rem', lineHeight: 2 }}>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="panel" style={{ borderRadius: '1.5rem', padding: '1.4rem' }}>
              <div className="meta-text" style={{ marginBottom: '1rem' }}>Project details</div>
              <div style={{ display: 'grid', gap: '0.9rem' }}>
                <div>
                  <div className="meta-text">Status</div>
                  <div className="body-copy" style={{ marginTop: '0.3rem' }}>{project.status}</div>
                </div>
                <div>
                  <div className="meta-text">Technologies</div>
                  <div className="body-copy" style={{ marginTop: '0.3rem' }}>{project.technologies.join(', ') || 'Awaiting details'}</div>
                </div>
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-arrow" style={{ fontWeight: 600 }}>
                    GitHub <ArrowUpRight size={16} />
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-arrow" style={{ fontWeight: 600 }}>
                    Live demo <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>
            </aside>
          </div>
        </article>
      </PageTransition>
    </div>
  );
}
