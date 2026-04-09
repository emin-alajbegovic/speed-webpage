'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Globe, Warehouse, AlertTriangle, BarChart2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const icons = [Truck, Globe, Warehouse, AlertTriangle, BarChart2];
const iconColors = [
  'from-orange-500 to-amber-400',
  'from-blue-600 to-blue-400',
  'from-emerald-600 to-green-400',
  'from-red-600 to-rose-400',
  'from-purple-600 to-violet-400',
];

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="storitve" className="py-24 bg-[var(--muted)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
            {t.services.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-4 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  'group relative bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-7 card-hover',
                  i === 0 && 'md:col-span-2 lg:col-span-1'
                )}
              >
                {/* Icon */}
                <div className={cn(
                  'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform',
                  iconColors[i]
                )}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/storitve"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] group-hover:gap-2.5 transition-all"
                >
                  Več informacij
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Hover border accent */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
