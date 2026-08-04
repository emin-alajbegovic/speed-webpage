'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Send, CheckCircle2, User, Mail, Phone, Building2, MessageSquare, Briefcase, AlertTriangle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DISPATCH_PHONE = '+386 40 482 669';
const INBOX = 'info@spedition-begovac.com';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const EMPTY: FormData = { name: '', email: '', phone: '', company: '', service: '', message: '' };

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const next: Partial<FormData> = {};
    if (!formData.name.trim()) next.name = f.required;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) next.email = f.invalidEmail;
    if (!formData.message.trim()) next.message = f.required;
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        className="flex flex-col items-center justify-center px-8 py-16 text-center"
      >
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
          <CheckCircle2 className="h-10 w-10 text-emerald-500" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-[var(--foreground)]">{f.successTitle}</h3>
        <p className="max-w-sm text-[var(--muted-foreground)]">{f.success}</p>
        <button
          onClick={() => { setStatus('idle'); setFormData(EMPTY); }}
          className="mt-6 rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-hover)]"
        >
          {f.newMessage}
        </button>
      </motion.div>
    );
  }

  const fields = [
    { name: 'name', label: f.name, icon: User, type: 'text', autoComplete: 'name' },
    { name: 'email', label: f.email, icon: Mail, type: 'email', autoComplete: 'email' },
    { name: 'phone', label: f.phone, icon: Phone, type: 'tel', autoComplete: 'tel' },
    { name: 'company', label: f.company, icon: Building2, type: 'text', autoComplete: 'organization' },
  ] as const;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div
          role="alert"
          className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm"
        >
          <p className="flex items-center gap-2 font-semibold text-red-600 dark:text-red-400">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            {f.errorTitle}
          </p>
          <p className="mt-1 text-[var(--muted-foreground)]">{f.errorBody}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`tel:${DISPATCH_PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              {f.errorCall}
            </a>
            <a
              href={`mailto:${INBOX}?subject=${encodeURIComponent('Povpraševanje')}&body=${encodeURIComponent(formData.message)}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-2 text-xs font-semibold text-[var(--foreground)]"
            >
              <Mail className="h-3.5 w-3.5" />
              {f.errorEmail}
            </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map(({ name, label, icon: Icon, type, autoComplete }) => {
          const error = errors[name as keyof FormData];
          return (
            <div key={name}>
              <label htmlFor={`contact-${name}`} className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                {label}
              </label>
              <div className="relative">
                <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input
                  id={`contact-${name}`}
                  name={name}
                  type={type}
                  autoComplete={autoComplete}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `contact-${name}-error` : undefined}
                  value={formData[name as keyof FormData]}
                  onChange={handleChange}
                  className={cn(
                    'w-full rounded-xl border bg-[var(--input)] py-3 pl-10 pr-4 text-sm text-[var(--foreground)] transition-all placeholder:text-[var(--muted-foreground)]',
                    error ? 'border-red-500/60' : 'border-[var(--border)]'
                  )}
                  placeholder={label}
                />
              </div>
              {error && (
                <p id={`contact-${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
          {f.service}
        </label>
        <div className="relative">
          <Briefcase className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full cursor-pointer appearance-none rounded-xl border border-[var(--border)] bg-[var(--input)] py-3 pl-10 pr-4 text-sm text-[var(--foreground)]"
          >
            <option value="">{f.selectService}</option>
            {f.services.map((s: string, i: number) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
          {f.message}
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[var(--muted-foreground)]" />
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            value={formData.message}
            onChange={handleChange}
            placeholder={f.messagePlaceholder}
            className={cn(
              'w-full resize-none rounded-xl border bg-[var(--input)] py-3 pl-10 pr-4 text-sm text-[var(--foreground)] transition-all placeholder:text-[var(--muted-foreground)]',
              errors.message ? 'border-red-500/60' : 'border-[var(--border)]'
            )}
          />
        </div>
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Honeypot — hidden from users, catches naive spam bots */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-orange-500/25 disabled:translate-y-0 disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            {f.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {f.submit}
          </>
        )}
      </button>
    </form>
  );
}
