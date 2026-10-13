'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Luxury House Building',
    location: '',
    budget: 'R5M - R15M',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    trackingRef?: string;
    message?: string;
    error?: string;
  } | null>(null);

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
        body: JSON.stringify({
          corporateEntity: formData.fullName,
          procurementEmail: formData.email,
          contactTelephone: formData.phone,
          discipline: formData.serviceType,
          locationSector: formData.location || 'Gauteng',
          budgetEnvelope: formData.budget,
          technicalScope: formData.message,
          ndaAccepted: true,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setResult({
          success: true,
          trackingRef: data.trackingRef,
          message:
            'Thank you! Your project inquiry has been received. One of our lead project directors will contact you within 24 hours to arrange an initial consultation.',
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: 'Luxury House Building',
          location: '',
          budget: 'R5M - R15M',
          message: '',
        });
      } else {
        setResult({
          success: false,
          error: data.error || 'Submission failed. Please check your information and try again.',
        });
      }
    } catch (err) {
      setResult({
        success: false,
        error: 'Unable to connect right now. Please call us directly at +27 (0) 11 892 4000.',
      });
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: 'How does the quoting and estimation process work?',
      a: 'We begin with an initial consultation to review your architectural ideas, site layout, and goals. We then provide an open-book, itemized Bill of Quantities (BOQ) with transparent pricing for materials, engineering, and labor so you know exact costs before construction begins.',
    },
    {
      q: 'Do you handle municipal plan submissions and engineering sign-offs?',
      a: 'Yes. Our team is led by certified Professional Engineers (ECSA Pr.Eng) and experienced project managers. We provide all necessary structural calculations, geotechnical soil reports, Form 4 municipal occupancy certifications, and plumbing/electrical compliance certificates (COCs).',
    },
    {
      q: 'What warranties are provided on new homes and renovations?',
      a: 'As an active NHBRC Registered Builder (Registration #30002841), all our new builds carry a statutory 5-year structural defect warranty and 10-year engineering guarantees on major concrete foundations. Renovations and plumbing installations carry full Master Builder defect warranties.',
    },
    {
      q: 'How do you prevent budget overruns during construction?',
      a: 'We eliminate surprise costs by conducting thorough pre-construction geotechnical surveys before commencing work. Our contracts follow recognized JBCC Series 2000 standard building agreements with fixed milestone schedules and transparent procurement buffers.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="w-full bg-surface py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant/40 rounded-full text-xs font-label-mono text-primary-container">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>GET IN TOUCH // 24-HOUR RESPONSE COMMITMENT</span>
          </div>

          <h1 className="font-display-hero text-3xl sm:text-5xl uppercase font-bold text-on-surface">
            Request a Consultation &amp; <span className="text-primary-container">Project Quote</span>
          </h1>

          <p className="font-body-md text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Whether you are planning a ground-up luxury home build, a major property renovation, or specialized civil and plumbing work, our team is ready to guide you.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="w-full bg-surface-container-lowest py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-10 rounded-lg border border-outline-variant/30 shadow-xl space-y-6">
            <div className="border-b border-outline-variant/20 pb-4">
              <h2 className="font-headline-md text-xl uppercase font-bold text-on-surface">
                Project Inquiry Form
              </h2>
              <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                Fill in the details below and an engineer or project manager will follow up with you.
              </p>
            </div>

            {result && (
              <div
                className={`p-4 rounded border text-sm ${
                  result.success
                    ? 'bg-primary-container/10 border-primary-container text-on-surface'
                    : 'bg-error-container/20 border-error text-error'
                }`}
              >
                {result.success ? (
                  <div className="space-y-1">
                    <div className="font-bold text-primary-container">
                      Reference #{result.trackingRef}
                    </div>
                    <p>{result.message}</p>
                  </div>
                ) : (
                  <div>{result.error}</div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface-variant mb-1 font-bold">
                    Full Name / Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sipho Mokoena"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-surface-container border border-outline-variant/40 rounded px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface-variant mb-1 font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sipho@example.co.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-container border border-outline-variant/40 rounded px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface-variant mb-1 font-bold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 (0) 82 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-surface-container border border-outline-variant/40 rounded px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface-variant mb-1 font-bold">
                    Service Needed *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-surface-container border border-outline-variant/40 rounded px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                  >
                    <option>Luxury House Building</option>
                    <option>High-End Home Renovation / Alterations</option>
                    <option>Technical Plumbing &amp; Hydronics</option>
                    <option>Civil &amp; Structural Engineering</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface-variant mb-1 font-bold">
                    Project Location / Suburb
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Steyn City, Sandton, Pretoria"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-surface-container border border-outline-variant/40 rounded px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface-variant mb-1 font-bold">
                    Estimated Budget Bracket
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-surface-container border border-outline-variant/40 rounded px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                  >
                    <option>Under R2 Million</option>
                    <option>R2M - R5M</option>
                    <option>R5M - R15M</option>
                    <option>R15M - R50M</option>
                    <option>R50M+ Large Scale / Civil</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-label-mono uppercase text-on-surface-variant mb-1 font-bold">
                  Tell Us About Your Project
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your property, architectural vision, desired start date, or any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant/40 rounded p-3 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-label-caps text-sm uppercase font-bold rounded flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {loading ? 'sync' : 'send'}
                  </span>
                  <span>{loading ? 'Sending Inquiry...' : 'Submit Project Inquiry'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-container-low p-6 sm:p-8 rounded-lg border border-outline-variant/30 space-y-6 shadow-xl">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface uppercase">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <div className="text-xs font-label-mono text-on-surface-variant uppercase font-bold">Main Office Phone</div>
                    <a href="tel:+27118924000" className="text-on-surface font-bold hover:text-primary-container text-base">
                      +27 (0) 11 892 4000
                    </a>
                    <div className="text-xs text-on-surface-variant/70">Monday - Friday: 07:00 - 17:00</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <div className="text-xs font-label-mono text-on-surface-variant uppercase font-bold">WhatsApp / Direct Line</div>
                    <a href="tel:+27826660148" className="text-primary-container font-bold hover:underline text-base">
                      +27 (0) 82 666 0148
                    </a>
                    <div className="text-xs text-on-surface-variant/70">24/7 Rapid Client Assistance</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <div className="text-xs font-label-mono text-on-surface-variant uppercase font-bold">Email Inquiries</div>
                    <a href="mailto:ops@mathexproject.co.za" className="text-on-surface font-bold hover:text-primary-container">
                      ops@mathexproject.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <div className="text-xs font-label-mono text-on-surface-variant uppercase font-bold">Headquarters &amp; Studios</div>
                    <div className="text-on-surface">44 Oxford Works, Rosebank, Johannesburg 2196</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">warehouse</span>
                  </div>
                  <div>
                    <div className="text-xs font-label-mono text-on-surface-variant uppercase font-bold">Central Equipment &amp; Logistics Depot</div>
                    <div className="text-on-surface">124 Main Reef Road, Industrial West, Johannesburg</div>
                  </div>
                </div>
              </div>

              {/* Accreditations summary */}
              <div className="pt-4 border-t border-outline-variant/20 grid grid-cols-2 gap-2 text-xs font-label-mono text-on-surface-variant">
                <div className="p-2 bg-surface-container rounded border border-outline-variant/30">
                  <span className="text-primary-container font-bold block">NHBRC #30002841</span>
                  <span>Registered Builder</span>
                </div>
                <div className="p-2 bg-surface-container rounded border border-outline-variant/30">
                  <span className="text-secondary font-bold block">CIDB 9GB / 9CE</span>
                  <span>Unrestricted Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful FAQ Accordion */}
      <section className="w-full bg-surface py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="font-label-mono text-xs text-primary-container uppercase font-bold">
              // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl uppercase font-bold text-on-surface">
              CLEAR ANSWERS FOR YOUR PROJECT
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low border border-outline-variant/30 rounded p-5 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left font-headline-sm text-base font-bold text-on-surface gap-4"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                    {openFaq === idx ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === idx && (
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed pt-3 border-t border-outline-variant/20 mt-3">
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
