'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { PHONE_1, PHONE_2, EMAIL, WHATSAPP_BOOKING, STORE_HOURS } from '@/lib/constants';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Booking', href: '/booking' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = pathname === '/';

  return (
    <>
      {/* Mobile Menu Overlay - Solid Background, Highest Z-index */}
      <div
        className={cn(
          'fixed inset-0 bg-[#3D0C11] transition-all duration-500 z-[300] flex flex-col items-center justify-center p-8 pt-24 pb-12',
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        )}
      >
        {/* Close Button inside Overlay */}
        <button
          className="absolute top-8 right-8 p-2 text-ivory hover:text-rose transition-colors"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          <X className="w-10 h-10" />
        </button>

        <div className="flex flex-col items-center gap-5 md:gap-7 w-full max-w-sm">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-cormorant italic text-3xl md:text-4xl text-ivory hover:text-rose transition-colors"
              style={{
                transitionDelay: `${i * 0.1}s`,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(50px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={WHATSAPP_BOOKING}
            target="_blank"
            className="btn-primary w-full mt-4 text-center"
            style={{
              transitionDelay: `${navLinks.length * 0.1}s`,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMenuOpen ? 1 : 0,
            }}
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-[250] transition-all duration-500 ease-in-out',
          isScrolled ? 'lg:-translate-y-10' : 'translate-y-0'
        )}
      >
        {/* Top Bar - Desktop Only */}
        <div 
          className={cn(
            "hidden lg:block bg-burgundy text-champagne px-6 text-[10px] font-mont uppercase tracking-widest transition-all duration-500 overflow-hidden",
            isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
          )}
        >
          <div className="container h-full flex justify-between items-center">
            <div className="flex gap-6">
              <span>{PHONE_1}</span>
              <span className="opacity-30">|</span>
              <span>{PHONE_2}</span>
            </div>
            <div className="flex gap-6">
              <span>{EMAIL}</span>
              <span className="opacity-30">|</span>
              <span>{STORE_HOURS}</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav
          className={cn(
            'w-full transition-all duration-500',
            isScrolled 
              ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-luxury py-3' 
              : 'bg-transparent py-4 md:py-6'
          )}
        >
          <div className="container flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className={cn(
                "relative z-[260] transition-opacity duration-300",
                isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              <Image
                src="https://res.cloudinary.com/dz3ixer7i/image/upload/v1775990809/remove-photos-background-removed_vrqcuz.png"
                alt="Pratibhanails Logo"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-mont text-[11px] uppercase tracking-[2px] transition-colors relative group',
                    pathname === link.href ? 'text-rose' : 'text-white'
                  )}
                >
                  {link.name}
                  <span className={cn(
                    'absolute bottom-[-4px] left-0 w-0 h-[1px] bg-rose transition-all duration-300 group-hover:w-full',
                    pathname === link.href ? 'w-full' : ''
                  )} />
                </Link>
              ))}
              <Link href={WHATSAPP_BOOKING} target="_blank" className="btn-primary py-3 px-8 text-[10px]">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-[260] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="w-8 h-8 text-white" />
            </button>
          </div>
        </nav>

        {/* Back Button */}
        {!isHome && (
          <button
            onClick={() => router.back()}
            className={cn(
              'absolute top-24 left-6 z-[260] flex items-center gap-2 text-rose font-mont text-[10px] uppercase tracking-widest transition-all duration-300',
              (isScrolled || isMenuOpen) ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
      </header>
    </>
  );
};

export default Navbar;
