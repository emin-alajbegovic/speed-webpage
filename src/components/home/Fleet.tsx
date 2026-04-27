'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const truckColors = [
  'from-orange-500/20 to-amber-400/10',
  'from-blue-600/20 to-blue-400/10',
  'from-slate-600/20 to-slate-400/10',
  'from-red-600/20 to-rose-400/10',
  'from-purple-600/20 to-violet-400/10',
  'from-emerald-600/20 to-green-400/10',
];

interface GalleryModalProps {
  images: readonly string[];
  name: string;
  description: string;
  onClose: () => void;
}

function GalleryModal({ images, name, description, onClose }: GalleryModalProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-[var(--card)] rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Main image */}
        <div className="relative aspect-[16/9] bg-black">
          <Image
            key={current}
            src={images[current]}
            alt={`${name} ${current + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Info + thumbnails */}
        <div className="p-5">
          <h3 className="text-xl font-black text-[var(--foreground)] mb-1">{name}</h3>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">{description}</p>

          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === current ? 'border-[var(--accent)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <Image src={src} alt={`${name} ${i + 1}`} fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-3 text-xs text-[var(--muted-foreground)]">
            {current + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Fleet({ galleryImages }: { galleryImages: string[][] }) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeModal, setActiveModal] = useState<number | null>(null);

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
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setActiveModal(i)}
              className="group bg-[var(--card)] border border-[var(--card-border)] rounded-2xl overflow-hidden hover:shadow-[var(--shadow-lg)] hover:border-[var(--accent)]/30 transition-all hover:-translate-y-1 text-left w-full cursor-pointer"
            >
              <div className={`relative aspect-[16/9] border-b border-[var(--card-border)] overflow-hidden bg-gradient-to-br ${truckColors[i % truckColors.length]}`}>
                <Image
                  src={galleryImages[i]?.[0] ?? '/images/fleet/mega-trailer.jpg'}
                  alt={`${vehicle.name} — Begovac Spedition`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" aria-hidden />
                {'capacity' in vehicle && vehicle.capacity && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[var(--accent)] text-white text-xs font-bold rounded-full shadow-md">
                    {vehicle.capacity}
                  </div>
                )}
                {galleryImages[i]?.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 text-white text-xs rounded-full">
                    {galleryImages[i].length} foto
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-1.5">
                  {vehicle.name}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {vehicle.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeModal !== null && (
          <GalleryModal
            images={galleryImages[activeModal] ?? []}
            name={t.fleet.items[activeModal]?.name ?? ''}
            description={t.fleet.items[activeModal]?.description ?? ''}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
