import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://spedition-begovac.com'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  title: {
    default: 'Begovac Spedition – Mednarodni transport in špedicija',
    template: '%s | Begovac Spedition',
  },
  description: 'Begovac Spedition je zanesljiv logistični partner za mednarodni cestni prevoz in špedicijo po vsej Evropi. Nudimo FTL, LTL in posebne prevoze.',
  keywords: [
    'transport', 'špedicija', 'logistika', 'cestni prevoz', 'mednarodni prevoz',
    'FTL', 'LTL', 'Slovenija', 'Evropa', 'Begovac Spedition',
    'freight forwarding', 'logistics', 'road transport', 'spedition',
  ],
  authors: [{ name: 'Begovac Spedition d.o.o.' }],
  creator: 'Begovac Spedition',
  publisher: 'Begovac Spedition',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    url: 'https://spedition-begovac.com',
    siteName: 'Begovac Spedition',
    title: 'Begovac Spedition – Mednarodni transport in špedicija',
    description: 'Zanesljiv logistični partner za mednarodni cestni prevoz po vsej Evropi. 8+ let izkušenj, 15+ vozil, 15+ držav.',
    images: [{ url: '/images/og-share.jpg', width: 1200, height: 630, alt: 'Begovac Spedition — mednarodni transport' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Begovac Spedition – Mednarodni transport in špedicija',
    description: 'Zanesljiv logistični partner za mednarodni cestni prevoz po vsej Evropi.',
    images: ['/images/og-share.jpg'],
  },
  alternates: {
    canonical: 'https://spedition-begovac.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="theme-color" content="#f97316" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('begovac-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <StructuredData />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main id="main-content" className="relative z-0">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
