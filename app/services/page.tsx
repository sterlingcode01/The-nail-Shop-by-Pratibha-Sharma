'use client';

import React, { useState, useEffect } from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { WHATSAPP_HOME_SERVICE } from '@/lib/constants';
import Link from 'next/link';
import { Paintbrush, Sparkles, Scissors, Heart, GraduationCap, Home, Zap, Flower2, Wand2 } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Nail Art',
    description: 'Hand-painted custom designs, seasonal themes, 3D nail art, and everything in between. Every nail tells a story.',
    category: 'nail-art',
    icon: Paintbrush,
  },
  {
    id: 2,
    title: 'Gel Nails',
    description: 'Long-lasting gel manicure and pedicure with a mirror-perfect finish.',
    category: 'extensions',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Acrylic Extensions',
    description: 'Full set, infills, and tips — built for strength and elegance.',
    category: 'extensions',
    icon: Scissors,
  },
  {
    id: 4,
    title: 'Polygel/Builder Gel',
    description: 'Lightweight yet durable. The modern alternative to acrylics.',
    category: 'extensions',
    icon: Wand2,
  },
  {
    id: 5,
    title: 'Bridal Packages',
    description: 'Complete bridal nail packages — mehendi, wedding day, reception. Coordination with bridal outfits available.',
    category: 'bridal',
    icon: Heart,
  },
  {
    id: 6,
    title: 'Nail Repair',
    description: 'Broken nail emergency? We fix, reshape, and restore.',
    category: 'nail-art',
    icon: Zap,
  },
  {
    id: 7,
    title: 'Luxury Pedicure',
    description: 'Full foot care, callus treatment, and spa pedicure with gel finish.',
    category: 'nail-art',
    icon: Flower2,
  },
  {
    id: 8,
    title: 'Nail Training / Academy',
    description: '1-on-1 coaching, group batches, and online courses. Certified programs.',
    category: 'academy',
    icon: GraduationCap,
  },
  {
    id: 9,
    title: 'Home Service',
    description: 'Can\'t come to us? We come to you. Available across all of India. Travel charges applicable.',
    category: 'home-service',
    icon: Home,
  },
];

export default function ServicesPage() {
  const [filter, setFilter] = useState('all');

  const filteredServices = filter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'nail-art', name: 'Nail Art' },
    { id: 'extensions', name: 'Extensions' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'academy', name: 'Academy' },
    { id: 'home-service', name: 'Home Service' },
  ];

  return (
    <main className="bg-transparent">
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-burgundy/20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-burgundy">Our Services</h1>
          <p className="font-lato text-lg text-burgundy/70 max-w-2xl mx-auto">
            Luxury nail experiences designed for every occasion
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 sticky top-20 z-40 bg-dark/80 backdrop-blur-md border-b border-rose/10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 font-mont text-[10px] uppercase tracking-widest transition-all ${
                  filter === cat.id
                    ? 'bg-rose text-white shadow-luxury'
                    : 'bg-white text-dark border border-rose/20 hover:border-rose'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                category={service.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Home Service Banner */}
      <section className="py-20 bg-gradient-to-r from-rose to-rose-light text-white">
        <div className="container text-center">
          <h2 className="font-cormorant italic text-5xl mb-6">Home Service — All Across India</h2>
          <Link href={WHATSAPP_HOME_SERVICE} target="_blank" className="btn-primary bg-burgundy hover:bg-white hover:text-burgundy">
            Request Home Service on WhatsApp
          </Link>
        </div>
      </section>

    </main>
  );
}
