import { BookOpenText } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { academicSummary, education } from '@/data/education';

export const metadata = {
  title: 'Education',
  description: 'Academic background for Gagan KM, including current CSE studies and previous diploma education.',
};

export default function EducationPage() {
  return (
    <div className="container page-shell">
      <PageTransition>
        <SectionHeading
          eyebrow="Education"
          title="Academic foundations with a clear path forward."
          description="The academic profile below reflects only the verified details provided in the resume, while leaving space for future coursework, certifications, and achievements as they become real."
        />

        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          {education.map((item) => (
            <article key={item.degree || item.institution} className="panel card" style={{ borderRadius: '1.5rem' }}>
              <div className="flex items-center gap-3">
                <BookOpenText className="text-[var(--accent)]" size={18} />
                <span className="meta-text">{item.type}</span>
              </div>
              <h3 className="heading-medium" style={{ marginTop: '1rem', fontSize: '1.6rem' }}>{item.institution}</h3>
              {item.location ? <p className="body-copy" style={{ marginTop: '0.3rem' }}>{item.location}</p> : null}
              {item.degree ? <p className="body-copy" style={{ marginTop: '0.7rem' }}>{item.degree}</p> : null}
              {item.stage ? <p className="body-copy" style={{ marginTop: '0.2rem' }}>{item.stage}</p> : null}
              <p className="body-copy" style={{ marginTop: '0.75rem' }}>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="panel" style={{ borderRadius: '2rem', padding: '2rem' }}>
          <div className="meta-text">CGPA</div>
          <h3 className="heading-medium" style={{ marginTop: '0.7rem', fontSize: '2.4rem' }}>{academicSummary.cgpa}</h3>
          <p className="body-copy" style={{ marginTop: '0.7rem', maxWidth: '42rem' }}>{academicSummary.note}</p>
        </div>
      </PageTransition>
    </div>
  );
}
