'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, Building2, MessageSquare, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const { t, locale } = useLanguage();
  const f = t.contact.form;
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Obvezno polje';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Neveljaven e-poštni naslov';
    if (!formData.message.trim()) newErrors.message = 'Obvezno polje';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        className="flex flex-col items-center justify-center text-center py-16 px-8"
      >
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
          {locale === 'sl' ? 'Sporočilo poslano!' : 'Message sent!'}
        </h3>
        <p className="text-[var(--muted-foreground)] max-w-sm">{f.success}</p>
        <button
          onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
          className="mt-6 px-6 py-2.5 bg-[var(--accent)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--accent-hover)] transition-all"
        >
          {locale === 'sl' ? 'Novo sporočilo' : 'New message'}
        </button>
      </motion.div>
    );
  }

  const fields = [
    { name: 'name', label: f.name, icon: User, type: 'text', half: true },
    { name: 'email', label: f.email, icon: Mail, type: 'email', half: true },
    { name: 'phone', label: f.phone, icon: Phone, type: 'tel', half: true },
    { name: 'company', label: f.company, icon: Building2, type: 'text', half: true },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(({ name, label, icon: Icon, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              {label}
            </label>
            <div className="relative">
              <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
              <input
                name={name}
                type={type}
                value={formData[name as keyof FormData]}
                onChange={handleChange}
                className={cn(
                  'w-full pl-10 pr-4 py-3 bg-[var(--input)] border rounded-xl text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-all',
                  errors[name as keyof FormData]
                    ? 'border-red-500/60'
                    : 'border-[var(--border)]'
                )}
                placeholder={label}
              />
            </div>
            {errors[name as keyof FormData] && (
              <p className="mt-1 text-xs text-red-500">{errors[name as keyof FormData]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Service select */}
      <div>
        <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {f.service}
        </label>
        <div className="relative">
          <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-[var(--input)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] appearance-none cursor-pointer"
          >
            <option value="">{f.selectService}</option>
            {f.services.map((s: string, i: number) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {f.message}
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[var(--muted-foreground)]" />
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder={f.messagePlaceholder}
            className={cn(
              'w-full pl-10 pr-4 py-3 bg-[var(--input)] border rounded-xl text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] resize-none transition-all',
              errors.message ? 'border-red-500/60' : 'border-[var(--border)]'
            )}
          />
        </div>
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-70 text-white font-bold text-base rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
      >
        {status === 'sending' ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            />
            {f.sending}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {f.submit}
          </>
        )}
      </button>
    </form>
  );
}
