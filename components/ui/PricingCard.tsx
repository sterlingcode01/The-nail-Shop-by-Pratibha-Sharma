'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  tier: string;
  price: string;
  services: string[];
  ctaText: string;
  href: string;
  highlighted?: boolean;
}

const PricingCard = ({ tier, price, services, ctaText, href, highlighted }: PricingCardProps) => {
  return (
    <div
      className={cn(
        'card-3d relative p-10 flex flex-col h-full transition-all duration-500',
        highlighted
          ? 'bg-burgundy text-ivory scale-105 shadow-luxury z-10'
          : 'bg-white text-dark border border-rose/20'
      )}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-burgundy font-mont text-[8px] font-bold uppercase tracking-[2px] px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className="mb-8">
        <h3 className={cn('font-mont text-xs font-bold uppercase tracking-[3px] mb-4', highlighted ? 'text-gold' : 'text-rose')}>
          {tier}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-lato opacity-60">From ₹</span>
          <span className="text-5xl font-playfair font-bold">{price}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-12 flex-grow">
        {services.map((service, i) => (
          <li key={i} className="flex items-start gap-3 font-lato text-sm">
            <Check className={cn('w-4 h-4 mt-0.5 flex-shrink-0', highlighted ? 'text-gold' : 'text-rose')} />
            <span className="opacity-80">{service}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'btn-primary w-full text-center py-4',
          highlighted ? 'bg-gold text-burgundy hover:bg-white hover:text-burgundy' : ''
        )}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default PricingCard;
