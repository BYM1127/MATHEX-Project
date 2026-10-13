'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Philosophy', href: '/philosophy' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
    { label: 'Policy', href: '/policy' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      {/* Top Telemetry Strip */}
      <div className="bg-surface-container-lowest border-b border-outline-variant/20 px-4 sm:px-6 lg:px-8 hidden lg:block">
        <div className="max-w-7xl mx-auto py-1 flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono tracking-wider">
          <div className="flex items-center gap-space-lg">
            <span className="flex items-center gap-space-xs text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              SURVEY TELEMETRY // JHB METRO
            </span>
            <span className="text-on-surface-variant/80">LAT: -26.2041° S, LONG: 28.0473° E</span>
            <span className="text-outline-variant">|</span>
            <span className="text-on-surface-variant/80">ELEV: 1,753M AMSL</span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="px-2 py-0.5 bg-surface-container border border-outline-variant/40 text-primary-container text-label-sm font-label-mono uppercase">
              CIDB 9GB / 9CE
            </span>
            <span className="px-2 py-0.5 bg-surface-container border border-outline-variant/40 text-on-surface-variant text-label-sm font-label-mono uppercase">
              NHBRC REG: 30002841
            </span>
            <span className="px-2 py-0.5 bg-surface-container-high text-on-surface text-label-sm font-label-mono uppercase">
              TOLERANCE: ±1.5MM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <Link href="/" className="flex items-center gap-space-sm group">
            <div className="w-9 h-9 bg-primary-container flex items-center justify-center border border-primary-container shadow-[0_0_16px_rgba(250,204,21,0.25)]">
              <span className="material-symbols-outlined text-on-primary-container text-[22px] font-bold">foundation</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm tracking-widest text-on-surface font-bold">MATHEX</span>
                <span className="font-headline-sm text-headline-sm text-primary-container font-bold">PROJECT</span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant/70 text-[10px] tracking-widest uppercase">
                CIVIC &amp; STRUCTURAL // SA
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
                  active
                    ? 'text-primary-container border-b-2 border-primary-container pb-1 font-bold'
                    : 'text-on-surface-variant hover:text-primary-container'
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
            className="hidden sm:inline-flex items-center gap-space-xs px-space-lg py-2.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-label-caps uppercase transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_24px_rgba(250,204,21,0.35)] active:translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[16px]">engineering</span>
            <span>Commission Project</span>
          </Link>

          <Link
            href="/contact"
            className="w-9 h-9 border border-outline-variant/50 hover:border-primary-container bg-surface-container flex items-center justify-center text-on-surface hover:text-primary-container transition-colors"
            title="Client Telemetry Portal"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
          </Link>

          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:text-primary-container"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-outline-variant/40 px-6 py-4 shadow-2xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 text-sm font-label-caps uppercase tracking-wider ${
                    active
                      ? 'bg-surface-container text-primary-container border-l-2 border-primary-container font-bold'
                      : 'text-on-surface-variant hover:text-primary-container hover:bg-surface-container/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">engineering</span>
              <span>Commission Project</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
