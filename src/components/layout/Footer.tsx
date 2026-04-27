'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { brandLogo } from '@/lib/site-images';
import { Phone, Mail, MapPin } from 'lucide-react';


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
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src={brandLogo}
                alt="Begovac Spedition"
                width={560}
                height={144}
                className="h-10 sm:h-11 w-auto max-w-[min(100%,300px)] object-contain object-left invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed mb-5 max-w-xs">
              {t.footer.description}
            </p>
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
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#f97316] mt-1 shrink-0" aria-hidden />
                <div className="min-w-0 flex-1 space-y-3">
                  <p className="text-sm font-semibold text-white/90 leading-snug">
                    {t.contact.info.companyName}
                  </p>
                  <div className="space-y-2.5">
                    {t.contact.info.addressPlaces.map((place) => (
                      <div
                        key={place.label}
                        className="rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-2.5"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#f97316]/90 mb-1">
                          {place.label}
                        </p>
                        <p className="text-sm text-white/65 leading-snug">{place.line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#f97316] mt-1 shrink-0" aria-hidden />
                <div className="min-w-0 flex-1 space-y-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                    {t.contact.info.phone}
                  </p>
                  {t.contact.info.phonePlaces.map((p) => (
                    <div
                      key={p.label}
                      className="rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-2.5"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#f97316]/90 mb-1">
                        {p.label}
                      </p>
                      <a
                        href={`tel:${p.tel}`}
                        className="text-sm text-white/70 hover:text-[#f97316] transition-colors font-medium tabular-nums"
                      >
                        {p.display}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="mailto:info@spedition-begovac.com" className="text-sm text-white/60 hover:text-[#f97316] transition-colors break-all">
                  info@spedition-begovac.com
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
