import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      discipline = 'residential',
      footprintArea = 450,
      complexityTier = 'class-2',
      includeEcsaTesting = true,
    } = body;

    const area = Math.max(20, Math.min(10000, Number(footprintArea) || 450));

    // Base rates per m2 for standard Class 2 Residential
    let baseRatePerSqm = 17110;

    // Discipline adjustment
    const disciplineMultipliers: Record<string, { label: string; factor: number }> = {
      residential: { label: 'Residential Architecture & Ground-Up Build', factor: 1.0 },
      alteration: { label: 'Luxury Renovation & Structural Alteration', factor: 1.15 },
      hydraulics: { label: 'Advanced Fluid Dynamics & Commercial Hydronics', factor: 0.94 },
      roof: { label: 'Heavy Envelope & Roofing Architecture', factor: 0.88 },
    };

    const disc = disciplineMultipliers[discipline] || disciplineMultipliers.residential;

    // Complexity tier
    const complexityMultipliers: Record<string, { label: string; factor: number }> = {
      'class-1': { label: 'Class 1: Stable Rock Formation', factor: 0.88 },
      'class-2': { label: 'Class 2: Expansive Witwatersrand Clay', factor: 1.0 },
      'class-3': { label: 'Class 3: Dolomitic D3 Soil / Sinkhole Hazard', factor: 1.24 },
    };

    const comp = complexityMultipliers[complexityTier] || complexityMultipliers['class-2'];

    // Testing surcharge factor
    const testingFactor = includeEcsaTesting ? 1.05 : 0.98;

    // Adjusted total rate per sqm
    const calculatedRatePerSqm = Math.round(baseRatePerSqm * disc.factor * comp.factor * (testingFactor / 1.05));
    const totalCommitment = Math.round(calculatedRatePerSqm * area);

    // Percentage breakdown as reflected in standard BOQ
    const directMaterials = Math.round(totalCommitment * 0.5436);
    const heavyPlantCranes = Math.round(totalCommitment * 0.2301);
    const forensicEng = Math.round(totalCommitment * 0.1543);
    const sheqCompliance = totalCommitment - (directMaterials + heavyPlantCranes + forensicEng);

    const quoteId = `EST-BOQ-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      quoteId,
      calculatedAt: new Date().toISOString(),
      parameters: {
        disciplineKey: discipline,
        disciplineName: disc.label,
        footprintArea: area,
        complexityTierKey: complexityTier,
        complexityTierName: comp.label,
        includeEcsaTesting: Boolean(includeEcsaTesting),
      },
      breakdown: {
        directMaterials,
        heavyPlantCranes,
        forensicEng,
        sheqCompliance,
      },
      summary: {
        totalContractCommitment: totalCommitment,
        avgRatePerSqm: calculatedRatePerSqm,
        currency: 'ZAR',
        currencySymbol: 'R',
        validityDays: 30,
        standard: 'JBCC Series 2000 Edition 6.2 Pre-feasibility Protocol',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate BOQ estimation calculation.',
      },
      { status: 500 }
    );
  }
}
