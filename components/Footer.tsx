import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-space-xl">
      {/* Statutory Ribbon */}
      <div className="border-b border-outline-variant/20 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-md grid grid-cols-2 md:grid-cols-4 gap-space-md text-on-surface-variant font-label-mono text-label-mono">
          <div className="flex items-center gap-space-xs">
            <span className="text-primary-container">// ACCRED:</span>
            <span>CIDB 9GB/9CE CERTIFIED</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="text-primary-container">// COMPL:</span>
            <span>ISO 9001:2015 &amp; 45001</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="text-primary-container">// REG:</span>
            <span>ECSA PROFESSIONAL FIRM</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="text-primary-container">// STATUS:</span>
            <span className="text-secondary">BBBEE LEVEL 1 ENG</span>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-xl grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
        <div className="md:col-span-4 space-y-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-7 h-7 bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-headline-sm">
              M
            </div>
            <span className="font-headline-sm text-headline-sm font-bold tracking-widest text-on-surface">
              MATHEX PROJECT
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Civil, structural engineering and architectural masterplanning across sub-Saharan Africa. High-load municipal frameworks, commercial monoliths, and specialized mining infrastructure.
          </p>
          <div className="p-space-md bg-surface-container border border-outline-variant/40 space-y-space-xs font-label-mono text-label-mono">
            <div className="text-secondary">HEADQUARTERS // GAUTENG</div>
            <div className="text-on-surface">44 Oxford Works, Rosebank, Johannesburg 2196</div>
            <div className="text-on-surface-variant">TEL: +27 (0) 11 892 4000</div>
            <div className="text-on-surface-variant">OPS: ops@mathexproject.co.za</div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-space-md">
          <div className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
            Core Disciplines
          </div>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <li>Heavy Civil Engineering &amp; Earthworks</li>
            <li>Structural Steelwork &amp; Pre-Stressed Concrete</li>
            <li>Architectural Technical Execution</li>
            <li>Mine Surface Works &amp; Beneficiation Plants</li>
            <li>Urban Water Reticulation &amp; Reservoirs</li>
            <li>Seismic Reinforcement &amp; Structural Audit</li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-space-md">
          <div className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
            Navigation
          </div>
          <ul className="space-y-space-xs font-body-sm text-body-sm">
            <li className="hover:text-primary-container">
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/portfolio">
                Master Portfolio
              </Link>
            </li>
            <li className="hover:text-primary-container">
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/philosophy">
                Engineering Creed
              </Link>
            </li>
            <li className="hover:text-primary-container">
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/services">
                Technical Scope
              </Link>
            </li>
            <li className="hover:text-primary-container">
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/about-us">
                Firm &amp; Leadership
              </Link>
            </li>
            <li className="hover:text-primary-container">
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/contact">
                Consultation Hub
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-space-md">
          <div className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
            Governance &amp; Safety
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Zero Harm tolerance mandated under OHSAS 18001 guidelines and Department of Mineral Resources standards.
          </p>
          <div className="flex flex-col gap-space-xs font-label-mono text-label-mono text-on-surface-variant">
            <Link className="hover:text-primary-container transition-colors" href="/policy">
              [+] Safety Management Protocols
            </Link>
            <Link className="hover:text-primary-container transition-colors" href="/policy">
              [+] Environmental Impact Mandates
            </Link>
            <Link className="hover:text-primary-container transition-colors" href="/policy">
              [+] POPIA &amp; Data Compliance
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-outline-variant/20 py-space-md px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant/70 font-label-mono text-label-mono">
          <p>© 2025 MATHEX PROJECT (PTY) LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-space-md">
            <Link className="hover:text-on-surface transition-colors" href="/policy">
              LEGAL / COMPLIANCE
            </Link>
            <span className="text-outline-variant">//</span>
            <Link className="hover:text-on-surface transition-colors" href="/policy">
              SITE BLUEPRINT
            </Link>
            <span className="text-outline-variant">//</span>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
