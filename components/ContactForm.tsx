'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.';

    setErrors(nextErrors);
    setStatus('');

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please correct the highlighted fields.');
      return;
    }

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      '',
      form.message.trim(),
    ].join('\n');
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('Your email app should open with this message ready to send. No message is sent from this website.');
  }

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  }

  const fieldStyle = (field: keyof typeof initialForm) => ({
    width: '100%',
    border: `1px solid ${errors[field] ? '#fb7185' : 'rgba(255,201,216,0.18)'}`,
    borderRadius: '0.9rem',
    background: 'rgba(9,7,8,0.62)',
    color: 'var(--text)',
    padding: '0.9rem 1rem',
  });

  function renderError(field: keyof typeof initialForm) {
    return errors[field] ? (
      <div id={`${field}-error`} className="body-copy" style={{ color: '#fda4af', marginTop: '0.35rem', fontSize: '0.82rem' }}>
        {errors[field]}
      </div>
    ) : null;
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '1rem' }}>
      <div className="content-grid" style={{ gap: '1rem' }}>
        <div style={{ gridColumn: 'span 6' }}>
          <label htmlFor="name" className="meta-text" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            style={fieldStyle('name')}
          />
          {renderError('name')}
        </div>

        <div style={{ gridColumn: 'span 6' }}>
          <label htmlFor="email" className="meta-text" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            style={fieldStyle('email')}
          />
          {renderError('email')}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="meta-text" style={{ display: 'block', marginBottom: '0.5rem' }}>Subject</label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={(event) => updateField('subject', event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          style={fieldStyle('subject')}
        />
        {renderError('subject')}
      </div>

      <div>
        <label htmlFor="message" className="meta-text" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          style={{ ...fieldStyle('message'), resize: 'vertical' }}
        />
        {renderError('message')}
      </div>

      {status ? (
        <div aria-live="polite" className="body-copy" style={{ fontSize: '0.9rem' }}>
          {status}
        </div>
      ) : null}

      <button type="submit" className="button-primary" style={{ width: 'fit-content' }}>
        Open Email App
      </button>
      <p className="body-copy" style={{ margin: 0, fontSize: '0.82rem' }}>
        This form uses your device’s email app. It does not submit data to a server.
      </p>
    </form>
  );
}
