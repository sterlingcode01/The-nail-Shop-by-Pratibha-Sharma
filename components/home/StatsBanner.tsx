'use client';

import React, { useEffect } from 'react';
import { countUp } from '@/lib/animations';

const StatsBanner = () => {
  useEffect(() => {
    countUp('.stat-number-1', 15);
    countUp('.stat-number-2', 50000);
    countUp('.stat-number-3', 3);
    countUp('.stat-number-4', 5);
  }, []);

  const stats = [
    { id: 1, label: 'Years Experience', target: 15, suffix: '+' },
    { id: 2, label: 'Students Trained', target: 50000, suffix: '+' },
    { id: 3, label: 'Active Branches', target: 3, suffix: '+' },
    { id: 4, label: 'Star Rating', target: 5, suffix: ' Star' },
  ];

  return (
    <section className="bg-burgundy py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                index !== stats.length - 1 ? 'lg:border-r lg:border-champagne/20' : ''
              }`}
            >
              <span className={`stat-number-${stat.id} font-cormorant text-5xl md:text-6xl font-bold text-gold mb-4`}>
                0{stat.suffix}
              </span>
              <span className="font-mont text-[10px] md:text-xs uppercase tracking-[2px] text-ivory opacity-80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
