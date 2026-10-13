import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Operational Banner & Telemetry Stamp */}
      <section className="w-full bg-surface-container-lowest py-space-sm px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-primary-container uppercase font-bold">DOSSIER // CORP-ARCH-2025</span>
            <span className="text-outline-variant">::</span>
            <span>JHB CENTRAL DISPATCH &amp; STRUCTURAL CORE</span>
          </div>
          <div className="flex items-center gap-space-md font-label-mono text-label-mono text-on-surface-variant">
            <span className="bg-surface-container px-2 py-0.5 text-secondary">CIDB GRADE 9GB / 9CE</span>
            <span className="bg-surface-container px-2 py-0.5 text-primary-container">B-BBEE LEVEL 1</span>
            <span className="bg-surface-container px-2 py-0.5 text-on-surface">ECSA PR.ENG LED</span>
          </div>
        </div>
      </section>

      {/* Narrative Header & Foundational Thesis */}
      <section className="w-full bg-surface py-space-xl px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
            <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary">
              <span className="material-symbols-outlined text-[16px]">token</span>
              <span>ESTABLISHED 2014 // WITWATERSRAND BASIN FOUNDATION</span>
            </div>
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero uppercase tracking-tight text-on-surface leading-none font-bold">
              STRUCTURAL <span className="text-primary-container">COMMAND</span> &amp; HERITAGE
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Founded in Johannesburg, South Africa, Mathex Project bridges the decisive threshold between brutalist civil infrastructure and technically uncompromising high-spec residential architecture. We engineer monolithic reinforced frames, subsurface retention monoliths, and bespoke structural expressions across Sub-Saharan Africa.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <div className="flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary-container text-[20px]">verified</span>
                <span className="font-label-mono text-label-mono text-on-surface">CIVIC GRADE SCALE</span>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-[20px]">architecture</span>
                <span className="font-label-mono text-label-mono text-on-surface">TOLERANCE ±1.5MM</span>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">shield</span>
                <span className="font-label-mono text-label-mono text-on-surface">ECSA LICENSED FIELD CORPS</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[460px] bg-surface-container-low overflow-hidden shadow-2xl border border-outline-variant/30">
              <img
                className="w-full h-full object-cover brightness-90 contrast-125"
                alt="Monolithic reinforced concrete framework of an industrial headquarters at twilight in Johannesburg."
                src="/projects/mathex-work-19.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-space-md flex items-center justify-between border border-outline-variant/30">
                <div className="flex flex-col font-label-mono">
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">DEPOT DISPATCH RADIAL</span>
                  <span className="text-label-mono text-on-surface font-bold">MAIN REEF YARD // GAUTENG</span>
                </div>
                <div className="flex items-center gap-space-xs text-primary-container font-label-mono text-label-mono">
                  <span className="material-symbols-outlined text-[16px] animate-pulse">radar</span>
                  <span>LIVE GRID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Corporate Telemetry Metrics */}
      <section className="w-full bg-surface-container-lowest py-space-xl px-4 sm:px-6 lg:px-8 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <span className="font-label-mono text-label-mono text-primary-container">// CAPABILITY INDICES &amp; STATUTORY COMPLIANCE</span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface font-bold">QUANTITATIVE FIELD METRICS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Stat 1 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-colors border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">CIDB TIER RATING</span>
                <span className="material-symbols-outlined text-primary-container text-[24px]">construction</span>
              </div>
              <div className="flex items-baseline gap-space-xs my-space-xs">
                <span className="font-metric-numeral text-metric-numeral text-primary-container font-bold">9GB/CE</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                Highest national structural &amp; civil grading. Unlimited procurement value execution under General Building and Civil Engineering statutes.
              </p>
              <div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-[10px] text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">check_circle</span>
                CERTIFIED UNRESTRICTED TONNAGE
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-colors border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">FIELD CORPS WORKFORCE</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">groups</span>
              </div>
              <div className="flex items-baseline gap-space-xs my-space-xs">
                <span className="font-metric-numeral text-metric-numeral text-on-surface font-bold">140+</span>
                <span className="font-label-mono text-label-mono text-secondary">ARTISANS</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                In-house structural welders, concrete formwork specialists, master carpenters, and heavy plant earthmoving operators.
              </p>
              <div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-[10px] text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">military_tech</span>
                RED SEAL TRADES ACCREDITATION
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-colors border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">STANDARDS CONFORMANCE</span>
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px]">verified_user</span>
              </div>
              <div className="flex items-baseline gap-space-xs my-space-xs">
                <span className="font-metric-numeral text-metric-numeral text-primary-container font-bold">100%</span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">SABS / OHS</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                Total empirical adherence to SABS 1200, SANS 10400, and National Occupational Health &amp; Safety Act engineering stipulations.
              </p>
              <div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-[10px] text-primary-container flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">done_all</span>
                THIRD-PARTY AUDITED ANNUALLY
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-colors border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">ZERO HARM CONTINUITY</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">health_and_safety</span>
              </div>
              <div className="flex items-baseline gap-space-xs my-space-xs">
                <span className="font-metric-numeral text-metric-numeral text-on-surface font-bold">10+</span>
                <span className="font-label-mono text-label-mono text-secondary">YRS LTI ZERO</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                A decade without a single Lost Time Injury across heavy deep-foundation excavations, tower erection, and structural casting.
              </p>
              <div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-[10px] text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">security</span>
                OHSAS 18001 / ISO 45001 COMPLIANT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership & Field Command */}
      <section className="w-full bg-surface py-space-xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div>
              <span className="font-label-mono text-label-mono text-secondary">// COMMAND APEX</span>
              <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface font-bold">EXECUTIVE &amp; FIELD DIRECTORS</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Field leadership anchored by registered professional engineers, certified master inspectors, and SACPCMP certified project managers active on site.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Director 1: Sipho Ndlovu */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-xl relative group border border-outline-variant/30">
              <div className="flex flex-col gap-space-md">
                <div className="w-full h-80 bg-surface-container-high overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    alt="Sipho Ndlovu, Pr.Eng"
                    src="/projects/mathex-work-09.jpg"
                  />
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-1 font-label-mono text-[10px] text-primary-container border border-outline-variant/40">
                    ECSA REG: 200847921
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-primary-container uppercase tracking-wider">PRINCIPAL DIRECTOR</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-0.5">Sipho Ndlovu, Pr.Eng</h3>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Lead Structural Engineer</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  18+ years of structural authority specializing in seismic-damped commercial frames, post-tensioned superstructures, and geotechnical deep foundation pilings across Gauteng and Southern Africa.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container p-space-sm flex flex-col gap-1 font-label-mono text-label-mono text-on-surface-variant border border-outline-variant/20">
                <div className="flex justify-between">
                  <span>ACCREDITATION:</span>
                  <span className="text-on-surface font-bold">ECSA Pr.Eng / SAICE</span>
                </div>
                <div className="flex justify-between">
                  <span>SPECIALTY:</span>
                  <span className="text-on-surface">Structural Forensics &amp; Pre-stress</span>
                </div>
                <div className="flex justify-between">
                  <span>SITE EXPERIENCE:</span>
                  <span className="text-secondary font-bold">18+ Years Active Field</span>
                </div>
              </div>
            </div>

            {/* Director 2: Dirk Van Zyl */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-xl relative group border border-outline-variant/30">
              <div className="flex flex-col gap-space-md">
                <div className="w-full h-80 bg-surface-container-high overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    alt="Dirk Van Zyl"
                    src="/projects/mathex-work-15.jpg"
                  />
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-1 font-label-mono text-[10px] text-secondary border border-outline-variant/40">
                    PIRB LIC: M-490218
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">HYDRAULICS &amp; FLUID DYNAMICS HEAD</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-0.5">Dirk Van Zyl</h3>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Master Inspector &amp; Fluid Mechanics</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  15+ years engineering municipal bulk reticulation, subterranean storm deluge management, and closed-loop hydro systems for high-load residential estates and mine surface works.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container p-space-sm flex flex-col gap-1 font-label-mono text-label-mono text-on-surface-variant border border-outline-variant/20">
                <div className="flex justify-between">
                  <span>ACCREDITATION:</span>
                  <span className="text-on-surface font-bold">PIRB Master Inspector</span>
                </div>
                <div className="flex justify-between">
                  <span>SPECIALTY:</span>
                  <span className="text-on-surface">Bulk Water &amp; Hydro-dynamics</span>
                </div>
                <div className="flex justify-between">
                  <span>SITE EXPERIENCE:</span>
                  <span className="text-secondary font-bold">15+ Years Active Field</span>
                </div>
              </div>
            </div>

            {/* Director 3: Kgomotso Molefe */}
            <div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-xl relative group border border-outline-variant/30">
              <div className="flex flex-col gap-space-md">
                <div className="w-full h-80 bg-surface-container-high overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    alt="Kgomotso Molefe"
                    src="/projects/mathex-work-22.jpg"
                  />
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-1 font-label-mono text-[10px] text-primary-container border border-outline-variant/40">
                    SACPCMP: CPM/29184
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-primary-container uppercase tracking-wider">CONSTRUCTION OPERATIONS MANAGER</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-0.5">Kgomotso Molefe</h3>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">SACPCMP Project Director</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Master of logistical orchestration, sequencing multi-tier concrete pours, equipment logistics, and tactical contractor integration under strict critical-path project frameworks.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container p-space-sm flex flex-col gap-1 font-label-mono text-label-mono text-on-surface-variant border border-outline-variant/20">
                <div className="flex justify-between">
                  <span>ACCREDITATION:</span>
                  <span className="text-on-surface font-bold">SACPCMP Reg. CPM</span>
                </div>
                <div className="flex justify-between">
                  <span>SPECIALTY:</span>
                  <span className="text-on-surface">Lean Field Logistics &amp; H&amp;S</span>
                </div>
                <div className="flex justify-between">
                  <span>SITE EXPERIENCE:</span>
                  <span className="text-secondary font-bold">14+ Years Active Field</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Accreditations & Quality Governance Registry */}
      <section className="w-full bg-surface-container-lowest py-space-xl px-4 sm:px-6 lg:px-8 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <span className="font-label-mono text-label-mono text-secondary">// STATUTORY ACCREDITATION REGISTRY</span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface font-bold">LEGAL &amp; QUALITY FRAMEWORKS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Accredit 1 */}
            <div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/30">
              <div className="flex items-start justify-between mb-space-md">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-primary-container">REGISTRATION: 30002841</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">NHBRC REGISTERED BUILDER</h3>
                </div>
                <span className="material-symbols-outlined text-primary-container text-[28px]">apartment</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Full compliance with the National Home Builders Registration Council warranty scheme, ensuring five-year structural defect indemnity on all high-end luxury residential and estate frameworks.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-mono text-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>STATUS: ACTIVE / VETTED</span>
                <span className="text-primary-container font-bold">GRADE A STRUCTURAL</span>
              </div>
            </div>

            {/* Accredit 2 */}
            <div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/30">
              <div className="flex items-start justify-between mb-space-md">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-secondary">MEMBER: MBA-N-89104</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">MBA NORTH (MASTER BUILDERS)</h3>
                </div>
                <span className="material-symbols-outlined text-secondary text-[28px]">handshake</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Federated member of the Master Builders Association North. Committed to fair labor conditions, ethical commercial tendering, and standard form JBCC and GCC contract performance.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-mono text-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>STATUS: ACTIVE STANDING</span>
                <span className="text-secondary font-bold">ETHICAL CONTRACTING</span>
              </div>
            </div>

            {/* Accredit 3 */}
            <div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/30">
              <div className="flex items-start justify-between mb-space-md">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-tertiary-fixed-dim">CERT: ZA-Q-90125</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">ISO 9001:2015 QUALITY MGMT</h3>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[28px]">fact_check</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Audited quality management lifecycle covering concrete compression batching, ultrasonic rebar testing, core sampling telemetry, and procurement traceability across all active sites.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-mono text-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>AUDIT CYCLE: 2024-2027</span>
                <span className="text-tertiary-fixed-dim font-bold">ZERO DEVIATION</span>
              </div>
            </div>

            {/* Accredit 4 */}
            <div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/30">
              <div className="flex items-start justify-between mb-space-md">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-primary-container">LEVEL: 1 (135% RECOG)</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">B-BBEE LEVEL 1 CONTRIBUTOR</h3>
                </div>
                <span className="material-symbols-outlined text-primary-container text-[28px]">balance</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Empowered Black-owned structural and civil engineering enterprise delivering comprehensive transformation, local artisan skills transfer, and domestic sub-contractor incubation.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-mono text-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>PROCUREMENT RECOG: 135%</span>
                <span className="text-primary-container font-bold">BLACK OWNED &gt;51%</span>
              </div>
            </div>

            {/* Accredit 5 */}
            <div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/30">
              <div className="flex items-start justify-between mb-space-md">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-secondary">PIRB CO-REG: 8812</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">PIRB LICENSED HYDRAULICS</h3>
                </div>
                <span className="material-symbols-outlined text-secondary text-[28px]">water_drop</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Plumbing Industry Registration Board certified engineering command. High-capacity sewer outfalls, pressurized municipal potable water infrastructure, and specialized filtration plants.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-mono text-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>LICENSED CORPS: DIRK VAN ZYL</span>
                <span className="text-secondary font-bold">CERTIFICATE OF COMPLIANCE</span>
              </div>
            </div>

            {/* Accredit 6 */}
            <div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/30">
              <div className="flex items-start justify-between mb-space-md">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant">SAFETY: ISO 45001</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">OHSAS / SANS 10400 COMPLIANT</h3>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[28px]">health_and_safety</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Statutory safety mandates overseen by dedicated registered Construction Health and Safety Managers (CHSM), implementing continuous site auditing and hazard risk identification.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-mono text-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                <span>INCIDENT INDEX: 0.00</span>
                <span className="text-on-surface font-bold">MANDATORY PROTOCOL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yard Logistics & Fleet Depot Command (Main Reef Depot) */}
      <section className="w-full bg-surface py-space-xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-primary-container">
                <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                <span>LOGISTICS HUB // MAIN REEF ROAD, JHB</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface leading-tight font-bold">
                CENTRAL DEPOT &amp; PLANT MOBILIZATION
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The heart of Mathex Project&apos;s physical execution resides at our 18,000m² heavy staging yard along the Main Reef industrial artery. We maintain an independent machinery fleet and self-sufficient material stores, eliminating supply chain friction for critical structural operations.
              </p>
              <div className="space-y-space-sm mt-space-sm">
                <div className="bg-surface-container-low p-space-md flex items-center justify-between shadow-sm border border-outline-variant/30">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary-container">precision_manufacturing</span>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Earthmoving &amp; Pilers</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Cat 336 Excavators, Bauer Piling Rigs</span>
                    </div>
                  </div>
                  <span className="font-label-mono text-label-mono text-secondary font-bold">14 UNITS ACTIVE</span>
                </div>
                <div className="bg-surface-container-low p-space-md flex items-center justify-between shadow-sm border border-outline-variant/30">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary">local_shipping</span>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Continuous Batch Transit</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">6m³ Concrete Agitators, Heavy Tri-Axles</span>
                    </div>
                  </div>
                  <span className="font-label-mono text-label-mono text-primary-container font-bold">22 UNITS ACTIVE</span>
                </div>
                <div className="bg-surface-container-low p-space-md flex items-center justify-between shadow-sm border border-outline-variant/30">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">elevator</span>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Tower &amp; Mobile Cranes</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Liebherr 50T-120T All-Terrain Cranes</span>
                    </div>
                  </div>
                  <span className="font-label-mono text-label-mono text-on-surface font-bold">8 UNITS ACTIVE</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-gutter">
              <div className="w-full h-80 bg-surface-container-low relative overflow-hidden shadow-2xl border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover"
                  alt="Mathex Project Main Reef Depot"
                  src="/projects/mathex-work-13.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-space-md">
                  <div className="bg-surface-container-lowest/90 px-3 py-1 font-label-mono text-label-mono text-on-surface border border-outline-variant/30">
                    LAT: -26.2198° S | LONG: 27.9821° E
                  </div>
                  <div className="bg-primary-container px-3 py-1 font-label-mono text-label-mono text-on-primary-container font-bold">
                    DEPOT OPERATIONAL // 24/7 DISPATCH
                  </div>
                </div>
              </div>

              {/* Live SVG Telemetry Chart for Fleet Readiness */}
              <div className="bg-surface-container-low p-space-lg shadow-lg border border-outline-variant/30">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold">
                    YARD MOBILIZATION READINESS INDEX
                  </span>
                  <span className="font-label-mono text-label-mono text-primary-container font-bold">98.4% DEPLOYABLE</span>
                </div>
                <svg className="w-full h-16 text-primary-container" fill="none" viewBox="0 0 600 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 48 L50 42 L100 45 L150 20 L200 24 L250 16 L300 22 L350 12 L400 18 L450 8 L500 14 L550 4 L600 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                  <path d="M0 48 L50 42 L100 45 L150 20 L200 24 L250 16 L300 22 L350 12 L400 18 L450 8 L500 14 L550 4 L600 8 L600 64 L0 64 Z" fill="currentColor" fillOpacity="0.08"></path>
                  <circle cx="150" cy="20" fill="currentColor" r="4"></circle>
                  <circle cx="350" cy="12" fill="currentColor" r="4"></circle>
                  <circle cx="550" cy="4" fill="currentColor" r="4"></circle>
                </svg>
                <div className="grid grid-cols-3 gap-space-sm pt-space-sm mt-space-sm font-label-mono text-label-mono text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                  <div>// FLEET DOWNTIME: <span className="text-on-surface font-bold">1.6%</span></div>
                  <div>// FUEL RESERVES: <span className="text-on-surface font-bold">45,000L ONSITE</span></div>
                  <div>// FIELD REACTION: <span className="text-primary-container font-bold">&lt;90 MIN DISPATCH</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Consultation & Tender Engagement Callout */}
      <section className="w-full bg-surface-container py-space-xl px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-gutter-desktop">
          <div className="flex flex-col gap-space-sm max-w-2xl">
            <span className="font-label-mono text-label-mono text-primary-container uppercase">// COMMENCE TECHNICAL ENGAGEMENT</span>
            <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface font-bold">
              RETRAIN RISK. BUILD MONOLITHS.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Connect directly with Principal Director Sipho Ndlovu, Pr.Eng and our civil dispatch engineering team for comprehensive feasibility reviews, structural auditing, or formal JBCC/CIDB tender briefs.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md">
            <Link
              className="px-space-xl py-space-md bg-primary-container text-on-primary-container hover:bg-secondary-fixed transition-all font-label-caps text-label-caps uppercase font-bold flex items-center gap-space-xs shadow-lg"
              href="/contact"
            >
              <span className="material-symbols-outlined text-[18px]">domain_verification</span>
              <span>Request Structural Consultation</span>
            </Link>
            <Link
              className="px-space-lg py-space-md bg-surface-container-high text-on-surface hover:text-primary-container transition-all font-label-caps text-label-caps uppercase font-bold flex items-center gap-space-xs border border-outline-variant/40"
              href="/portfolio"
            >
              <span className="material-symbols-outlined text-[18px]">layers</span>
              <span>Explore Field Works</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

