'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { countUp, staggerFadeUp, fadeUpOnScroll } from '@/lib/animations';

export default function AboutPage() {
  useEffect(() => {
    fadeUpOnScroll('.about-hero-content');
    staggerFadeUp('.stat-card');
    countUp('.about-stat-1', 15);
    countUp('.about-stat-2', 50000);
    countUp('.about-stat-3', 3);
    countUp('.about-stat-4', 5);
    fadeUpOnScroll('.story-text');
    fadeUpOnScroll('.story-image');
  }, []);

  return (
    <main className="bg-transparent">
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/pratibha-hero/1920/1080"
          alt="Pratibha Sharma"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-burgundy/40" />
        <div className="container relative z-10 text-center text-white about-hero-content">
          <h1 className="font-cormorant italic text-6xl md:text-8xl mb-6">About Pratibha Sharma</h1>
          <p className="font-mont text-xs md:text-sm uppercase tracking-[4px] text-gold">
            Founder & Master Nail Artist · 15 Years · Jaipur, India
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="story-image relative aspect-[3/4] lg:aspect-square">
              <Image
                src="https://picsum.photos/seed/pratibha-portrait/800/1000"
                alt="Pratibha Sharma Portrait"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-rose hidden lg:block" />
            </div>
            <div className="story-text space-y-8">
              <h2 className="text-4xl font-playfair text-ivory">A 15-Year Journey of Artistry</h2>
              <div className="space-y-6 font-lato text-ivory/70 leading-relaxed">
                <p>
                  Pratibha Sharma&apos;s journey into the world of nail art began 15 years ago, driven by a passion for detail and a vision to redefine beauty standards in India. What started as a small creative outlet in Jaipur has blossomed into one of the country&apos;s most celebrated nail art studios.
                </p>
                <p>
                  Her rise to becoming a celebrity nail artist was fueled by her relentless pursuit of perfection and her ability to translate complex emotions into intricate designs. Today, Pratibha is not just an artist but a mentor, having shaped the careers of thousands of aspiring nail technicians.
                </p>
              </div>
              <div className="border-l-4 border-rose pl-8 py-4">
                <p className="font-cormorant italic text-3xl text-rose">
                  &quot;Nails are not just beauty — they are confidence.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="bg-burgundy py-20">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', target: 15, id: 'about-stat-1' },
              { label: 'Students Trained', target: 50000, id: 'about-stat-2' },
              { label: 'Active Branches', target: 3, id: 'about-stat-3' },
              { label: 'Star Rating', target: 5, id: 'about-stat-4' },
            ].map((stat) => (
              <div key={stat.id} className="stat-card text-center space-y-2">
                <span className={`${stat.id} font-cormorant text-5xl text-gold font-bold block`}>0+</span>
                <span className="font-mont text-[10px] uppercase tracking-widest text-ivory opacity-70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrity Work */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="font-mont text-rose text-xs font-bold uppercase tracking-widest">CELEBRITY CLIENTS</p>
              <h2 className="text-4xl md:text-5xl font-playfair">Trusted by Stars</h2>
              <p className="font-lato text-lg text-white/70 leading-relaxed">
                Pratibha has been entrusted by celebrities for their most important events — red carpets, music videos, and brand campaigns. Her work with actress Saba Khan has been particularly celebrated for its elegance and innovation.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/saba/100/100" alt="Saba Khan" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-playfair text-xl">Saba Khan</p>
                  <p className="font-mont text-[10px] uppercase tracking-widest text-gold">TV Actress & Influencer</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://picsum.photos/seed/celebrity-work/800/800"
                alt="Celebrity Work"
                fill
                className="object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair mb-6">The Pratibhanails Academy</h2>
            <p className="font-lato text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Pratibha has trained over 50,000 students across India through her academy — both in-person at her Jaipur studio and online. She has also given awards and certificates to her top-performing students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-video overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/students-${i}/600/400`}
                  alt={`Student Batch ${i}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6">
            <Link href="/booking" className="btn-primary bg-rose">Enquire About Courses</Link>
            <Link href="/gallery" className="btn-outline border-white text-white hover:bg-white hover:text-burgundy">View Gallery</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
