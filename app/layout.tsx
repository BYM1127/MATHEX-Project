import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'MATHEX PROJECT // High-Spec Engineering & Architecture',
  description:
    'Monolithic civil infrastructure, post-tensioned residential architecture, and specialised geotechnical foundations across sub-Saharan Africa.',
  keywords: [
    'civil engineering',
    'structural engineering',
    'brutalist architecture',
    'post-tensioned concrete',
    'CIDB 9GB 9CE',
    'Johannesburg',
    'South Africa',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        <main className="w-full pt-20 bg-background min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
