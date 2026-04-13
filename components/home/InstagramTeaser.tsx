'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const InstagramTeaser = () => {
  const images = [
    'https://picsum.photos/seed/insta-1/600/600',
    'https://picsum.photos/seed/insta-2/600/600',
    'https://picsum.photos/seed/insta-3/600/600',
    'https://picsum.photos/seed/insta-4/600/600',
    'https://picsum.photos/seed/insta-5/600/600',
    'https://picsum.photos/seed/insta-6/600/600',
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-burgundy">Follow Our Journey</h2>
          <p className="font-lato text-burgundy/70">@pratibhanails on Instagram</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
          {images.map((src, index) => (
            <a
              key={index}
              href="https://instagram.com/pratibhanails"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={src}
                alt={`Instagram Post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-rose/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/pratibhanails"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Follow @pratibhanails
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramTeaser;
