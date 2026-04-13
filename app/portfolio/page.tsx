'use client';

import React, { useState, useEffect } from 'react';
import PortfolioGrid from '@/components/ui/PortfolioGrid';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'nail-art', name: 'Nail Art' },
    { id: 'extensions', name: 'Extensions' },
    { id: 'celebrity', name: 'Celebrity' },
    { id: 'international', name: 'International' },
  ];

  return (
    <main className="bg-transparent">
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-burgundy/20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-cormorant italic text-burgundy mb-6">Our Portfolio</h1>
          <p className="font-lato text-lg text-burgundy/70 max-w-2xl mx-auto">
            Real client work. Zero filters. Pure artistry.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 sticky top-20 z-40 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 font-mont text-[10px] uppercase tracking-widest transition-all ${
                  filter === cat.id
                    ? 'bg-rose text-white shadow-luxury'
                    : 'bg-white/5 text-ivory border border-white/10 hover:border-rose'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container">
          <PortfolioGrid filter={filter} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-ivory text-dark text-center">
        <div className="container">
          <h2 className="font-cormorant italic text-4xl md:text-5xl mb-8">Love what you see? Book your own transformation.</h2>
          <a href="https://wa.me/919888333965" target="_blank" className="btn-primary">
            Book on WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
