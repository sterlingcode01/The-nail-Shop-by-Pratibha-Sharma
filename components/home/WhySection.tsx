'use client';

import React, { useEffect } from 'react';
import { Award, Star, Truck, GraduationCap } from 'lucide-react';
import { staggerFadeUp } from '@/lib/animations';

const WhySection = () => {
  useEffect(() => {
    staggerFadeUp('.why-card');
  }, []);

  const reasons = [
    {
      icon: Star,
      title: 'Celebrity Artist',
      description: 'Trusted by Bollywood stars including Saba Khan for red carpets and editorial shoots.',
    },
    {
      icon: Award,
      title: 'Award Winner',
      description: 'Multiple national industry awards & recognitions for excellence in nail artistry.',
    },
    {
      icon: Truck,
      title: 'Pan-India Home Service',
      description: 'We bring the luxury nail experience directly to you, anywhere in India.',
    },
    {
      icon: GraduationCap,
      title: 'Master Educator',
      description: '50,000+ students trained across India through our certified academy programs.',
    },
  ];

  return (
    <section className="section-padding bg-champagne">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-burgundy">Why Choose Us</h2>
          <div className="w-20 h-[1px] bg-rose mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card card-3d bg-white p-10 border border-rose/20 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-rose group-hover:text-white transition-colors duration-500">
                <reason.icon className="w-8 h-8 text-rose group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-playfair mb-4 text-burgundy">{reason.title}</h3>
              <p className="font-lato text-sm text-burgundy/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
