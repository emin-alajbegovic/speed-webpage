'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { whyUsImage } from '@/lib/site-images';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, Truck, Eye, DollarSign, Map } from 'lucide-react';

const icons = [Clock, Users, Truck, Eye, DollarSign, Map];

export default function WhyUs() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-[var(--background)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
              {t.whyUs.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-6 tracking-tight leading-tight">
              {t.whyUs.title}
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
              {t.whyUs.subtitle}
            </p>

            <div className="relative rounded-2xl overflow-hidden aspect-video border border-[var(--border)] shadow-[var(--shadow-lg)]">
              <Image
                src={whyUsImage}
                alt={t.whyUs.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.06] dark:ring-white/10 pointer-events-none rounded-2xl" aria-hidden />
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[var(--accent)] rounded-tl-lg pointer-events-none" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[var(--accent)] rounded-tr-lg pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[var(--accent)] rounded-bl-lg pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[var(--accent)] rounded-br-lg pointer-events-none" />
            </div>
          </motion.div>

          {/* Right – grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.whyUs.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="group bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-5 hover:border-[var(--accent)]/40 hover:shadow-[var(--shadow-md)] transition-all hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[var(--accent)]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-bold text-[var(--foreground)] text-sm mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
