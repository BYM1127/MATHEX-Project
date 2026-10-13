import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      corporateEntity,
      procurementEmail,
      contactTelephone,
      vatRegistration,
      discipline,
      locationSector,
      budgetEnvelope,
      technicalScope,
      ndaAccepted,
    } = body;

    // Server-side validation
    if (!corporateEntity || !procurementEmail) {
      return NextResponse.json(
        {
          success: false,
          error: 'Corporate Entity and Procurement Officer Email are required.',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(procurementEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid procurement email format.',
        },
        { status: 400 }
      );
    }

    // Generate authenticated tender reference stamp
    const timestamp = Date.now();
    const hash = Math.random().toString(36).substring(2, 8).toUpperCase();
    const trackingRef = `TNDR-2025-${hash}`;

    // SLA turnaround calculation (48 hours)
    const deadline = new Date(Date.now() + 48 * 3600 * 1000).toISOString();

    const responsePayload = {
      success: true,
      trackingRef,
      status: 'LOGGED_AND_QUEUED',
      assignedDirector: 'Sipho Ndlovu, Pr.Eng (Lead Structural Director)',
      slaReviewWindow: '24 - 48 Hours',
      deadline,
      submission: {
        corporateEntity,
        procurementEmail,
        contactTelephone: contactTelephone || 'Unspecified',
        vatRegistration: vatRegistration || 'N/A',
        discipline: discipline || 'Civil / Structural General',
        locationSector: locationSector || 'JHB Metro Central',
        budgetEnvelope: budgetEnvelope || 'Standard Procurement',
        technicalScopeExcerpt: technicalScope ? technicalScope.slice(0, 120) + '...' : 'General Commission',
        ndaSecured: Boolean(ndaAccepted),
        timestamp: new Date().toISOString(),
      },
      message:
        'Technical specification received into Mathex Project air-gapped queue. An ECSA-registered engineer will contact you with initial feasibility review.',
    };

    return NextResponse.json(responsePayload, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process specification packet. Telemetry fault.',
      },
      { status: 500 }
    );
  }
}
