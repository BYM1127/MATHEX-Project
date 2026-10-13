'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'ALL', label: 'ALL WORKS (28)' },
    { id: 'RESIDENTIAL', label: 'RESIDENTIAL ARCHITECTURE (12)' },
    { id: 'SOIL', label: 'DEEP SOIL FOUNDATIONS (6)' },
    { id: 'CIVIL', label: 'CIVIL INFRASTRUCTURE (8)' },
    { id: 'FRAMES', label: 'HEAVY STRUCTURAL FRAMES (14)' },
  ];

  const archiveProjects = [
    {
      ref: '98-2023-078',
      codeName: 'Steyn City Monolith',
      discipline: 'Residential Post-Tensioned',
      client: 'Private Trust',
      footprint: '1,840 m²',
      leadEng: 'Dr. K. Ndlovu, Pr.Eng',
      status: 'COMPLETE',
      category: 'RESIDENTIAL',
    },
    {
      ref: '98-2024-001',
      codeName: 'Waterfall District Hydronics',
      discipline: 'District Civil Hydronics',
      client: 'ATTACQ Consortium',
      footprint: '14,200 m² Civ Retic',
      leadEng: 'F. Botha, Pr.Tech',
      status: 'OPERATIONAL',
      category: 'CIVIL',
    },
    {
      ref: '98-2021-097',
      codeName: 'Hyde Park Brutalist Villa',
      discipline: 'Structural Off-Shutter',
      client: 'Venture Capital Holdings',
      footprint: '1,450 m²',
      leadEng: 'K. van der Merwe, Pr.Eng',
      status: 'MAINTENANCE',
      category: 'RESIDENTIAL',
    },
    {
      ref: '98-2024-006',
      codeName: 'Midrand Industrial Platform',
      discipline: 'Civil / Continuous Slab Ground',
      client: 'Equites Industrial Ltd',
      footprint: '48,000 m²',
      leadEng: 'J.L. Ferreira, Pr.Eng Lead',
      status: 'OPERATIONAL',
      category: 'CIVIL',
    },
    {
      ref: '98-2022-040',
      codeName: 'Saxonwold Underpinning',
      discipline: 'Heritage Preservation',
      client: 'Heritage Re-Claim Trust',
      footprint: '400 Tons Underpinned',
      leadEng: 'P.G. Murray, Pr.Eng',
      status: 'COMPLETE',
      category: 'SOIL',
    },
    {
      ref: '98-2024-007',
      codeName: 'Bedfordview Penthouse',
      discipline: 'Tension Structural Envelope',
      client: 'Ridge Crest Properties',
      footprint: '70 Metre Ridge Elevation',
      leadEng: 'K. van der Merwe, Pr.Eng',
      status: 'DEFECT CLEARANCE',
      category: 'FRAMES',
    },
    {
      ref: '98-2021-018',
      codeName: 'Sandton Deep Retention Piling',
      discipline: 'Rock Anchoring & Retaining',
      client: 'Growthpoint Properties',
      footprint: '28.0m Excavation Depth',
      leadEng: 'Dr. K. Ndlovu, Pr.Eng',
      status: 'COMPLETE',
      category: 'SOIL',
    },
    {
      ref: '98-2023-039',
      codeName: 'East Rand Mine Conduit Reticulation',
      discipline: 'Civic Bridge Engineering',
      client: 'Sibanye-Stillwater Mining',
      footprint: '750 Metric Ton Spans',
      leadEng: 'F. Botha, Pr.Tech',
      status: 'COMPLETE',
      category: 'CIVIL',
    },
  ];

  const filteredArchive = archiveProjects.filter((p) => {
    const matchesSearch =
      p.codeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.discipline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.ref.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === 'ALL') return matchesSearch;
    return matchesSearch && p.category === activeTab;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Telemetry Header */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-sm border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-mono text-label-mono">
          <div className="flex items-center gap-space-md">
            <span className="text-primary-container font-bold tracking-wider">// ARCHIVE REPO: AFRI-01</span>
            <span className="text-on-surface-variant/60">TECTONIC DOSSIERS: 28 VERIFIED</span>
          </div>
          <div className="flex items-center gap-space-xs text-secondary">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>GAUTENG / SUB-SAHARAN FIELD CORPS</span>
          </div>
        </div>
      </section>

      {/* Hero Header */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="flex items-center gap-space-xs text-primary-container font-label-mono text-label-mono tracking-widest uppercase">
              <span>DEEP TECTONIC PORTFOLIO</span>
              <span className="text-outline-variant">///</span>
              <span>GAUTENG CORRIDORS</span>
            </div>
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero uppercase tracking-tight text-on-surface leading-none font-bold">
              STRUCTURAL <span className="text-primary-container">MASTERY</span> <br />
              &amp; TECTONIC DOSSIERS.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Documenting 28 civil, architectural, and industrial assets engineered under sub-footing tolerances across Gauteng and sub-Saharan corridors. From post-tensioned residential cantilevers to seismic industrial installations.
            </p>
          </div>

          <div className="lg:col-span-4 bg-surface-container-low p-space-lg border border-outline-variant/30 flex justify-between items-center shadow-xl">
            <div>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">PROJECT VALUE</span>
              <div className="font-headline-xl text-headline-xl font-bold text-primary-container">R142.8M</div>
              <span className="font-label-mono text-[10px] text-secondary">CIVIL/ENG PRIME AVERAGE</span>
            </div>
            <div className="text-right">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">MEAN DEV. TOLERANCE</span>
              <div className="font-headline-xl text-headline-xl font-bold text-on-surface">±0.8MM</div>
              <span className="font-label-mono text-[10px] text-on-surface-variant">LASER VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-md border-y border-outline-variant/20 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center gap-space-xs overflow-x-auto scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-label-mono text-label-mono uppercase transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary-container text-on-primary-container font-bold shadow-md'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Works Showcase */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl space-y-gutter-desktop">
        <div className="max-w-7xl mx-auto space-y-gutter-desktop">
          {/* Featured Showcase: Steyn City */}
          <div className="bg-surface-container-low border border-outline-variant/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            <div className="lg:col-span-7 relative h-96 lg:h-auto min-h-[420px] bg-surface-container overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Steyn City Monolithic Residence"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-primary-container">
                CASE 01 // RESIDENTIAL :: POST-TENSIONED FOCUS
              </div>
              <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 font-label-mono text-[11px] text-on-surface">
                CANTILEVER PROJECTION // 9.4M POST-TENSIONED
              </div>
            </div>

            <div className="lg:col-span-5 p-space-xl flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between font-label-mono text-[11px]">
                  <span className="text-secondary">JHB NR. 12 // GAUTENG</span>
                  <span className="text-primary-container font-bold">OCT 2024 | COMPLETE</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface">
                  STEYN CITY MONOLITHIC RESIDENCE
                </h2>
                <div className="font-label-mono text-[11px] text-on-surface-variant">
                  CIDB 9GB / ARCH-ENG-09 // WITWATERSRAND BASIN
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A masterclass execution in gravity-defying structural concrete engineering. The home features severe 9.4-meter cantilevered pergolas with zero vertical column support, utilizing embedded tendon anchors within 45MPa off-shutter concrete shear core slabs.
                </p>
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-mono text-[11px] bg-surface-container p-space-sm border border-outline-variant/30">
                  <div>FOOTPRINT: <span className="text-on-surface font-bold">1,840 m²</span></div>
                  <div>EXECUTION: <span className="text-on-surface font-bold">46 WEEKS</span></div>
                  <div>TOLERANCE: <span className="text-secondary font-bold">±1.0 mm</span></div>
                  <div>SIGN-OFF: <span className="text-primary-container font-bold">ECSA Pr.Eng</span></div>
                </div>
              </div>

              <div className="pt-space-sm space-y-space-sm">
                <div className="font-label-mono text-[10px] text-on-surface-variant/80">
                  CONCRETE: 45MPa SLAG-BLEND // REBAR: 350WA POST-TENSION WIRE
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-space-xs px-space-lg py-2.5 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase font-bold hover:bg-secondary-fixed transition-colors"
                >
                  <span>Examine Dossier // Specifications</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Card 1: Waterfall City */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md shadow-xl flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="relative w-full h-64 bg-surface-container overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="Waterfall City Hydronics"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-primary-container">
                    CASE 02 // WATER RETIC :: 25 BAR PROOF
                  </div>
                </div>
                <span className="font-label-mono text-[11px] text-secondary uppercase">
                  WATERFALL CITY // COMMERCIAL
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
                  WATERFALL CITY COMMERCIAL HYDRONICS
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Closed-loop industrial thermal fluid reticulation network servicing a 14-storey corporate campus. Subsurface pressure vessels and cooling tower manifolds eliminate thermal dissipation loss.
                </p>
                <div className="font-label-mono text-[11px] text-on-surface-variant bg-surface-container p-2 border border-outline-variant/30 flex justify-between">
                  <span>CAPACITY: 12,500 KW</span>
                  <span className="text-secondary">PRESSURE: 25.0 BAR</span>
                  <span className="text-primary-container">16 WEEKS</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-label-mono text-[12px] text-primary-container hover:underline uppercase pt-2"
              >
                <span>Examine Dossier // WC-2023-094</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

            {/* Card 2: Hyde Park */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md shadow-xl flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="relative w-full h-64 bg-surface-container overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                    alt="Hyde Park Brutalist Villa"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-primary-container">
                    CASE 03 // ARCHITECTURAL :: DOLOMITE PROTOCOL
                  </div>
                </div>
                <span className="font-label-mono text-[11px] text-secondary uppercase">
                  HYDE PARK // RESIDENTIAL
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
                  HYDE PARK BRUTALIST VILLA
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Tectonic elevation achieved through split-level 2-story blast furnace concrete frames. Rigorously engineered to SANS 10400 structural load codes with raw off-shutter masonry textures.
                </p>
                <div className="font-label-mono text-[11px] text-on-surface-variant bg-surface-container p-2 border border-outline-variant/30 flex justify-between">
                  <span>ENVELOPE: 1,450 M²</span>
                  <span className="text-secondary">BEARING: 42.7 TN/M²</span>
                  <span className="text-primary-container">38 WEEKS</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-label-mono text-[12px] text-primary-container hover:underline uppercase pt-2"
              >
                <span>Examine Dossier // HP-2024-002</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Full Width Feature: Midrand Logistics */}
          <div className="bg-surface-container-low border border-outline-variant/30 shadow-2xl p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-6 space-y-space-md">
              <div className="flex items-center gap-2 font-label-mono text-[11px] text-primary-container">
                <span>MIDRAND // LOGISTICS HUB</span>
                <span>::</span>
                <span>CIVIC GRADE CERTIFIED</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
                MIDRAND HEAVY LOGISTICS CENTER
              </h2>
              <div className="font-label-mono text-[12px] text-secondary font-bold">
                48,000 M² CONTINUOUS JOINT-FREE SLAB EXECUTION
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Critical heavy civil platform engineering: 48,000m² industrial concrete floor slab with zero jointing. Complete subsurface gas-grid re-engineering and dynamic heavy compaction supporting high-bay automated racking point loads exceeding 120kN.
              </p>
              <div className="grid grid-cols-2 gap-space-sm font-label-mono text-[11px] bg-surface-container p-space-md border border-outline-variant/30">
                <div>SURFACE: <span className="text-on-surface font-bold">48,000 m²</span></div>
                <div>EXCAVATION: <span className="text-on-surface font-bold">89,400 m³</span></div>
                <div>MAN-HOURS: <span className="text-on-surface font-bold">67,460 HRS</span></div>
                <div>SIGN-OFF: <span className="text-primary-container font-bold">J.L. Ferreira, Pr.Eng</span></div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-space-xs px-space-lg py-2.5 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase font-bold hover:bg-secondary-fixed transition-colors"
              >
                <span>Examine Dossier // MID-LOG-024</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="lg:col-span-6 relative h-80 bg-surface-container overflow-hidden border border-outline-variant/30">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Midrand Logistics Slab"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-on-surface flex justify-between">
                <span>CASE 04 // CIVIL INFRASTRUCTURE</span>
                <span className="text-primary-container">DENSITY: 98.4% MOD AASHTO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Archive Registry Index Table */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-xl border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-primary-container uppercase">
                // PAPER TRAIL // REPO: AFRI-01
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface">
                TECHNICAL ARCHIVE REGISTRY INDEX
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm">
              <input
                type="text"
                placeholder="Search archive ref or client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-surface-container border border-outline-variant/50 px-3 py-1.5 font-label-mono text-[12px] text-on-surface focus:outline-none focus:border-primary-container w-64"
              />
              <a
                href="/api/registry?format=csv"
                className="px-3 py-1.5 bg-surface-container-high border border-outline-variant/40 hover:border-primary-container font-label-mono text-[11px] text-primary-container flex items-center gap-1 uppercase"
              >
                <span className="material-symbols-outlined text-[14px]">download</span>
                <span>Export Registry (CSV)</span>
              </a>
            </div>
          </div>

          <div className="w-full overflow-x-auto shadow-2xl border border-outline-variant/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider border-b border-outline-variant/30">
                  <th className="p-space-md">PROJECT NO.</th>
                  <th className="p-space-md">ASSET CODE NAME</th>
                  <th className="p-space-md">DISCIPLINE</th>
                  <th className="p-space-md">CLIENT CONSORTIUM</th>
                  <th className="p-space-md">FOOTPRINT / SCALE</th>
                  <th className="p-space-md">LEAD ENG SIGN-OFF</th>
                  <th className="p-space-md">OPERATIONAL STATUS</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant/20">
                {filteredArchive.map((row, idx) => (
                  <tr
                    key={row.ref}
                    className={idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container/50'}
                  >
                    <td className="p-space-md font-label-mono text-label-mono text-primary-container font-bold">
                      {row.ref}
                    </td>
                    <td className="p-space-md font-bold text-on-surface">{row.codeName}</td>
                    <td className="p-space-md text-on-surface-variant">{row.discipline}</td>
                    <td className="p-space-md text-on-surface-variant">{row.client}</td>
                    <td className="p-space-md font-label-mono text-label-mono text-on-surface">
                      {row.footprint}
                    </td>
                    <td className="p-space-md font-label-mono text-label-mono text-secondary">
                      {row.leadEng}
                    </td>
                    <td className="p-space-md">
                      <span className="inline-block px-2 py-0.5 font-label-mono text-[10px] bg-primary-container/20 text-primary-container border border-primary-container/40">
                        [{row.status}]
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-mono text-[11px] text-on-surface-variant pt-space-xs">
            <div>DISPATCHED // {filteredArchive.length} OF 28 COMMISSIONS // ECSA ARCHIVES TRANSFERRED</div>
            <div className="text-secondary font-bold">VERIFIED SIGNED &amp; SEALED BOQS</div>
          </div>
        </div>
      </section>
    </div>
  );
}
