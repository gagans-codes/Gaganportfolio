import { Mail, MapPin, Phone } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Gagan KM for internships, learning opportunities, and collaboration.',
};

export default function ContactPage() {
  return (
    <div className="container page-shell">
      <PageTransition>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect and build something meaningful."
          description="I’m open to connecting for learning opportunities, internship discussions, and future collaborations. Fill in the form to open a message in your email app—this static portfolio does not use a backend."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="panel" style={{ borderRadius: '2rem', padding: '2rem' }}>
            <div className="meta-text" style={{ marginBottom: '1rem' }}>Details</div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 body-copy">
                <Mail className="text-[var(--accent)]" size={18} />
                {siteConfig.email}
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 body-copy">
                <MapPin className="text-[var(--accent)]" size={18} />
                LinkedIn
              </a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 body-copy">
                <Phone className="text-[var(--accent)]" size={18} />
                GitHub
              </a>
              <div className="flex items-center gap-3 body-copy">
                <Phone className="text-[var(--accent)]" size={18} />
                {siteConfig.phone}
              </div>
            </div>
          </div>

          <div className="panel" style={{ borderRadius: '2rem', padding: '2rem' }}>
            <ContactForm />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
