'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';
import { type Locale, translations } from '@/lib/i18n';
import { createBrowserStore } from '@/lib/browser-store';

const STORAGE_KEY = 'begovac-locale';

/** Matches the `lang` on <html> that the server renders. */
const DEFAULT_LOCALE: Locale = 'sl';

const localeStore = createBrowserStore<Locale>(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved && saved in translations ? (saved as Locale) : DEFAULT_LOCALE;
}, DEFAULT_LOCALE);

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.sl;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    localeStore.subscribe,
    localeStore.getSnapshot,
    localeStore.getServerSnapshot
  );

  // Screen readers and translation tools key off `lang`, so it has to track the choice.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next);
    localeStore.notify();
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] as typeof translations.sl }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
