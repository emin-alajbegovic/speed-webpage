'use client';

import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const items = t.testimonials.items;

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive((next + items.length) % items.length);
  };

  return (
    <section className="py-24 bg-[var(--background)] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
            {t.testimonials.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-4 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">{t.testimonials.subtitle}</p>
        </motion.div>

        {/* Main testimonial */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-[var(--card)] border border-[var(--card-border)] rounded-3xl p-8 sm:p-10 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-[var(--accent)]/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--accent)] text-[var(--accent)]" />
                ))}
              </div>

              <p className="text-lg sm:text-xl text-[var(--foreground)] font-medium leading-relaxed mb-8">
                &ldquo;{items[active].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {items[active].name[0]}
                </div>
                <div>
                  <div className="font-bold text-[var(--foreground)]">{items[active].name}</div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    {items[active].role} · {items[active].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => go(active - 1)}
              className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === active ? 'w-6 bg-[var(--accent)]' : 'w-2 bg-[var(--border)]'
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(active + 1)}
              className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* All testimonial mini cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={cn(
                'p-3 rounded-xl border text-left transition-all',
                i === active
                  ? 'border-[var(--accent)] bg-[var(--accent)]/5'
                  : 'border-[var(--border)] hover:border-[var(--accent)]/40'
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0',
                  i === active ? 'bg-[var(--accent)]' : 'bg-[var(--muted-foreground)]/40'
                )}>
                  {item.name[0]}
                </div>
                <span className="text-xs font-semibold text-[var(--foreground)] truncate">{item.name.split(' ')[0]}</span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] truncate">{item.company}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
