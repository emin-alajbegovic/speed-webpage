'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

export default function RoutesBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--accent)] text-white py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0 opacity-80" />
            <span className="text-sm font-semibold opacity-90">{t.routes.daily}:</span>
            <span className="text-sm font-bold">{t.routes.dailyRoute}</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0 opacity-80" />
            <span className="text-sm font-semibold opacity-90">{t.routes.weekly}:</span>
            <span className="text-sm font-bold">{t.routes.weeklyRoute}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
