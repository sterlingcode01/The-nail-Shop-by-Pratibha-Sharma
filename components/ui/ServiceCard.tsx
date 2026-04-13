'use client';

import React, { useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { WHATSAPP_BOOKING } from '@/lib/constants';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

const ServiceCard = ({ title, description, icon: Icon, category }: ServiceCardProps) => {
  return (
    <div className="h-full">
      <div className="card-3d bg-white p-10 border border-rose/20 flex flex-col items-center text-center group h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-luxury relative overflow-hidden">
        {/* Category Tag */}
        <div className="absolute top-4 right-4 font-mont text-[8px] uppercase tracking-widest text-rose opacity-50">
          {category.replace('-', ' ')}
        </div>

        <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-rose group-hover:text-white transition-colors duration-500">
          <Icon className="w-8 h-8 text-rose group-hover:text-white transition-colors duration-500" />
        </div>

        <h3 className="text-2xl font-playfair mb-4 text-burgundy">{title}</h3>
        <p className="font-lato text-sm text-burgundy/70 leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <a
          href={WHATSAPP_BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mont text-[10px] uppercase tracking-[2px] text-rose border-b border-rose/30 pb-1 hover:border-rose transition-all"
        >
          Book This Service
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
