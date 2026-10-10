import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="container page-shell">
      <div className="panel" style={{ borderRadius: '2rem', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
        <div className="section-label">404</div>
        <h1 className="heading-large" style={{ marginTop: '0.75rem' }}>Page not found.</h1>
        <p className="body-copy" style={{ margin: '1rem auto 0', maxWidth: '36rem' }}>
          The page you’re looking for doesn’t exist, or it hasn’t been published yet.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/" className="button-primary">
            <ArrowLeft size={18} /> Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
