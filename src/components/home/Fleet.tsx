'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fleetImages } from '@/lib/site-images';

const truckColors = [
  'from-orange-500/20 to-amber-400/10',
  'from-blue-600/20 to-blue-400/10',
  'from-slate-600/20 to-slate-400/10',
  'from-red-600/20 to-rose-400/10',
  'from-purple-600/20 to-violet-400/10',
  'from-emerald-600/20 to-green-400/10',
];

export default function Fleet() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-[var(--muted)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
              {t.fleet.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[var(--foreground)] tracking-tight">
              {t.fleet.title}
            </h2>
          </div>
          <Link
            href="/vozni-park"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] border-b border-[var(--accent)]/30 hover:border-[var(--accent)] pb-0.5 transition-all shrink-0"
          >
            {t.nav.fleet}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mb-12">
          {t.fleet.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.fleet.items.map((vehicle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-[var(--card)] border border-[var(--card-border)] rounded-2xl overflow-hidden hover:shadow-[var(--shadow-lg)] hover:border-[var(--accent)]/30 transition-all hover:-translate-y-1"
            >
              <div className={`relative aspect-[16/9] border-b border-[var(--card-border)] overflow-hidden bg-gradient-to-br ${truckColors[i % truckColors.length]}`}>
                <Image
                  src={fleetImages[i][0]}
                  alt={`${vehicle.name} — Begovac Spedition`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" aria-hidden />
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-[var(--accent)] text-white text-xs font-bold rounded-full shadow-md">
                  {vehicle.capacity}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-1.5">
                  {vehicle.name}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {vehicle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
