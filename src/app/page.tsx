import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import WhyUs from '@/components/home/WhyUs';
import Fleet from '@/components/home/Fleet';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Begovac Spedition – Zanesljiv partner v logistiki',
  description: 'Specializirani za mednarodni transport in špedicijo po vsej Evropi. 8+ let izkušenj, 15+ vozil, pokritost 15 evropskih držav.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <Stats />
      <WhyUs />
      <Fleet />
      <Testimonials />
      <CTA />
    </>
  );
}
