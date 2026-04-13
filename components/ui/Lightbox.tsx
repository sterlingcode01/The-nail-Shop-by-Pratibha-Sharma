'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  image: string;
  title: string;
  category: string;
  onClose: () => void;
}

const Lightbox = ({ image, title, category, onClose }: LightboxProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
        aria-label="Close Lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-[80vh] animate-[scale_0.3s_ease-out]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="mt-8 text-center text-white space-y-2">
          <span className="font-mont text-[10px] uppercase tracking-[4px] text-rose">{category}</span>
          <h3 className="font-playfair text-2xl md:text-3xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
