'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PHONE_1, PHONE_2, EMAIL, STORE_HOURS, ADDRESS } from '@/lib/constants';
import { Instagram, Youtube, Facebook, Linkedin, PinIcon as Pinterest } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/pratibhanails', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/Pratibhanails', label: 'YouTube' },
    { icon: Pinterest, href: 'https://pinterest.com/Pratibhanails', label: 'Pinterest' },
    { icon: Facebook, href: 'https://facebook.com/Pratibhanails', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pratibha-sharma', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark text-ivory pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Image
              src="https://res.cloudinary.com/dz3ixer7i/image/upload/v1775990809/remove-photos-background-removed_vrqcuz.png"
              alt="Pratibhanails Logo"
              width={200}
              height={60}
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <p className="font-cormorant italic text-xl leading-relaxed">
              India&apos;s Most Celebrated Nail Artist
            </p>
            <p className="font-lato text-sm opacity-70">
              Luxury Nail Art · Jaipur & All India
            </p>
            <div className="flex items-end gap-1 text-gold">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <span className="ml-2 text-[10px] font-mont uppercase tracking-widest opacity-70 leading-none pb-[2px]">5 Star Rated</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h4 className="font-mont text-gold text-xs font-bold uppercase tracking-[2px]">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-4 font-lato text-sm">
              {['Home', 'About', 'Services', 'Portfolio', 'Gallery', 'Pricing', 'Booking', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="opacity-70 hover:opacity-100 hover:text-rose transition-all">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-6">
            <h4 className="font-mont text-gold text-xs font-bold uppercase tracking-[2px]">Our Services</h4>
            <ul className="grid grid-cols-1 gap-4 font-lato text-sm">
              {[
                'Nail Art',
                'Gel Nails',
                'Acrylic Extensions',
                'Bridal Packages',
                'Nail Training',
                'Home Service All India',
              ].map((service) => (
                <li key={service} className="opacity-70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <h4 className="font-mont text-gold text-xs font-bold uppercase tracking-[2px]">Contact Us</h4>
            <div className="space-y-4 font-lato text-sm opacity-70">
              <p className="leading-relaxed">{ADDRESS}</p>
              <div className="space-y-2">
                <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="block hover:text-rose transition-colors">
                  {PHONE_1}
                </a>
                <a href={`tel:${PHONE_2.replace(/\s/g, '')}`} className="block hover:text-rose transition-colors">
                  {PHONE_2}
                </a>
                <a href={`mailto:${EMAIL}`} className="block hover:text-rose transition-colors">
                  {EMAIL}
                </a>
              </div>
              <p className="text-xs uppercase tracking-widest pt-2">
                Mon–Sun · {STORE_HOURS}
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 py-10 border-t border-white/10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose hover:text-gold transition-colors p-2"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-white/10 text-[10px] font-mont uppercase tracking-widest opacity-50">
          <p>© {currentYear} Pratibhanails. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-rose">Terms</Link>
            <Link href="/privacy" className="hover:text-rose">Privacy</Link>
            <Link href="/contact" className="hover:text-rose">Contact</Link>
          </div>
          <p>Design & Built by Sterlingcode.in · Jaipur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
