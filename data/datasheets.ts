export interface ProductDatasheet {
  title: string;
  category: string;
  description: string;
  overview: string;
  specs: Record<string, string>;
  compliance: string[];
}

export const DATASHEETS: Record<string, ProductDatasheet> = {
  'brake-discs': {
    title: 'Axle & Wheel Mounted Brake Discs',
    category: 'Braking Systems',
    description: 'Precision-machined discs engineered for LHB coaches, Vande Bharat and metro rolling stock — tested for thermal fatigue and long service life.',
    overview: 'High-performance brake discs designed to absorb extreme kinetic energy during braking cycles at speeds up to 200 km/h. Engineered with optimized thermal ventilation vanes to reduce wear and prevent thermal fatigue cracking.',
    specs: {
      'Material Specification': 'High-alloy Cast Iron / Forged Steel',
      'Diameter': '590 mm / 640 mm standard',
      'Operating Speed': 'Up to 200 km/h',
      'Dynamic Balance': 'ISO 1940 Grade G2.5',
      'Quality Standard': 'RDSO / EN 14535 compliant',
    },
    compliance: ['RDSO Approved', 'EN 14535', 'UIC 541-3'],
  },
  'hvac-rmpu': {
    title: 'Roof-Mounted Package Units (RMPU)',
    category: 'HVAC',
    description: 'Compact HVAC for LHB AC coaches and locomotive cabins — energy-efficient climate control certified for harsh operating environments.',
    overview: 'Fully automatic Roof-Mounted Package Air Conditioning Unit designed for extreme Indian ambient temperatures up to 55°C. Features dual independent refrigeration circuits for 100% operational redundancy.',
    specs: {
      'Cooling Capacity': '7.0 TR to 14.0 TR per coach',
      'Airflow Rate': '4,000 - 5,000 m³/h',
      'Refrigerant': 'R134a / R407C Eco-Friendly',
      'Casing Material': 'Stainless Steel Weatherproof Enclosure',
      'Control System': 'Micro-processor based controller with RS485',
    },
    compliance: ['RDSO Spec EL/7/1/RMPU', 'EN 14750', 'ISO 14001'],
  },
  'suspension': {
    title: 'Air Suspension & LHB Dampers',
    category: 'Ride Comfort',
    description: 'Air suspension control equipment and shock absorbers delivering ride comfort, stability and predictable dynamic response.',
    overview: 'Advanced secondary air suspension systems equipped with automatic leveling valves and high-durability hydraulic dampers engineered to maintain smooth ride index on passenger coaches.',
    specs: {
      'Operating Pressure': '4.5 to 7.0 bar',
      'Max Axle Load': '17.0 Tonnes',
      'Height Control Precision': '± 3 mm under dynamic load',
      'Damping Characteristics': 'Adjustable hydraulic vertical & yaw damping',
    },
    compliance: ['RDSO Spec C-K406', 'UIC 515-4', 'EN 13597'],
  },
  'pantographs': {
    title: 'Spring-Type Pantographs',
    category: 'Traction',
    description: 'High-speed pantographs and IV couplers for reliable current collection and electrical linking between rail cars.',
    overview: 'Aerodynamically optimized single-arm spring pantograph for reliable 25kV OLE current collection at speeds up to 200 km/h, equipped with Auto-Drop Device (ADD) safety mechanism.',
    specs: {
      'Nominal Voltage': '25 kV AC 50 Hz',
      'Continuous Current': '1,000 A',
      'Working Height': '4.8 m - 6.8 m',
      'Collector Head': 'Carbon strip with wear sensor',
    },
    compliance: ['IEC 61133', 'EN 50206-1', 'RDSO Traction Standard'],
  },
};
