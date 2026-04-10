'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { aboutStoryImage } from '@/lib/site-images';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Shield, Star, Zap, Leaf, ArrowRight, Users, Truck, MapPin } from 'lucide-react';

const valueIcons = [Shield, Star, Zap, Leaf];
const valueColors = [
  { bg: 'bg-orange-500/10', text: 'text-orange-500' },
  { bg: 'bg-blue-500/10', text: 'text-blue-500' },
  { bg: 'bg-purple-500/10', text: 'text-purple-500' },
  { bg: 'bg-emerald-500/10', text: 'text-emerald-500' },
];

const teamAvatarColors = [
  'from-orange-500 to-amber-400',
  'from-blue-600 to-blue-400',
  'from-emerald-600 to-green-400',
  'from-purple-600 to-violet-400',
];

const milestones = [
  { year: '2003', text: 'Ustanovitev podjetja Begovac Spedition' },
  { year: '2007', text: 'Razširitev na mednarodne prevoze po EU' },
  { year: '2012', text: 'Vzpostavitev hladne verige in ATP certifikat' },
  { year: '2016', text: 'Modernizacija flote z 50+ novimi vozili' },
  { year: '2019', text: 'Odprtje logističnega centra v Ljubljani' },
  { year: '2023', text: 'Certifikacija ISO 9001:2015' },
];

export default function AboutPage() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[var(--navbar-height)] pb-20 bg-[var(--muted)] overflow-hidden">
        <div className="absolute inset-0 hero-gradient grid-pattern" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
                {t.about.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--foreground)] mb-5 tracking-tight leading-tight">
                {t.about.title}
              </h1>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
                {t.about.subtitle}
              </p>
            </motion.div>

            {/* Stats block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Truck, value: '15+', label: 'Vozil' },
                { icon: Users, value: '10+', label: 'Zaposlenih' },
                { icon: MapPin, value: '15', label: 'Držav' },
                { icon: Star, value: '100%', label: 'Zadovoljstvo' },
              ].map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-5 text-center">
                  <Icon className="w-6 h-6 text-[var(--accent)] mx-auto mb-2" />
                  <div className="text-3xl font-black text-[var(--foreground)] mb-1">{value}</div>
                  <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-20 bg-[var(--background)]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-black text-[var(--foreground)] mb-5">{t.about.story}</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-lg mb-6">
                {t.about.storyText}
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Danes smo ponosni, da pokrivamo celotno Evropo s floto 120+ vozil in ekipo strokovnjakov, ki so na voljo 24 ur na dan, 7 dni v tednu. Naša predanost kakovosti in inovativnosti nas uvršča med vodilne transportne partnerje v regiji.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] border border-[var(--border)] rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
                <Image
                  src={aboutStoryImage}
                  alt={t.about.story}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent pointer-events-none" aria-hidden />
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[var(--accent)] rounded-tl-lg pointer-events-none" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[var(--accent)] rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[var(--accent)] rounded-bl-lg pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[var(--accent)] rounded-br-lg pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-black text-[var(--foreground)] mb-10 text-center">Naša pot</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border)] -translate-x-1/2 hidden md:block" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-4 inline-block hover:border-[var(--accent)]/40 transition-all">
                        <p className="text-xs font-bold text-[var(--accent)] mb-1">{m.year}</p>
                        <p className="text-sm font-medium text-[var(--foreground)]">{m.text}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-[var(--accent)] rounded-full border-4 border-[var(--background)] shrink-0 hidden md:block shadow-lg" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-black text-[var(--foreground)] mb-10 text-center">{t.about.values}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.about.valueItems.map((value, i) => {
                const Icon = valueIcons[i];
                return (
                  <div key={i} className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 text-center hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all">
                    <div className={`w-14 h-14 ${valueColors[i].bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-7 h-7 ${valueColors[i].text}`} />
                    </div>
                    <h3 className="font-bold text-[var(--foreground)] mb-2">{value.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-[var(--foreground)] mb-3">{t.about.team.title}</h2>
              <p className="text-[var(--muted-foreground)]">{t.about.team.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.about.team.members.map((member, i) => (
                <div key={i} className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 text-center hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all">
                  {/* Avatar placeholder */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${teamAvatarColors[i]} flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black shadow-lg`}>
                    {member.name[0]}
                  </div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">{member.name}</h3>
                  <p className="text-sm text-[var(--accent)] font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{member.bio}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[var(--foreground)] mb-4">
            Postanite naš partner
          </h2>
          <p className="text-[var(--muted-foreground)] mb-6">
            Skupaj dosežemo več. Kontaktirajte nas in zgradimo dolgoročno partnerstvo.
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
