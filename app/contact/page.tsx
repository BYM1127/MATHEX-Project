'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    corporateEntity: '',
    procurementEmail: '',
    contactTelephone: '',
    vatRegistration: '',
    discipline: 'Civil Infrastructure',
    locationSector: 'Sandton / Rosebank / CBD',
    budgetEnvelope: 'R15M - R50M Prime Allocation',
    technicalScope: '',
    ndaAccepted: true,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    trackingRef?: string;
    message?: string;
    error?: string;
  } | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setResult({
          success: true,
          trackingRef: data.trackingRef,
          message: data.message,
        });
      } else {
        setResult({
          success: false,
          error: data.error || 'Submission failed. Please check details.',
        });
      }
    } catch (err) {
      setResult({
        success: false,
        error: 'Network connectivity fault. Please call emergency switchboard.',
      });
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: 'Which standardized building contracts does Mathex Project execute?',
      a: 'We operate exclusively under internationally and nationally recognized legal frameworks. Primarily: JBCC (Joint Building Contracts Committee) Principal Building Agreement Edition 6.2; FIDIC Red & Yellow Books for civil engineering works; and NEC4 Engineering and Construction Contract (ECC) for mining and state infrastructure.\n\n// Strict performance guarantees and retention terms provided through A-rated South African banking institutions.',
    },
    {
      q: 'How are NHBRC warranties structured and audited?',
      a: 'Under our active NHBRC registration (30002841), all residential and mixed-use structures carry the statutory 5-year structural warranty against foundation defects and structural failures. Additionally, Mathex issues independent geotechnical sign-offs and concrete core-drilling strength certificates exceeding 35MPa prior to handover or transfer of occupancy certs.',
    },
    {
      q: 'What guarantees eliminate unexpected BOQ cost overruns?',
      a: 'We execute transparent, open-book itemized Bill of Quantities (BOQ) schedules compiled strictly according to the Standard System of Measuring Building Work. Our pricing includes fixed labor, plant hire index rates, and vetted steel/cement procurement buffers.\n\n// A-Risk Hidden Cost Exclusion: All ground conditions are verified with preliminary ECSA geotech surveys before signing lump-sum addendums.',
    },
    {
      q: 'What is the protocol for emergency structural mobilization?',
      a: 'For retaining wall shear failures, seismic subsidence, or critical factory roof compromise cases, call our 24/7 hotline at +27 (0) 82 666 0148. A structural incident team consisting of an ECSA registered engineer and a hydraulic shoring crew is dispatched to any Gauteng point within 120 minutes.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Banner Ribbon */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-sm border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-mono text-label-mono">
          <div className="flex items-center gap-space-md">
            <span className="text-primary-container font-bold">// PROTOCOL SEC // TENDER_PORTAL_04.B</span>
            <span className="text-on-surface-variant/60">CIDB GRADE 9GB/9CE OPERATIONAL</span>
          </div>
          <div className="flex items-center gap-space-xs text-secondary">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>ENCRYPTED TELEMETRY STREAM</span>
          </div>
        </div>
      </section>

      {/* Hero Header & SLAs */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
          <div className="lg:col-span-7 space-y-space-md">
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero uppercase tracking-tight text-on-surface leading-none font-bold">
              TECHNICAL PROCUREMENT &amp; <br />
              <span className="text-primary-container">ENGINEERING CONSULTATION</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Submit master specifications, structural drawings, or request rapid site feasibility survey across Gauteng. All tenders reviewed by certified ECSA Registered Pr.Eng directors.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-space-xs">
            <div className="bg-surface-container-low p-space-md border border-outline-variant/30 text-center">
              <span className="font-label-mono text-[10px] text-on-surface-variant block uppercase">SURVEY MOBILIZATION</span>
              <div className="font-headline-md text-headline-md font-bold text-primary-container">≤ 48 HRS</div>
              <span className="font-label-mono text-[9px] text-secondary">Site Ready</span>
            </div>
            <div className="bg-surface-container-low p-space-md border border-outline-variant/30 text-center">
              <span className="font-label-mono text-[10px] text-on-surface-variant block uppercase">RESPONSE WINDOW</span>
              <div className="font-headline-md text-headline-md font-bold text-on-surface">24 HRS</div>
              <span className="font-label-mono text-[9px] text-on-surface-variant">Formal BOQ Review</span>
            </div>
            <div className="bg-surface-container-low p-space-md border border-outline-variant/30 text-center">
              <span className="font-label-mono text-[10px] text-on-surface-variant block uppercase">COST DEVIATION</span>
              <div className="font-headline-md text-headline-md font-bold text-primary-container">0.00%</div>
              <span className="font-label-mono text-[9px] text-secondary">Guaranteed Fixed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form 04-A + Depot Yard Telemetry */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-xl border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          {/* Left Column: Form 04-A */}
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/30 p-space-xl space-y-space-lg shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30 font-label-mono text-[11px]">
              <span className="text-primary-container font-bold uppercase flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                FORM 04-A // SPECIFICATION ENTRY
              </span>
              <span className="text-secondary">SECURE SSL 256-BIT</span>
            </div>

            {result && (
              <div
                className={`p-space-md border ${
                  result.success
                    ? 'bg-primary-container/10 border-primary-container text-on-surface'
                    : 'bg-error-container/20 border-error text-error'
                }`}
              >
                {result.success ? (
                  <div className="space-y-1 font-label-mono text-[12px]">
                    <div className="text-primary-container font-bold text-[14px]">
                      // SPECIFICATION REGISTERED: {result.trackingRef}
                    </div>
                    <p>{result.message}</p>
                    <div className="text-secondary text-[11px]">
                      An ECSA Pr.Eng structural director has been assigned for 24-48hr review.
                    </div>
                  </div>
                ) : (
                  <div className="font-label-mono text-[12px]">{result.error}</div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-space-lg">
              {/* 1.0 Credentials */}
              <div className="space-y-space-xs">
                <span className="font-label-mono text-[11px] text-secondary uppercase font-bold block">
                  1.0 CORPORATE &amp; CONTACT CREDENTIALS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <div>
                    <label className="font-label-mono text-[10px] text-on-surface-variant uppercase block mb-1">
                      CLIENT / CORPORATE ENTITY *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Redefine Properties / Exxaro Mining"
                      value={formData.corporateEntity}
                      onChange={(e) => setFormData({ ...formData, corporateEntity: e.target.value })}
                      className="w-full bg-surface-container border border-outline-variant/40 px-3 py-2 font-body-sm text-[13px] text-on-surface focus:outline-none focus:border-primary-container"
                    />
                  </div>
                  <div>
                    <label className="font-label-mono text-[10px] text-on-surface-variant uppercase block mb-1">
                      PROCUREMENT OFFICER EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@entity.co.za"
                      value={formData.procurementEmail}
                      onChange={(e) => setFormData({ ...formData, procurementEmail: e.target.value })}
                      className="w-full bg-surface-container border border-outline-variant/40 px-3 py-2 font-body-sm text-[13px] text-on-surface focus:outline-none focus:border-primary-container"
                    />
                  </div>
                  <div>
                    <label className="font-label-mono text-[10px] text-on-surface-variant uppercase block mb-1">
                      RSA CONTACT TELEPHONE *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 (0) 11 000 0000"
                      value={formData.contactTelephone}
                      onChange={(e) => setFormData({ ...formData, contactTelephone: e.target.value })}
                      className="w-full bg-surface-container border border-outline-variant/40 px-3 py-2 font-body-sm text-[13px] text-on-surface focus:outline-none focus:border-primary-container"
                    />
                  </div>
                  <div>
                    <label className="font-label-mono text-[10px] text-on-surface-variant uppercase block mb-1">
                      VAT REGISTRATION NO. (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      placeholder="4000000000"
                      value={formData.vatRegistration}
                      onChange={(e) => setFormData({ ...formData, vatRegistration: e.target.value })}
                      className="w-full bg-surface-container border border-outline-variant/40 px-3 py-2 font-body-sm text-[13px] text-on-surface focus:outline-none focus:border-primary-container"
                    />
                  </div>
                </div>
              </div>

              {/* 2.0 Scope Discipline */}
              <div className="space-y-space-xs">
                <span className="font-label-mono text-[11px] text-secondary uppercase font-bold block">
                  2.0 PRIMARY STRUCTURAL SCOPE DISCIPLINE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                  {[
                    { label: 'Civil Infrastructure', desc: 'Sub-earthworks, storm water, bridges, heavy pavement' },
                    { label: 'Residential Ground-Up', desc: 'Multi-unit residential estates, luxury monolithic reinforced homes' },
                    { label: 'Structural Alterations', desc: 'Industrial structural retrofits, plant conversions, seismic post-tensioning' },
                    { label: 'Commercial Hydronics', desc: 'Reservoirs, chilling distribution systems, high pressure pump houses' },
                  ].map((item) => (
                    <label
                      key={item.label}
                      className={`p-3 border flex flex-col cursor-pointer transition-colors ${
                        formData.discipline === item.label
                          ? 'border-primary-container bg-surface-container text-on-surface'
                          : 'border-outline-variant/30 bg-surface-container/40 text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="discipline"
                          checked={formData.discipline === item.label}
                          onChange={() => setFormData({ ...formData, discipline: item.label })}
                          className="accent-primary-container"
                        />
                        <span className="font-headline-sm text-[13px] font-bold text-on-surface">{item.label}</span>
                      </div>
                      <span className="font-body-sm text-[11px] text-on-surface-variant/80 pl-5 mt-0.5">
                        {item.desc}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 3.0 Zone & Capital Envelope */}
              <div className="space-y-space-xs">
                <span className="font-label-mono text-[11px] text-secondary uppercase font-bold block">
                  3.0 OPERATIONAL ZONE &amp; CAPITAL ENVELOPE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <div>
                    <label className="font-label-mono text-[10px] text-on-surface-variant uppercase block mb-1">
                      LOCATION / METROPOLE SITE *
                    </label>
                    <select
                      value={formData.locationSector}
                      onChange={(e) => setFormData({ ...formData, locationSector: e.target.value })}
                      className="w-full bg-surface-container border border-outline-variant/40 px-3 py-2 font-body-sm text-[13px] text-on-surface focus:outline-none focus:border-primary-container"
                    >
                      <option>Sandton / Rosebank / CBD</option>
                      <option>Midrand / Centurion Corridor</option>
                      <option>Johannesburg South / Mining West</option>
                      <option>Pretoria Industrial Hub</option>
                      <option>Rustenburg Mining Belt</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-label-mono text-[10px] text-on-surface-variant uppercase block mb-1">
                      ESTIMATED BUDGET ENVELOPE (ZAR) *
                    </label>
                    <select
                      value={formData.budgetEnvelope}
                      onChange={(e) => setFormData({ ...formData, budgetEnvelope: e.target.value })}
                      className="w-full bg-surface-container border border-outline-variant/40 px-3 py-2 font-body-sm text-[13px] text-on-surface focus:outline-none focus:border-primary-container"
                    >
                      <option>R5M - R15M Specialized Scope</option>
                      <option>R15M - R50M Prime Allocation</option>
                      <option>R50M - R150M Civil Monolith</option>
                      <option>R150M+ Unlimited Civic Grade 9</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 4.0 Technical Scope */}
              <div className="space-y-space-xs">
                <div className="flex justify-between items-center font-label-mono text-[11px]">
                  <span className="text-secondary uppercase font-bold">
                    4.0 TECHNICAL SCOPE &amp; SOIL CONSTRAINTS *
                  </span>
                  <span className="text-on-surface-variant/70">SANS 10400 COMPLIANT</span>
                </div>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe foundational conditions, geotechnical survey presence, target completion date, crane / staging restrictions, and civil engineering handover milestones..."
                  value={formData.technicalScope}
                  onChange={(e) => setFormData({ ...formData, technicalScope: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant/40 p-3 font-body-sm text-[13px] text-on-surface focus:outline-none focus:border-primary-container"
                ></textarea>
              </div>

              {/* 5.0 CAD Blueprints Drag & Drop */}
              <div className="space-y-space-xs">
                <span className="font-label-mono text-[11px] text-secondary uppercase font-bold block">
                  5.0 CAD BLUEPRINTS &amp; BOQ DEPOSIT (DWG, REV, PDF, ZIP)
                </span>
                <div className="border-2 border-dashed border-outline-variant/40 bg-surface-container/50 p-space-lg text-center space-y-2 hover:border-primary-container transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[36px] text-primary-container">
                    cloud_upload
                  </span>
                  <div className="font-headline-sm text-[14px] text-on-surface font-bold">
                    Drag &amp; Drop Specification Documents
                  </div>
                  <div className="font-label-mono text-[10px] text-on-surface-variant">
                    SUPPORTED EXTENSIONS: .DWG, .DXF, .PDF, .XLSX (MAX 25MB PER ARCHIVE)
                  </div>
                </div>
              </div>

              {/* NDA Checkbox */}
              <div className="flex items-start gap-2 pt-space-xs font-body-sm text-[12px] text-on-surface-variant">
                <input
                  type="checkbox"
                  required
                  checked={formData.ndaAccepted}
                  onChange={(e) => setFormData({ ...formData, ndaAccepted: e.target.checked })}
                  className="accent-primary-container mt-1"
                />
                <span>
                  I authorize Mathex Project engineers to perform initial structural review under mutual NDA. We acknowledge the firm&apos;s strict Zero Harm policy and mandatory ISO 9001:2015 safety protocols during all physical site visits.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-space-xs">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-label-caps uppercase font-bold flex items-center justify-center gap-2 shadow-xl transition-all disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {loading ? 'sync' : 'send'}
                  </span>
                  <span>{loading ? 'ENCRYPTING & TRANSMITTING...' : 'TRANSMIT ENGINEERING BRIEF'}</span>
                </button>
                <div className="text-center font-label-mono text-[10px] text-secondary mt-2">
                  DIRECT LOGISTICS DISPATCH QUEUE: OPEN
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Depot HQ & Dispatch Yard */}
          <div className="lg:col-span-5 space-y-gutter">
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-lg space-y-space-md shadow-xl">
              <div className="flex items-center justify-between font-label-mono text-[11px] pb-2 border-b border-outline-variant/30">
                <span className="text-secondary font-bold uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">domain</span>
                  DEPOT HQ &amp; DISPATCH YARD
                </span>
                <span className="text-primary-container">LIVE CAMS // ONLINE</span>
              </div>

              <div className="relative w-full h-52 bg-surface-container overflow-hidden border border-outline-variant/30">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Dispatch Yard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-mono text-[10px] text-primary-container">
                  LAT: -26.2041° S | LONG: 28.0473° E
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-label-caps text-label-caps text-secondary uppercase font-bold">
                  124 Main Reef Road, Industrial West
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Johannesburg, Gauteng, 2093, Republic of South Africa
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs font-label-mono text-[11px]">
                <div className="bg-surface-container p-2.5 border border-outline-variant/30">
                  <span className="text-on-surface-variant text-[10px] block">CENTRAL SWITCHBOARD</span>
                  <a href="tel:+27115550192" className="text-on-surface font-bold hover:text-primary-container">
                    +27 11 555 0192
                  </a>
                  <span className="text-on-surface-variant/70 text-[9px] block">Mon-Fri: 06:30 - 17:00</span>
                </div>
                <div className="bg-surface-container p-2.5 border border-outline-variant/30">
                  <span className="text-secondary text-[10px] block font-bold">24/7 RAPID DISPATCH</span>
                  <a href="tel:+27826660148" className="text-primary-container font-bold hover:underline">
                    +27 82 666 0148
                  </a>
                  <span className="text-on-surface-variant/70 text-[9px] block">Emergency response</span>
                </div>
              </div>

              {/* Operational Dispatch Radius Radar */}
              <div className="bg-surface-container p-space-md border border-outline-variant/30 space-y-2">
                <div className="flex justify-between items-center font-label-mono text-[11px]">
                  <span className="text-on-surface uppercase font-bold">OPERATIONAL DISPATCH RADIUS</span>
                  <span className="text-primary-container">JHB CENTRAL CORE</span>
                </div>

                {/* Radar Circle Visualization */}
                <div className="w-full h-32 flex items-center justify-center relative">
                  <div className="w-28 h-28 rounded-full border border-outline-variant/40 flex items-center justify-center relative">
                    <div className="w-20 h-20 rounded-full border border-secondary/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border border-primary-container/60 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary-container animate-ping"></div>
                      </div>
                    </div>
                    {/* Blips */}
                    <div className="absolute top-4 right-6 w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    <div className="absolute bottom-6 left-5 w-1.5 h-1.5 rounded-full bg-primary-container"></div>
                  </div>
                </div>

                <div className="space-y-1 font-label-mono text-[10px] text-on-surface-variant border-t border-outline-variant/20 pt-2">
                  <div>• Inner Ring (0-20km): Sandton / Rosebank / CBD</div>
                  <div>• Mid Belt (20-40km): Midrand / Centurion / Krugersdorp</div>
                  <div>• Outer Radius (40-90km): Pretoria North / Vanderbijlpark</div>
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant/80 pt-1 leading-relaxed">
                  Heavy plant, mobile batching units, and core scaffolding fleets deploy from our Main Reef Yard directly onto the M1, N1, and N3 arterial freeways without municipal transit delays.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-mono text-[11px]">
                <div className="bg-surface-container p-2 border border-outline-variant/30">
                  <span className="text-on-surface-variant block text-[10px]">NHBRC WARRANTY</span>
                  <span className="text-primary-container font-bold">5 YEARS</span>
                  <span className="text-on-surface-variant block text-[9px]">Structural Guarantee</span>
                </div>
                <div className="bg-surface-container p-2 border border-outline-variant/30">
                  <span className="text-on-surface-variant block text-[10px]">JBCC 2000 SERIES</span>
                  <span className="text-secondary font-bold">EDITION 6.2</span>
                  <span className="text-on-surface-variant block text-[9px]">Principal Building Doc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects Ready for Direct Client Audit */}
      <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-secondary uppercase">
                // STRUCTURAL AUDIT ON ENGAGE
              </span>
              <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
                ACTIVE PROJECTS READY FOR DIRECT CLIENT AUDIT
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1 font-label-mono text-[12px] text-primary-container hover:underline uppercase"
            >
              <span>View All 28 Registered Sites</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Project 1 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-md space-y-space-sm shadow-xl">
              <div className="relative w-full h-48 bg-surface-container overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=800&q=80"
                  alt="Gautrain Metro Flyover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center font-label-mono text-[10px]">
                <span className="font-bold text-on-surface uppercase">GAUTRAIN METRO FLYOVER</span>
                <span className="text-primary-container">CIDB 9CE</span>
              </div>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Pre-stressed post-tensioned beam installation across arterial rail lines.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-md space-y-space-sm shadow-xl">
              <div className="relative w-full h-48 bg-surface-container overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Rosebank Monolith V"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center font-label-mono text-[10px]">
                <span className="font-bold text-on-surface uppercase">ROSEBANK MONOLITH V</span>
                <span className="text-secondary">NHBRC CERT</span>
              </div>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Double-pour off-shutter concrete envelope with 11-meter clear spans.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-surface-container-low border border-outline-variant/30 p-space-md space-y-space-sm shadow-xl">
              <div className="relative w-full h-48 bg-surface-container overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="West Rand Hydronic Basin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center font-label-mono text-[10px]">
                <span className="font-bold text-on-surface uppercase">WEST RAND HYDRONIC BASIN</span>
                <span className="text-primary-container">ISO 45001</span>
              </div>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                High-volume wastewater aeration plant with acid-resistant poly linings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Directives & FAQ Accordion */}
      <section className="w-full bg-surface-container-lowest px-4 sm:px-6 lg:px-8 py-space-xl border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div>
            <span className="font-label-mono text-label-mono text-primary-container uppercase">
              // TECHNICAL GOVERNANCE // DUE DILIGENCE
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase font-bold text-on-surface">
              PROCUREMENT DIRECTIVES &amp; OPERATIONAL STANDARDS
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-1">
              Clear procedural parameters governing contract administration, legal insurances, and construction milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-container border border-outline-variant/30 p-space-lg space-y-space-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm uppercase font-bold text-on-surface gap-2"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                    {openFaq === idx ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === idx && (
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pt-space-xs whitespace-pre-line border-t border-outline-variant/20 mt-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
