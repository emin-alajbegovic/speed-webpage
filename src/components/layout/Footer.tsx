'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';

// Social media SVG icons (lucide-react doesn't include these in this version)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/storitve', label: t.nav.services },
    { href: '/vozni-park', label: t.nav.fleet },
    { href: '/o-nas', label: t.nav.about },
    { href: '/kontakt', label: t.nav.contact },
  ];

  const serviceLinks = t.services.items.slice(0, 5).map((s) => ({ label: s.title }));

  return (
    // Footer is always dark navy regardless of light/dark theme
    <footer className="bg-[#0a1628] text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316] opacity-[0.06] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-[0.06] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-[#f97316] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-tight text-white">Begovac</span>
                <span className="text-xs font-medium text-[#f97316] tracking-widest uppercase">Spedition</span>
              </div>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed mb-5 max-w-xs">
              {t.footer.description}
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: FacebookIcon, href: '#', label: 'Facebook' },
                { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                { Icon: InstagramIcon, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.08] border border-white/[0.08] text-white/70 hover:bg-[#f97316] hover:border-[#f97316] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/35 mb-4">
              {t.footer.links}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#f97316] transition-colors hover:translate-x-1 inline-block duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/35 mb-4">
              {t.footer.services}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s, i) => (
                <li key={i}>
                  <Link
                    href="/storitve"
                    className="text-sm text-white/60 hover:text-[#f97316] transition-colors hover:translate-x-1 inline-block duration-150"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/35 mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 whitespace-pre-line leading-relaxed">
                  {t.contact.info.addressValue}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="tel:+38640123456" className="text-sm text-white/60 hover:text-[#f97316] transition-colors">
                  +386 40 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="mailto:info@begovac-spedition.com" className="text-sm text-white/60 hover:text-[#f97316] transition-colors break-all">
                  info@begovac-spedition.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Begovac Spedition d.o.o. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <Link href="/politika-zasebnosti" className="text-xs text-white/30 hover:text-white/55 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/pogoji-poslovanja" className="text-xs text-white/30 hover:text-white/55 transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
