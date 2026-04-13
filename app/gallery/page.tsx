'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/ui/Lightbox';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; category: string } | null>(null);

  const studioImages = [
    'https://picsum.photos/seed/studio-1/800/600',
    'https://picsum.photos/seed/studio-2/800/600',
    'https://picsum.photos/seed/studio-3/800/600',
    'https://picsum.photos/seed/studio-4/800/600',
  ];

  const workImages = [
    { id: 1, title: 'Intricate Detail', category: 'Work', image: 'https://picsum.photos/seed/work-1/600/800' },
    { id: 2, title: 'Studio Atmosphere', category: 'Studio', image: 'https://picsum.photos/seed/work-2/800/600' },
    { id: 3, title: 'Master at Work', category: 'Pratibha', image: 'https://picsum.photos/seed/work-3/600/800' },
    { id: 4, title: 'Luxury Setup', category: 'Studio', image: 'https://picsum.photos/seed/work-4/800/600' },
    { id: 5, title: 'Client Joy', category: 'Work', image: 'https://picsum.photos/seed/work-5/600/800' },
    { id: 6, title: 'Award Winning Art', category: 'Work', image: 'https://picsum.photos/seed/work-6/800/600' },
  ];

  const awardImages = [
    { id: 1, title: 'National Excellence Award', category: 'Achievement', image: 'https://picsum.photos/seed/award-1/600/400' },
    { id: 2, title: 'Best Nail Artist 2023', category: 'Achievement', image: 'https://picsum.photos/seed/award-2/600/400' },
    { id: 3, title: 'Industry Leader Recognition', category: 'Achievement', image: 'https://picsum.photos/seed/award-3/600/400' },
  ];

  const studentImages = [
    { id: 1, title: 'Batch of 2024', category: 'Academy', image: 'https://picsum.photos/seed/students-1/800/500' },
    { id: 2, title: 'Workshop in Mumbai', category: 'Academy', image: 'https://picsum.photos/seed/students-2/800/500' },
    { id: 3, title: 'Online Graduation', category: 'Academy', image: 'https://picsum.photos/seed/students-3/800/500' },
  ];

  return (
    <main className="bg-transparent">
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-burgundy/20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-burgundy">Gallery</h1>
          <p className="font-lato text-lg text-burgundy/70 max-w-2xl mx-auto">
            Inside the Studio & Behind the Scenes
          </p>
        </div>
      </section>

      {/* Top Strip - Horizontal Scroll */}
      <section className="py-10 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto pb-8 px-4 no-scrollbar">
          {studioImages.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] md:w-[450px] h-[280px] relative rounded-sm overflow-hidden group cursor-pointer" onClick={() => setSelectedImage({ image: src, title: 'Studio View', category: 'Studio' })}>
              <Image src={src} alt={`Studio ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: Studio & Work */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center text-ivory">Inside the Studio</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {workImages.map((item) => (
              <div key={item.id} className="relative group overflow-hidden cursor-pointer" onClick={() => setSelectedImage(item)}>
                <Image src={item.image} alt={item.title} width={800} height={1000} className="w-full h-auto object-cover rounded-sm" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-mont text-[10px] uppercase tracking-widest">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Awards */}
      <section className="section-padding bg-burgundy/20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center text-burgundy">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awardImages.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-sm shadow-card group cursor-pointer" onClick={() => setSelectedImage(item)}>
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-mont text-xs font-bold uppercase tracking-widest text-burgundy">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Students */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center text-ivory">50,000+ Students Trained</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentImages.map((item) => (
              <div key={item.id} className="relative aspect-video overflow-hidden rounded-sm group cursor-pointer" onClick={() => setSelectedImage(item)}>
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-dark/40 flex items-end p-6">
                  <p className="text-white font-mont text-[10px] uppercase tracking-widest">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <Lightbox
          image={selectedImage.image}
          title={selectedImage.title}
          category={selectedImage.category}
          onClose={() => setSelectedImage(null)}
        />
      )}

    </main>
  );
}
