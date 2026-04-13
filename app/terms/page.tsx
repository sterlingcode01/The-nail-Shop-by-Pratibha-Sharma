import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  const sections = [
    {
      title: '1. Booking & Appointments',
      content: [
        'Advance booking is highly recommended via WhatsApp or phone to ensure availability.',
        'Walk-ins are welcome but subject to the availability of our artists.',
        'Cancellations or rescheduling must be notified at least 24 hours in advance.',
        'Repeated no-shows may result in a requirement for a non-refundable booking deposit for future appointments.',
      ],
    },
    {
      title: '2. Home Service Terms',
      content: [
        'Travel charges are applicable based on the distance from our nearest branch and the specific city.',
        'A minimum booking value may apply for home service requests.',
        'A 50% advance payment is required for home service bookings outside of Jaipur.',
        'Clients must ensure a clean, well-lit workspace is available for the artist to perform the service.',
      ],
    },
    {
      title: '3. Pricing & Payments',
      content: [
        'All prices shown on the website are indicative and subject to change without prior notice.',
        'The final price will be confirmed during the initial consultation before the service begins.',
        'We accept payments via Cash, UPI, and Bank Transfer.',
      ],
    },
    {
      title: '4. Refund Policy',
      content: [
        'Services rendered are non-refundable.',
        'If you are unsatisfied with the service, please notify us within 24 hours for a complimentary correction.',
        'No cash refunds will be provided for completed services.',
      ],
    },
    {
      title: '5. Photography & Portfolio Consent',
      content: [
        'Pratibhanails reserves the right to photograph client nails for use in our portfolio and on social media.',
        'Client faces will not be published without explicit written consent.',
        'Clients may opt out of photography by informing the artist before the service begins.',
      ],
    },
    {
      title: '6. Academy & Training',
      content: [
        'Course fees are non-refundable once the training program has commenced.',
        'Certificates are issued only upon successful completion of all required modules.',
        'Rescheduling of classes is subject to the availability of the instructor.',
      ],
    },
    {
      title: '7. General Website Terms',
      content: [
        'All content on this website, including images and text, is the property of Pratibhanails.',
        'Unauthorized reproduction or use of any content is strictly prohibited.',
      ],
    },
  ];

  return (
    <main className="bg-transparent">
      <section className="pt-40 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-playfair mb-4">Terms & Conditions</h1>
          <p className="font-mont text-[10px] uppercase tracking-widest text-rose mb-12">Last Updated: April 2026</p>
          
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl font-mont font-bold uppercase tracking-wider text-burgundy">{section.title}</h2>
                <ul className="space-y-3 font-lato text-muted leading-relaxed list-disc pl-5">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-rose/10">
            <Link href="/" className="btn-outline">Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
