import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { skillCategories } from '@/data/skills';

export const metadata = {
  title: 'Skills',
  description: 'Current technical skills listed for Gagan KM, including C, HTML, and CSS.',
};

export default function SkillsPage() {
  return (
    <div className="container page-shell">
      <PageTransition>
        <SectionHeading
          eyebrow="Skills"
          title="A growing technical foundation."
          description="The current skill set reflects the verified resume details only. As more expertise is gained, new categories and technologies can be added without changing the page structure."
        />

        <div className="grid-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="panel card" style={{ borderRadius: '1.5rem' }}>
              <div className="meta-text" style={{ marginBottom: '1rem' }}>{category.title}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.9rem' }}>
                {category.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="heading-medium" style={{ fontSize: '1.35rem' }}>{skill.name}</div>
                    <p className="body-copy" style={{ marginTop: '0.3rem' }}>{skill.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageTransition>
    </div>
  );
}
