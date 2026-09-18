import type { Metadata } from 'next';
import './globals.css';
import ScrollObserver from '@/components/ScrollObserver';

export const metadata: Metadata = {
  title: 'AHIL — Precision Engineering for Rail & Metro',
  description: 'And Hitech Industries Limited (AHIL) manufactures brake systems, HVAC, suspension and pantograph components for Indian Railways, Metros and global rolling stock.',
  authors: [{ name: 'And Hitech Industries Limited' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
