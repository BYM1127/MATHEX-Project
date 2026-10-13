'use client';

import { useState } from 'react';

export default function PolicyPage() {
  const [activeTab, setActiveTab] = useState<'ohs' | 'nhbrc' | 'qa' | 'enviro' | 'popia'>('ohs');

  return (
    <div className="flex flex-col w-full">
      {/* Command Strip / Telemetry Banner */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-sm border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-mono text-label-mono">
          <div className="flex items-center gap-space-md">
            <span className="text-primary-container font-bold tracking-wider">// STATUTORY ARCHIVE</span>
            <span className="text-on-surface-variant/60">AUDIT REGISTRY: 2025/REV-04</span>
            <span className="hidden md:inline text-outline-variant">|</span>
            <span className="hidden md:inline text-secondary">ACTIVE COMPLIANCE LEVEL: 99.82%</span>
          </div>
          <div className="flex items-center gap-space-xs text-secondary-fixed">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-label-mono uppercase tracking-widest font-bold">
              SACPCMP / ECSA SURVEILLANCE RUNNING
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Top Grid: Asymmetric Title & Live KPIs */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="flex items-center gap-space-xs text-primary-container font-label-mono text-label-mono tracking-widest uppercase">
              <span>SEC.07 // REGULATORY CHARTER</span>
              <span className="text-outline-variant">///</span>
              <span>REPUBLIC OF SOUTH AFRICA</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold uppercase">
              ENGINEERING POLICIES &amp;{' '}
              <span className="text-primary-container underline decoration-primary-container/40 underline-offset-8">
                STATUTORY COMPLIANCE
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Rigid operational covenants governed by national legislation, rigorous material verification, and zero-compromise site governance across civil, commercial, and structural frameworks in Gauteng and SADC zones.
            </p>
          </div>

          {/* Quick Operational Metrics Card */}
          <div className="lg:col-span-4 bg-surface-container-low p-space-lg shadow-xl relative overflow-hidden border border-outline-variant/30">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary-container/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between pb-space-sm">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-bold">
                Incident Frequency
              </span>
              <span className="font-label-mono text-label-mono px-2 py-0.5 bg-primary-container/15 text-primary-container font-bold">
                LTIFR 0.00
              </span>
            </div>
            <div className="font-metric-numeral text-metric-numeral text-primary-container font-bold tracking-tight">
              0.00<span className="font-label-mono text-label-mono text-on-surface-variant ml-2">/ 1M MAN-HRS</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Consecutive operational record maintained under strict OHSAS 18001 / OHS Act protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Statutory Register Badges */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-space-lg bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          <div className="bg-surface-container p-space-md shadow-sm border border-outline-variant/30">
            <span className="font-label-mono text-label-mono text-primary-container tracking-wider block font-bold">REG // 01</span>
            <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">CIDB 9GB/9CE</div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Civil &amp; General Works Unlimited</span>
          </div>
          <div className="bg-surface-container p-space-md shadow-sm border border-outline-variant/30">
            <span className="font-label-mono text-label-mono text-primary-container tracking-wider block font-bold">REG // 02</span>
            <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">NHBRC REG</div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Accredited #30002841</span>
          </div>
          <div className="bg-surface-container p-space-md shadow-sm border border-outline-variant/30">
            <span className="font-label-mono text-label-mono text-primary-container tracking-wider block font-bold">REG // 03</span>
            <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">SABS / SANS</div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">10400 / 1200 Conformity</span>
          </div>
          <div className="bg-surface-container p-space-md shadow-sm border border-outline-variant/30">
            <span className="font-label-mono text-label-mono text-primary-container tracking-wider block font-bold">REG // 04</span>
            <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">ISO 9001:2015</div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Quality Standard</span>
          </div>
          <div className="bg-surface-container p-space-md shadow-sm border border-outline-variant/30">
            <span className="font-label-mono text-label-mono text-primary-container tracking-wider block font-bold">REG // 05</span>
            <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">ISO 45001</div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Safety Management</span>
          </div>
          <div className="bg-surface-container p-space-md shadow-sm border border-outline-variant/30">
            <span className="font-label-mono text-label-mono text-primary-container tracking-wider block font-bold">REG // 06</span>
            <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">POPIA REG</div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Information Regulator SA</span>
          </div>
        </div>
      </section>

      {/* Interactive Policy Tabs Hub */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-space-xl bg-surface-container-lowest border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          {/* Tab Navigation */}
          <div className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'ohs', icon: 'health_and_safety', label: '1. Occupational Health & Safety' },
              { id: 'nhbrc', icon: 'verified', label: '2. NHBRC & Structural Warranty' },
              { id: 'qa', icon: 'science', label: '3. QA & Material Verification' },
              { id: 'enviro', icon: 'terrain', label: '4. Dolomitic & Environmental Risk' },
              { id: 'popia', icon: 'lock', label: '5. POPIA & Blueprint Security' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-space-lg py-3 font-label-caps text-label-caps uppercase transition-all whitespace-nowrap flex items-center gap-space-xs ${
                  activeTab === tab.id
                    ? 'bg-primary-container text-on-primary-container shadow-md font-bold'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab 1: OHS */}
          {activeTab === 'ohs' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-8 bg-surface-container-low p-space-xl space-y-space-lg shadow-xl border border-outline-variant/30">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest/50 p-space-sm font-label-mono text-label-mono">
                  <span className="text-primary-container font-bold">// LEGISLATIVE ANCHOR: ACT NO. 85 OF 1993</span>
                  <span className="text-on-surface-variant">MANDATORY APPOINTMENTS: 16(1) &amp; 16(2)</span>
                </div>
                <div className="space-y-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
                    OHS Statutory Compliance &amp; Zero-Harm Mandate
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Mathex Project enforces unequivocal compliance with the South African Occupational Health and Safety Act 85 of 1993, alongside the Construction Regulations 2014. No work commences on any site without an approved Health and Safety Specification and a Client-approved Site Safety File vetted by a registered SACPCMP Construction Health and Safety Agent.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                  <div className="bg-surface-container p-space-lg space-y-space-xs shadow-sm border border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-secondary font-bold font-label-caps uppercase">
                      <span className="material-symbols-outlined text-[20px]">groups</span>
                      <span>Daily Toolbox Briefings</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Conducted at 06:45 daily prior to crane ignition or heavy machinery deployment. Covers task-specific risk assessments (TRA), weather telemetry, and overhead hazard identification.
                    </p>
                    <div className="font-label-mono text-label-mono text-on-surface-variant/70 pt-1">
                      MANDATORY LOGBOOK AUDIT: DAILY 07:15
                    </div>
                  </div>
                  <div className="bg-surface-container p-space-lg space-y-space-xs shadow-sm border border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-secondary font-bold font-label-caps uppercase">
                      <span className="material-symbols-outlined text-[20px]">safety_check</span>
                      <span>Class-1 PPE Compliance</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      High-visibility SABS-certified hi-vis apparel, steel-toe metatarsal boots (EN ISO 20345), double-lanyard fall arrest systems above 2.0m, and calibrated respiratory filters for silica dust.
                    </p>
                    <div className="font-label-mono text-label-mono text-on-surface-variant/70 pt-1">
                      INSPECTION REGISTRY: WEEKLY SANS 50361
                    </div>
                  </div>
                  <div className="bg-surface-container p-space-lg space-y-space-xs shadow-sm border border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-secondary font-bold font-label-caps uppercase">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                      <span>Stop-Work Authority (SWA)</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Every artisan, engineer, and laborer possesses the inviolable authority and duty to halt structural operations immediately if an unmitigated hazard is observed, without punitive repercussion.
                    </p>
                    <div className="font-label-mono text-label-mono text-on-surface-variant/70 pt-1">
                      SAFETY CLEARANCE OVERRIDE PROTOCOL
                    </div>
                  </div>
                  <div className="bg-surface-container p-space-lg space-y-space-xs shadow-sm border border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-secondary font-bold font-label-caps uppercase">
                      <span className="material-symbols-outlined text-[20px]">fire_truck</span>
                      <span>Emergency Response Plan</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Site-specific medical evacuation protocols, Level 3 first aid stations, on-site fire marshals, and contractual partnerships with localized emergency aeromedical services.
                    </p>
                    <div className="font-label-mono text-label-mono text-on-surface-variant/70 pt-1">
                      DRILL FREQUENCY: BIMONTHLY RUN
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-high/60 p-space-md flex items-start gap-space-md border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary-container text-[28px]">gavel</span>
                  <div className="space-y-1">
                    <div className="font-label-caps text-label-caps text-primary uppercase font-bold">
                      Statutory Section 8 Mandate
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      &ldquo;The employer shall provide and maintain, as far as is reasonably practicable, a working environment that is safe and without risk to the health of his employees.&rdquo; Mathex guarantees active structural mitigation above standard benchmarks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-space-lg">
                <div className="bg-surface-container-low p-space-md space-y-space-md shadow-xl border border-outline-variant/30">
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="High-spec engineering safety audit"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqi_zp5YtPfrRiRLK9FcNUqu1MQwPQyW6D68Bzpi_eVVdctKiHx1j9PvlHuRai8WU_VZz8hXmiaEjTiAMGFUHvV1QEn-VUm1j_iILjD3Ashd7pggKBMJebvNWaUJotDZSD1ty0GmsISzcNew_oH0NRfE4es6AbHOYxc2HZW3ysonHqpQcEVEagXg2RyROalizSsFQExebXQZLrsh_qXUZRdXYF2ceyqnnYGrDPMYhb98YnQ5xAAnxG"
                    />
                    <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-mono text-label-mono text-primary-container">
                      SITE AUDIT // OHS-2025-V3
                    </div>
                  </div>
                  <div className="space-y-space-xs">
                    <div className="font-label-caps text-label-caps text-on-surface uppercase font-bold">
                      Certified Document Specification
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Document Package: Standard Site Health &amp; Safety File (OHS-SAF-001) certified under DoEL guidelines. Includes Section 37(2) mandatory contractor agreements.
                    </p>
                  </div>
                  <button
                    onClick={() => alert('Downloading verified OHS Policy Dossier (PDF 4.2MB)...')}
                    className="inline-flex w-full items-center justify-center gap-space-xs py-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase transition-colors shadow-sm border border-outline-variant/30"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">download</span>
                    <span>Download OHS Policy [PDF 4.2MB]</span>
                  </button>
                </div>
                <div className="bg-surface-container p-space-lg space-y-space-md border border-outline-variant/30">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold">
                      Site Audits Completed (2024-25)
                    </span>
                    <span className="font-label-mono text-label-mono text-primary-container font-bold">142 OF 142</span>
                  </div>
                  <div className="w-full bg-surface-container-lowest h-2 overflow-hidden">
                    <div className="bg-primary-container h-full w-full"></div>
                  </div>
                  <div className="flex justify-between font-label-mono text-label-mono text-on-surface-variant/80 text-[11px]">
                    <span>Pass Rate: 100%</span>
                    <span className="text-secondary font-bold">Zero Stoppages Issued</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: NHBRC */}
          {activeTab === 'nhbrc' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-8 bg-surface-container-low p-space-xl space-y-space-lg shadow-xl border border-outline-variant/30">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest/50 p-space-sm font-label-mono text-label-mono">
                  <span className="text-primary-container font-bold">// HOUSING CONSUMERS PROTECTION ACT 95 OF 1998</span>
                  <span className="text-on-surface-variant">REG: 30002841</span>
                </div>
                <div className="space-y-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
                    10-Year Structural Integrity &amp; Defect Warranty
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    As an accredited NHBRC master builder and ECSA-registered corporate engineering contractor, Mathex provides comprehensive statutory warranty indemnity extending far beyond minimum statutory limitations. Every poured foundation, post-tensioned beam, and structural slab carries fully insured underwriting.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  <div className="bg-surface-container p-space-lg space-y-space-xs border border-outline-variant/30">
                    <div className="font-metric-numeral text-metric-numeral text-primary-container font-bold">10 <span className="font-headline-sm text-headline-sm text-on-surface">YRS</span></div>
                    <div className="font-label-caps text-label-caps text-on-surface font-bold uppercase">Major Structural Defects</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Total protection against catastrophic foundation settlement, structural load fracture, slab deflection, and load-bearing wall shear failure.
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-lg space-y-space-xs border border-outline-variant/30">
                    <div className="font-metric-numeral text-metric-numeral text-secondary font-bold">03 <span className="font-headline-sm text-headline-sm text-on-surface">YRS</span></div>
                    <div className="font-label-caps text-label-caps text-on-surface font-bold uppercase">Roof &amp; Envelope Guarantees</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Watertightness warranty against roof timber truss distortion, waterproofing membrane deterioration, and pre-cast facade seam breaches.
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-lg space-y-space-xs border border-outline-variant/30">
                    <div className="font-metric-numeral text-metric-numeral text-on-surface font-bold">12 <span className="font-headline-sm text-headline-sm text-on-surface">MOS</span></div>
                    <div className="font-label-caps text-label-caps text-on-surface font-bold uppercase">Latent Defect Remediation</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Unconditional rectification of secondary structural settling, non-structural plaster micro-cracking, plumbing junction seating, and thermal joints.
                    </p>
                  </div>
                </div>
                <div className="space-y-space-sm bg-surface-container p-space-md border border-outline-variant/30">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Latent Defect Rectification Schedule</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Upon notification of any structural warranty trigger, Mathex deploys an independent Pr.Eng Structural Engineer within 48 operational hours to conduct laser-level deflection surveys and ultrasonic flaw diagnostics. Rectification mobilization begins within 7 calendar days under full builder&apos;s insurance guarantee.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-space-lg">
                <div className="bg-surface-container-low p-space-md space-y-space-md shadow-xl border border-outline-variant/30">
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Post-tensioned slab detail"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjz8MI7uHUnTBotcFczk0FpCw854JUIjQEQQ7moVOcTCWCUFI1ue_oTY-Cn22MlWXZLrUvRYzsrzhM9cwexcTepjQtxuaV5yGC-6jLwCEeKmS3yblTA429vgn1QhjgfZbUAwP8NCHplYjB_oQyWvOTFMv63BOq05cSMAckEkk20CqOTgh6OTdoq7KP2JEBosqDsMaO59B2EUMbYtC3EPZgKoXbEBlaQR-La5NAC_ybJI-w4xzhv87R"
                    />
                    <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-mono text-label-mono text-primary-container">
                      FOUNDATION PROOF // C28/35
                    </div>
                  </div>
                  <div className="space-y-space-xs">
                    <div className="font-label-caps text-label-caps text-on-surface uppercase font-bold">
                      NHBRC Enrollment Verification
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Certificate of Standing (Form B1 &amp; D1) signed by registered competent structural engineers. Includes Latent Defects Insurance schedule.
                    </p>
                  </div>
                  <button
                    onClick={() => alert('Downloading verified NHBRC Warranty Charter (PDF 3.1MB)...')}
                    className="inline-flex w-full items-center justify-center gap-space-xs py-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase transition-colors shadow-sm border border-outline-variant/30"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">download</span>
                    <span>Download Warranty Charter [PDF 3.1MB]</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: QA */}
          {activeTab === 'qa' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-8 bg-surface-container-low p-space-xl space-y-space-lg shadow-xl border border-outline-variant/30">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest/50 p-space-sm font-label-mono text-label-mono">
                  <span className="text-primary-container font-bold">// SABS 878 / SANS 10100-2 CONCRETE SPEC</span>
                  <span className="text-on-surface-variant">SANAS 17025 ACCREDITED LAB</span>
                </div>
                <div className="space-y-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
                    Quality Assurance &amp; Destructive Laboratory Testing
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Raw material failure in structural engineering is non-negotiable. Mathex maintains strict on-site testing and SANAS-accredited laboratory verification for every concrete batch, rebar shipment, and structural steel extrusion prior to placement and under ultimate 28-day curing milestones.
                  </p>
                </div>
                <div className="space-y-space-sm">
                  <div className="p-space-md bg-surface-container flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm border border-outline-variant/30">
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-mono text-label-mono font-bold">TEST 01</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Concrete Slump Test &amp; Workability</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Executed at batch truck arrival under SANS 5862-1:2006. Standard slump parameters: 75mm - 110mm depending on rebar congestion. Discarded if out of tolerance.
                      </p>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary whitespace-nowrap font-bold">TOLERANCE: ±10MM</span>
                  </div>
                  <div className="p-space-md bg-surface-container flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm border border-outline-variant/30">
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-mono text-label-mono font-bold">TEST 02</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">7-Day &amp; 28-Day Cube Crushing (Compressive Strength)</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Six 150mm³ concrete sample cubes molded per 50m³ pour. Tested at hydraulic compression test rigs (SANS 5863). Minimum characteristic strength 30MPa - 45MPa.
                      </p>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary whitespace-nowrap font-bold">VERIFIED: &gt; 35.8 MPa</span>
                  </div>
                </div>
                {/* Strength curve SVG */}
                <div className="bg-surface-container p-space-md space-y-space-sm border border-outline-variant/30">
                  <div className="flex justify-between items-center font-label-mono text-[11px]">
                    <span className="text-on-surface uppercase font-bold">Batch Strength Curve (C35 Mix Actuals vs Required)</span>
                    <span className="text-primary-container">CURING TELEMETRY // CYCLES</span>
                  </div>
                  <div className="w-full h-32 flex items-end gap-2 pt-4 border-b border-outline-variant/30">
                    <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full bg-surface-container-high h-[20%]"></div>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">Day 1</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full bg-surface-container-high h-[45%]"></div>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">Day 3</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full bg-secondary h-[72%]"></div>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">Day 7 (70%)</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full bg-primary-container h-[92%]"></div>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">Day 14</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full bg-primary-container h-[100%] shadow-[0_0_12px_rgba(250,204,21,0.4)]"></div>
                      <span className="font-label-mono text-[10px] text-primary-container font-bold">Day 28 (114%)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-space-lg">
                <div className="bg-surface-container-low p-space-md space-y-space-md shadow-xl border border-outline-variant/30">
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Laboratory compression cube testing"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7JruI41I__r4AXZ3ekWf1WxH4Pvz_ktTZp32y-ZeULMxYyzRYRMwUI_omFZFqAS6xXgnov4xcYRvobbzktLjh233zRU6V1htt2EiqXBZx0u0uJ4vf6OSHMUMBp4X6CHFJWs--VoE6zv3GbIgRgugvT6TuovMHI_4CX1quolFn1kanS_WzcARA1MupJv1Ek6muIaowRBNQiTWUcbZeJELYoD9TM-IW3g90th8H1opwo_shOCJwDsIf"
                    />
                    <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-mono text-label-mono text-primary-container">
                      SANAS LAB // 17025 VERIFIED
                    </div>
                  </div>
                  <div className="space-y-space-xs">
                    <div className="font-label-caps text-label-caps text-on-surface uppercase font-bold">Quality Verification Dossier</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Sample Batch Certificate Dossier (QA-DOC-B35) containing hydraulic crushing readouts, aggregate grading curves, and chemical admixture reports.
                    </p>
                  </div>
                  <button
                    onClick={() => alert('Downloading verified QA Framework Dossier (PDF 5.6MB)...')}
                    className="inline-flex w-full items-center justify-center gap-space-xs py-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase transition-colors shadow-sm border border-outline-variant/30"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">download</span>
                    <span>Download QA Framework [PDF 5.6MB]</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Enviro & Dolomitic Risk */}
          {activeTab === 'enviro' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-8 bg-surface-container-low p-space-xl space-y-space-lg shadow-xl border border-outline-variant/30">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest/50 p-space-sm font-label-mono text-label-mono">
                  <span className="text-primary-container font-bold">// GEOTECHNICAL: SANS 1936 DOLOMITE LAND</span>
                  <span className="text-on-surface-variant">NEMA ACT 107 OF 1998</span>
                </div>
                <div className="space-y-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
                    Dolomitic Risk Mitigation &amp; Environmental Stewardship
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Over 25% of the economic hub in Gauteng rests atop soluble Malmani subgroup dolomites susceptible to sinkholes and doline subsidence. Mathex implements the nation&apos;s most stringent geotechnical hazard controls alongside comprehensive National Environmental Management Act (NEMA) storm reticulation mandates.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="bg-surface-container p-space-lg space-y-space-xs border border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-secondary font-bold font-label-caps uppercase">
                      <span className="material-symbols-outlined text-[20px]">radar</span>
                      <span>Dolomite Hazard Rating (DHR 1-8)</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Drilling rotary percussion probe boreholes to bedrock depths (30m+) prior to site acquisition. Implementation of Inherent Hazard Class (IHC) foundations: raft foundations or friction piling.
                    </p>
                    <div className="font-label-mono text-[10px] text-on-surface-variant/70">REF: SANS 1936-1:2012 SPEC</div>
                  </div>
                  <div className="bg-surface-container p-space-lg space-y-space-xs border border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-secondary font-bold font-label-caps uppercase">
                      <span className="material-symbols-outlined text-[20px]">water_damage</span>
                      <span>Watertight Wet Services</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Dolomite collapses are caused 96% by water ingress. All wet services run inside butt-welded HDPE conduits encased in concrete ducts equipped with acoustic leak detection monitors.
                    </p>
                    <div className="font-label-mono text-[10px] text-on-surface-variant/70">DUAL-CONTAINMENT PIPING</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-space-lg">
                <div className="bg-surface-container-low p-space-md space-y-space-md shadow-xl border border-outline-variant/30">
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Geotechnical percussion drilling rig"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbKLEeUMbmDmYTYTI--IAyB6bk5y9xInGPbTu0HR7wxSRYE-rfEwMfY5nvch0D8yRDTyxRvKjXs8K1PiLlTK4OD1tPwtdbOwUeM6GJ_Q2NtW4WEWn1qd8UOan2cw5W5pviE4vkk6n7KepS4vHbE7eCW9ctVZS76FzWMk0FLg3N3JHLLP9VUoHsMVpEpX_uZxKOHFjzUiYXtMEzXw9D5JMF9t3bO4XLVpfHPE0vQAL8GNJchvLQa9wy"
                    />
                    <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-mono text-label-mono text-primary-container">
                      GEOTECH BOREHOLE // REGION D
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Downloading Geotechnical Protocol Charter (PDF 3.8MB)...')}
                    className="inline-flex w-full items-center justify-center gap-space-xs py-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase transition-colors shadow-sm border border-outline-variant/30"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">download</span>
                    <span>Download Geotech Charter [PDF 3.8MB]</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: POPIA */}
          {activeTab === 'popia' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-8 bg-surface-container-low p-space-xl space-y-space-lg shadow-xl border border-outline-variant/30">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest/50 p-space-sm font-label-mono text-label-mono">
                  <span className="text-primary-container font-bold">// PROTECTION OF PERSONAL INFORMATION ACT 4 OF 2013</span>
                  <span className="text-on-surface-variant">AIR-GAPPED CAD VAULT</span>
                </div>
                <div className="space-y-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
                    POPIA &amp; Architectural Intellectual Property Security
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    For mining conglomerates, diplomatic compounds, financial institutions, and ultra-high-net-worth private estates, security begins at the blueprint level. Mathex treats engineering drawings, structural load specifications, and security ducting plans as classified tier-1 digital assets.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="bg-surface-container p-space-lg space-y-space-xs border border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-secondary font-bold font-label-caps uppercase">
                      <span className="material-symbols-outlined text-[20px]">encrypted</span>
                      <span>Air-Gapped CAD / BIM Vault</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Architectural and MEP drawings are hosted on private, AES-256 encrypted local servers with biometric authorization. Drawings shared with on-site sub-contractors are time-expiring with cryptographic hashes.
                    </p>
                    <div className="font-label-mono text-[10px] text-on-surface-variant/70">ENCRYPTION: RSA-4096 / SHA-256</div>
                  </div>
                  <div className="bg-surface-container p-space-lg space-y-space-xs border border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-secondary font-bold font-label-caps uppercase">
                      <span className="material-symbols-outlined text-[20px]">contract</span>
                      <span>Binding High-Security NDAs</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      All site operatives, structural subcontractors, and surveying personnel execute binding non-disclosure covenants carrying civil liability covenants prior to receiving perimeter ingress authorization.
                    </p>
                    <div className="font-label-mono text-[10px] text-on-surface-variant/70">JURISDICTION: HIGH COURT OF SA</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-space-lg">
                <div className="bg-surface-container-low p-space-md space-y-space-md shadow-xl border border-outline-variant/30">
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Encrypted schematics and structural wireframes"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPY19Rhr-k8ydsIBFjgByUUCOjFQ3fnRosavQlYASDda6D6_XpcszPZDkHEs3A3RALVDuOk3MlAwb7cY1_hMlIuD619jvlmRgX6rp1ZtzYPjDPTrIIhsmFe9IPuMrPuU471VHGhbB8bp-1A81etrSvts6lyNS9rz0HqohkI7eNIL1xUXYP27wyrnlAA-I26hOBTQZ6WlGQFYx6ptu5se6djkAPnSDggSLHLndhrDwDLfES52Q2RP0w"
                    />
                    <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-mono text-label-mono text-primary-container">
                      BIM SECURITY // VAULT LEVEL-3
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Downloading Commercial NDA Package (PDF 2.4MB)...')}
                    className="inline-flex w-full items-center justify-center gap-space-xs py-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase transition-colors shadow-sm border border-outline-variant/30"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">download</span>
                    <span>Download NDA Package [PDF 2.4MB]</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2025 Statutory Compliance Audit Schedule */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-space-xl bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <div className="font-label-mono text-label-mono text-primary-container uppercase font-bold">// ANNUAL GOVERNANCE CALENDAR</div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
                2025 Statutory Compliance Audit Schedule
              </h2>
            </div>
            <div className="font-label-mono text-label-mono text-on-surface-variant">
              STATUS: <span className="text-primary-container font-bold">ALL Q1/Q2 MANDATES CLEARED</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto shadow-xl border border-outline-variant/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider border-b border-outline-variant/30">
                  <th className="p-space-md">Schedule Ref</th>
                  <th className="p-space-md">Regulatory Body</th>
                  <th className="p-space-md">Audit Scope &amp; Target</th>
                  <th className="p-space-md">Frequency</th>
                  <th className="p-space-md">Target Window</th>
                  <th className="p-space-md">Compliance Status</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant/20">
                <tr className="bg-surface-container-lowest">
                  <td className="p-space-md font-label-mono text-label-mono text-primary-container font-bold">AUD-2025-01</td>
                  <td className="p-space-md font-bold text-on-surface">Dept of Employment &amp; Labour (DoEL)</td>
                  <td className="p-space-md text-on-surface-variant">OHS Act Section 24 Major Machinery &amp; Tower Crane Rigging Audit</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface-variant">Quarterly</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface">15 Jan - 22 Jan 2025</td>
                  <td className="p-space-md">
                    <span className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 bg-primary-container/20 text-primary-container border border-primary-container/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>PASSED // ZERO FINDINGS
                    </span>
                  </td>
                </tr>
                <tr className="bg-surface-container">
                  <td className="p-space-md font-label-mono text-label-mono text-primary-container font-bold">AUD-2025-02</td>
                  <td className="p-space-md font-bold text-on-surface">NHBRC Structural Inspectorate</td>
                  <td className="p-space-md text-on-surface-variant">Site Substructure &amp; Dolomite Raft Foundation Surveillance</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface-variant">Milestone-based</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface">04 Mar - 12 Mar 2025</td>
                  <td className="p-space-md">
                    <span className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 bg-primary-container/20 text-primary-container border border-primary-container/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>PASSED // D1 CERTIFIED
                    </span>
                  </td>
                </tr>
                <tr className="bg-surface-container-lowest">
                  <td className="p-space-md font-label-mono text-label-mono text-primary-container font-bold">AUD-2025-03</td>
                  <td className="p-space-md font-bold text-on-surface">SANAS Concrete Testing Laboratory</td>
                  <td className="p-space-md text-on-surface-variant">ISO 17025 Calibration of Hydraulic Compression Presses</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface-variant">Biannual</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface">18 May 2025</td>
                  <td className="p-space-md">
                    <span className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 bg-secondary/20 text-secondary border border-secondary/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>ACTIVE PREPARATION
                    </span>
                  </td>
                </tr>
                <tr className="bg-surface-container">
                  <td className="p-space-md font-label-mono text-label-mono text-primary-container font-bold">AUD-2025-04</td>
                  <td className="p-space-md font-bold text-on-surface">SABS Quality Management Bureau</td>
                  <td className="p-space-md text-on-surface-variant">ISO 9001:2015 Recertification &amp; Batch Traceability Protocol</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface-variant">Annual</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface">14 Aug - 20 Aug 2025</td>
                  <td className="p-space-md">
                    <span className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                      SCHEDULED
                    </span>
                  </td>
                </tr>
                <tr className="bg-surface-container-lowest">
                  <td className="p-space-md font-label-mono text-label-mono text-primary-container font-bold">AUD-2025-05</td>
                  <td className="p-space-md font-bold text-on-surface">Information Regulator (POPIA)</td>
                  <td className="p-space-md text-on-surface-variant">CAD Archive Security, Data Minimization &amp; Access Policy</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface-variant">Annual</td>
                  <td className="p-space-md font-label-mono text-label-mono text-on-surface">10 Nov 2025</td>
                  <td className="p-space-md">
                    <span className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                      SCHEDULED
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Downloadable Policy Certificates Repository */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-space-xl bg-surface border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div>
            <div className="font-label-mono text-label-mono text-primary-container uppercase font-bold">// VERIFIED REPOSITORY</div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
              Download Statutory Compliance Certificates
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
              Direct, cryptographically authenticated PDF downloads of Mathex Project regulatory licenses, insurances, and professional registrations for tender procurement files.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Cert 1 */}
            <div className="bg-surface-container-low p-space-lg space-y-space-md shadow-md flex flex-col justify-between border border-outline-variant/30">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold">CIDB Grade 9 Certificate</div>
                  <div className="font-label-mono text-label-mono text-primary-container mt-1">CRS: 10094129 // 9GB 9CE</div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Full unlimited tender grading issued by Construction Industry Development Board South Africa.
                </p>
              </div>
              <button
                onClick={() => alert('Downloading CIDB Grade 9 Certificate (PDF)...')}
                className="inline-flex items-center justify-between w-full pt-space-md text-primary-container font-label-caps text-label-caps uppercase hover:underline border-t border-outline-variant/20"
              >
                <span>Download PDF</span>
                <span className="material-symbols-outlined text-[16px]">file_download</span>
              </button>
            </div>

            {/* Cert 2 */}
            <div className="bg-surface-container-low p-space-lg space-y-space-md shadow-md flex flex-col justify-between border border-outline-variant/30">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[24px]">domain_verification</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold">NHBRC Master Registration</div>
                  <div className="font-label-mono text-label-mono text-primary-container mt-1">REG #30002841 // CURRENT</div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Official annual license and letter of good standing from the National Home Builders Registration Council.
                </p>
              </div>
              <button
                onClick={() => alert('Downloading NHBRC Master Registration (PDF)...')}
                className="inline-flex items-center justify-between w-full pt-space-md text-primary-container font-label-caps text-label-caps uppercase hover:underline border-t border-outline-variant/20"
              >
                <span>Download PDF</span>
                <span className="material-symbols-outlined text-[16px]">file_download</span>
              </button>
            </div>

            {/* Cert 3 */}
            <div className="bg-surface-container-low p-space-lg space-y-space-md shadow-md flex flex-col justify-between border border-outline-variant/30">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[24px]">security</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold">Contractor Liability Cover</div>
                  <div className="font-label-mono text-label-mono text-primary-container mt-1">CAR POLICY // ZAR 250M</div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Contractor&apos;s All Risk (CAR), Public Liability, and Professional Indemnity certificate of placement.
                </p>
              </div>
              <button
                onClick={() => alert('Downloading Liability Cover Policy (PDF)...')}
                className="inline-flex items-center justify-between w-full pt-space-md text-primary-container font-label-caps text-label-caps uppercase hover:underline border-t border-outline-variant/20"
              >
                <span>Download PDF</span>
                <span className="material-symbols-outlined text-[16px]">file_download</span>
              </button>
            </div>

            {/* Cert 4 */}
            <div className="bg-surface-container-low p-space-lg space-y-space-md shadow-md flex flex-col justify-between border border-outline-variant/30">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold">ISO 9001 / 45001 Dual Pack</div>
                  <div className="font-label-mono text-label-mono text-primary-container mt-1">DQS CERTIFIED // 2025</div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Dual quality management and occupational safety management certificates with accreditation marks.
                </p>
              </div>
              <button
                onClick={() => alert('Downloading ISO Dual Pack (PDF)...')}
                className="inline-flex items-center justify-between w-full pt-space-md text-primary-container font-label-caps text-label-caps uppercase hover:underline border-t border-outline-variant/20"
              >
                <span>Download PDF</span>
                <span className="material-symbols-outlined text-[16px]">file_download</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Escalation Hotlines */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-space-xl bg-surface">
        <div className="max-w-7xl mx-auto bg-surface-container-lowest p-space-xl shadow-2xl relative border border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-5 space-y-space-md">
              <div className="font-label-mono text-label-mono text-primary-container uppercase font-bold">
                // STATUTORY OFFICERS DIRECT HOTLINE
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
                Compliance Escalation &amp; Safety Officers Desk
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Need emergency site hazard notification, formal incident reporting under Section 24, or regulatory procurement verification? Contact our executive compliance division directly.
              </p>
              <div className="flex items-center gap-space-xs text-secondary font-label-mono text-label-mono">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                <span>24/7 IMMEDIATE RESPONSE PROTOCOL ACTIVATED</span>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="bg-surface-container p-space-lg space-y-space-sm shadow-md border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-mono text-label-mono uppercase font-bold">
                    SACPCMP CHSM
                  </span>
                  <span className="material-symbols-outlined text-primary-container text-[20px]">health_and_safety</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold">M. J. van der Merwe</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[11px]">Chief Safety Officer // Head of SHEQ</div>
                </div>
                <div className="pt-space-xs space-y-1 font-label-mono text-[11px] text-on-surface-variant">
                  <div>DIRECT: <a className="text-on-surface hover:text-primary-container" href="tel:+27118924040">+27 (0) 11 892 4040</a></div>
                  <div>MOBILE: <a className="text-primary-container hover:underline" href="tel:+27829910488">+27 (0) 82 991 0488</a></div>
                  <div>EMAIL: <a className="text-on-surface hover:text-primary-container" href="mailto:sheq@mathexproject.co.za">sheq@mathexproject.co.za</a></div>
                </div>
              </div>
              <div className="bg-surface-container p-space-lg space-y-space-sm shadow-md border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-secondary text-on-secondary font-label-mono text-label-mono uppercase font-bold">
                    LEGAL &amp; POPIA
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">gavel</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold">Adv. K. Ndlovu (LL.M)</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[11px]">Head of Legal &amp; Statutory Governance</div>
                </div>
                <div className="pt-space-xs space-y-1 font-label-mono text-[11px] text-on-surface-variant">
                  <div>DIRECT: <a className="text-on-surface hover:text-primary-container" href="tel:+27118924055">+27 (0) 11 892 4055</a></div>
                  <div>POPIA LINE: <a className="text-secondary hover:underline" href="tel:+27834002919">+27 (0) 83 400 2919</a></div>
                  <div>EMAIL: <a className="text-on-surface hover:text-primary-container" href="mailto:compliance@mathexproject.co.za">compliance@mathexproject.co.za</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
