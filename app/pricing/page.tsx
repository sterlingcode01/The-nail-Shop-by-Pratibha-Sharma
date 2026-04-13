'use client';

import React from 'react';
import PricingCard from '@/components/ui/PricingCard';
import { WHATSAPP_BOOKING } from '@/lib/constants';

export default function PricingPage() {
  return (
    <main className="bg-transparent">
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-burgundy/20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-burgundy">Pricing</h1>
          <p className="font-lato text-lg text-burgundy/70 max-w-2xl mx-auto">
            Transparent Pricing, Luxury Results
          </p>
          <p className="mt-4 text-xs font-mont uppercase tracking-widest text-rose">
            * Prices shown are indicative. Contact us for exact pricing.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <PricingCard
              tier="Essential"
              price="500"
              services={['Basic Nail Art', 'Gel Manicure', 'Nail Repair', 'Classic Polish']}
              ctaText="Book Essential"
              href={WHATSAPP_BOOKING}
            />
            <PricingCard
              tier="Premium"
              price="1,200"
              services={['Gel Extensions', 'Acrylic Extensions', 'Custom Nail Art', 'Luxury Pedicure', 'Paraffin Treatment']}
              ctaText="Book Premium"
              href={WHATSAPP_BOOKING}
              highlighted
            />
            <PricingCard
              tier="Luxury"
              price="2,500"
              services={['Bridal Packages', '3D Nail Art', 'Celebrity-Grade Finish', 'Home Service Priority', 'Full Set Infills']}
              ctaText="Book Luxury"
              href={WHATSAPP_BOOKING}
            />
          </div>
        </div>
      </section>

      {/* Academy Pricing Table */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center">Training & Academy Programs</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-mont text-[10px] uppercase tracking-widest text-gold">
                  <th className="py-6 px-4">Course Name</th>
                  <th className="py-6 px-4">Duration</th>
                  <th className="py-6 px-4">Mode</th>
                  <th className="py-6 px-4">Starting Price</th>
                </tr>
              </thead>
              <tbody className="font-lato text-sm">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4">Basic Nail Art</td>
                  <td className="py-6 px-4">1 Week</td>
                  <td className="py-6 px-4">In-Person / Online</td>
                  <td className="py-6 px-4">₹3,000</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4">Advanced Nail Art</td>
                  <td className="py-6 px-4">2 Weeks</td>
                  <td className="py-6 px-4">In-Person</td>
                  <td className="py-6 px-4">₹6,000</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4">Complete Nail Technician</td>
                  <td className="py-6 px-4">1 Month</td>
                  <td className="py-6 px-4">In-Person</td>
                  <td className="py-6 px-4">₹12,000</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4">1-on-1 Private Coaching</td>
                  <td className="py-6 px-4">Flexible</td>
                  <td className="py-6 px-4">In-Person</td>
                  <td className="py-6 px-4">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center">
            <a href={WHATSAPP_BOOKING} target="_blank" className="btn-primary bg-rose">
              Enquire About Courses → WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Home Service Note */}
      <section className="py-20 bg-burgundy/20">
        <div className="container text-center max-w-2xl">
          <p className="font-lato text-burgundy/70 leading-relaxed">
            Home service travel charges are applicable based on location. All standard service prices apply. Contact us for home service quotes.
          </p>
        </div>
      </section>

    </main>
  );
}
