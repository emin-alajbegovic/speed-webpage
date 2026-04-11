'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceImages } from '@/lib/site-images';
import { motion, useInView } from 'framer-motion';
import { Truck, Globe, Warehouse, AlertTriangle, BarChart2, CheckCircle2, ArrowRight } from 'lucide-react';

const icons = [Truck, Globe, Warehouse, AlertTriangle, BarChart2];
const iconGradients = [
  'from-orange-500 to-amber-400',
  'from-blue-600 to-blue-400',
  'from-emerald-600 to-green-400',
  'from-red-600 to-rose-400',
  'from-purple-600 to-violet-400',
];

function ServiceSection({ service, index, inView, imageSrc }: {
  service: { title: string; description: string; features: readonly string[] };
  index: number;
  inView: boolean;
  imageSrc: string;
}) {
  const Icon = icons[index];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid md:grid-cols-2 gap-10 items-center py-14 border-b border-[var(--border)] last:border-0 ${!isEven ? 'md:[direction:rtl]' : ''}`}
    >
      {/* Text */}
      <div className={!isEven ? 'md:[direction:ltr]' : ''}>
        <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${iconGradients[index]} items-center justify-center mb-5 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-black text-[var(--foreground)] mb-3 tracking-tight">
          {service.title}
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
          {service.description}
        </p>
        <ul className="space-y-2.5 mb-6">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-[var(--foreground)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-semibold text-sm rounded-xl hover:bg-[var(--accent-hover)] transition-all hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5"
        >
          Zahtevajte ponudbo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className={`${!isEven ? 'md:[direction:ltr]' : ''}`}>
        <div className={`relative aspect-[4/3] rounded-2xl border border-[var(--card-border)] overflow-hidden shadow-[var(--shadow-md)] bg-gradient-to-br ${iconGradients[index]}/10`}>
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-tr ${iconGradients[index]} opacity-20 mix-blend-multiply dark:opacity-30 dark:mix-blend-normal`} aria-hidden />
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[var(--accent)] rounded-tl-lg opacity-80 pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[var(--accent)] rounded-tr-lg opacity-80 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[var(--accent)] rounded-bl-lg opacity-80 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[var(--accent)] rounded-br-lg opacity-80 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesClient() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[var(--navbar-height)] pb-16 bg-[var(--muted)] overflow-hidden">
        <div className="absolute inset-0 hero-gradient grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
              {t.services.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--foreground)] mb-4 tracking-tight">
              {t.services.title}
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-8 bg-[var(--background)]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {t.services.items.map((service, i) => (
            <ServiceSection key={i} service={service} index={i} inView={inView} imageSrc={serviceImages[i]} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[var(--foreground)] mb-4">
            Potrebujete prilagojeno rešitev?
          </h2>
          <p className="text-[var(--muted-foreground)] mb-6">
            Pokličite nas ali pošljite povpraševanje. Naša ekipa je na voljo 24/7.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-xl hover:bg-[var(--accent-hover)] transition-all hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1"
          >
            Kontaktirajte nas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
