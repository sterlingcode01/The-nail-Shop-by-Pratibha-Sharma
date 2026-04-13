import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. What We Collect',
      content: 'We collect personal information such as your name, phone number, and email address when you fill out our booking or contact forms. This information is provided voluntarily by you.',
    },
    {
      title: '2. How We Use Your Information',
      content: 'Your information is used solely for the purpose of booking appointments, communicating about our services, and responding to your inquiries. We do not use your data for unsolicited marketing.',
    },
    {
      title: '3. Data Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties. Your data is kept strictly confidential within the Pratibhanails team.',
    },
    {
      title: '4. Cookies',
      content: 'Our website uses Google Analytics 4 to collect anonymous usage data to help us improve the user experience. No personally identifiable information is collected via cookies.',
    },
    {
      title: '5. WhatsApp Communication',
      content: 'Messages sent to our WhatsApp number are treated with the same level of confidentiality as any other form of communication. We store these messages only as long as necessary to provide our services.',
    },
    {
      title: '6. Data Retention',
      content: 'Form data is retained for a period of 12 months for record-keeping purposes, after which it is securely deleted from our systems.',
    },
    {
      title: '7. Your Rights',
      content: 'You have the right to request the deletion of your personal data at any time. To do so, please email us at Pratibhanails@gmail.com.',
    },
    {
      title: '8. Contact for Privacy',
      content: 'If you have any questions about our privacy practices, please contact us at Pratibhanails@gmail.com.',
    },
  ];

  return (
    <main className="bg-transparent">
      <section className="pt-40 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-playfair mb-4">Privacy Policy</h1>
          <p className="font-mont text-[10px] uppercase tracking-widest text-rose mb-12">Last Updated: April 2026</p>
          
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl font-mont font-bold uppercase tracking-wider text-burgundy">{section.title}</h2>
                <p className="font-lato text-muted leading-relaxed">
                  {section.content}
                </p>
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
