'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { fadeUpOnScroll } from '@/lib/animations';

const CelebritySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fadeUpOnScroll('.celebrity-content');
    fadeUpOnScroll('.celebrity-image');
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="celebrity-image relative aspect-[4/5] lg:aspect-square">
            <Image
              src="https://picsum.photos/seed/celebrity/800/1000"
              alt="Celebrity Work - Saba Khan"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold hidden lg:block" />
          </div>

          {/* Content */}
          <div className="celebrity-content text-white space-y-8">
            <div className="space-y-4">
              <p className="font-mont text-rose text-xs font-bold uppercase tracking-[4px]">
                CELEBRITY WORK
              </p>
              <h2 className="font-cormorant italic text-5xl md:text-7xl leading-tight">
                Trusted by Stars
              </h2>
            </div>
            
            <p className="font-lato text-lg text-white/70 leading-relaxed max-w-xl">
              Pratibha Sharma has been the nail artist of choice for Bollywood and television celebrities, including actress Saba Khan. Her work has graced red carpets, music videos, and editorial shoots.
            </p>

            <div className="bg-white/5 p-8 border-l-2 border-rose italic">
              <p className="font-cormorant text-2xl text-ivory mb-4">
                &quot;Pratibha&apos;s attention to detail is unmatched. She doesn&apos;t just do nails; she creates art that complements my entire look.&quot;
              </p>
              <p className="font-mont text-xs uppercase tracking-widest text-gold">
                — Saba Khan, Actress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebritySection;
