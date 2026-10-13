'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const services = [
    {
      title: 'Luxury House Building',
      desc: 'Bespoke high-end homes, ground-up architectural estates, cantilevered structures, and turnkey finishes built to perfection.',
      icon: 'villa',
      badge: 'Turnkey Residential',
      href: '/services#residential',
    },
    {
      title: 'High-End Renovations',
      desc: 'Master bathroom remodels, structural wall removals, second-storey additions, and luxury outdoor entertainment patio kitchens.',
      icon: 'home_repair_service',
      badge: 'Alterations & Upgrades',
      href: '/services#renovation',
    },
    {
      title: 'Plumbing & Water Systems',
      desc: 'Whole-house water purification stations, backup storage tanks, booster pumps, solar geysers, and certified leak-free reticulation.',
      icon: 'water_drop',
      badge: 'PIRB Master Licensed',
      href: '/services#plumbing',
    },
    {
      title: 'Civil & Foundation Engineering',
      desc: 'Engineered raft foundations, retaining walls, soil stabilization, and structural concrete overseen by licensed professional engineers.',
      icon: 'engineering',
      badge: 'CIDB Grade 9GB / 9CE',
      href: '/services#civil',
    },
  ];

  const clientProjects = [
    {
      id: 'floating-staircase',
      category: 'HOMES',
      title: 'Bespoke Cantilevered Marble Staircase',
      location: 'Meyersdal Eco Estate, JHB',
      desc: 'Architectural floating zigzag marble staircase with handcrafted mosaic riser detailing, built adjacent to a double-volume structural curtain glass facade.',
      spec: 'Engineered Cantilever • Handcrafted Marble • Glass Facade',
      imageUrl: '/projects/mathex-work-14.jpg',
    },
    {
      id: 'master-ensuite',
      category: 'RENOVATIONS',
      title: 'Luxury Master Ensuite with Illuminated Plinth',
      location: 'Steyn City, Johannesburg',
      desc: 'Complete luxury bathroom renovation featuring a freestanding bathtub on a curved LED-illuminated marble plinth, brass fixtures, and recessed architectural lighting.',
      spec: 'Underfloor Heating Tested • Calacatta Marble • Brass Spouts',
      imageUrl: '/projects/mathex-work-03.jpg',
    },
    {
      id: 'braai-patio',
      category: 'RENOVATIONS',
      title: 'Modern Outdoor Patio & Built-In Braai Kitchen',
      location: 'Waterfall Country Estate, Midrand',
      desc: 'Turnkey outdoor entertainment space with large-format concrete porcelain tiles, integrated stainless steel gas braai, prep sink, and quartz waterfall countertops.',
      spec: 'Weatherproof Louvred Joinery • Quartz Waterfall Countertops',
      imageUrl: '/projects/mathex-work-22.jpg',
    },
    {
      id: 'water-plant',
      category: 'PLUMBING',
      title: 'Central Water Purification & Backup Plant',
      location: 'Bryanston, Sandton',
      desc: 'Closed-loop multi-stage water filtration and storage system featuring 5,000L JoJo water tanks, automatic pressure booster pumps, and UV purification.',
      spec: 'SANS 10252 Compliant • Constant High Pressure • Backup Water',
      imageUrl: '/projects/mathex-work-02.jpg',
    },
    {
      id: 'walkin-shower',
      category: 'RENOVATIONS',
      title: 'Full Height Calacatta Marble Wet Room',
      location: 'Hyde Park, Sandton',
      desc: 'Master bathroom overhaul with bookmatched Calacatta marble porcelain slabs, floating shower bench, recessed shampoo niches, and frameless glass door.',
      spec: 'Floor-to-Ceiling Slabs • Floating Bench • Frameless Glass',
      imageUrl: '/projects/mathex-work-15.jpg',
    },
    {
      id: 'modern-vanity',
      category: 'RENOVATIONS',
      title: 'Contemporary Floating Vanity & Black Tapware',
      location: 'Bedfordview, Johannesburg',
      desc: 'Custom wall-hung vanity installation with composite quartz countertops, matte black vessel mixer, backlit LED mirror cabinet, and marble slab walls.',
      spec: 'Matte Black Fixtures • Backlit Mirror • Floating Basin',
      imageUrl: '/projects/mathex-work-09.jpg',
    },
  ];

  const filteredProjects = clientProjects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-surface py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant/40 rounded-full text-xs font-label-mono text-secondary">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span>AUTHENTIC CRAFTSMANSHIP &bull; 100% REAL CLIENT WORK</span>
            </div>

            <h1 className="font-display-hero text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-on-surface font-bold leading-tight">
              Luxury House Building, <br />
              <span className="text-primary-container">Home Renovations</span> &amp; <br />
              Expert Plumbing
            </h1>

            <p className="font-body-md text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              We turn ambitious architectural plans into beautifully finished homes. From ground-up luxury residences and designer master bathrooms to water backup systems and structural foundations across Johannesburg and Gauteng.
            </p>

            {/* Clear Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-xs sm:text-sm uppercase font-bold flex items-center gap-2 rounded shadow-lg transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Get a Free Quote</span>
              </Link>
              <Link
                href="/services#estimator"
                className="px-6 py-3.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/50 text-on-surface font-label-caps text-xs sm:text-sm uppercase font-bold flex items-center gap-2 rounded transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">calculate</span>
                <span>Estimate Your Costs</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-outline-variant/20">
              <div>
                <div className="font-headline-sm text-lg font-bold text-primary-container">NHBRC</div>
                <div className="font-body-sm text-xs text-on-surface-variant">Reg #30002841</div>
              </div>
              <div>
                <div className="font-headline-sm text-lg font-bold text-on-surface">CIDB 9GB/CE</div>
                <div className="font-body-sm text-xs text-on-surface-variant">Top National Rating</div>
              </div>
              <div>
                <div className="font-headline-sm text-lg font-bold text-secondary">10 Years</div>
                <div className="font-body-sm text-xs text-on-surface-variant">Structural Guarantee</div>
              </div>
              <div>
                <div className="font-headline-sm text-lg font-bold text-primary-container">100% Real</div>
                <div className="font-body-sm text-xs text-on-surface-variant">Client Projects</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card - Real Client Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-outline-variant/30 aspect-[4/3] lg:aspect-[1/1] bg-surface-container-low group">
              <img
                src="/projects/mathex-work-14.jpg"
                alt="Bespoke floating marble staircase built by Mathex Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>

              <div className="absolute bottom-5 left-5 right-5 bg-surface/90 backdrop-blur-md p-4 rounded border border-outline-variant/30 space-y-1">
                <div className="flex items-center justify-between text-xs font-label-mono">
                  <span className="text-primary-container font-bold">REAL CLIENT PROJECT</span>
                  <span className="text-secondary font-bold">MEYERSDAL ECO ESTATE</span>
                </div>
                <p className="text-sm font-body-sm text-on-surface leading-snug">
                  Floating cantilevered zigzag marble staircase with double-volume glass curtain facade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full bg-surface-container-lowest py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-mono text-xs text-secondary uppercase font-bold">
                // WHAT WE DELIVER
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl uppercase font-bold text-on-surface mt-1">
                Our Core Building Services
              </h2>
            </div>
            <p className="font-body-sm text-sm text-on-surface-variant max-w-md">
              Complete residential building, renovations, and engineering tailored to homeowners and property developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low p-6 rounded border border-outline-variant/30 flex flex-col justify-between hover:border-primary-container transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary-container/10 rounded flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                  </div>
                  <span className="inline-block px-2 py-0.5 bg-surface-container text-[11px] font-label-mono text-secondary rounded">
                    {item.badge}
                  </span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface uppercase">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-outline-variant/20">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-label-caps uppercase font-bold text-primary-container hover:underline"
                  >
                    <span>Learn More &amp; Pricing</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Real Projects Showcase */}
      <section className="w-full bg-surface py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-mono text-xs text-primary-container uppercase font-bold">
                // AUTHENTIC CLIENT WORK
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl uppercase font-bold text-on-surface mt-1">
                Featured Completed Projects
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 font-label-mono text-xs">
              {[
                { id: 'ALL', label: 'All Projects' },
                { id: 'HOMES', label: 'Luxury Homes' },
                { id: 'RENOVATIONS', label: 'Renovations' },
                { id: 'PLUMBING', label: 'Plumbing & Water' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded transition-colors uppercase ${
                    activeFilter === tab.id
                      ? 'bg-primary-container text-on-primary-container font-bold'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-surface-container-low rounded border border-outline-variant/30 overflow-hidden shadow-lg group hover:border-primary-container transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 bg-surface-container overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-1 text-[11px] font-label-mono text-primary-container rounded">
                      {p.location}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface uppercase leading-snug">
                      {p.title}
                    </h3>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-outline-variant/20 mt-4">
                  <div className="pt-3 flex items-center justify-between text-xs font-label-mono text-secondary">
                    <span className="truncate max-w-[200px]">{p.spec}</span>
                    <Link href="/portfolio" className="text-primary-container hover:underline uppercase shrink-0">
                      View Work &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-high hover:bg-surface-container border border-outline-variant/50 text-on-surface font-label-caps text-xs uppercase font-bold rounded transition-colors"
            >
              <span>View All 40+ Real Project Photos</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Real On-Site Craftsmanship Feature */}
      <section className="w-full bg-surface-container-lowest py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="font-label-mono text-xs text-secondary uppercase font-bold">
              // BEHIND THE SCENES
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl font-bold uppercase text-on-surface leading-tight">
              Precision Engineering &amp; On-Site Craftsmanship
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              True quality is measured by what lies beneath the surface. From rough-in copper plumbing chases and concealed Geberit cisterns to laser-calibrated underfloor heating and millimeter tile leveling, our team takes pride in every detail.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container text-xl mt-0.5">check_circle</span>
                <div>
                  <strong className="text-on-surface text-sm block">SABS Copper Piping &amp; Concealed Plumbing</strong>
                  <span className="text-xs text-on-surface-variant">Pressure-tested to ensure zero wall dampness and decades of leak-free reliability.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container text-xl mt-0.5">check_circle</span>
                <div>
                  <strong className="text-on-surface text-sm block">Underfloor Heating Monitoring</strong>
                  <span className="text-xs text-on-surface-variant">Continuously tested with Klima Guard monitors throughout the screeding and tiling process.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container text-xl mt-0.5">check_circle</span>
                <div>
                  <strong className="text-on-surface text-sm block">Laser Leveling &amp; Large Format Porcelain</strong>
                  <span className="text-xs text-on-surface-variant">Calibrated precision leveling clips guarantee perfectly flat, lippage-free floors and walls.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-xs uppercase font-bold rounded"
              >
                <span>See Renovation Progress Photos</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Before & In-Progress Photo Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded overflow-hidden shadow-lg border border-outline-variant/30 h-48 bg-surface-container">
                <img
                  src="/projects/mathex-work-39.jpg"
                  alt="Rough-in copper plumbing and concealed cistern installation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-surface/90 px-2 py-0.5 text-[10px] font-label-mono text-primary-container rounded">
                  ROUGH-IN PLUMBING
                </div>
              </div>
              <div className="relative rounded overflow-hidden shadow-lg border border-outline-variant/30 h-60 bg-surface-container">
                <img
                  src="/projects/mathex-work-35.jpg"
                  alt="Precision tiling tools and laser level calibration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-surface/90 px-2 py-0.5 text-[10px] font-label-mono text-secondary rounded">
                  PRECISION TILING TOOLS
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative rounded overflow-hidden shadow-lg border border-outline-variant/30 h-60 bg-surface-container">
                <img
                  src="/projects/mathex-work-34.jpg"
                  alt="Underfloor heating testing with Klima Guard monitor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-surface/90 px-2 py-0.5 text-[10px] font-label-mono text-primary-container rounded">
                  UNDERFLOOR HEATING TEST
                </div>
              </div>
              <div className="relative rounded overflow-hidden shadow-lg border border-outline-variant/30 h-48 bg-surface-container">
                <img
                  src="/projects/mathex-work-08.jpg"
                  alt="Finished luxury sage green vanity with gold tapware"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-surface/90 px-2 py-0.5 text-[10px] font-label-mono text-on-surface rounded">
                  FINISHED MASTER BATH
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple 4-Step Client Workflow */}
      <section className="w-full bg-surface py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-label-mono text-xs text-primary-container uppercase font-bold">
              // SIMPLE &amp; TRANSPARENT
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl font-bold uppercase text-on-surface">
              How We Build Your Project
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant">
              From our first site visit to the moment you walk through the front door, we keep your build simple, organized, and on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-low p-6 rounded border border-outline-variant/30 space-y-3">
              <div className="font-headline-lg text-3xl font-bold text-primary-container">01</div>
              <h4 className="font-headline-sm text-base font-bold text-on-surface uppercase">
                Consultation &amp; Plans
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                We meet on site or review your architectural drawings to establish your requirements and specifications.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 rounded border border-outline-variant/30 space-y-3">
              <div className="font-headline-lg text-3xl font-bold text-secondary">02</div>
              <h4 className="font-headline-sm text-base font-bold text-on-surface uppercase">
                Fixed-Price Quote
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                You receive a detailed bill of quantities with clear milestones and zero hidden costs.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 rounded border border-outline-variant/30 space-y-3">
              <div className="font-headline-lg text-3xl font-bold text-primary-container">03</div>
              <h4 className="font-headline-sm text-base font-bold text-on-surface uppercase">
                Construction &amp; Updates
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Our master artisans build under full engineer oversight with weekly progress reports sent directly to you.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 rounded border border-outline-variant/30 space-y-3">
              <div className="font-headline-lg text-3xl font-bold text-secondary">04</div>
              <h4 className="font-headline-sm text-base font-bold text-on-surface uppercase">
                Handover &amp; Warranty
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Thorough inspection walkthrough, municipal and NHBRC certificates of compliance, and your keys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="w-full bg-surface-container-lowest py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-surface-container-low border border-outline-variant/30 p-8 sm:p-12 rounded-lg shadow-2xl text-center space-y-6">
          <span className="font-label-mono text-xs text-primary-container uppercase font-bold tracking-wider">
            READY TO START YOUR BUILD OR RENOVATION?
          </span>
          <h2 className="font-headline-xl text-2xl sm:text-4xl uppercase font-bold text-on-surface max-w-2xl mx-auto leading-tight">
            Schedule a Consultation with Mathex Project Today
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Call us directly or send through your project brief. We will arrange a free site evaluation and supply a comprehensive quotation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-sm uppercase font-bold rounded shadow-lg transition-all"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+27118924000"
              className="px-8 py-3.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/50 text-on-surface font-label-caps text-sm uppercase font-bold rounded transition-all"
            >
              Call +27 (0) 11 892 4000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
