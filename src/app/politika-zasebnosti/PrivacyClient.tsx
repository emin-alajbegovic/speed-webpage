'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { privacyTranslations } from '@/lib/i18n';

export default function PrivacyClient() {
  const { locale } = useLanguage();
  const p = privacyTranslations[locale];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[var(--navbar-height)] pb-12 bg-[var(--muted)] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                {p.badge}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-3 tracking-tight">
              {p.pageTitle}
            </h1>
            <p className="text-[var(--muted-foreground)]">{p.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-10 mb-8"
          >
            <p className="text-[var(--muted-foreground)] leading-relaxed">{p.intro}</p>
          </motion.div>

          <div className="space-y-6">
            {p.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8"
              >
                <h2 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[var(--accent)]/10 rounded-md flex items-center justify-center text-xs font-black text-[var(--accent)] shrink-0">
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs text-[var(--muted-foreground)] text-center mt-10"
          >
            © {new Date().getFullYear()} Begovac Spedition d.o.o.
          </motion.p>
        </div>
      </section>
    </>
  );
}
