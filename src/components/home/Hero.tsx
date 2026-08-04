'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { heroImage } from '@/lib/site-images';
import { ArrowRight, Clock, AlertTriangle, CheckCircle, MapPin, Award, Phone } from 'lucide-react';

const DISPATCH_PHONE = '+386 40 482 669';

function CountUp({ end, format }: { end: number; format: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = format(end);
      return;
    }
    const duration = 1800;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = format(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, format]);

  return <span ref={ref}>{format(0)}</span>;
}

const plain = (n: number) => String(n);
const millions = (n: number) => (n / 1000000).toFixed(1) + 'm';

export default function Hero() {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: AlertTriangle, label: t.hero.badgeAdr },
    { icon: CheckCircle, label: t.hero.badgeXl },
    { icon: MapPin, label: t.hero.badgeGps },
    { icon: Award, label: t.hero.trust100 },
    { icon: Clock, label: t.hero.badge247 },
  ] as const;

  const stats = [
    { value: 8, format: plain, label: t.hero.stat1 },
    { value: 15, format: plain, label: t.hero.stat2 },
    { value: 12, format: plain, label: t.hero.stat3 },
    { value: 1200000, format: millions, label: t.hero.stat4 },
  ];

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[var(--navbar-height)]">
      {/* Background photo — the LCP element */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={t.hero.imageAlt}
          fill
          preload
          quality={85}
          sizes="100vw"
          className="object-cover object-[80%_center] sm:object-[55%_center]"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="grid-pattern absolute inset-0 opacity-[0.10]" aria-hidden />
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-12 pb-24 sm:px-6 sm:py-16 sm:pb-28 lg:px-8">
        <div className="w-full max-w-3xl">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/15 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
            <span className="text-sm font-semibold text-orange-200">{t.hero.badge}</span>
          </div>

          <h1
            className="reveal mb-5 text-[2.75rem] font-black leading-[1.03] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl"
            style={{ '--d': '90ms' } as React.CSSProperties}
          >
            {t.hero.title1}
            <br />
            {t.hero.title2} <span className="gradient-text">{t.hero.title3}</span>
          </h1>

          <p
            className="reveal mb-8 max-w-xl text-lg leading-relaxed text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] sm:text-xl"
            style={{ '--d': '180ms' } as React.CSSProperties}
          >
            {t.hero.subtitle}
          </p>

          <ul
            className="reveal mb-9 flex list-none flex-wrap gap-2.5"
            style={{ '--d': '270ms' } as React.CSSProperties}
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <li
                key={String(label)}
                className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur-md"
              >
                <Icon className="h-3.5 w-3.5 text-[var(--accent)]" />
                {label}
              </li>
            ))}
          </ul>

          <div
            className="reveal mb-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ '--d': '360ms' } as React.CSSProperties}
          >
            <Link
              href="/kontakt"
              className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-[var(--accent-hover)] hover:shadow-xl hover:shadow-orange-500/30"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${DISPATCH_PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/15"
            >
              <Phone className="h-4 w-4" />
              {DISPATCH_PHONE}
            </a>
          </div>

          <dl
            className="reveal grid max-w-2xl grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-6"
            style={{ '--d': '450ms' } as React.CSSProperties}
          >
            {stats.map((stat) => (
              <div key={String(stat.label)}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="mb-1 block text-3xl font-black tabular-nums text-white sm:text-4xl">
                    <CountUp end={stat.value} format={stat.format} />
                  </span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-white/60">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-5 right-5 z-[1] flex flex-col items-center gap-1.5 max-[480px]:hidden"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">{t.hero.scrollHint}</span>
        <span className="float block h-6 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </div>
    </section>
  );
}
