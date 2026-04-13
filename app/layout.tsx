import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, Lato, Montserrat } from 'next/font/google';
import './globals.css';
import WhatsAppFAB from '@/components/layout/WhatsAppFAB';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Pratibhanails',
    default: 'Pratibhanails — India\'s Most Celebrated Nail Artist',
  },
  description: 'India\'s most celebrated nail artist. Celebrity work, bridal nail art, extensions & home service across India. Book now in Jaipur.',
  keywords: 'nail art jaipur, best nail artist india, nail extensions vaishali nagar, bridal nail art jaipur, celebrity nail artist india, home nail service india',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Pratibhanails',
    title: 'Pratibhanails — India\'s Most Celebrated Nail Artist',
    description: 'Luxury Nail Art Studio by Pratibha Sharma. 15 years of mastery, celebrity clients, and home service all across India.',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Pratibhanails — Luxury Nail Art Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratibhanails — India\'s Most Celebrated Nail Artist',
    description: 'Luxury Nail Art Studio by Pratibha Sharma. 15 years of mastery, celebrity clients, and home service all across India.',
    images: ['/images/og-homepage.jpg'],
  },
  icons: {
    icon: 'https://res.cloudinary.com/dz3ixer7i/image/upload/v1775990809/remove-photos-background-removed_vrqcuz.png',
  },
  alternates: {
    canonical: 'https://www.pratibhanails.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${lato.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="bg-dark text-ivory">
        <Navbar />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
        <WhatsAppFAB />
      </body>
    </html>
  );
}
