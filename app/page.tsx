'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: 'hyde-park',
      category: 'RESIDENTIAL',
      badge1: 'PRECISION // RES-24',
      badge2: 'OFF-SHUTTER TECTONICS // 45 MPA',
      subCategory: 'RESIDENTIAL // STRUCTURAL MONOLITH // SANDTON',
      title: 'THE HYDE PARK MONOLITH',
      desc: 'Laser-level suspense and structural execution of 18-meter ground spans using post-tensioned 45MPa concrete and customised steel tension ties to eliminate interior load-bearing walls.',
      spec1: 'TOTAL FLOOR: 1,840 M²',
      spec2: 'DURATION: 18 MONTHS',
      spec3: 'COMPLETION: Q1 2024',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'rosebank',
      category: 'HYDRONIC',
      badge1: 'PIPELINE // HY-08-CIV',
      badge2: 'RETICULATION // SANS 10252 COMPLIANT',
      subCategory: 'CIVIC RETICULATION // FLUID DYNAMICS // JHB SUB-SURFACE',
      title: 'ROSEBANK DISTRICT HYDRONICS',
      desc: 'High-pressure subterranean fluid reticulation infrastructure and closed-loop heat dissipation networks servicing a 14,200m² mixed-use precinct. Sub-surface manifold chambers rated at 25 bar burst-proof hydro testing.',
      spec1: 'PRESSURE: 25.0 BAR',
      spec2: 'RETICULATION: 14,200 M²',
      spec3: 'DISCIPLINE: BULK FLUID',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'saxonwold',
      category: 'RESIDENTIAL',
      badge1: 'FACADE-02 // HERIT-08',
      badge2: 'HERITAGE / CONTEMPORARY STEEL TIES',
      subCategory: 'HERITAGE RECONSTRUCTION // PARKTOWN',
      title: 'SAXONWOLD HERITAGE CONVERSION',
      desc: 'Surgical underpinning and seismic structural remediation of an 1912 heritage residence coupled with a bespoke 14-meter double-glazed steel frame conservatory cantilever with zero vibration transmission.',
      spec1: 'FOUNDATION AGE: 112 YEARS (1912)',
      spec2: 'STEEL FRAME: 350WA GRADE',
      spec3: 'TOLERANCE: <0.75 MM',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'midrand',
      category: 'CIVIL',
      badge1: 'CIVIL-LOG-01 // DISTRIB',
      badge2: 'SUPERFLAT // TR-34 FM2 FLOORING',
      subCategory: 'HEAVY INDUSTRIAL INFRASTRUCTURE // MIDRAND',
      title: 'MIDRAND LOGISTICS APPARATUS',
      desc: '48,000 m² continuous joint-free post-tensioned concrete slab engineered for high-frequency heavy axle forklift loads. Precision laser screeding delivers five-year maintenance-free surface integrity.',
      spec1: 'SLAB AREA: 48,000 SQM',
      spec2: 'POINT LOAD: 120 KN/SQM',
      spec3: 'FLATNESS: TR34 CLASS 2',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'CIVIL') return p.category === 'CIVIL';
    if (activeFilter === 'HYDRONIC') return p.category === 'HYDRONIC';
    if (activeFilter === 'RESIDENTIAL') return p.category === 'RESIDENTIAL';
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Banner Ribbon */}
      <section className="w-full bg-surface-container-lowest py-space-sm px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-primary-container uppercase font-bold">FLAGSHIP COMMISSION // SANDTON CREST</span>
            <span className="text-outline-variant">::</span>
            <span>SPECS: 120+ TON REBAR // CONCRETE SPEC: 45MPa</span>
          </div>
          <div className="flex items-center gap-space-md font-label-mono text-label-mono text-on-surface-variant">
            <span className="bg-surface-container px-2 py-0.5 text-secondary">CIDB GRADE 9GB / 9CE</span>
            <span className="bg-surface-container px-2 py-0.5 text-primary-container">B-BBEE LEVEL 1</span>
            <span className="bg-surface-container px-2 py-0.5 text-on-surface">ECSA PR.ENG LED</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-surface py-space-xl px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
            <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary">
              <span className="material-symbols-outlined text-[16px]">token</span>
              <span>ESTABLISHED 2014 // WITWATERSRAND BASIN FOUNDATION</span>
            </div>

            <h1 className="font-display-hero text-display-hero uppercase tracking-tight text-on-surface leading-none">
              STEYN CITY RESIDENCE &amp; <br />
              <span className="text-primary-container">COMMERCIAL TOWERS</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Deep-foundation monolithic reinforced frame structure incorporating post-tensioned shear plates, axial architecture, and off-shutter finishes constructed to an uncompromising ±1.5mm operational envelope.
            </p>

            {/* 4 Hero Metric Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
              <div className="bg-surface-container p-space-sm border border-outline-variant/30">
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">FOOTPRINT</span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">10,850 m²</span>
                <span className="font-label-mono text-[10px] text-secondary block mt-0.5">TOTAL SITE AREA</span>
              </div>
              <div className="bg-surface-container p-space-sm border border-outline-variant/30">
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">COMPRESSIVE SPEC</span>
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container">45MPa</span>
                <span className="font-label-mono text-[10px] text-on-surface-variant block mt-0.5">C45/55 CORE RATING</span>
              </div>
              <div className="bg-surface-container p-space-sm border border-outline-variant/30">
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">HANDOVER ETA</span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">NOV 2024</span>
                <span className="font-label-mono text-[10px] text-secondary block mt-0.5">CONSTRUCTION Y-3</span>
              </div>
              <div className="bg-surface-container p-space-sm border border-outline-variant/30">
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">CONTRACT VALUE</span>
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container">R142.8M</span>
                <span className="font-label-mono text-[10px] text-on-surface-variant block mt-0.5">CIVIL/ENG PRIME</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <Link
                href="/services"
                className="px-space-xl py-space-md bg-primary-container text-on-primary-container hover:bg-secondary-fixed transition-all font-label-caps text-label-caps uppercase font-bold flex items-center gap-space-xs shadow-lg hover:shadow-primary-container/20"
              >
                <span className="material-symbols-outlined text-[18px]">domain_verification</span>
                <span>Inspect Structural Specification</span>
              </Link>
              <button
                onClick={() => window.print()}
                className="px-space-lg py-space-md bg-surface-container-high text-on-surface hover:text-primary-container transition-all font-label-caps text-label-caps uppercase font-bold flex items-center gap-space-xs border border-outline-variant/40"
              >
                <span className="material-symbols-outlined text-[18px]">print</span>
                <span>Print An Audit Brief</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[480px] bg-surface-container-low overflow-hidden shadow-2xl border border-outline-variant/30">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Steyn City Monolithic Residence at dusk"
                className="w-full h-full object-cover brightness-90 contrast-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>

              {/* Overlays */}
              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[11px] text-primary-container border border-outline-variant/40">
                SUPERSTRUCTURE PHASE // CRANE 04-2
              </div>
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[11px] text-secondary border border-outline-variant/40">
                RADIAL DISPATCH: 14.2KM // ECSA REF #
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-space-md flex items-center justify-between border border-outline-variant/40">
                <div className="flex flex-col font-label-mono">
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                    RADIAL DEFLECTION: 0.00% / SOIL
                  </span>
                  <span className="text-label-mono text-on-surface font-bold">
                    MAIN REEF YARD // GAUTENG
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-primary-container font-label-mono text-label-mono">
                  <span className="material-symbols-outlined text-[16px] animate-pulse">radar</span>
                  <span>LIVE TELEMETRY BROADCASTING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantitative Field Metrics (4 Columns) */}
      <section className="w-full bg-surface-container-lowest py-space-xl px-4 sm:px-6 lg:px-8 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Stat 1 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-colors border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">DELIVERED VALUE</span>
                <span className="material-symbols-outlined text-primary-container text-[24px]">payments</span>
              </div>
              <div className="flex items-baseline gap-space-xs my-space-xs">
                <span className="font-metric-numeral text-metric-numeral text-primary-container font-bold">R450M+</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                Active residential monoliths, civic conduits, &amp; processing works delivered on schedule.
              </p>
              <div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-[10px] text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">verified</span>
                JBCC GUARANTEED COMMISSIONS
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-colors border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">DEPLOYED ARTISANS</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">engineering</span>
              </div>
              <div className="flex items-baseline gap-space-xs my-space-xs">
                <span className="font-metric-numeral text-metric-numeral text-on-surface font-bold">120+</span>
                <span className="font-label-mono text-label-mono text-secondary">ACTIVE</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                Red Seal boilermakers, formwork crews, and heavy plant earthmoving operators across 6 sites.
              </p>
              <div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-[10px] text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">military_tech</span>
                RED SEAL TRADES ACCREDITATION
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-colors border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">WARRANTY CLAIMS</span>
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px]">security</span>
              </div>
              <div className="flex items-baseline gap-space-xs my-space-xs">
                <span className="font-metric-numeral text-metric-numeral text-primary-container font-bold">0.00%</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                Post-occupancy warranty defect claims since founding registration across all structural frames.
              </p>
              <div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-[10px] text-primary-container flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">done_all</span>
                NHBRC INDEMNIFIED CONTINUITY
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-colors border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">TOTAL CONCRETE</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">foundation</span>
              </div>
              <div className="flex items-baseline gap-space-xs my-space-xs">
                <span className="font-metric-numeral text-metric-numeral text-on-surface font-bold">185k</span>
                <span className="font-label-mono text-label-mono text-secondary">M³ POURED</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                Poured-in-place structural and off-shutter reinforced core areas completed to date.
              </p>
              <div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-[10px] text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">science</span>
                C35-C50 SLAG SPECIFICATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Structural Works */}
      <section className="w-full bg-surface py-space-xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-secondary">// DOSSIER // FOUNDATIONAL</span>
              <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface font-bold tracking-tight">
                SELECTED STRUCTURAL WORKS
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-1">
                Excavation/sub-terrain interventions, bespoke luxury hard architectures, and specialised civic load configurations.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-space-xs font-label-mono text-label-mono">
              <button
                onClick={() => setActiveFilter('ALL')}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  activeFilter === 'ALL'
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                ALL DISCIPLINES
              </button>
              <button
                onClick={() => setActiveFilter('CIVIL')}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  activeFilter === 'CIVIL'
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                HEAVY CIVIL/STEEL
              </button>
              <button
                onClick={() => setActiveFilter('HYDRONIC')}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  activeFilter === 'HYDRONIC'
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                CIVIC HYDRONIC
              </button>
              <button
                onClick={() => setActiveFilter('RESIDENTIAL')}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  activeFilter === 'RESIDENTIAL'
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                HIGH-END RESIDENTIAL
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between shadow-xl group hover:border-primary-container/60 transition-all"
              >
                <div>
                  <div className="relative w-full h-72 bg-surface-container overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-primary-container">
                      {p.badge1}
                    </div>
                    <div className="absolute top-2 right-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-secondary">
                      {p.badge2}
                    </div>
                  </div>

                  <div className="p-space-lg space-y-space-sm">
                    <span className="font-label-mono text-[11px] text-secondary uppercase tracking-widest block">
                      {p.subCategory}
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
                      {p.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-space-lg pt-0">
                  <div className="bg-surface-container p-space-sm flex flex-wrap items-center justify-between gap-space-xs font-label-mono text-[11px] text-on-surface-variant border border-outline-variant/20">
                    <span>{p.spec1}</span>
                    <span>|</span>
                    <span>{p.spec2}</span>
                    <span>|</span>
                    <span className="text-primary-container">{p.spec3}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAD Meets Heavy Tectonics */}
      <section className="w-full bg-surface-container-lowest py-space-xl px-4 sm:px-6 lg:px-8 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-7 space-y-space-md">
              <span className="font-label-mono text-label-mono text-primary-container uppercase">
                // CRITICAL BLUEPRINT // TECTONICS
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase font-bold tracking-tight">
                WHERE RIGOROUS CAD MEETS HEAVY TECTONICS
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Architecture reaches physical truth only when theoretical calculations absorb real earth loads, thermal shifts, and tensile dynamics. We refuse compromise between architectural aesthetics and structural engineering survivability.
              </p>

              <div className="space-y-space-md pt-space-xs">
                <div className="flex items-start gap-space-md bg-surface-container p-space-md border border-outline-variant/30">
                  <div className="w-10 h-10 bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[24px]">architecture</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase">
                      MILLIMETRIC PRECISION STANDARD
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Strict site tolerances constrained to ±1.5mm through automated laser scanning and continuous ECSA inspection protocols across every pour.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md bg-surface-container p-space-md border border-outline-variant/30">
                  <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[24px]">layers</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase">
                      MATERIAL AUTHENTICITY &amp; OFF-SHUTTER CRAFT
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      We embrace raw formwork with un-compacting micro-finishes, customised timber shuttering patterns, and uncompromised structural steel nodes with full tensile certifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="lg:col-span-5 bg-surface-container-low p-space-xl border-l-4 border-primary-container shadow-2xl relative">
              <div className="flex items-center justify-between pb-space-md">
                <span className="font-label-mono text-[11px] text-secondary uppercase tracking-widest">
                  PEER RECOGNITION // VERIFICATION
                </span>
                <div className="flex text-primary-container">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px]">
                      star
                    </span>
                  ))}
                </div>
              </div>

              <blockquote className="font-display-hero text-headline-md italic text-on-surface leading-snug">
                &ldquo;Mathex Project is the sole engineering and execution team in sub-Saharan Africa able to convert our radical embraced 18-meter cantilevers into unyielding structural reality without modifying a millimeter of our architectural intent.&rdquo;
              </blockquote>

              <div className="pt-space-lg flex items-center justify-between">
                <div>
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    ARCH. STEPHEN LE ROUX
                  </div>
                  <div className="font-label-mono text-label-mono text-on-surface-variant">
                    PRINCIPAL DIRECTOR // FEODOR &amp; ASSOCIATES STUDIO
                  </div>
                </div>
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center font-bold text-primary-container border border-outline-variant/50">
                  FA
                </div>
              </div>
            </div>
          </div>

          {/* Mini Badges Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-md border-t border-outline-variant/20 font-label-mono text-label-mono text-on-surface-variant">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
              <span>CIDB GRADE 9GB / 9CE</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">engineering</span>
              <span>ECSA REGISTERED ENGINEERS</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[18px]">shield</span>
              <span>10-YR DEFECT WARRANTY</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">task_alt</span>
              <span>SABS &amp; SANS 10400 AUDITED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Procure Specifications & Structural BOQ CTA */}
      <section className="w-full bg-surface py-space-xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-primary-container bg-surface-container-low p-space-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container font-label-mono text-[10px] uppercase font-bold px-3 py-1">
              OFFICIAL PORTAL
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
              <div className="lg:col-span-7 space-y-space-sm">
                <span className="font-label-mono text-label-mono text-secondary uppercase">
                  // RESTRICTED PROCUREMENT // TENDER ACCESS
                </span>
                <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface font-bold">
                  PROCURE PROJECT SPECIFICATIONS &amp; STRUCTURAL BOQ
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Request encrypted access to certified tender sheets, concrete pour test histories, and rebar scheduling sheets. Verified developers and architectural consultants receive instant authorization.
                </p>
                <div className="pt-2 font-label-mono text-[11px] text-on-surface-variant/70">
                  ALL DOCUMENTS PROTECTED UNDER POPIA &amp; TITLE DEED IP DIRECTORY
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-space-md justify-center">
                <Link
                  href="/contact"
                  className="px-space-xl py-space-md bg-primary-container text-on-primary-container hover:bg-secondary-fixed transition-all font-label-caps text-label-caps uppercase font-bold flex items-center justify-center gap-space-xs shadow-lg"
                >
                  <span className="material-symbols-outlined text-[18px]">lock_open</span>
                  <span>ACCESS TELEMETRY VAULT</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-space-xl py-space-md bg-surface-container-high text-on-surface hover:text-primary-container transition-all font-label-caps text-label-caps uppercase font-bold flex items-center justify-center gap-space-xs border border-outline-variant/50"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  <span>BOOK LEAD ENGINEER BRIEF</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
