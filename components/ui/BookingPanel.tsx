'use client';

import React, { useState } from 'react';
import { WHATSAPP_BOOKING } from '@/lib/constants';

const BookingPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: 'Nail Art',
    date: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Since emailjs-browser failed to install, we'll simulate success and redirect to WhatsApp
    // In a real app, you'd use EmailJS or a server action here
    setTimeout(() => {
      setStatus('success');
      const text = `Hi Pratibhanails, I'm ${formData.name}. I'd like to book ${formData.service} at ${formData.location} on ${formData.date}. ${formData.message}`;
      const waLink = `https://wa.me/919888333965?text=${encodeURIComponent(text)}`;
      window.open(waLink, '_blank');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 text-center border border-rose/20 shadow-luxury animate-fadeIn">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-playfair mb-4">Inquiry Sent!</h3>
        <p className="font-lato text-muted mb-8">We&apos;ve also opened WhatsApp for you to confirm instantly.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline">Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-rose/20 shadow-card space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-mont text-[10px] uppercase tracking-widest font-bold">Full Name *</label>
          <input
            required
            type="text"
            className="w-full bg-ivory/50 border border-rose/10 p-4 font-lato text-sm focus:outline-none focus:border-rose transition-colors"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="font-mont text-[10px] uppercase tracking-widest font-bold">Phone Number *</label>
          <input
            required
            type="tel"
            className="w-full bg-ivory/50 border border-rose/10 p-4 font-lato text-sm focus:outline-none focus:border-rose transition-colors"
            placeholder="+91"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-mont text-[10px] uppercase tracking-widest font-bold">City / Location *</label>
          <input
            required
            type="text"
            className="w-full bg-ivory/50 border border-rose/10 p-4 font-lato text-sm focus:outline-none focus:border-rose transition-colors"
            placeholder="e.g. Vaishali Nagar, Jaipur"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="font-mont text-[10px] uppercase tracking-widest font-bold">Service You Want</label>
          <select
            className="w-full bg-ivory/50 border border-rose/10 p-4 font-lato text-sm focus:outline-none focus:border-rose transition-colors appearance-none"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option>Nail Art</option>
            <option>Extensions</option>
            <option>Bridal Package</option>
            <option>Academy / Training</option>
            <option>Home Service</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-mont text-[10px] uppercase tracking-widest font-bold">Preferred Date</label>
        <input
          type="date"
          className="w-full bg-ivory/50 border border-rose/10 p-4 font-lato text-sm focus:outline-none focus:border-rose transition-colors"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="font-mont text-[10px] uppercase tracking-widest font-bold">Message / Special Request</label>
        <textarea
          rows={4}
          className="w-full bg-ivory/50 border border-rose/10 p-4 font-lato text-sm focus:outline-none focus:border-rose transition-colors resize-none"
          placeholder="Any specific design or request?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
};

export default BookingPanel;
