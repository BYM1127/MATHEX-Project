import { NextResponse } from 'next/server';

export async function GET() {
  const telemetryData = {
    systemStatus: 'OPERATIONAL_LIVE',
    timestamp: new Date().toISOString(),
    geographicalDatum: {
      location: 'Johannesburg Metro Core // Gauteng',
      latitude: '-26.2041° S',
      longitude: '28.0473° E',
      elevationMetersAMSL: 1753,
    },
    depotMetrics: {
      name: 'Main Reef Road Staging Yard // Industrial West',
      surfaceAreaSqm: 18000,
      readinessIndexPercentage: 98.4,
      downtimePercentage: 1.6,
      fuelReservesLiters: 45000,
      dispatchResponseMinutes: 90,
      activeMachineryFleet: {
        earthmovingAndPilers: 14,
        continuousBatchAgitators: 22,
        mobileAndTowerCranes: 8,
        totalHeavyUnits: 44,
      },
    },
    complianceIndices: {
      cidbTier: '9GB / 9CE UNRESTRICTED',
      nhbrcRegNumber: '30002841',
      ecsaPrEngSurveillance: 'ACTIVE',
      bbbeeStatus: 'LEVEL 1 CONTRIBUTOR (135% PROCUREMENT)',
      ltifr: 0.0,
      consecutiveYearsZeroHarm: 10,
      toleranceBenchmarkMm: '±1.5mm',
    },
    weatherTelemetry: {
      condition: 'Clear Technical Visibility',
      windSpeedKmh: 14,
      relativeHumidity: 32,
      groundVibrationHz: 0.04,
    },
  };

  return NextResponse.json(telemetryData);
}
