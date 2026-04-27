'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';

const partners = [
  { name: 'DPD', src: '/images/partners/dpd.svg' },
  { name: 'DHL', src: '/images/partners/dhl.svg' },
  { name: 'DSV', src: '/images/partners/dsv.svg' },
  { name: 'FACC', src: '/images/partners/facc.svg' },
  { name: 'Fiege', src: '/images/partners/fiege.svg' },
  { name: 'Englmayer', src: '/images/partners/englmayer.png' },
  { name: 'Franco Maier', src: '/images/partners/francomaier.png' },
];

export default function Partners() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-[var(--muted)] border-y border-[var(--border)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-8"
        >
          {t.partners.title}
        </motion.p>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--muted)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--muted)] to-transparent z-10" />
          <div className="flex gap-8 marquee-track">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-8 py-4 bg-[var(--card)] border border-[var(--card-border)] rounded-xl hover:border-[var(--accent)]/40 transition-all shrink-0"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={120}
                  height={48}
                  className="object-contain h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
