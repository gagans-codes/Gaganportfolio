import Link from 'next/link';
import type { ReactNode } from 'react';

export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
}) {
  const sharedClass = `inline-flex items-center justify-center gap-2 rounded-full transition-transform duration-200 hover:-translate-y-0.5 ${
    variant === 'primary' ? 'button-primary' : 'button-secondary'
  } ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={sharedClass}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClass}>
      {children}
    </Link>
  );
}
