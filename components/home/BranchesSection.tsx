'use client';

import React from 'react';

const BranchesSection = () => {
  return (
    <section className="py-20 bg-ivory border-y border-rose/10">
      <div className="container text-center">
        <h2 className="font-playfair text-3xl md:text-4xl mb-12 text-burgundy">3+ Branches Across India</h2>
        
        {/* Decorative Map Placeholder */}
        <div className="relative max-w-2xl mx-auto aspect-video bg-champagne/30 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* Simple India Map SVG Placeholder */}
            <svg viewBox="0 0 400 500" className="w-full h-full fill-burgundy">
              <path d="M200,50 L250,150 L350,200 L250,250 L200,350 L150,250 L50,200 L150,150 Z" />
            </svg>
          </div>
          
          {/* Glowing Dots */}
          <div className="relative z-10 flex gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <div className="w-4 h-4 bg-rose rounded-full animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 bg-rose rounded-full animate-[pulse-ring_2s_infinite]" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="font-mont text-xs uppercase tracking-[3px] text-rose font-bold">
            4th Branch Opening Soon — Stay Tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
