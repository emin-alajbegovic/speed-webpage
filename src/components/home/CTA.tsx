'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export default function CTA() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden isolate scroll-mt-[var(--navbar-height)]" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--accent)] via-orange-600 to-amber-500" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-[1] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--accent)] font-bold text-base rounded-xl hover:bg-white/90 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <MessageSquare className="w-4 h-4" />
              {t.cta.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${t.cta.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-base rounded-xl hover:border-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              {t.cta.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
