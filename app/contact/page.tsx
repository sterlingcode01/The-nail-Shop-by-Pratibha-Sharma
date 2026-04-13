'use client';

import React from 'react';
import MapEmbed from '@/components/ui/MapEmbed';
import { PHONE_1, PHONE_2, EMAIL, STORE_HOURS, ADDRESS, PHONE_1_LINK, PHONE_2_LINK, WHATSAPP_HOME_SERVICE } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-transparent">
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-burgundy/20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-burgundy">Contact Us</h1>
          <p className="font-lato text-lg text-burgundy/70 max-w-2xl mx-auto">
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              <h2 className="text-3xl font-playfair mb-12 text-ivory">Get in Touch</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Address */}
                <div className="bg-white p-8 border border-rose/10 shadow-card space-y-4">
                  <MapPin className="w-6 h-6 text-rose" />
                  <h3 className="font-mont text-[10px] font-bold uppercase tracking-widest text-burgundy">Address</h3>
                  <p className="font-lato text-sm text-burgundy/70 leading-relaxed">
                    {ADDRESS}
                  </p>
                  <a href="https://maps.google.com" target="_blank" className="inline-block font-mont text-[8px] uppercase tracking-widest text-rose border-b border-rose/30 pb-1">
                    Get Directions
                  </a>
                </div>

                {/* Phone */}
                <div className="bg-white p-8 border border-rose/10 shadow-card space-y-4">
                  <Phone className="w-6 h-6 text-rose" />
                  <h3 className="font-mont text-[10px] font-bold uppercase tracking-widest text-burgundy">Phone</h3>
                  <div className="space-y-2">
                    <a href={PHONE_1_LINK} className="block font-lato text-sm text-burgundy/70 hover:text-rose transition-colors">
                      {PHONE_1}
                    </a>
                    <a href={PHONE_2_LINK} className="block font-lato text-sm text-burgundy/70 hover:text-rose transition-colors">
                      {PHONE_2}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-8 border border-rose/10 shadow-card space-y-4">
                  <Mail className="w-6 h-6 text-rose" />
                  <h3 className="font-mont text-[10px] font-bold uppercase tracking-widest text-burgundy">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="block font-lato text-sm text-burgundy/70 hover:text-rose transition-colors">
                    {EMAIL}
                  </a>
                </div>

                {/* Hours */}
                <div className="bg-white p-8 border border-rose/10 shadow-card space-y-4">
                  <Clock className="w-6 h-6 text-rose" />
                  <h3 className="font-mont text-[10px] font-bold uppercase tracking-widest text-burgundy">Hours</h3>
                  <p className="font-lato text-sm text-burgundy/70">
                    Monday to Sunday<br />
                    {STORE_HOURS}<br />
                    <span className="italic">Walk-ins welcome!</span>
                  </p>
                </div>
              </div>

              {/* Home Service Card */}
              <div className="bg-burgundy text-ivory p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Car className="w-8 h-8 text-gold" />
                  <div>
                    <h3 className="font-mont text-[10px] font-bold uppercase tracking-widest text-gold">Home Service</h3>
                    <p className="font-lato text-sm opacity-70">Available all across India</p>
                  </div>
                </div>
                <a href={WHATSAPP_HOME_SERVICE} target="_blank" className="btn-primary bg-rose text-[10px] py-3">
                  Book Home Service
                </a>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="h-full min-h-[480px]">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
