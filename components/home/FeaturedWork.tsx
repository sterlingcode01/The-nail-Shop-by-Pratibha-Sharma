'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { staggerFadeUp } from '@/lib/animations';

const FeaturedWork = () => {
  useEffect(() => {
    staggerFadeUp('.featured-item');
  }, []);

  const works = [
    {
      id: 1,
      title: 'Royal Bridal Art',
      category: 'Bridal Nail Art',
      image: 'https://picsum.photos/seed/nails-1/800/1000',
      size: 'large',
    },
    {
      id: 2,
      title: 'Minimalist Chic',
      category: 'Gel Polish',
      image: 'https://picsum.photos/seed/nails-2/600/600',
      size: 'small',
    },
    {
      id: 3,
      title: 'Celebrity Glam',
      category: 'Acrylic Extensions',
      image: 'https://picsum.photos/seed/nails-3/600/600',
      size: 'small',
    },
    {
      id: 4,
      title: 'Intricate 3D Art',
      category: 'Custom Design',
      image: 'https://picsum.photos/seed/nails-4/800/1000',
      size: 'large',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-ivory">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-burgundy">Our Work Speaks</h2>
          <p className="font-lato text-burgundy/70 max-w-xl mx-auto">
            Handcrafted luxury nail art by Pratibha Sharma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {works.map((work) => (
            <div
              key={work.id}
              className={`featured-item group relative overflow-hidden aspect-[4/5] ${
                work.size === 'large' ? 'lg:col-span-1' : 'lg:col-span-1'
              }`}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-gold font-mont text-[10px] uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {work.category}
                </p>
                <h3 className="text-white font-playfair text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-outline">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
