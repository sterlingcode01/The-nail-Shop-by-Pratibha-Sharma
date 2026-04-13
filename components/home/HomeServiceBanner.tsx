'use client';

import React from 'react';
import Link from 'next/link';
import { WHATSAPP_HOME_SERVICE } from '@/lib/constants';

const HomeServiceBanner = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy z-0" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-rose/20 -translate-y-1/2 translate-x-1/2 rotate-45" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border-b border-l border-rose/10 translate-y-1/2 -translate-x-1/2 -rotate-12" />

      <div className="container relative z-10 text-center text-white px-6">
        <h2 className="font-cormorant italic text-5xl md:text-7xl mb-6">
          We Come to You
        </h2>
        <p className="font-mont text-gold text-xs md:text-sm font-bold uppercase tracking-[4px] mb-8">
          Home Nail Service Available All Across India
        </p>
        <p className="font-lato text-lg text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Can&apos;t visit the studio? No problem. Pratibha&apos;s team brings the luxury nail experience directly to your home, hotel, or venue. Available in all Indian cities and towns.
        </p>
        <Link href={WHATSAPP_HOME_SERVICE} target="_blank" className="btn-primary bg-rose hover:bg-white hover:text-burgundy">
          Request Home Service
        </Link>
      </div>
    </section>
  );
};

export default HomeServiceBanner;
