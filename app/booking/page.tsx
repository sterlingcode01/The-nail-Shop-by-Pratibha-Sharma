'use client';

import React from 'react';
import BookingPanel from '@/components/ui/BookingPanel';
import { WHATSAPP_BOOKING, PHONE_1, PHONE_2, PHONE_1_LINK, PHONE_2_LINK, WHATSAPP_HOME_SERVICE, STORE_HOURS } from '@/lib/constants';
import { MessageCircle, Phone, Clock } from 'lucide-react';

export default function BookingPage() {
  return (
    <main className="bg-transparent">
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-rose/20 to-rose-light/20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-burgundy">Reserve Your Appointment</h1>
          <p className="font-lato text-lg text-burgundy/70 max-w-2xl mx-auto">
            India&apos;s most celebrated nail studio — now just one tap away
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* WhatsApp Card */}
            <div className="bg-white p-10 border border-[#25D366]/20 rounded-sm shadow-card flex flex-col items-center text-center group hover:border-[#25D366] transition-all">
              <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#25D366] transition-colors">
                <MessageCircle className="w-10 h-10 text-[#25D366] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-playfair mb-4 text-burgundy">Chat & Book on WhatsApp</h3>
              <p className="font-lato text-sm text-burgundy/70 mb-8 max-w-xs">
                The fastest way to book. Chat with us directly, share your ideas, and confirm your appointment.
              </p>
              <a href={WHATSAPP_BOOKING} target="_blank" className="btn-primary bg-[#25D366] hover:bg-dark">
                Open WhatsApp
              </a>
            </div>

            {/* Call Card */}
            <div className="bg-white p-10 border border-rose/20 rounded-sm shadow-card flex flex-col items-center text-center group hover:border-rose transition-all">
              <div className="w-20 h-20 bg-rose/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-rose transition-colors">
                <Phone className="w-10 h-10 text-rose group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-playfair mb-4 text-burgundy">Call Us to Book</h3>
              <p className="font-lato text-sm text-burgundy/70 mb-8 max-w-xs">
                Prefer to speak directly? Give us a call and our team will schedule your appointment instantly.
              </p>
              <div className="flex flex-col gap-4 w-full max-w-[240px]">
                <a href={PHONE_1_LINK} className="btn-outline text-center">
                  {PHONE_1}
                </a>
                <a href={PHONE_2_LINK} className="btn-outline text-center">
                  {PHONE_2}
                </a>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div className="bg-burgundy/20 p-12 text-center rounded-sm border border-rose/10 mb-20">
            <Clock className="w-8 h-8 text-rose mx-auto mb-6" />
            <h3 className="font-mont text-xs font-bold uppercase tracking-[3px] mb-4 text-burgundy">Studio Hours</h3>
            <p className="font-playfair text-2xl mb-2 text-burgundy">Monday to Sunday: {STORE_HOURS}</p>
            <p className="font-lato text-sm text-burgundy/60 italic">We are open every day for your convenience.</p>
          </div>

          {/* Lead Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair mb-4 text-ivory">Or Leave Us Your Details</h2>
              <p className="font-lato text-sm text-ivory/60 italic">We&apos;ll get back to you within 2 hours!</p>
            </div>
            <BookingPanel />
          </div>
        </div>
      </section>

      {/* Home Service Section */}
      <section className="py-20 bg-dark text-white text-center">
        <div className="container">
          <h2 className="font-cormorant italic text-4xl md:text-5xl mb-6">Requesting Home Service?</h2>
          <p className="font-lato text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            We provide home nail service all across India. Travel charges apply. Book via WhatsApp for fastest response.
          </p>
          <a href={WHATSAPP_HOME_SERVICE} target="_blank" className="btn-primary bg-rose">
            Request Home Service
          </a>
        </div>
      </section>

    </main>
  );
}
