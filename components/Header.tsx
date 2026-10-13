'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
  ];

  const secondaryLinks = [
    { label: 'Philosophy', href: '/philosophy' },
    { label: 'Policy & Safety', href: '/policy' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-lg">
      {/* Clean Client Trust Ribbon */}
      <div className="bg-surface-container-lowest border-b border-outline-variant/20 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto py-1.5 flex items-center justify-between text-on-surface-variant font-label-mono text-[11px]">
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-1.5 text-primary-container font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              JOHANNESBURG &amp; GAUTENG WIDE
            </span>
            <span className="text-outline-variant">•</span>
            <span>NHBRC REGISTERED: 30002841</span>
            <span className="text-outline-variant">•</span>
            <span>CIDB GRADE 9GB / 9CE</span>
            <span className="text-outline-variant">•</span>
            <span className="text-secondary">10-YEAR STRUCTURAL WARRANTY</span>
          </div>

          <div className="flex items-center gap-space-md text-[11px]">
            <Link href="/policy" className="hover:text-primary-container transition-colors">
              Safety &amp; Compliance
            </Link>
            <span className="text-outline-variant">|</span>
            <Link href="/philosophy" className="hover:text-primary-container transition-colors">
              Engineering Creed
            </Link>
            <span className="text-outline-variant">|</span>
            <a href="tel:+27118924000" className="text-on-surface font-bold hover:text-primary-container">
              Tel: +27 (0) 11 892 4000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-space-md">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-space-sm group">
          <div className="w-10 h-10 bg-primary-container flex items-center justify-center border border-primary-container shadow-[0_0_16px_rgba(250,204,21,0.25)] rounded-sm">
            <span className="material-symbols-outlined text-on-primary-container text-[24px] font-bold">
              foundation
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-headline-sm text-[20px] tracking-wider text-on-surface font-bold">
                MATHEX
              </span>
              <span className="font-headline-sm text-[20px] text-primary-container font-bold">
                PROJECT
              </span>
            </div>
            <span className="font-label-mono text-[10px] text-on-surface-variant tracking-wider uppercase">
              Building, Renovations &amp; Engineering
            </span>
          </div>
        </Link>

        {/* Clear, Simple Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-xl">
          {mainNavLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label-caps text-[13px] uppercase tracking-wider transition-colors py-1 ${
                  active
                    ? 'text-primary-container border-b-2 border-primary-container font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-md">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-label-caps uppercase font-bold transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_24px_rgba(250,204,21,0.35)] rounded-sm"
          >
            <span className="material-symbols-outlined text-[18px]">request_quote</span>
            <span>Get a Free Quote</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:text-primary-container rounded-sm"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant/40 px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {mainNavLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3 text-sm font-label-caps uppercase tracking-wider rounded-sm ${
                    active
                      ? 'bg-surface-container text-primary-container font-bold border-l-4 border-primary-container'
                      : 'text-on-surface-variant hover:text-primary-container hover:bg-surface-container/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="border-t border-outline-variant/20 pt-2 mt-2 flex flex-col gap-1">
              {secondaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-3 text-xs font-label-mono text-on-surface-variant/80 hover:text-primary-container"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 py-3 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase font-bold rounded-sm shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">request_quote</span>
              <span>Get a Free Quote</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
