'use client';

import { Download, Printer } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={siteConfig.resumePdf} target="_blank" rel="noreferrer" className="button-primary">
        <Download size={16} /> Download Resume PDF
      </a>
      <button type="button" className="button-secondary" onClick={() => window.print()}>
        <Printer size={16} /> Print
      </button>
    </div>
  );
}
