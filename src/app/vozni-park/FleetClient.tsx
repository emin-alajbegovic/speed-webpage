'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Weight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fleetImages, heroTruckImage } from '@/lib/site-images';

const truckGradients = [
  'from-orange-500/15 to-amber-400/5',
  'from-blue-600/15 to-blue-400/5',
  'from-slate-600/15 to-slate-400/5',
  'from-red-600/15 to-rose-400/5',
  'from-purple-600/15 to-violet-400/5',
  'from-emerald-600/15 to-green-400/5',
];

const truckAccents = [
  'border-orange-500/30',
  'border-blue-500/30',
  'border-slate-500/30',
  'border-red-500/30',
  'border-purple-500/30',
  'border-emerald-500/30',
];

const truckBadges = [
  'bg-orange-500',
  'bg-blue-500',
  'bg-slate-500',
  'bg-red-500',
  'bg-purple-500',
  'bg-emerald-600',
];

const truckSpecs = [
  ['Dolžina: 13.6m', 'Višina: 3.0m', 'Širina: 2.48m', 'Vzmetenje: pnevmatsko'],
  ['Dolžina: 13.6m', 'Strani: 3x zložljive', 'Pokrov: tarpaulin', 'Nakladanje: zadaj/strani'],
  ['Dolžina: do 20m', 'Višina: neomejena', 'Spremljevalni escort', 'Posebna dovoljenja'],
  ['Dolžina: 13.6m', 'Višina: 2.75m', 'Tovornost: do 18t', 'Zaprta karoserija'],
  ['Cross-docking', 'Terminalske storitve', 'Raztovarjanje in nakladanje', 'Celotna EU'],
  ['Tovornost: do 1.5t', 'Volumen: 12m³', 'Same-day dostava', 'Ekspresne pošiljke'],
];

export default function FleetClient() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  function openModal(i: number) {
    setSelected(i);
    setGalleryIndex(0);
  }

  function closeModal() {
    setSelected(null);
    setGalleryIndex(0);
  }

  function prevImage(e: React.MouseEvent) {
    e.stopPropagation();
    if (selected === null) return;
    const len = fleetImages[selected].length;
    setGalleryIndex(g => (g - 1 + len) % len);
  }

  function nextImage(e: React.MouseEvent) {
    e.stopPropagation();
    if (selected === null) return;
    const len = fleetImages[selected].length;
    setGalleryIndex(g => (g + 1) % len);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[var(--navbar-height)] pb-16 bg-[var(--muted)] overflow-hidden">
        <div className="absolute inset-0 hero-gradient grid-pattern" />
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-xl opacity-[0.14] dark:opacity-[0.22] pointer-events-none hidden sm:block">
          <Image
            src={heroTruckImage}
            alt=""
            fill
            sizes="(max-width: 1280px) 40vw, 576px"
            className="object-cover object-left"
            aria-hidden
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
              {t.fleet.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--foreground)] mb-4 tracking-tight">
              {t.fleet.title}
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
              {t.fleet.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet grid */}
      <section className="py-16 bg-[var(--background)]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.fleet.items.map((vehicle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => openModal(i)}
                className={cn(
                  'group bg-[var(--card)] border rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-[var(--shadow-lg)] hover:-translate-y-1',
                  truckAccents[i % truckAccents.length]
                )}
              >
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${truckGradients[i % truckGradients.length]} overflow-hidden`}>
                  <Image
                    src={fleetImages[i][0]}
                    alt={`${vehicle.name} — Begovac Spedition`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" aria-hidden />
                  {fleetImages[i].length > 1 && (
                    <div className="absolute bottom-3 left-3 flex gap-1">
                      {fleetImages[i].map((_, dot) => (
                        <span key={dot} className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      ))}
                    </div>
                  )}
                  <div className={cn('absolute top-3 right-3 px-2.5 py-1 text-white text-xs font-bold rounded-full shadow-md', truckBadges[i % truckBadges.length])}>
                    {vehicle.capacity}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-lg font-bold text-[var(--foreground)]">{vehicle.name}</h2>
                    <Weight className="w-4 h-4 text-[var(--muted-foreground)] mt-1 shrink-0" />
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] mb-3">{vehicle.description}</p>
                  <button className="text-xs font-semibold text-[var(--accent)] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Tehnični podatki <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-[var(--card)] border border-[var(--card-border)] rounded-3xl p-7 max-w-lg w-full shadow-2xl"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-black text-[var(--foreground)]">
                    {t.fleet.items[selected].name}
                  </h2>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">
                    {t.fleet.items[selected].capacity}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Zapri"
                  className="w-8 h-8 rounded-full bg-[var(--muted)] flex items-center justify-center hover:bg-[var(--border)] transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Gallery */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-5 ring-1 ring-[var(--card-border)]">
                <Image
                  src={fleetImages[selected][galleryIndex]}
                  alt={`${t.fleet.items[selected].name} — Begovac Spedition`}
                  fill
                  sizes="(max-width: 512px) 100vw, 512px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" aria-hidden />

                {fleetImages[selected].length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all"
                      aria-label="Prejšnja slika"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all"
                      aria-label="Naslednja slika"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {fleetImages[selected].map((_, dot) => (
                        <button
                          key={dot}
                          onClick={e => { e.stopPropagation(); setGalleryIndex(dot); }}
                          className={cn(
                            'w-1.5 h-1.5 rounded-full transition-all',
                            dot === galleryIndex ? 'bg-white scale-125' : 'bg-white/50'
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <p className="text-[var(--muted-foreground)] mb-4 text-sm">
                {t.fleet.items[selected].description}
              </p>

              <h3 className="font-bold text-sm text-[var(--foreground)] mb-3">Tehnični podatki:</h3>
              <ul className="space-y-2 mb-6">
                {truckSpecs[selected].map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                onClick={closeModal}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-semibold text-sm rounded-xl hover:bg-[var(--accent-hover)] transition-all"
              >
                Zahtevajte ponudbo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[var(--foreground)] mb-4">
            Iščete pravo vozilo za vašo pošiljko?
          </h2>
          <p className="text-[var(--muted-foreground)] mb-6">
            Naši strokovnjaki vam bodo pomagali najti idealno rešitev za vaš tovor.
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
