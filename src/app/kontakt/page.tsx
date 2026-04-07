'use client';

import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const infoItems = [
    {
      icon: MapPin,
      label: t.contact.info.address,
      value: t.contact.info.addressValue,
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+386 40 123 456',
      href: 'tel:+38640123456',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'info@begovac-spedition.com',
      href: 'mailto:info@begovac-spedition.com',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: t.contact.info.hoursValue,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[var(--navbar-height)] pb-16 bg-[var(--muted)] overflow-hidden">
        <div className="absolute inset-0 hero-gradient grid-pattern" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full mb-4">
              {t.contact.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--foreground)] mb-4 tracking-tight">
              {t.contact.title}
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[var(--background)]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info – left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5"
            >
              {infoItems.map(({ icon: Icon, label, value, href, color, bg }) => (
                <div
                  key={label}
                  className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-5 hover:border-[var(--accent)]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className={`font-semibold ${color} hover:underline`}>
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-[var(--foreground)] whitespace-pre-line text-sm leading-relaxed">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/38640123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6 shrink-0" />
                <div>
                  <p className="font-bold text-sm">WhatsApp</p>
                  <p className="text-xs text-white/80">+386 40 123 456</p>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[var(--accent)] mx-auto mb-2" />
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">Google Maps</p>
                  <p className="text-xs text-[var(--muted-foreground)]/60 mt-1">Ljubljana, Slovenija</p>
                </div>
                <div className="absolute inset-0 grid-pattern opacity-30" />
              </div>
            </motion.div>

            {/* Form – right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-3xl p-7 sm:p-10 shadow-[var(--shadow-md)]">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
