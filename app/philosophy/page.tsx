'use client';

import Link from 'next/link';

export default function PhilosophyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Banner Ribbon */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-sm border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-mono text-label-mono">
          <div className="flex items-center gap-space-md">
            <span className="text-secondary font-bold">// SECTOR // MATERIAL INTEGRITY &amp; LOGIC</span>
            <span className="text-on-surface-variant/60">REF: 2024-ENG-09</span>
            <span className="hidden md:inline text-outline-variant">|</span>
            <span className="hidden md:inline text-on-surface-variant">SPEC: SANS 10100-1 / 10400</span>
          </div>
          <div className="flex items-center gap-space-xs text-primary-container">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>FIELD: WITWATERSRAND BASIN</span>
          </div>
        </div>
      </section>

      {/* Hero Header */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="flex items-center gap-space-xs text-secondary font-label-mono text-label-mono tracking-widest uppercase">
              <span>STRUCTURAL INTEGRITY AS FUNDAMENTAL ETHOS</span>
            </div>
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero uppercase tracking-tight text-on-surface leading-none font-bold">
              TECTONICS OVER <br />
              <span className="text-primary-container">ORNAMENTATION</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Architecture must yield to load path. In the Highveld of South Africa, where shifting red dolerite and volatile ground pressures dismantle cosmetic facades, longevity is derived solely from millimetric structural truth, honest metallurgy, and unyielding physics.
            </p>
          </div>

          <div className="lg:col-span-4 bg-surface-container-low p-space-lg border border-outline-variant/30 space-y-space-sm shadow-xl">
            <span className="font-label-mono text-label-mono text-primary-container uppercase font-bold block">
              // OBJECTIVE: &ldquo;ZERO DECAY&rdquo;
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              There is no veneer cold, no expensive gap to represent as a residential architectural datum. We construct monuments to gravitational confidence.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-space-xs font-label-mono text-[11px] border-t border-outline-variant/30 text-on-surface-variant">
              <div>DEPTH: <span className="text-on-surface font-bold">18m</span></div>
              <div>TENSILE: <span className="text-secondary font-bold">500 MPa</span></div>
              <div>CONCRETE: <span className="text-primary-container font-bold">C45/55</span></div>
              <div>SEAM: <span className="text-on-surface font-bold">ZERO VOID</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Ethos */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-xl border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-gutter-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-6 space-y-space-md">
              <span className="font-label-mono text-label-mono text-secondary uppercase block">
                // FOUNDATIONAL ETHOS
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface">
                THE GEOLOGICAL IMPERATIVE
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                South African topography tolerates zero carelessness. Reactive ground formation, severe thermal diurnal swings across the Karoo and Highveld, and corrosive coastline moisture demands an architecture stripped of cosmetic fragility.
              </p>

              <div className="bg-surface-container p-space-md border-l-2 border-primary-container space-y-1">
                <span className="font-label-caps text-label-caps text-primary-container uppercase">
                  REGULATED EXCELLENCE
                </span>
                <p className="font-body-sm text-body-sm text-on-surface italic">
                  &ldquo;We refuse surface level sheen; our structures remain immune against the volatile dynamics of subterranean ground shifting.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 bg-surface-container overflow-hidden border border-outline-variant/30">
              <img
                src="/projects/mathex-work-14.jpg"
                alt="Exposed post-tensioned cantilever beams"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-on-surface flex justify-between">
                <span>PLATE 02 // EXPOSED POST-TENSIONED CANTILEVER BEAMS</span>
                <span className="text-secondary">WITWATERSRAND ARCHIVE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-space-md border-t border-outline-variant/20">
            <div className="space-y-space-xs">
              <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-primary-container">
                // DISMANTLING COSMETIC FALSEHOODS
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Ornamentation is often the disguise of structural indecision. Thin-set veneers deteriorate, metric claddings loosen, and non-load-bearing elements hide critical shear flaws. We champion total transparency: what bears the load defines the aesthetic: raw, exposed, and built to last.
              </p>
            </div>

            <div className="space-y-space-xs">
              <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-secondary">
                // SUB-SURFACE TELEMETRY &amp; TRUTH
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Before a single column footer is cast, our geotechnical arrays recreate the subterranean reality of the site. Finite dynamics define form. A structure that ignores its foundation ledger will fail. We engineer for active earth shifts, calculated long before preliminary design is concluded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Tectonic Pillars */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-primary-container uppercase">
                // STRUCTURAL CODE
              </span>
              <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
                THE 4 TECTONIC PILLARS
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Monolithic construction disciplines executing zero cosmetic variance, calculated and engineered by Mathex Project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Pillar 01 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-xl flex flex-col justify-between">
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-[11px] text-primary-container uppercase font-bold">
                    PILLAR // 01
                  </span>
                  <span className="material-symbols-outlined text-primary-container text-[20px]">architecture</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                  MILLIMETRIC TOLERANCE DISCIPLINE
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Standard civil construction allows ±15mm to ±25mm of variance. We reject this margin. Utilizing dual-axis laser telemetry arrays, digital total stations, and robotic prism monitors, our cast-in-place tolerances are constrained to ±1.5mm, a level benchmark in conformance with high-precision SANS 10400 protocols.
                </p>
              </div>
              <div className="pt-space-md border-t border-outline-variant/20 flex justify-between font-label-mono text-[11px] text-on-surface-variant">
                <span>SURFACE DEVIATION: <strong className="text-secondary">±1.50 MM</strong></span>
                <span>CAD: <strong className="text-primary-container">99.82%</strong></span>
                <span>AUDIT: <strong className="text-on-surface">CONTINUOUS</strong></span>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-xl flex flex-col justify-between">
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-[11px] text-secondary uppercase font-bold">
                    PILLAR // 02
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">science</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                  MATERIAL AUTHENTICITY &amp; METALLURGICAL TRUTH
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We specify 35-50MPa blast furnace slag-infused concrete, tested to reveal aggregate geometry without chemical sealants. Structural steel is certified 350WA to hot-dip, cold-driven copper conduits, and brass connections: all unpainted to stimulate genuine protective oxidation over half-century cycles.
                </p>
              </div>
              <div className="pt-space-md border-t border-outline-variant/20 flex justify-between font-label-mono text-[11px] text-on-surface-variant">
                <span>COMPRESSIVE: <strong className="text-primary-container">50 MPa SLAG</strong></span>
                <span>STEEL: <strong className="text-secondary">350WA</strong></span>
                <span>SHUTTER: <strong className="text-on-surface">RAW UNCLAD</strong></span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-xl flex flex-col justify-between">
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-[11px] text-primary-container uppercase font-bold">
                    PILLAR // 03
                  </span>
                  <span className="material-symbols-outlined text-primary-container text-[20px]">terrain</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                  GEOTECHNICAL PRUDENCE &amp; DOLOMITE MITIGATION
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Gauteng and North West regions hold severe dolomitic hazards prone to sinkhole formations. Our deep excavation profiles deploy socketed rock pin piling, post-tensioned raft foundations coupled with active moisture barrier envelopes to eliminate cavity water ingress under catastrophic subterranean shifts.
                </p>
              </div>
              <div className="pt-space-md border-t border-outline-variant/20 flex justify-between font-label-mono text-[11px] text-on-surface-variant">
                <span>BEARING: <strong className="text-secondary">42.7 TN/SQM</strong></span>
                <span>RAFT: <strong className="text-primary-container">POST-TENSIONED</strong></span>
                <span>SAFETY: <strong className="text-on-surface">FAIL-SAFE BEAM</strong></span>
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-sm shadow-xl flex flex-col justify-between">
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-[11px] text-secondary uppercase font-bold">
                    PILLAR // 04
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">waves</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                  CLIMATE &amp; SEISMIC ENVELOPE ISOLATION
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Mining-induced ground tremor mitigation and harsh diurnal thermal dynamics lead our structural code. We integrate subterranean elastomeric bearings into expansive structures while embedding hydronic conduits into concrete masses to passively temper interior temperatures without reliance on forced mechanical plant.
                </p>
              </div>
              <div className="pt-space-md border-t border-outline-variant/20 flex justify-between font-label-mono text-[11px] text-on-surface-variant">
                <span>SEISMIC: <strong className="text-primary-container">ELASTOMERIC PAD</strong></span>
                <span>HYDRO: <strong className="text-secondary">3.5 BAR SEAL</strong></span>
                <span>THERMAL: <strong className="text-on-surface">PASSIVE MASS</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finite Element Stress Analysis vs. Realised Form */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-xl border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-primary-container uppercase">
                // ELEMENTS VERIFICATION
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface">
                FINITE ELEMENT STRESS ANALYSIS VS. REALISED FORM
              </h2>
            </div>
            <div className="font-label-mono text-[11px] text-on-surface-variant">
              MODEL ID: STN-2024-NDL // FEA CELL: SANS 10100 COMPLIANT
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left: Interactive/Data-rich Stress Graph */}
            <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md">
              <div className="flex justify-between items-center font-label-mono text-[11px]">
                <span className="text-primary-container">CAD FEA // 3D NON-LINEAR TENSION MAP</span>
                <span className="text-secondary font-bold">PEAK LOAD: 4.58 KN/MM²</span>
              </div>

              {/* Stress Analysis SVG Diagram */}
              <div className="w-full h-64 bg-surface-container flex items-center justify-center p-4 relative overflow-hidden border border-outline-variant/20">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Grid lines */}
                  <line x1="20" y1="20" x2="380" y2="20" stroke="#4d4632" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="20" y1="60" x2="380" y2="60" stroke="#4d4632" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="20" y1="100" x2="380" y2="100" stroke="#4d4632" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="20" y1="140" x2="380" y2="140" stroke="#4d4632" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="20" y1="180" x2="380" y2="180" stroke="#4d4632" strokeWidth="1" />

                  {/* Stress Area Curve */}
                  <polygon
                    points="40,180 120,160 200,40 280,160 360,180"
                    fill="url(#stressGrad)"
                    opacity="0.35"
                  />
                  <polyline
                    points="40,180 120,160 200,40 280,160 360,180"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="3"
                  />
                  <circle cx="200" cy="40" r="5" fill="#facc15" />

                  {/* Gradient */}
                  <defs>
                    <linearGradient id="stressGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#facc15" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#facc15" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute top-4 left-6 font-label-mono text-[10px] text-primary-container bg-surface-container-lowest/80 px-2 py-0.5">
                  DEFLECTION MATRIX: 1.42 MM
                </div>
              </div>

              <div className="flex justify-between font-label-mono text-[11px] text-on-surface-variant">
                <span>NON-LINEAR TENSION YIELD: SABS 920</span>
                <span className="text-primary-container font-bold">FEA VERIFICATION: ZERO FRACTURE</span>
              </div>
            </div>

            {/* Right: Realised Form Photo */}
            <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md">
              <div className="flex justify-between items-center font-label-mono text-[11px]">
                <span className="text-secondary">// REALITY: CAST AS-BUILT NODE JUNCTION</span>
                <span className="text-on-surface font-bold">ICBO NET VERIFIED</span>
              </div>

              <div className="relative w-full h-64 bg-surface-container overflow-hidden border border-outline-variant/20">
                <img
                  src="/projects/mathex-work-22.jpg"
                  alt="Cast as-built node junction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-[10px] text-on-surface flex justify-between">
                  <span>MEASURED TOLERANCE: &lt; 0.42 mm</span>
                  <span className="text-primary-container">JOINT DEVIATION: 0.00%</span>
                </div>
              </div>

              <div className="flex justify-between font-label-mono text-[11px] text-on-surface-variant">
                <span>POST-TENSION TENDON SINK: PASS</span>
                <span className="text-secondary font-bold">ECSA ON-SITE SIGN-OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Monograph */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div>
            <span className="font-label-mono text-label-mono text-secondary uppercase">
              // MATERIAL SPECIFICATION
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
              CRAFTSMANSHIP MONOGRAPH
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-1">
              We treat our structural materials with the fine tolerances traditionally reserved for aerospace components. No cover plates, no cosmetic veneers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Spec 1 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-md space-y-space-sm shadow-md">
              <div className="relative w-full h-40 bg-surface-container overflow-hidden">
                <img
                  src="/projects/mathex-work-25.jpg"
                  alt="Ultra-Flat Polished Concrete"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-label-mono text-[10px] text-primary-container font-bold block">
                SPEC 01 // OVERLAY
              </span>
              <h4 className="font-headline-sm text-[16px] font-bold text-on-surface uppercase">
                ULTRA-FLAT POLISHED CONCRETE
              </h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Local aggregate with polyolefin synthetic microfibers. Cured via continuous hydraulic blanket, polished to 3000-grit diamond pads.
              </p>
              <div className="font-label-mono text-[10px] text-secondary border-t border-outline-variant/20 pt-1">
                TOLERANCE: DIN 18202 TAB. 3
              </div>
            </div>

            {/* Spec 2 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-md space-y-space-sm shadow-md">
              <div className="relative w-full h-40 bg-surface-container overflow-hidden">
                <img
                  src="/projects/mathex-work-22.jpg"
                  alt="Structural Mass Timber"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-label-mono text-[10px] text-secondary font-bold block">
                SPEC 02 // TIMBER
              </span>
              <h4 className="font-headline-sm text-[16px] font-bold text-on-surface uppercase">
                STRUCTURAL MASS TIMBER
              </h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Sustainably harvested Southern African saligna glue-laminated beams. 100% visible mortise &amp; tenon nodes with concealed internal tension ties.
              </p>
              <div className="font-label-mono text-[10px] text-on-surface border-t border-outline-variant/20 pt-1">
                FIRE RATING: F 60 (SANS 10177)
              </div>
            </div>

            {/* Spec 3 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-md space-y-space-sm shadow-md">
              <div className="relative w-full h-40 bg-surface-container overflow-hidden">
                <img
                  src="/projects/mathex-work-35.jpg"
                  alt="Architectural Brass & Bronze"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-label-mono text-[10px] text-primary-container font-bold block">
                SPEC 03 // METALS
              </span>
              <h4 className="font-headline-sm text-[16px] font-bold text-on-surface uppercase">
                ARCHITECTURAL BRASS &amp; BRONZE
              </h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Milled alloy CuZn39Pb3 connections, laser-sequenced, intentionally unpassivated to develop protective natural patinas over 50 years.
              </p>
              <div className="font-label-mono text-[10px] text-secondary border-t border-outline-variant/20 pt-1">
                TOLERANCE: .25 MM LATHE
              </div>
            </div>

            {/* Spec 4 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-md space-y-space-sm shadow-md">
              <div className="relative w-full h-40 bg-surface-container overflow-hidden">
                <img
                  src="/projects/mathex-work-25.jpg"
                  alt="Acoustic Core"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-label-mono text-[10px] text-secondary font-bold block">
                SPEC 04 // ACOUSTICS
              </span>
              <h4 className="font-headline-sm text-[16px] font-bold text-on-surface uppercase">
                CNC DUAL-SLOT ACOUSTIC CORE
              </h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                120kg/m³ compressed basalt mineral wool in micro-perforated sound-trapping metal envelopes, dampening structural vibrations.
              </p>
              <div className="font-label-mono text-[10px] text-primary-container border-t border-outline-variant/20 pt-1">
                SOUND LOSS: NRC 0.95 / STC 58
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sipho Ndlovu Founding Quote */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-xl border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="border-l-4 border-primary-container pl-space-lg space-y-space-md">
            <span className="font-label-mono text-label-mono text-secondary uppercase">
              // PRINCIPAL REFLECTION // DR. SIPHO NDLOVU, Pr.Eng (SAICE)
            </span>
            <blockquote className="font-display-hero text-headline-xl lg:text-[32px] italic text-on-surface leading-snug">
              &ldquo;When a building survives a century in Africa, it is not because of the paint on its surface, but because the engineer respected the rock beneath it and the builder honored the true strength of the steel. Every millimeter of our work is an audit against the passage of time.&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-xs font-label-mono">
              <div>
                <div className="text-primary-container font-bold">
                  SIPHO NDLOVU // PRINCIPAL FOUNDING &amp; CHIEF STRUCTURAL ENGINEER
                </div>
                <div className="text-on-surface-variant text-[11px]">
                  Mathex Project // Witwatersrand Basin // ECSA Reg. 200847921
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-space-xs px-space-lg py-2.5 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase font-bold hover:bg-secondary-fixed transition-colors"
              >
                <span>Connect Project Lead Today</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


