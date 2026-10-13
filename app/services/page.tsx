'use client';

import { useState, useId } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const footprintInputId = useId();
  const ecsaTestingId = useId();
  // Interactive Estimator State
  const [discipline, setDiscipline] = useState<'residential' | 'alteration' | 'hydraulics' | 'roof'>('residential');
  const [footprint, setFootprint] = useState<number>(450);
  const [complexity, setComplexity] = useState<'class-1' | 'class-2' | 'class-3'>('class-2');
  const [includeTesting, setIncludeTesting] = useState<boolean>(true);

  // Calculation parameters matching mock
  const disciplineDetails: Record<string, { label: string; factor: number }> = {
    residential: { label: 'RESIDENTIAL ARCHITECTURE & GROUND-UP BUILD', factor: 1.0 },
    alteration: { label: 'LUXURY RENOVATION & STRUCTURAL ALTERATION', factor: 1.15 },
    hydraulics: { label: 'COMMERCIAL FLUID RETICULATION & HYDRONICS', factor: 0.94 },
    roof: { label: 'HEAVY ENVELOPE & ROOFING ARCHITECTURE', factor: 0.88 },
  };

  const complexityDetails: Record<string, { label: string; factor: number }> = {
    'class-1': { label: 'CLASS 1: STABLE ROCK', factor: 0.88 },
    'class-2': { label: 'CLASS 2: EXPANSIVE CLAY', factor: 1.0 },
    'class-3': { label: 'CLASS 3: DOLOMITIC D3 SOIL', factor: 1.24 },
  };

  const baseRate = 17110;
  const currentDiscipline = disciplineDetails[discipline];
  const currentComplexity = complexityDetails[complexity];
  const testingFactor = includeTesting ? 1.05 : 0.98;

  const calculatedRatePerSqm = Math.round(baseRate * currentDiscipline.factor * currentComplexity.factor * (testingFactor / 1.05));
  const totalContract = Math.round(calculatedRatePerSqm * footprint);

  const directMaterials = Math.round(totalContract * 0.5436);
  const heavyPlant = Math.round(totalContract * 0.2301);
  const forensicEng = Math.round(totalContract * 0.1543);
  const sheq = totalContract - (directMaterials + heavyPlant + forensicEng);

  return (
    <div className="flex flex-col w-full">
      {/* Top Telemetry Strip */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-sm border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-mono text-label-mono">
          <div className="flex items-center gap-space-md">
            <span className="text-primary-container font-bold">// CIVIL/DISCIPLINE SCOPE</span>
            <span className="text-on-surface-variant/60">REVISION 2024.4</span>
            <span className="hidden md:inline text-outline-variant">|</span>
            <span className="hidden md:inline">SPEC: SANS 10400-A / ECSA CERT</span>
          </div>
          <div className="flex items-center gap-space-xs text-secondary">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>ACTIVE PROJECTS: 04 DISCIPLINE STACKS</span>
          </div>
        </div>
      </section>

      {/* Hero Header */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="flex items-center gap-space-xs text-secondary font-label-mono text-label-mono tracking-widest uppercase">
              <span>// STRUCTURAL INTEGRITY SERVICES</span>
            </div>
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero uppercase tracking-tight text-on-surface leading-none font-bold">
              ENGINEERING &amp; <br />
              ARCHITECTURAL <br />
              <span className="text-primary-container">DISCIPLINES</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              High-spec technical execution spanning heavy structural post-tensioning, forensic underpinning, closed-loop hydraulic manifolds, and heavy architectural envelope membranes across Sub-Saharan topography.
            </p>
          </div>

          <div className="lg:col-span-4 bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-xl font-label-mono">
            <div className="flex justify-between items-center text-[11px] pb-1 border-b border-outline-variant/30">
              <span className="text-on-surface font-bold">DISCHARGE RATE: 24.37 m³/s</span>
              <span className="text-primary-container font-bold">± 0.00%</span>
            </div>
            <div className="space-y-1 text-[11px] text-on-surface-variant pt-1">
              <div className="flex justify-between">
                <span>MAX FOUNDATION LOAD:</span>
                <span className="text-on-surface font-bold">3200 kN/m²</span>
              </div>
              <div className="flex justify-between">
                <span>POST-TENSION ACCURACY:</span>
                <span className="text-secondary font-bold">&lt; 0.75mm</span>
              </div>
              <div className="flex justify-between">
                <span>SEI CAPACITY RATING:</span>
                <span className="text-primary-container font-bold">1.84k PRESSURE</span>
              </div>
            </div>
            <div className="w-full bg-surface-container-lowest h-1.5 overflow-hidden mt-2">
              <div className="bg-primary-container h-full w-[94%]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operational Scopes */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-xl border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-secondary uppercase">
                // SPECIFICATION DIRECTORY
              </span>
              <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
                CORE OPERATIONAL SCOPES
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Zero-tolerance execution profiles synced with material specifications. All ECSA tolerances and scheduled assessment metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Scope 1 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md shadow-xl flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=1200&q=80"
                    alt="Residential Architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-primary-container">
                    DISCIPLINE // 01 :: CIDB 9GB / GRADE A
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
                  RESIDENTIAL ARCHITECTURE &amp; GROUND-UP BUILDS
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Monolithic execution for luxury residential commissions, architectural cantilevers, and bespoke low-vibration substructures.
                </p>
                <div className="space-y-1 font-body-sm text-[12px] text-on-surface-variant bg-surface-container p-space-sm border border-outline-variant/30">
                  <div className="text-secondary font-bold font-label-caps uppercase text-[10px]">
                    SCOPE DELIVERABLES:
                  </div>
                  <div>• Off-shutter formwork and high-density rebar post-tensioning</div>
                  <div>• Deflection-free multi-story cantilevers without ground columns</div>
                  <div>• Automated heavy-gauge structural portal trusses &amp; frames</div>
                </div>
              </div>
              <div className="pt-space-xs flex justify-between font-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>MATERIAL: <strong className="text-on-surface">C35/45 Slag // 350WA</strong></span>
                <span className="text-primary-container">14 - 18 WEEKS MOBIL</span>
              </div>
            </div>

            {/* Scope 2 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md shadow-xl flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                    alt="Luxury Renovations"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-secondary">
                    DISCIPLINE // 02 :: FORENSIC ALTERATIONS
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
                  LUXURY RENOVATIONS &amp; STRUCTURAL ALTERATIONS
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Precision surgical interventions and load transfers on expressive residential extensions and high-value real estate assets.
                </p>
                <div className="space-y-1 font-body-sm text-[12px] text-on-surface-variant bg-surface-container p-space-sm border border-outline-variant/30">
                  <div className="text-secondary font-bold font-label-caps uppercase text-[10px]">
                    SCOPE DELIVERABLES:
                  </div>
                  <div>• Hydraulic needle-beam underpinning &amp; foundation deepening</div>
                  <div>• Load-reversal portal installations (zero ceiling sag)</div>
                  <div>• Engineered false-floor tensioned continuous balcony outriggers</div>
                </div>
              </div>
              <div className="pt-space-xs flex justify-between font-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>MATERIAL: <strong className="text-on-surface">Carbon Fiber Wraps // HD Cols</strong></span>
                <span className="text-secondary">08 - 12 WEEKS MOBIL</span>
              </div>
            </div>

            {/* Scope 3 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md shadow-xl flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="Fluid Dynamics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-primary-container">
                    DISCIPLINE // 03 :: HYDRAULIC DYNAMICS
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
                  ADVANCED FLUID DYNAMICS &amp; HYDRAULIC PLUMBING
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Zero-defect pressure delivery integrated across geothermal thermal loops, circuits, and acoustic isolation manifolds.
                </p>
                <div className="space-y-1 font-body-sm text-[12px] text-on-surface-variant bg-surface-container p-space-sm border border-outline-variant/30">
                  <div className="text-secondary font-bold font-label-caps uppercase text-[10px]">
                    SCOPE DELIVERABLES:
                  </div>
                  <div>• Custom HDPE homogeneous manifold ring-line distribution</div>
                  <div>• Closed-loop industrial solar hydronic thermal arrays</div>
                  <div>• Ultrasonic pipe acoustic isolation &amp; vault reticulation</div>
                </div>
              </div>
              <div className="pt-space-xs flex justify-between font-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>MATERIAL: <strong className="text-on-surface">PN16/PN25 HDPE Reticulation</strong></span>
                <span className="text-primary-container">04 - 08 WEEKS RAPID DISP</span>
              </div>
            </div>

            {/* Scope 4 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md shadow-xl flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                    alt="Roofing Architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-secondary">
                    DISCIPLINE // 04 :: ENVELOPE TIGHTNESS
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
                  HEAVY ENVELOPE &amp; ROOFING ARCHITECTURE
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Thermal envelope integrity, concealed rainwater terminations, and high-spec structural engineered facades with zero perimeter leaks.
                </p>
                <div className="space-y-1 font-body-sm text-[12px] text-on-surface-variant bg-surface-container p-space-sm border border-outline-variant/30">
                  <div className="text-secondary font-bold font-label-caps uppercase text-[10px]">
                    SCOPE DELIVERABLES:
                  </div>
                  <div>• Double-layer APP &amp; Torch-On bitumen waterproofing</div>
                  <div>• Concealed box-gutters using 1.2mm Titanium Zinc &amp; Spring Seams</div>
                  <div>• Sub-millimeter calibrated precision parasol solar roof pedestals</div>
                </div>
              </div>
              <div className="pt-space-xs flex justify-between font-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>MATERIAL: <strong className="text-on-surface">VMZINC // 4mm APP Waterproofing</strong></span>
                <span className="text-secondary">06 - 10 WEEKS MOBIL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scope & Quantity Estimator */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-primary-container uppercase">
                // ESTIMATION ALGORITHM OP-102
              </span>
              <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
                SCOPE &amp; QUANTITY ESTIMATOR
              </h2>
            </div>
            <div className="font-label-mono text-[11px] text-secondary font-bold">
              ESTIMATION ACCURACY: ± 4% PRE-FEASIBILITY
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            {/* Left Controls */}
            <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/30 p-space-xl space-y-space-lg shadow-xl">
              {/* 1. Discipline */}
              <div className="space-y-space-xs">
                <span className="font-label-mono text-[11px] text-secondary uppercase font-bold block">
                  1. PRIMARY DISCIPLINE SELECTION (SELECT ONE)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                  <button
                    onClick={() => setDiscipline('residential')}
                    className={`p-3 text-left border transition-all font-label-mono text-[11px] ${
                      discipline === 'residential'
                        ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                        : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    01 // RESIDENTIAL (Ground-Up Build)
                  </button>
                  <button
                    onClick={() => setDiscipline('alteration')}
                    className={`p-3 text-left border transition-all font-label-mono text-[11px] ${
                      discipline === 'alteration'
                        ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                        : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    02 // ALTERATION (Structural Underpin)
                  </button>
                  <button
                    onClick={() => setDiscipline('hydraulics')}
                    className={`p-3 text-left border transition-all font-label-mono text-[11px] ${
                      discipline === 'hydraulics'
                        ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                        : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    03 // HYDRAULICS (Fluid Manifolds)
                  </button>
                  <button
                    onClick={() => setDiscipline('roof')}
                    className={`p-3 text-left border transition-all font-label-mono text-[11px] ${
                      discipline === 'roof'
                        ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                        : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    04 // ROOF &amp; ENVEL (Envelope Architecture)
                  </button>
                </div>
              </div>

              {/* 2. Footprint Slider */}
              <div className="space-y-space-xs">
                <div className="flex justify-between items-center font-label-mono text-[11px]">
                  <label htmlFor={footprintInputId} className="text-secondary uppercase font-bold">
                    2. GROSS BUILT-ON SITE FOOTPRINT AREA (M²)
                  </label>
                  <span className="text-primary-container font-bold text-[14px]">
                    {footprint.toLocaleString()} M²
                  </span>
                </div>
                <input
                  id={footprintInputId}
                  type="range"
                  min="50"
                  max="2500"
                  step="25"
                  value={footprint}
                  onChange={(e) => setFootprint(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-highest rounded-none accent-primary-container cursor-pointer"
                />
                <div className="flex justify-between font-label-mono text-[10px] text-on-surface-variant/80">
                  <button type="button" onClick={() => setFootprint(150)} className="hover:text-primary-container">
                    150 m² (Compact)
                  </button>
                  <button type="button" onClick={() => setFootprint(450)} className="hover:text-primary-container">
                    450 m² (Standard)
                  </button>
                  <button type="button" onClick={() => setFootprint(1250)} className="hover:text-primary-container">
                    1,250 m² (Commercial Estate)
                  </button>
                </div>
              </div>

              {/* 3. Complexity Tier */}
              <div className="space-y-space-xs">
                <span className="font-label-mono text-[11px] text-secondary uppercase font-bold block">
                  3. SUBSTRUCTURE &amp; GEOTECH COMPLEXITY TIER
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                  <button
                    onClick={() => setComplexity('class-1')}
                    className={`p-2.5 text-center border font-label-mono text-[11px] transition-all ${
                      complexity === 'class-1'
                        ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                        : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    CLASS 1: STABLE ROCK
                  </button>
                  <button
                    onClick={() => setComplexity('class-2')}
                    className={`p-2.5 text-center border font-label-mono text-[11px] transition-all ${
                      complexity === 'class-2'
                        ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                        : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    CLASS 2: EXPANSIVE CLAY
                  </button>
                  <button
                    onClick={() => setComplexity('class-3')}
                    className={`p-2.5 text-center border font-label-mono text-[11px] transition-all ${
                      complexity === 'class-3'
                        ? 'border-primary-container bg-primary-container text-on-primary-container font-bold shadow-md'
                        : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    CLASS 3: DOLOMITIC D3
                  </button>
                </div>
              </div>

              {/* 4. Quality Toggle */}
              <div className="flex items-center justify-between p-3 bg-surface-container border border-outline-variant/30">
                <label htmlFor={ecsaTestingId} className="flex items-center gap-2 cursor-pointer font-body-sm text-[13px] text-on-surface">
                  <input
                    id={ecsaTestingId}
                    type="checkbox"
                    checked={includeTesting}
                    onChange={(e) => setIncludeTesting(e.target.checked)}
                    className="accent-primary-container w-4 h-4 cursor-pointer"
                  />
                  <span>Include 100% SABS Rebar Testing and Foundation ECSA Oversight</span>
                </label>
                <span className="font-label-mono text-[10px] text-primary-container bg-primary-container/10 px-2 py-0.5 border border-primary-container/30">
                  ECSA FEE APPROVED
                </span>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-surface-container-low border-2 border-primary-container p-space-xl flex flex-col justify-between shadow-2xl space-y-space-md">
              <div className="space-y-space-sm">
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant/30 font-label-mono text-[11px]">
                  <span className="text-secondary font-bold">PRELIMINARY BOQ DRAFT</span>
                  <span className="text-on-surface-variant">REF: 07-2024</span>
                </div>

                <div className="font-label-caps text-[11px] text-primary-container uppercase tracking-wide">
                  TARGET CLASSIFICATION: <br />
                  <span className="text-on-surface font-bold text-[12px]">{currentDiscipline.label}</span>
                </div>

                {/* Line Items */}
                <div className="space-y-1.5 pt-space-xs font-label-mono text-[12px]">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Direct Material Procurement:</span>
                    <span className="text-on-surface">ZAR {directMaterials.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Heavy Plant &amp; Crane Allocation:</span>
                    <span className="text-on-surface">ZAR {heavyPlant.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Forensic Structural Engineering:</span>
                    <span className="text-on-surface">ZAR {forensicEng.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Health, Environmental &amp; Quality:</span>
                    <span className="text-on-surface">ZAR {sheq.toLocaleString()}</span>
                  </div>
                </div>

                {/* Big Total Box */}
                <div className="bg-surface-container p-space-md border border-outline-variant/40 mt-space-md space-y-1">
                  <div className="font-label-mono text-[10px] text-secondary uppercase tracking-widest">
                    EST. MATHEX CONTRACT COMMITMENT:
                  </div>
                  <div className="font-metric-numeral text-headline-xl lg:text-metric-numeral text-primary-container font-bold">
                    ZAR {totalContract.toLocaleString()}
                  </div>
                  <div className="font-label-mono text-[11px] text-on-surface-variant">
                    avg ZAR {calculatedRatePerSqm.toLocaleString()} / m² footprint
                  </div>
                </div>
              </div>

              <div className="pt-space-md space-y-2">
                <Link
                  href={`/contact?discipline=${discipline}&footprint=${footprint}&budget=${totalContract}`}
                  className="w-full py-3.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-label-caps uppercase font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Lock Estimate &amp; Dispatch to Procurement</span>
                </Link>
                <p className="font-label-mono text-[10px] text-on-surface-variant/70 text-center">
                  Pre-feasibility estimate based on JBCC Series 2000 indices. Valid for 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Execution Protocol */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-xl border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-label-mono text-label-mono text-secondary uppercase">
              // RIGOROUS TELEMETRY STANDARD
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
              4-STAGE EXECUTION PROTOCOL
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              From initial sub-soil ultrasound to final municipal occupation certification, every deliverable is verified against strict engineering milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Step 1 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-headline-lg font-bold text-primary-container">01</span>
                <span className="material-symbols-outlined text-primary-container text-[24px]">biotech</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                CONCEPT CAD &amp; GEOTECH FEASIBILITY
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Borehole core testing, seismic penetration profiles, and 3D point-cloud sub-soil laser modeling.
              </p>
              <div className="font-label-mono text-[10px] text-secondary border-t border-outline-variant/20 pt-1">
                DELIVERABLES: SANS 1936-1 DOLOMITE AUDIT REPORT
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-headline-lg font-bold text-secondary">02</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">architecture</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                STRUCTURAL ENGINEERING CALCS
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Finite Element analysis (FEA), shear stress modeling, post-tensioned tendon profiling, and bearing support calculations.
              </p>
              <div className="font-label-mono text-[10px] text-primary-container border-t border-outline-variant/20 pt-1">
                DELIVERABLES: ECSA FORM B APPROVED DESIGNS
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-headline-lg font-bold text-primary-container">03</span>
                <span className="material-symbols-outlined text-primary-container text-[24px]">construction</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                PRECISION BUILD &amp; FORENSIC AUDITS
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Laser-level compression shuttering, ultrasonic rebar testing, concrete compression laboratory, and daily safety logs.
              </p>
              <div className="font-label-mono text-[10px] text-secondary border-t border-outline-variant/20 pt-1">
                TOLERANCE: ±1.5MM SYSTEM COMPLIANCE
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-headline-lg font-bold text-secondary">04</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                TURNKEY HANDOVER &amp; CERTIFICATION
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Guaranteed NHBRC compliance execution, electrical/plumbing COCs, fire sign-offs, and fully audited 50-year BIM dossiers.
              </p>
              <div className="font-label-mono text-[10px] text-on-surface border-t border-outline-variant/20 pt-1">
                COMPLIANCE: SANS 10400-A / OCCUPANCY FORM 4
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Commission CTA */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto bg-surface-container-low border border-outline-variant/30 p-space-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-7 space-y-space-sm">
              <span className="font-label-mono text-label-mono text-primary-container uppercase">
                // PROCUREMENT &amp; STRUCTURAL CONSULTANCY
              </span>
              <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
                COMMISSION TECHNICAL SPECIFICATION OR SITE AUDIT
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Directly connect with Mathex Project principal engineers to review preliminary architectural schematics, borehole geotechnical assays, and tender BOQ schedules within a 48-hour SLA.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <Link
                  href="/contact"
                  className="px-space-lg py-2.5 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase font-bold hover:bg-secondary-fixed transition-colors shadow-md"
                >
                  Commission Specification Brief
                </Link>
                <Link
                  href="/portfolio"
                  className="px-space-lg py-2.5 bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-caps text-label-caps uppercase font-bold hover:text-primary-container transition-colors"
                >
                  View Structural Dossier
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container p-space-md border border-outline-variant/30 space-y-1 font-label-mono text-[11px] text-on-surface-variant">
              <div className="text-secondary font-bold uppercase">CHIEF TECHNICAL DISPATCH</div>
              <div className="text-on-surface">eng.dispatch@mathexproject.co.za</div>
              <div>+27 (0) 11 892 4000</div>
              <div className="text-primary-container pt-1">CIDB 9GB / 9CE UNRESTRICTED</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
