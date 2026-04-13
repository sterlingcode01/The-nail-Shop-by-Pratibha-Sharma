import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Pratibha Sharma',
  description: 'Learn more about Pratibha Sharma, India\'s most celebrated nail artist with 15 years of experience.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
