'use client';

import React from 'react';
import { MAP_EMBED_URL } from '@/lib/constants';

const MapEmbed = () => {
  return (
    <div className="w-full h-full min-h-[400px] bg-champagne/20 rounded-sm overflow-hidden shadow-card border border-rose/10 flex flex-col">
      <iframe
        src={MAP_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Pratibhanails Location"
        className="flex-grow"
      ></iframe>
      <div className="p-4 bg-white text-center">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Pratibhanails+Jaipur"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mont text-[10px] uppercase tracking-widest text-rose hover:text-burgundy transition-colors"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapEmbed;
