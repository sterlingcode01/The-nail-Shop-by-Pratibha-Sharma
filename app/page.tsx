import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsBanner from '@/components/home/StatsBanner';
import FeaturedWork from '@/components/home/FeaturedWork';
import WhySection from '@/components/home/WhySection';
import CelebritySection from '@/components/home/CelebritySection';
import ServicePreview from '@/components/home/ServicePreview';
import HomeServiceBanner from '@/components/home/HomeServiceBanner';
import BranchesSection from '@/components/home/BranchesSection';
import InstagramTeaser from '@/components/home/InstagramTeaser';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pratibhanails — Luxury Nail Art Studio Jaipur | Pratibha Sharma',
  description: 'India\'s most celebrated nail artist. 15 years of luxury nail art, celebrity clients, bridal nail packages & home service all across India. Book your appointment at Pratibhanails, Vaishali Nagar, Jaipur.',
  alternates: {
    canonical: 'https://www.pratibhanails.com',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NailSalon',
    name: 'Pratibhanails — The Nail Art Studio by Pratibha Sharma',
    image: 'https://www.pratibhanails.com/images/og-homepage.jpg',
    url: 'https://www.pratibhanails.com',
    telephone: ['+919888333965', '+919115656966'],
    email: 'Pratibhanails@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop S-19, 2nd Floor, Near Burger King, Amrapali Circle',
      addressLocality: 'Vaishali Nagar, Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302021',
      addressCountry: 'IN'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 26.9126, longitude: 75.7488 },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '10:30', closes: '20:30'
    }],
    priceRange: '₹₹',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '500' },
    founder: { '@type': 'Person', name: 'Pratibha Sharma' },
    numberOfEmployees: '10+',
    areaServed: 'India',
    serviceArea: { '@type': 'Country', name: 'India' }
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsBanner />
      <FeaturedWork />
      <WhySection />
      <CelebritySection />
      <ServicePreview />
      <HomeServiceBanner />
      <BranchesSection />
      <InstagramTeaser />
    </main>
  );
}
