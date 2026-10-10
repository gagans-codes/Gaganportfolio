import { BriefcaseBusiness } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { experience } from '@/data/experience';

export const metadata = {
  title: 'Experience',
  description: 'Internship details for Gagan KM, based only on the verified resume information.',
};

export default function ExperiencePage() {
  return (
    <div className="container page-shell">
      <PageTransition>
        <SectionHeading
          eyebrow="Experience"
          title="Internship information, kept accurate and minimal."
          description="The resume notes an internship at Automotive Axles Pvt. Ltd. in Mysuru, but it does not provide the role title, dates, or responsibilities. Those details are intentionally omitted to avoid fabrication."
        />

        <div className="panel" style={{ borderRadius: '2rem', padding: '2rem', maxWidth: '900px' }}>
          {experience.map((item) => (
            <div key={item.company}>
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="text-[var(--accent)]" />
                <div className="meta-text">Internship</div>
              </div>
              <h3 className="heading-medium" style={{ marginTop: '1rem', fontSize: '2rem' }}>{item.company}</h3>
              <p className="body-copy" style={{ marginTop: '0.4rem' }}>{item.location}</p>
              {item.title ? <p className="body-copy" style={{ marginTop: '0.7rem' }}>{item.title}</p> : null}
              {item.dateRange ? <p className="body-copy" style={{ marginTop: '0.4rem' }}>{item.dateRange}</p> : null}
              {item.description ? <p className="body-copy" style={{ marginTop: '1rem' }}>{item.description}</p> : null}
            </div>
          ))}
        </div>
      </PageTransition>
    </div>
  );
}
