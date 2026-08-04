'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MessageCircle, FileText } from 'lucide-react';

const DISPATCH_PHONE = '+386 40 482 669';
const WHATSAPP = DISPATCH_PHONE.replace(/[^\d]/g, '');

/**
 * Always-reachable call / WhatsApp / quote bar on phones. Freight enquiries
 * overwhelmingly come in by phone, so this stays one tap away on every page.
 */
export default function MobileContactBar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // The contact page already puts these actions front and centre.
  if (pathname === '/kontakt') return null;

  const actions = [
    {
      href: `tel:${DISPATCH_PHONE.replace(/\s/g, '')}`,
      icon: Phone,
      label: t.nav.call,
      className: 'bg-[var(--accent)] text-white',
    },
    {
      href: `https://wa.me/${WHATSAPP}`,
      icon: MessageCircle,
      label: t.nav.whatsapp,
      className: 'bg-[#25D366] text-white',
      external: true,
    },
    {
      href: '/kontakt',
      icon: FileText,
      label: t.nav.quote,
      className: 'bg-white/10 text-white border border-white/20',
    },
  ] as const;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-[#0a1628]/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <nav aria-label={t.nav.contact} className="grid grid-cols-3 gap-2 p-2.5">
        {actions.map(({ href, icon: Icon, label, className, ...rest }) => {
          const content = (
            <>
              <Icon className="h-4 w-4" />
              {label}
            </>
          );
          const classes = `flex items-center justify-center gap-1.5 rounded-xl py-3 text-sm font-bold transition-opacity active:opacity-80 ${className}`;

          return 'external' in rest && rest.external ? (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={classes}>
              {content}
            </a>
          ) : (
            <Link key={label} href={href} className={classes}>
              {content}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
