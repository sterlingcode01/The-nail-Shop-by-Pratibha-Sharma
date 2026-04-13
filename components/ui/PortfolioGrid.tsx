'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  { id: 1, title: 'Royal Bridal Red', category: 'bridal', image: 'https://picsum.photos/seed/p1/800/1200' },
  { id: 2, title: 'Saba Khan Special', category: 'celebrity', image: 'https://picsum.photos/seed/p2/800/800' },
  { id: 3, title: 'Crystal Clear Extensions', category: 'extensions', image: 'https://picsum.photos/seed/p3/800/1000' },
  { id: 4, title: 'London Chic', category: 'international', image: 'https://picsum.photos/seed/p4/800/1200' },
  { id: 5, title: 'Hand-painted Florals', category: 'nail-art', image: 'https://picsum.photos/seed/p5/800/800' },
  { id: 6, title: 'Golden Hour Bridal', category: 'bridal', image: 'https://picsum.photos/seed/p6/800/1000' },
  { id: 7, title: 'Celebrity Red Carpet', category: 'celebrity', image: 'https://picsum.photos/seed/p7/800/1200' },
  { id: 8, title: 'Dubai Luxury', category: 'international', image: 'https://picsum.photos/seed/p8/800/800' },
  { id: 9, title: '3D Butterfly Art', category: 'nail-art', image: 'https://picsum.photos/seed/p9/800/1000' },
  { id: 10, title: 'Matte Magic', category: 'extensions', image: 'https://picsum.photos/seed/p10/800/1200' },
  { id: 11, title: 'Bridal Mehendi Match', category: 'bridal', image: 'https://picsum.photos/seed/p11/800/800' },
  { id: 12, title: 'Neon Pop', category: 'nail-art', image: 'https://picsum.photos/seed/p12/800/1000' },
];

const PortfolioGrid = ({ filter }: { filter: string }) => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const items = filter === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === filter);

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={1200}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-rose/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-white font-mont text-[8px] uppercase tracking-widest mb-2">{item.category}</span>
              <h3 className="text-white font-playfair text-xl">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage.image}
          title={selectedImage.title}
          category={selectedImage.category}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default PortfolioGrid;
