'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { fleetParkLineup } from '@/lib/site-images';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FleetParkBanner() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative border-y border-[var(--border)] bg-[var(--muted)]/80 py-10 sm:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight">
            {t.fleetPark.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] mt-2 max-w-2xl mx-auto">
            {t.fleetPark.subtitle}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-[var(--shadow-md)] aspect-[21/9] sm:aspect-[2.4/1] max-h-[min(70vh,520px)] bg-[var(--card)]"
        >
          <Image
            src={fleetParkLineup}
            alt={t.fleetPark.imageAlt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 via-transparent to-transparent pointer-events-none"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
