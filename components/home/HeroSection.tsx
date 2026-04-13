'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WHATSAPP_BOOKING } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';
import { fadeUpOnScroll, parallaxBg } from '@/lib/animations';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial animations
    const tl = gsap.timeline();
    tl.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo('.hero-title span', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-sub', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.6')
      .fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.8');

    // Parallax
    if (bgRef.current) {
      parallaxBg(bgRef.current, 0.5);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/nails-hero/1920/1080"
          alt="Luxury Nail Art"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/55 via-burgundy/30 to-burgundy/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white px-6">
        <p className="hero-eyebrow font-mont text-[11px] md:text-xs tracking-[4px] text-gold mb-6 uppercase">
          VAISHALI NAGAR · JAIPUR · ALL INDIA
        </p>
        
        <h1 className="hero-title font-cormorant italic text-6xl md:text-8xl lg:text-9xl leading-[1.1] mb-8">
          <span className="block">India&apos;s Most</span>
          <span className="block">Celebrated</span>
          <span className="block">Nail Artist</span>
        </h1>

        <p className="hero-sub font-lato text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-12">
          Luxury Nail Art · 15 Years of Mastery · Celebrity Artist
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link href={WHATSAPP_BOOKING} target="_blank" className="btn-primary w-full sm:w-auto">
            Book an Appointment
          </Link>
          <Link href="#portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-burgundy w-full sm:w-auto">
            Explore Our Work
          </Link>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:block animate-[float_4s_infinite_ease-in-out]">
        <div className="bg-rose/90 backdrop-blur-sm p-4 rounded-sm shadow-luxury border border-rose-light/30">
          <div className="flex items-end gap-2 text-white">
            <span className="text-sm">⭐⭐⭐⭐⭐</span>
            <p className="font-mont text-[10px] uppercase tracking-widest leading-none pb-[2px]">
              5 Star Rated  |  50,000+ Students  |  Celebrity Artist
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white/50 w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
