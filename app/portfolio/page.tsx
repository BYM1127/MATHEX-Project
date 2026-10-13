'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'ALL', label: 'All Work' },
    { id: 'BATHROOMS', label: 'Bathrooms' },
    { id: 'CONSTRUCTION', label: 'Home Building' },
    { id: 'PLUMBING', label: 'Plumbing & Water' },
    { id: 'RENOVATION', label: 'Renovations' },
  ];

  const archiveProjects = [
    { ref: '98-2023-078', codeName: 'Luxury Master Ensuite - Steyn City', discipline: 'Bathroom Renovation', client: 'Private Homeowner', status: 'COMPLETE', category: 'BATHROOMS' },
    { ref: '98-2024-001', codeName: 'Water Purification Station - Bryanston', discipline: 'Water Systems & Plumbing', client: 'Residential Estate', status: 'OPERATIONAL', category: 'PLUMBING' },
    { ref: '98-2021-097', codeName: 'Contemporary Wet Room - Hyde Park', discipline: 'Bathroom Renovation', client: 'Private Client', status: 'COMPLETE', category: 'BATHROOMS' },
    { ref: '98-2024-006', codeName: 'Floating Marble Staircase - Meyersdal', discipline: 'High-End Construction', client: 'Private Developer', status: 'COMPLETE', category: 'CONSTRUCTION' },
    { ref: '98-2022-040', codeName: 'Outdoor Braai Patio Kitchen - Waterfall', discipline: 'Renovation & Finishes', client: 'Country Estate Owner', status: 'COMPLETE', category: 'RENOVATION' },
    { ref: '98-2024-007', codeName: 'JoJo Tank & Filtration System - Sandton', discipline: 'Water Backup & Plumbing', client: 'Residential Home', status: 'OPERATIONAL', category: 'PLUMBING' },
    { ref: '98-2021-018', codeName: 'Calacatta Marble Tiling - Bedfordview', discipline: 'Tiling & Finishing', client: 'Private Client', status: 'COMPLETE', category: 'RENOVATION' },
    { ref: '98-2023-039', codeName: 'Full Bathroom Overhaul - Fourways', discipline: 'Bathroom Renovation', client: 'Private Estate', status: 'COMPLETE', category: 'BATHROOMS' },
    { ref: '98-2022-055', codeName: 'Copper Plumbing Rough-In - Randburg', discipline: 'Plumbing Works', client: 'Residential Renovation', status: 'COMPLETE', category: 'PLUMBING' },
    { ref: '98-2023-061', codeName: 'Feature Bathroom Vanity - Linden', discipline: 'Bathroom Fit-Out', client: 'Private Homeowner', status: 'COMPLETE', category: 'BATHROOMS' },
    { ref: '98-2024-018', codeName: 'Underfloor Heating Installation - Morningside', discipline: 'Wet Works & Systems', client: 'Luxury Apartment', status: 'OPERATIONAL', category: 'RENOVATION' },
    { ref: '98-2022-019', codeName: 'Complete Home Plumbing Replacement - Roodepoort', discipline: 'Full Plumbing System', client: 'Heritage Property', status: 'COMPLETE', category: 'PLUMBING' },
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

  // Real client photo gallery organized by project type
  const galleryImages = [
    { src: '/projects/mathex-work-03.jpg', title: 'Luxury Ensuite with LED Plinth', category: 'BATHROOMS', location: 'Steyn City, JHB' },
    { src: '/projects/mathex-work-02.jpg', title: 'Water Purification System', category: 'PLUMBING', location: 'Bryanston, Sandton' },
    { src: '/projects/mathex-work-14.jpg', title: 'Floating Marble Staircase', category: 'CONSTRUCTION', location: 'Meyersdal Eco Estate' },
    { src: '/projects/mathex-work-19.jpg', title: 'Master Ensuite Vanity & Soaking Bath', category: 'BATHROOMS', location: 'Steyn City, JHB' },
    { src: '/projects/mathex-work-22.jpg', title: 'Outdoor Patio Kitchen & Braai', category: 'RENOVATION', location: 'Waterfall Country Estate' },
    { src: '/projects/mathex-work-09.jpg', title: 'Full Wet Room with Frameless Glass Shower', category: 'BATHROOMS', location: 'Hyde Park, Sandton' },
    { src: '/projects/mathex-work-25.jpg', title: 'JoJo Tank & Water Filtration', category: 'PLUMBING', location: 'Bryanston' },
    { src: '/projects/mathex-work-08.jpg', title: 'Sage Green Floating Vanity', category: 'BATHROOMS', location: 'Bedfordview, JHB' },
    { src: '/projects/mathex-work-15.jpg', title: 'Calacatta Marble Wet Room Build', category: 'BATHROOMS', location: 'Hyde Park' },
    { src: '/projects/mathex-work-13.jpg', title: 'Floating Staircase Glass Facade', category: 'CONSTRUCTION', location: 'Meyersdal Eco Estate' },
    { src: '/projects/mathex-work-18.jpg', title: 'Marble & Brass Master Bathroom', category: 'BATHROOMS', location: 'Steyn City' },
    { src: '/projects/mathex-work-20.jpg', title: 'Frameless Glass Shower Room', category: 'BATHROOMS', location: 'Fourways' },
    { src: '/projects/mathex-work-39.jpg', title: 'Copper Rough-In Plumbing Works', category: 'PLUMBING', location: 'Randburg' },
    { src: '/projects/mathex-work-40.jpg', title: 'Bathroom Tile-Down in Progress', category: 'RENOVATION', location: 'Linden, JHB' },
    { src: '/projects/mathex-work-35.jpg', title: 'Precision Tiling Tools & Laser Level', category: 'RENOVATION', location: 'Morningside' },
    { src: '/projects/mathex-work-34.jpg', title: 'Underfloor Heating Monitor Check', category: 'RENOVATION', location: 'Morningside' },
    { src: '/projects/mathex-work-27.jpg', title: 'Internal Marble & Porcelain Tiling', category: 'RENOVATION', location: 'Roodepoort' },
    { src: '/projects/mathex-work-04.jpg', title: 'Water Filtration Piping System', category: 'PLUMBING', location: 'Bryanston' },
    { src: '/projects/mathex-work-28.jpg', title: 'Decorative Mosaic Floor Medallion', category: 'RENOVATION', location: 'JHB South' },
    { src: '/projects/mathex-work-06.jpg', title: 'Sage Green Basin & Frameless Shower', category: 'BATHROOMS', location: 'Bedfordview' },
  ];

  const filteredGallery = activeTab === 'ALL' ? galleryImages : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant/30 text-primary-container font-label-mono text-xs rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>100% AUTHENTIC CLIENT WORK • GAUTENG</span>
          </div>
          <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-on-surface leading-tight">
            Our Completed <span className="text-primary-container">Projects</span>
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Every image you see here is from a real Mathex Project build — real homes, real clients, real craftsmanship. From master suite renovations and water system installations to full ground-up construction, this is our actual work.
          </p>
          <div className="flex flex-wrap gap-6 pt-2 border-t border-outline-variant/20">
            <div>
              <div className="font-headline-sm text-xl font-bold text-primary-container">40+</div>
              <div className="font-body-sm text-xs text-on-surface-variant">Real Project Photos</div>
            </div>
            <div>
              <div className="font-headline-sm text-xl font-bold text-on-surface">12+</div>
              <div className="font-body-sm text-xs text-on-surface-variant">Completed Projects</div>
            </div>
            <div>
              <div className="font-headline-sm text-xl font-bold text-secondary">10 Yrs</div>
              <div className="font-body-sm text-xs text-on-surface-variant">Structural Warranty</div>
            </div>
            <div>
              <div className="font-headline-sm text-xl font-bold text-primary-container">100%</div>
              <div className="font-body-sm text-xs text-on-surface-variant">NHBRC Enrolled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-4 border-b border-outline-variant/20 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-label-mono text-xs uppercase transition-colors whitespace-nowrap rounded ${
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

      {/* Featured Hero Project */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-low border border-outline-variant/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group rounded-sm">
            <div className="lg:col-span-7 relative h-80 lg:h-auto min-h-[420px] bg-surface-container overflow-hidden">
              <img
                src="/projects/mathex-work-03.jpg"
                alt="Luxury master ensuite with LED illuminated freestanding bath"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-primary-container rounded">
                FEATURED PROJECT // BATHROOM RENOVATION
              </div>
              <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 font-label-mono text-[11px] text-on-surface rounded">
                LED-illuminated curved plinth • Freestanding tub • Brass fixtures
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-label-mono text-xs">
                  <span className="text-secondary">STEYN CITY, JOHANNESBURG</span>
                  <span className="text-primary-container font-bold">COMPLETE</span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl uppercase font-bold text-on-surface leading-tight">
                  Luxury Master Ensuite with Illuminated Marble Plinth
                </h2>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  Complete luxury master bathroom transformation. A freestanding bathtub sits on a custom curved LED-illuminated marble plinth, surrounded by full-height Calacatta marble wall tiles, brass floor spouts, and architectural recessed ceiling lighting.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 font-label-mono text-xs bg-surface-container p-4 border border-outline-variant/30 rounded-sm">
                  <div>Marble Finish: <strong className="text-on-surface">Calacatta</strong></div>
                  <div>Fixtures: <strong className="text-on-surface">Brass & Matte</strong></div>
                  <div>Heating: <strong className="text-secondary">Underfloor</strong></div>
                  <div>Warranty: <strong className="text-primary-container">10 Years</strong></div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container font-label-caps text-xs uppercase font-bold hover:bg-secondary-fixed transition-colors rounded-sm"
              >
                <span>Get a Similar Quote</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-12 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="font-label-mono text-xs text-primary-container uppercase font-bold">
                // AUTHENTIC SITE PHOTOGRAPHY
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl uppercase font-bold text-on-surface mt-1">
                Project Photo Gallery
              </h2>
            </div>
            <span className="font-label-mono text-xs text-on-surface-variant">{filteredGallery.length} photos</span>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredGallery.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid bg-surface-container-low border border-outline-variant/30 overflow-hidden rounded-sm shadow-md group hover:border-primary-container transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: '200px' }}
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-0.5 font-label-mono text-[10px] text-primary-container rounded">
                    {img.location}
                  </div>
                </div>
                <div className="px-4 py-3">
                  <h3 className="font-label-mono text-xs font-bold text-on-surface uppercase">{img.title}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-surface-container text-[10px] font-label-mono text-secondary rounded">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Registry Table */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-12 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-mono text-xs text-primary-container uppercase font-bold">
                // PROJECT REGISTER
              </span>
              <h2 className="font-headline-lg text-2xl uppercase font-bold text-on-surface mt-1">
                Completed Project Record
              </h2>
            </div>

            <input
              type="text"
              placeholder="Search project or discipline..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface-container border border-outline-variant/50 px-3 py-1.5 font-label-mono text-xs text-on-surface focus:outline-none focus:border-primary-container w-full md:w-72 rounded-sm"
            />
          </div>

          <div className="w-full overflow-x-auto shadow-xl border border-outline-variant/30 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest text-on-surface-variant font-label-mono text-xs uppercase tracking-wider border-b border-outline-variant/30">
                  <th className="px-4 py-3">Project No.</th>
                  <th className="px-4 py-3">Project Name</th>
                  <th className="px-4 py-3">Scope</th>
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-sm divide-y divide-outline-variant/20">
                {filteredArchive.map((row, idx) => (
                  <tr
                    key={row.ref}
                    className={idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container/30'}
                  >
                    <td className="px-4 py-3 font-label-mono text-xs text-primary-container font-bold">
                      {row.ref}
                    </td>
                    <td className="px-4 py-3 font-bold text-on-surface text-sm">{row.codeName}</td>
                    <td className="px-4 py-3 text-on-surface-variant text-xs">{row.discipline}</td>
                    <td className="px-4 py-3 text-on-surface-variant text-xs">{row.client}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 font-label-mono text-[10px] rounded ${
                        row.status === 'COMPLETE'
                          ? 'bg-primary-container/20 text-primary-container border border-primary-container/40'
                          : 'bg-secondary/20 text-secondary border border-secondary/40'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="font-label-mono text-xs text-on-surface-variant">
            Showing {filteredArchive.length} of {archiveProjects.length} projects
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-16 border-t border-outline-variant/20">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="font-headline-xl text-2xl sm:text-3xl uppercase font-bold text-on-surface">
            Want Results Like These for Your Home?
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Contact us today for a free site consultation and detailed quotation. We build, renovate, and install to the same high standard on every single project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-sm uppercase font-bold rounded shadow-lg transition-all"
            >
              Request a Free Quote
            </Link>
            <Link
              href="/services#estimator"
              className="px-8 py-3.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/50 text-on-surface font-label-caps text-sm uppercase font-bold rounded transition-all"
            >
              Estimate My Project Cost
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
