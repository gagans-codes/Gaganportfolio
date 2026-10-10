import { PageTransition } from '@/components/PageTransition';
import { ResumeActions } from '@/components/ResumeActions';
import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/data/site';

export const metadata = {
  title: 'Resume',
  description: 'Download the resume for Gagan KM in PDF format.',
};

export default function ResumePage() {
  return (
    <div className="container page-shell">
      <PageTransition>
        <SectionHeading
          eyebrow="Resume"
          title="Professional profile and downloadable PDF."
          description="The resume is provided as a real file in the project and is linked directly from this page for download and browser viewing."
        />

        <div className="panel" style={{ borderRadius: '2rem', padding: '1.3rem' }}>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="section-label">Gagan KM</div>
              <p className="body-copy" style={{ marginTop: '0.5rem' }}>{siteConfig.email}</p>
            </div>
            <ResumeActions />
          </div>

          <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '1.25rem', overflow: 'hidden' }}>
            <iframe src={siteConfig.resumePdf} title="Gagan KM Resume" style={{ width: '100%', height: '900px', border: 0, background: '#fff' }} />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
