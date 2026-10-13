import { NextResponse } from 'next/server';

const projectsRegistry = [
  {
    ref: '98-2023-078',
    codeName: 'Steyn City Monolith',
    discipline: 'Residential Post-Tensioned',
    client: 'Private Family Trust',
    footprint: '1,840 m²',
    leadEng: 'Dr. K. Ndlovu, Pr.Eng',
    status: 'COMPLETE',
    year: '2023',
  },
  {
    ref: '98-2024-001',
    codeName: 'Waterfall District Hydronics',
    discipline: 'District Civil Hydronics',
    client: 'ATTACQ Consortium',
    footprint: '14,200 m² Civ Retic',
    leadEng: 'F. Botha, Pr.Tech',
    status: 'OPERATIONAL',
    year: '2024',
  },
  {
    ref: '98-2021-097',
    codeName: 'Hyde Park Brutalist Villa',
    discipline: 'Structural Off-Shutter',
    client: 'Venture Capital Holdings',
    footprint: '1,450 m²',
    leadEng: 'K. van der Merwe, Pr.Eng',
    status: 'MAINTENANCE',
    year: '2021',
  },
  {
    ref: '98-2024-006',
    codeName: 'Midrand Industrial Platform',
    discipline: 'Civil / Continuous Slab Ground',
    client: 'Equites Industrial Ltd',
    footprint: '48,000 m²',
    leadEng: 'J.L. Ferreira, Pr.Eng Lead',
    status: 'OPERATIONAL',
    year: '2024',
  },
  {
    ref: '98-2022-040',
    codeName: 'Saxonwold Underpinning',
    discipline: 'Heritage Preservation',
    client: 'Heritage Re-Claim Trust',
    footprint: '400 Tons Underpinned',
    leadEng: 'P.G. Murray, Pr.Eng',
    status: 'COMPLETE',
    year: '2022',
  },
  {
    ref: '98-2024-007',
    codeName: 'Bedfordview Penthouse',
    discipline: 'Tension Structural Envelope',
    client: 'Ridge Crest Properties',
    footprint: '70 Metre Ridge Elevation',
    leadEng: 'K. van der Merwe, Pr.Eng',
    status: 'DEFECT CLEARANCE',
    year: '2024',
  },
  {
    ref: '98-2021-018',
    codeName: 'Sandton Deep Retention Piling',
    discipline: 'Rock Anchoring & Retaining',
    client: 'Growthpoint Properties',
    footprint: '28.0m Depth Retain',
    leadEng: 'Dr. K. Ndlovu, Pr.Eng',
    status: 'COMPLETE',
    year: '2021',
  },
  {
    ref: '98-2023-039',
    codeName: 'East Rand Mine Conduit Reticulation',
    discipline: 'Civic Bridge Engineering',
    client: 'Sibanye-Stillwater Mining',
    footprint: '750 Metric Ton Spans',
    leadEng: 'F. Botha, Pr.Tech',
    status: 'COMPLETE',
    year: '2023',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format');
  const query = searchParams.get('query')?.toLowerCase();

  let filtered = projectsRegistry;
  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.codeName.toLowerCase().includes(query) ||
        p.discipline.toLowerCase().includes(query) ||
        p.client.toLowerCase().includes(query) ||
        p.ref.toLowerCase().includes(query)
    );
  }

  if (format === 'csv') {
    const csvHeader = 'Ref,CodeName,Discipline,Client,Footprint,LeadEngineer,Status,Year\n';
    const csvRows = filtered
      .map(
        (p) =>
          `"${p.ref}","${p.codeName}","${p.discipline}","${p.client}","${p.footprint}","${p.leadEng}","${p.status}","${p.year}"`
      )
      .join('\n');

    return new Response(csvHeader + csvRows, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="mathex-registry-export.csv"',
      },
    });
  }

  return NextResponse.json({
    totalRegistered: projectsRegistry.length,
    count: filtered.length,
    projects: filtered,
  });
}
