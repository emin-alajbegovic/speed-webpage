'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { brandLogo, fleetParkLineup, heroBrandedTruck } from '@/lib/site-images';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function BrandPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative pt-[var(--navbar-height)] pb-12 sm:pb-16 bg-[var(--muted)] overflow-hidden">
        <div className="absolute inset-0 hero-gradient grid-pattern opacity-90" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
              {t.brandPage.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-5 tracking-tight">
              {t.brandPage.title}
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {t.brandPage.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-[var(--background)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto py-8 px-[15px] sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8 shadow-[var(--shadow-md)]"
            >
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">{t.brandPage.logoTitle}</h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-6">{t.brandPage.logoHint}</p>
              <div className="relative w-full aspect-[560/144] max-h-40 sm:max-h-48 mb-6">
                <Image
                  src={brandLogo}
                  alt="Begovac Spedition"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
              <a
                href={brandLogo}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden />
                {t.brandPage.logoTitle}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.06 }}
            >
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">{t.brandPage.colorsTitle}</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl border border-[var(--card-border)] p-4 bg-[var(--card)]">
                  <div
                    className="w-14 h-14 rounded-lg shrink-0 border border-black/10 shadow-inner"
                    style={{ backgroundColor: '#f97316' }}
                  />
                  <p className="text-sm font-medium text-[var(--foreground)]">{t.brandPage.colorAccent}</p>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-[var(--card-border)] p-4 bg-[var(--card)]">
                  <div
                    className="w-14 h-14 rounded-lg shrink-0 border border-white/10 shadow-inner"
                    style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0a1628 100%)' }}
                  />
                  <p className="text-sm font-medium text-[var(--foreground)]">{t.brandPage.colorDark}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-[var(--muted)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[var(--foreground)] mb-3">{t.brandPage.fleetTitle}</h2>
          <p className="text-[var(--muted-foreground)] max-w-3xl mb-8 leading-relaxed">{t.brandPage.fleetText}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--card-border)] aspect-[4/3] bg-[var(--card)]">
              <Image
                src={heroBrandedTruck}
                alt={t.hero.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[var(--card-border)] aspect-[4/3] bg-[var(--card)]">
              <Image
                src={fleetParkLineup}
                alt={t.fleetPark.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t.brandPage.cta}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
