'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { heroBackgroundVideo, heroVideoPoster } from '@/lib/site-images';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Award, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      const n = Math.floor(start);
      el.textContent = (end >= 10000 ? Math.floor(n / 1000) + 'k' : String(n)) + suffix;
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [end, suffix]);
  return <span ref={ref}>0{suffix}</span>;
};

export default function Hero() {
  const { t } = useLanguage();
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(heroBackgroundVideo, { method: 'HEAD' })
      .then((r) => {
        if (!cancelled && r.ok) setVideoReady(true);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const trustBadges = [
    { icon: Shield, label: 'ISO 9001' },
    { icon: Award, label: 'EUR.1' },
    { icon: Clock, label: '24/7' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col pt-[var(--navbar-height)] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {videoReady ? (
          <video
            className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[65%_center] rotate-180"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroVideoPoster}
            onError={() => setVideoReady(false)}
            aria-hidden
          >
            {/* MP4 type first — Chrome/Firefox pick this up even for .mov H.264 */}
            <source src={heroBackgroundVideo} type="video/mp4" />
            <source src={heroBackgroundVideo} type="video/quicktime" />
          </video>
        ) : null}
        <Image
          src={heroVideoPoster}
          alt={t.fleetPark.imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center sm:object-[50%_55%] transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden={videoReady}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/92 to-[var(--background)]/55 dark:from-[var(--background)] dark:via-[var(--background)]/88 dark:to-[var(--background)]/40"
          aria-hidden
        />
        <div className="absolute inset-0 hero-gradient opacity-40 mix-blend-multiply dark:opacity-25 dark:mix-blend-normal pointer-events-none" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-[0.12] pointer-events-none" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/25 to-transparent" aria-hidden />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-1 flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-28 sm:pb-32">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[var(--accent)]">{t.hero.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[var(--foreground)] mb-4 leading-[1.05]"
          >
            {t.hero.title1}
            <br />
            {t.hero.title2}{' '}
            <span className="gradient-text">{t.hero.title3}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-3 mb-10 justify-center"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 pt-2 pr-[15px] pb-[15px] pl-[15px] bg-[var(--card)] border border-[var(--border)] rounded-lg text-xs font-semibold text-[var(--muted-foreground)]"
              >
                <Icon className="w-3.5 h-3.5 text-[var(--accent)]" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center items-center"
          >
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-base rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 pulse-glow"
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/storitve"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--border)] text-[var(--foreground)] font-semibold text-base rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              {t.hero.cta2}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[var(--border)] max-w-2xl mx-auto"
          >
            {[
              { value: 8, suffix: '', label: t.hero.stat1 },
              { value: 15, suffix: '', label: t.hero.stat2 },
              { value: 15, suffix: '', label: t.hero.stat3 },
              { value: 15, suffix: '', label: t.hero.stat4 },
            ].map((stat, i) => (
              <div key={i} className="text-center pt-2 px-[15px] pb-[15px]">
                <div className="text-3xl sm:text-4xl font-black text-[var(--foreground)] mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint — corner so it never covers hero stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="pointer-events-none absolute bottom-5 right-5 z-[1] flex flex-col items-center gap-1.5 max-[480px]:hidden"
        aria-hidden
      >
        <span className="text-[10px] text-[var(--muted-foreground)]/70 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-6 bg-gradient-to-b from-[var(--accent)]/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}
