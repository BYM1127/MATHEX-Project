'use client';

import { useState, useId } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const footprintInputId = useId();
  const engineeringCertId = useId();

  // Interactive Estimator State
  const [serviceType, setServiceType] = useState<'residential' | 'renovation' | 'plumbing' | 'civil'>('residential');
  const [footprint, setFootprint] = useState<number>(350);
  const [siteCondition, setSiteCondition] = useState<'standard' | 'sloped' | 'dolomite'>('standard');
  const [includeCert, setIncludeCert] = useState<boolean>(true);

  // Calculation parameters
  const serviceDetails: Record<string, { label: string; name: string; baseRate: number }> = {
    residential: { label: 'New Luxury Home Build', name: 'Luxury Ground-Up Home Construction', baseRate: 16500 },
    renovation: { label: 'Home Renovation & Extension', name: 'High-End Renovation & Structural Alteration', baseRate: 18200 },
    plumbing: { label: 'Plumbing & Water Reticulation', name: 'Advanced Plumbing, Drainage & Water Systems', baseRate: 14000 },
    civil: { label: 'Foundations & Civil Works', name: 'Engineered Foundations, Rafts & Retaining Walls', baseRate: 13500 },
  };

  const conditionFactors: Record<string, { label: string; factor: number }> = {
    standard: { label: 'Standard Level Ground', factor: 1.0 },
    sloped: { label: 'Sloped Plot / Hard Rock', factor: 1.12 },
    dolomite: { label: 'Challenging / Dolomitic Soil', factor: 1.25 },
  };

  const currentService = serviceDetails[serviceType];
  const currentCondition = conditionFactors[siteCondition];
  const certFactor = includeCert ? 1.05 : 1.0;

  const calculatedRatePerSqm = Math.round(currentService.baseRate * currentCondition.factor * certFactor);
  const totalContract = Math.round(calculatedRatePerSqm * footprint);

  // Itemized breakdown
  const materials = Math.round(totalContract * 0.52);
  const labourConstruction = Math.round(totalContract * 0.28);
  const engineeringPlans = Math.round(totalContract * 0.14);
  const complianceWarranty = totalContract - (materials + labourConstruction + engineeringPlans);

  return (
    <div className="flex flex-col w-full">
      {/* Top Reassurance Ribbon */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-3 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-mono text-xs">
          <div className="flex items-center gap-space-md">
            <span className="text-primary-container font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              RESIDENTIAL &amp; CIVIL SERVICES
            </span>
            <span className="hidden sm:inline text-outline-variant">|</span>
            <span className="hidden sm:inline">NHBRC &amp; SANS 10400 COMPLIANT</span>
          </div>
          <div className="flex items-center gap-space-md text-secondary">
            <span>FULL 10-YEAR STRUCTURAL GUARANTEE</span>
          </div>
        </div>
      </section>

      {/* Hero Header */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant/30 text-primary-container font-label-mono text-xs rounded-full">
              <span>EXPERT BUILDING CONTRACTORS &bull; GAUTENG</span>
            </div>
            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-on-surface font-bold leading-tight">
              Construction, Renovations &amp; <br />
              <span className="text-primary-container">Engineering Services</span>
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              We make building or renovating your home straightforward, transparent, and stress-free. From ground-up luxury houses to complete home remodels, plumbing infrastructure, and foundation engineering, we deliver flawless results on time and within budget.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#estimator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-xs uppercase font-bold transition-all shadow-md rounded-sm"
              >
                <span className="material-symbols-outlined text-lg">calculate</span>
                <span>Estimate Your Project Cost</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-caps text-xs uppercase font-bold transition-all rounded-sm"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Speak With a Builder</span>
              </Link>
            </div>
          </div>

          {/* Quick Client Benefits Card */}
          <div className="lg:col-span-4 bg-surface-container-low border border-outline-variant/30 p-6 space-y-4 shadow-xl rounded-sm">
            <h3 className="font-headline-sm text-sm uppercase text-primary-container font-bold tracking-wider">
              Why Clients Choose Mathex
            </h3>
            <div className="space-y-3 font-body-sm text-xs sm:text-sm text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">verified_user</span>
                <div>
                  <strong className="text-on-surface block">NHBRC Enrolled &amp; Insured</strong>
                  Full 10-year structural warranty on all residential builds.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">attach_money</span>
                <div>
                  <strong className="text-on-surface block">Fixed-Price Quotes</strong>
                  Transparent, comprehensive bills of quantities with zero surprises.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">engineering</span>
                <div>
                  <strong className="text-on-surface block">Qualified Professional Engineers</strong>
                  ECSA-registered civil engineers overseeing every foundation and slab.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">schedule</span>
                <div>
                  <strong className="text-on-surface block">Strict Milestones &amp; Timelines</strong>
                  Dedicated project managers keeping your build on schedule.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core 4 Services */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-16 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-label-mono text-xs text-primary-container uppercase tracking-wider">
              COMPREHENSIVE BUILDING SOLUTIONS
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-on-surface">
              Our Core Services
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Whether you are planning a dream home, expanding your existing living space, or need certified plumbing and civil solutions, we have the in-house team to deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between rounded-sm">
              <div className="space-y-4">
                <div className="relative w-full h-56 bg-surface-container overflow-hidden rounded-sm">
                  <img
                    src="/projects/mathex-work-14.jpg"
                    alt="Luxury Home Building by Mathex Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-primary-container font-bold">
                    SERVICE 01 // RESIDENTIAL
                  </div>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface uppercase">
                  Luxury Home Building &amp; Turnkey Construction
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  Bespoke architectural home building from initial site excavation to final handover. We coordinate foundations, reinforced concrete frames, masonry, roofing, and luxury interior finishes.
                </p>
                <div className="space-y-1.5 font-body-sm text-xs text-on-surface-variant bg-surface-container p-4 border border-outline-variant/30 rounded-sm">
                  <div className="text-primary-container font-bold font-label-caps uppercase text-[11px] mb-1">
                    What We Deliver:
                  </div>
                  <div>&bull; Turnkey project delivery from plan approval to key handover</div>
                  <div>&bull; Reinforced concrete slabs, cantilevers, and structural brickwork</div>
                  <div>&bull; Full NHBRC enrollment and 10-year structural warranty</div>
                  <div>&bull; High-spec glazing, architectural roofing, and bespoke joinery</div>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between border-t border-outline-variant/20">
                <span className="font-label-mono text-xs text-secondary font-medium">Turnkey: 6 - 12 Months</span>
                <Link
                  href="/contact?service=residential"
                  className="text-primary-container font-label-caps text-xs uppercase font-bold hover:underline flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between rounded-sm">
              <div className="space-y-4">
                <div className="relative w-full h-56 bg-surface-container overflow-hidden rounded-sm">
                  <img
                    src="/projects/mathex-work-40.jpg"
                    alt="Luxury Home Renovations by Mathex Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-secondary font-bold">
                    SERVICE 02 // ALTERATIONS
                  </div>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface uppercase">
                  Major Home Renovations &amp; Extensions
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  Transform your existing home into a modern architectural masterpiece. We handle structural wall removals, second-storey additions, modern open-plan reconfigurations, and luxury expansions.
                </p>
                <div className="space-y-1.5 font-body-sm text-xs text-on-surface-variant bg-surface-container p-4 border border-outline-variant/30 rounded-sm">
                  <div className="text-secondary font-bold font-label-caps uppercase text-[11px] mb-1">
                    What We Deliver:
                  </div>
                  <div>&bull; Engineered steel portal beams for seamless open-plan living</div>
                  <div>&bull; Second-storey additions with reinforced load transfers</div>
                  <div>&bull; Complete kitchen, bathroom, and outdoor living transformations</div>
                  <div>&bull; Dust-managed, phased construction minimizing lifestyle disruption</div>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between border-t border-outline-variant/20">
                <span className="font-label-mono text-xs text-secondary font-medium">Timeline: 2 - 4 Months</span>
                <Link
                  href="/contact?service=renovation"
                  className="text-primary-container font-label-caps text-xs uppercase font-bold hover:underline flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between rounded-sm">
              <div className="space-y-4">
                <div className="relative w-full h-56 bg-surface-container overflow-hidden rounded-sm">
                  <img
                    src="/projects/mathex-work-25.jpg"
                    alt="Plumbing & Drainage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-primary-container font-bold">
                    SERVICE 03 // PLUMBING &amp; WATER
                  </div>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface uppercase">
                  Advanced Plumbing, Drainage &amp; Water Systems
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  Full sanitary engineering, stormwater management, and domestic water reticulation. We install energy-efficient solar geysers, rainwater harvesting tanks, booster pumps, and zero-leak pipework.
                </p>
                <div className="space-y-1.5 font-body-sm text-xs text-on-surface-variant bg-surface-container p-4 border border-outline-variant/30 rounded-sm">
                  <div className="text-primary-container font-bold font-label-caps uppercase text-[11px] mb-1">
                    What We Deliver:
                  </div>
                  <div>&bull; SANS 10252 compliant high-pressure water reticulation</div>
                  <div>&bull; Solar geysers, heat pumps &amp; energy-efficient hot water systems</div>
                  <div>&bull; Backup municipal water tanks &amp; pressure-controlled booster pumps</div>
                  <div>&bull; Complete PIRB Plumbing Certificates of Compliance (CoC)</div>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between border-t border-outline-variant/20">
                <span className="font-label-mono text-xs text-secondary font-medium">Timeline: 2 - 6 Weeks</span>
                <Link
                  href="/contact?service=plumbing"
                  className="text-primary-container font-label-caps text-xs uppercase font-bold hover:underline flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between rounded-sm">
              <div className="space-y-4">
                <div className="relative w-full h-56 bg-surface-container overflow-hidden rounded-sm">
                  <img
                    src="/projects/mathex-work-22.jpg"
                    alt="Civil Engineering & Foundations"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-secondary font-bold">
                    SERVICE 04 // CIVIL &amp; FOUNDATIONS
                  </div>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface uppercase">
                  Civil Engineering, Raft Foundations &amp; Retaining Walls
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  Specialized substructure engineering designed specifically for South African soil conditions. We engineer raft foundations, soil stabilization, dolomitic mitigation, and reinforced concrete retaining walls.
                </p>
                <div className="space-y-1.5 font-body-sm text-xs text-on-surface-variant bg-surface-container p-4 border border-outline-variant/30 rounded-sm">
                  <div className="text-secondary font-bold font-label-caps uppercase text-[11px] mb-1">
                    What We Deliver:
                  </div>
                  <div>&bull; Geotechnical ground assessments and raft foundation designs</div>
                  <div>&bull; Dolomite D3 soil risk mitigation compliant with SANS 1936</div>
                  <div>&bull; Heavy structural concrete retaining walls for sloped sites</div>
                  <div>&bull; ECSA Professional Engineer certification and sign-off</div>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between border-t border-outline-variant/20">
                <span className="font-label-mono text-xs text-secondary font-medium">Timeline: 4 - 8 Weeks</span>
                <Link
                  href="/contact?service=civil"
                  className="text-primary-container font-label-caps text-xs uppercase font-bold hover:underline flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Cost Estimator */}
      <section id="estimator" className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-mono text-xs text-primary-container uppercase tracking-wider">
                TRANSPARENT PRICING TOOL
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-on-surface">
                Instant Project Cost Estimator
              </h2>
            </div>
            <div className="font-label-mono text-xs text-secondary font-bold">
              ESTIMATED WITHIN &plusmn; 5% OF MARKET TENDER RATES
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/30 p-6 sm:p-8 space-y-6 shadow-xl rounded-sm">
              {/* 1. Service Type */}
              <div className="space-y-3">
                <span className="font-label-mono text-xs text-secondary uppercase font-bold block">
                  1. Choose Your Project Type
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(Object.keys(serviceDetails) as Array<keyof typeof serviceDetails>).map((key) => {
                    const item = serviceDetails[key];
                    const isSelected = serviceType === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setServiceType(key as 'residential' | 'renovation' | 'plumbing' | 'civil')}
                        className={`p-3.5 text-left border transition-all rounded-sm text-xs font-label-mono ${
                          isSelected
                            ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                            : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Footprint Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center font-label-mono text-xs">
                  <label htmlFor={footprintInputId} className="text-secondary uppercase font-bold">
                    2. Estimated Floor Area / Footprint
                  </label>
                  <span className="text-primary-container font-bold text-base">
                    {footprint.toLocaleString()} m&sup2;
                  </span>
                </div>
                <input
                  id={footprintInputId}
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={footprint}
                  onChange={(e) => setFootprint(Number(e.target.value))}
                  className="w-full h-2.5 bg-surface-container-highest rounded-full accent-primary-container cursor-pointer"
                />
                <div className="flex justify-between font-label-mono text-[11px] text-on-surface-variant/80">
                  <button type="button" onClick={() => setFootprint(150)} className="hover:text-primary-container">
                    150 m&sup2; (Townhouse)
                  </button>
                  <button type="button" onClick={() => setFootprint(350)} className="hover:text-primary-container">
                    350 m&sup2; (Standard Home)
                  </button>
                  <button type="button" onClick={() => setFootprint(750)} className="hover:text-primary-container">
                    750 m&sup2; (Luxury Residence)
                  </button>
                </div>
              </div>

              {/* 3. Site Condition */}
              <div className="space-y-3">
                <span className="font-label-mono text-xs text-secondary uppercase font-bold block">
                  3. Plot Terrain &amp; Soil Condition
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(Object.keys(conditionFactors) as Array<keyof typeof conditionFactors>).map((key) => {
                    const item = conditionFactors[key];
                    const isSelected = siteCondition === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSiteCondition(key as 'standard' | 'sloped' | 'dolomite')}
                        className={`p-3 text-center border font-label-mono text-xs transition-all rounded-sm ${
                          isSelected
                            ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                            : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Engineering Toggle */}
              <div className="flex items-center justify-between p-4 bg-surface-container border border-outline-variant/30 rounded-sm">
                <label htmlFor={engineeringCertId} className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm text-on-surface">
                  <input
                    id={engineeringCertId}
                    type="checkbox"
                    checked={includeCert}
                    onChange={(e) => setIncludeCert(e.target.checked)}
                    className="accent-primary-container w-4 h-4 cursor-pointer rounded"
                  />
                  <span>Include ECSA Structural Engineer sign-offs and NHBRC warranty enrollment</span>
                </label>
                <span className="font-label-mono text-[10px] text-primary-container bg-primary-container/10 px-2 py-0.5 border border-primary-container/30 uppercase">
                  Recommended
                </span>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-surface-container-low border-2 border-primary-container p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6 rounded-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant/30 font-label-mono text-xs">
                  <span className="text-secondary font-bold uppercase">Estimated Project Budget</span>
                  <span className="text-on-surface-variant">30-Day Rate Guarantee</span>
                </div>

                <div className="font-label-caps text-xs text-primary-container uppercase tracking-wide">
                  Selected Scope: <br />
                  <span className="text-on-surface font-bold text-sm">{currentService.name}</span>
                </div>

                {/* Line Items */}
                <div className="space-y-2 pt-1 font-label-mono text-xs">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Quality Materials &amp; Fixtures (52%):</span>
                    <span className="text-on-surface font-semibold">R {materials.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Skilled Construction &amp; Artisans (28%):</span>
                    <span className="text-on-surface font-semibold">R {labourConstruction.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Architectural &amp; Structural Engineering (14%):</span>
                    <span className="text-on-surface font-semibold">R {engineeringPlans.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Council Approvals &amp; NHBRC Warranty (6%):</span>
                    <span className="text-on-surface font-semibold">R {complianceWarranty.toLocaleString()}</span>
                  </div>
                </div>

                {/* Big Total Box */}
                <div className="bg-surface-container p-5 border border-outline-variant/40 mt-4 space-y-1.5 rounded-sm">
                  <div className="font-label-mono text-[11px] text-secondary uppercase tracking-wider font-semibold">
                    ESTIMATED TOTAL INVESTMENT:
                  </div>
                  <div className="font-metric-numeral text-3xl sm:text-4xl text-primary-container font-bold">
                    R {totalContract.toLocaleString()}
                  </div>
                  <div className="font-label-mono text-xs text-on-surface-variant">
                    approx. R {calculatedRatePerSqm.toLocaleString()} per m&sup2; (all-inclusive)
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <Link
                  href={`/contact?service=${serviceType}&footprint=${footprint}&budget=${totalContract}`}
                  className="w-full py-3.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-xs uppercase font-bold flex items-center justify-center gap-2 shadow-lg transition-all rounded-sm"
                >
                  <span className="material-symbols-outlined text-lg">description</span>
                  <span>Request Official Itemized Quotation</span>
                </Link>
                <p className="font-label-mono text-[11px] text-on-surface-variant/70 text-center">
                  Based on current Gauteng residential market rates. Formal quote issued upon site inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Working Process */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-16 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-label-mono text-xs text-primary-container uppercase tracking-wider">
              HOW WE WORK TOGETHER
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-on-surface">
              Our 4-Step Client Journey
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              From our first conversation to final handover, you enjoy complete clarity, dedicated support, and total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 space-y-3 shadow-md rounded-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-2xl font-bold text-primary-container">01</span>
                <span className="material-symbols-outlined text-primary-container text-2xl">handshake</span>
              </div>
              <h4 className="font-headline-sm text-base uppercase font-bold text-on-surface">
                Consultation &amp; Site Assessment
              </h4>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                We meet with you on site or review your architectural plans, discuss your vision and budget, and inspect ground conditions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 space-y-3 shadow-md rounded-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-2xl font-bold text-secondary">02</span>
                <span className="material-symbols-outlined text-secondary text-2xl">request_quote</span>
              </div>
              <h4 className="font-headline-sm text-base uppercase font-bold text-on-surface">
                Detailed Plans &amp; Fixed-Price Quote
              </h4>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                You receive a transparent bill of quantities, clear construction milestones, and a guaranteed fixed-price contract.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 space-y-3 shadow-md rounded-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-2xl font-bold text-primary-container">03</span>
                <span className="material-symbols-outlined text-primary-container text-2xl">construction</span>
              </div>
              <h4 className="font-headline-sm text-base uppercase font-bold text-on-surface">
                Precision Construction &amp; Updates
              </h4>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Our artisans build with craftsmanship and care. Your dedicated project manager provides weekly photo and progress updates.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-6 space-y-3 shadow-md rounded-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-2xl font-bold text-secondary">04</span>
                <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
              </div>
              <h4 className="font-headline-sm text-base uppercase font-bold text-on-surface">
                Final Inspection &amp; Handover
              </h4>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                We complete a thorough snag-free walkthrough and hand over your keys along with all NHBRC, municipal, and plumbing certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Call to Action */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-16 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto bg-surface-container-low border border-outline-variant/30 p-8 sm:p-12 shadow-2xl rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-label-mono text-xs text-primary-container uppercase tracking-wider font-semibold">
                READY TO START YOUR BUILD?
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl font-bold text-on-surface uppercase">
                Let&apos;s Build Something Extraordinary Together
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Connect directly with our senior construction managers. We will review your preliminary ideas or architectural drawings and supply an obligation-free consultation within 24 hours.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary-container text-on-primary-container font-label-caps text-xs uppercase font-bold hover:bg-secondary-fixed transition-colors shadow-md rounded-sm"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-caps text-xs uppercase font-bold hover:text-primary-container transition-colors rounded-sm"
                >
                  View Completed Projects
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container p-6 border border-outline-variant/30 space-y-3 font-label-mono text-xs text-on-surface-variant rounded-sm">
              <div className="text-secondary font-bold uppercase tracking-wider">Direct Project Desk</div>
              <div className="text-on-surface font-semibold text-sm">info@mathexproject.co.za</div>
              <div className="text-on-surface font-semibold text-sm">+27 (0) 11 892 4000</div>
              <div className="text-primary-container pt-1 text-[11px]">
                NHBRC REGISTERED &bull; CIDB 9GB / 9CE
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
