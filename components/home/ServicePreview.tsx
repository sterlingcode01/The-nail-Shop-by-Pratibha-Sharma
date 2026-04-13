'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { staggerFadeUp } from '@/lib/animations';

const ServicePreview = () => {
  useEffect(() => {
    staggerFadeUp('.service-preview-card');
  }, []);

  const services = [
    {
      title: 'Nail Art',
      description: 'Hand-painted custom designs and seasonal themes.',
      image: 'https://picsum.photos/seed/service-1/600/400',
      href: '/services',
    },
    {
      title: 'Extensions',
      description: 'Gel, acrylic, and polygel extensions for length and strength.',
      image: 'https://picsum.photos/seed/service-2/600/400',
      href: '/services',
    },
    {
      title: 'Academy',
      description: 'Master the craft with our certified training programs.',
      image: 'https://picsum.photos/seed/service-3/600/400',
      href: '/services',
    },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-burgundy">What We Do Best</h2>
          <div className="w-20 h-[1px] bg-rose mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="service-preview-card group relative h-[400px] md:h-[450px] overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-burgundy/60 group-hover:bg-burgundy/40 transition-colors duration-500 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-white font-playfair text-3xl mb-4">{service.title}</h3>
                <p className="text-white/80 font-lato text-sm mb-6 max-w-xs">
                  {service.description}
                </p>
                <span className="text-gold font-mont text-[10px] uppercase tracking-widest border-b border-gold pb-1">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
