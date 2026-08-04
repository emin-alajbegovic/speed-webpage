'use client';

import React, { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from 'react';
import { createBrowserStore } from '@/lib/browser-store';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'begovac-theme';

/**
 * The blocking script in the root layout applies the class before first paint, so
 * `<html>` is the source of truth for the current theme rather than React state.
 */
const themeStore = createBrowserStore<Theme>(
  () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'),
  'light'
);

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  const toggleTheme = useCallback(() => {
    const next: Theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem(STORAGE_KEY, next);
    themeStore.notify();
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
