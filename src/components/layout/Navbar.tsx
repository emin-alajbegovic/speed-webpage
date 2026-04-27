'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { locales, type Locale } from '@/lib/i18n';
import { brandLogo } from '@/lib/site-images';
import { cn } from '@/lib/utils';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = (t: ReturnType<typeof useLanguage>['t']) => [
  { href: '/', label: t.nav.home },
  { href: '/storitve', label: t.nav.services },
  { href: '/vozni-park', label: t.nav.fleet },
  { href: '/o-nas', label: t.nav.about },
  { href: '/kontakt', label: t.nav.contact },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = navLinks(t);
  const currentLang = locales.find(l => l.code === locale);

  const isDark = mounted ? theme === 'dark' : false;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Preskoči na vsebino
      </a>

      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-shadow duration-300',
          // Uvijek tamna traka kao footer — logo i linkovi ostaju čitljivi u light i dark temi stranice
          'bg-[#0a1628]/98 backdrop-blur-md border-b border-white/[0.08]',
          scrolled ? 'shadow-[0_8px_28px_rgba(0,0,0,0.45)]' : 'shadow-[0_2px_12px_rgba(0,0,0,0.2)]',
        )}
        style={{ height: 'var(--navbar-height)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Begovac Spedition – Domov"
            className="flex items-center group shrink-0 mr-2 min-w-0"
          >
            <Image
              src={brandLogo}
              alt="Begovac Spedition"
              width={560}
              height={144}
              priority
              className="h-10 sm:h-12 w-auto max-w-[min(58vw,300px)] sm:max-w-[340px] object-contain object-left invert opacity-95 transition-opacity group-hover:opacity-100"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Izberi jezik"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.code.toUpperCase()}</span>
                <ChevronDown className={cn('w-3 h-3 transition-transform', langOpen && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full z-[110] mt-1 w-44 rounded-xl border border-white/10 bg-[#0f2035] shadow-xl overflow-hidden"
                  >
                    {locales.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLocale(lang.code as Locale); setLangOpen(false); }}
                        className={cn(
                          'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors',
                          locale === lang.code
                            ? 'bg-[var(--accent)] text-white font-medium'
                            : 'text-white/90 hover:bg-white/10'
                        )}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/kontakt"
              className="ml-1 inline-flex h-9 shrink-0 items-center justify-center px-4 text-sm font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-all hover:shadow-md hover:shadow-orange-500/20"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Preklopi temo"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Zapri meni' : 'Odpri meni'}
              aria-expanded={mobileOpen}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[var(--navbar-height)] left-0 right-0 z-[95] border-b border-white/10 bg-[#0a1628]/98 backdrop-blur-md shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/10 mt-2 pt-3 flex flex-wrap gap-2">
                {locales.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLocale(lang.code as Locale); setMobileOpen(false); }}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
                      locale === lang.code
                        ? 'bg-[var(--accent)] text-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/15'
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-lg text-center"
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {(mobileOpen || langOpen) && (
        <div
          className="fixed inset-0 z-[85]"
          onClick={() => { setMobileOpen(false); setLangOpen(false); }}
        />
      )}
    </>
  );
}
