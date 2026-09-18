export interface ProductDetail {
  secondTabLabel: string;
  hasSecondTabContent?: boolean;
  overview: {
    title: string;
    paragraphs: string[];
  };
  secondTab: {
    title: string;
    paragraphs: string[];
    specs?: { label: string; value: string }[];
  };
}

// Splits "Label: Value" strings into a specs table; anything without a colon
// is dropped (shouldn't happen for spec-style entries).
function toSpecs(rows: string[]): { label: string; value: string }[] {
  return rows.map((row) => {
    const idx = row.indexOf(':');
    return { label: row.slice(0, idx).trim(), value: row.slice(idx + 1).trim() };
  });
}

// Generic fallback for products where only an image is available (no written
// content was supplied) — no specifications are invented here.
function basicDetail(name: string, categoryLine: string): ProductDetail {
  return {
    secondTabLabel: 'Category',
    hasSecondTabContent: false,
    overview: {
      title: name,
      paragraphs: [
        `${name} manufactured at AHIL's RDSO and IRIS approved facilities using precision CNC machining, controlled fabrication processes and rigorous in-house quality inspection.`,
      ],
    },
    secondTab: {
      title: 'Category',
      paragraphs: [categoryLine],
    },
  };
}

const LHB_DAMPER_INTRO =
  "Designed for high-speed passenger operations, LHB coach trainsets used in Rajdhani, Shatabdi, Duronto, and Amrit Bharat trains operate at speeds of up to 160 km/h, with axle loads in the range of 16-17 tonnes. These modern coaches are equipped with advanced LHB bogies, incorporating vertical, lateral, and yaw dampers to ensure superior dynamic performance. Working in conjunction with coil springs and secondary air suspension systems, these dampers effectively absorb shocks, suppress vibrations, and minimize lateral forces.";

const VB_DAMPER_INTRO =
  "Train-18, designed and developed by the Integral Coach Factory (ICF), represents India's first semi-high-speed, self-propelled trainset. It is designed to operate at speeds of up to 160 km/h, with an axle load of approximately 17 tonnes. These modern trainsets feature advanced bolster-less bogies, engineered by ICF, and are equipped with a combination of vertical, lateral, and yaw dampers to effectively manage dynamic forces generated during high-speed operation.";

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  'axle-mounted-brake-disc-lhb': basicDetail('Axle Mounted Brake Disc - LHB', 'Braking Products · Segment One'),
  'split-axle-mounted-brake-disc-lhb': basicDetail('Split Axle Mounted Brake Disc - LHB', 'Braking Products · Segment One'),
  'wheel-mounted-brake-disc-vande-bharat': basicDetail('Wheel Mounted Brake Disc - Vande Bharat', 'Braking Products · Segment One'),
  'wheel-mounted-brake-disc-dmrc': basicDetail('Wheel Mounted Brake Disc - DMRC', 'Braking Products · Segment One'),
  'brake-pads-per-pair': basicDetail('Brake Pads Per Pair (200cm2) (LHB Coaches, VB & Metro)', 'Braking Products · Segment One'),
  'l-loco-brake-block': basicDetail('L-LOCO Brake Block', 'Braking Products · Segment One'),
  'k-freight-brake-block': basicDetail('K-Freight Brake Block', 'Braking Products · Segment One'),
  'k-coaches-bmbs-brake-block': basicDetail('K-Coaches BMBS Brake Block', 'Braking Products · Segment One'),
  'k-emu-coaches-brake-block': basicDetail('K-EMU Coaches Brake Block', 'Braking Products · Segment One'),
  'l-freight-coaches-brake-block': basicDetail('L-Freight Coaches (BLC) Brake Block', 'Braking Products · Segment One'),

  'lhb-damper-primary-vertical': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'LHB Damper - Primary Vertical',
      paragraphs: [
        LHB_DAMPER_INTRO,
        'The Primary Vertical Damper in LHB Coaches is a critical hydraulic shock absorber integrated within the primary suspension system, located between the wheelsets and the bogie frame. Its primary function is to dampen vertical vibrations and oscillations generated at the wheel-track interface, ensuring smooth transmission of forces to the bogie structure. This results in enhanced ride stability, improved passenger comfort, and safe operation at high speeds.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.30 m/s', 'Force: 4250 N', 'No. of Revolutions: 115 min-1']),
    },
  },
  'lhb-damper-secondary-vertical-ac': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'LHB Damper - Secondary Vertical AC',
      paragraphs: [
        LHB_DAMPER_INTRO,
        'The Secondary Vertical Damper in LHB AC Coaches is a critical hydraulic shock absorber installed within the secondary suspension system, positioned between the coach body and the bogie frame. Its primary role is to effectively dampen vertical vibrations and oscillations, preventing excessive coach body movement and ensuring superior ride quality. This enables safe, smooth, and comfortable passenger travel at operating speeds of up to 160 km/h.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.20 m/s', 'Force: 3500 N', 'No. of Revolutions: 76 min-1']),
    },
  },
  'lhb-damper-secondary-vertical-non-ac': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'LHB Damper - Secondary Vertical Non-AC',
      paragraphs: [
        LHB_DAMPER_INTRO,
        'The Secondary Vertical Damper in LHB Non AC Coaches is a critical hydraulic shock absorber installed within the secondary suspension system, positioned between the coach body and the bogie frame. Its primary role is to effectively dampen vertical vibrations and oscillations, preventing excessive coach body movement and ensuring superior ride quality. This enables safe, smooth, and comfortable passenger travel at operating speeds of up to 160 km/h.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.10 m/s', 'Force: 405 Kg', 'No. of Revolutions: 38 min-1']),
    },
  },
  'lhb-damper-sec-lateral-air-spring': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'LHB Damper - Sec Lateral Air Spring',
      paragraphs: [
        LHB_DAMPER_INTRO,
        'The Secondary Lateral Damper in LHB Air Spring Coaches is a critical component of the secondary suspension system, positioned between the bogie frame and the train undercarriage (coach body). Its primary function is to control and restrict side-to-side (lateral) movements and high-speed oscillations, ensuring superior ride quality, enhanced passenger comfort, and stable train operation — particularly during high-speed runs and on curved tracks.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.30 m/s', 'Force: 8000 N', 'No. of Revolutions: 115 min-1']),
    },
  },
  'lhb-damper-sec-lateral-all-coils': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'LHB Damper - Sec Lateral All Coils',
      paragraphs: [
        LHB_DAMPER_INTRO,
        'The Secondary Lateral Damper in LHB All Coil Coaches is a critical component of the secondary suspension system, positioned between the bogie frame and the train undercarriage (coach body). Its primary function is to control and restrict side-to-side (lateral) movements and high-speed oscillations, ensuring superior ride quality, enhanced passenger comfort, and stable train operation — particularly during high-speed runs and on curved tracks.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.30 m/s', 'Force: 8000 N', 'No. of Revolutions: 115 min-1']),
    },
  },
  'lhb-damper-yaw': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'LHB Damper - Yaw',
      paragraphs: [
        LHB_DAMPER_INTRO,
        'The Yaw Dampers used in LHB Coaches trains are critical secondary suspension shock absorbers designed to control dynamic lateral behaviour of the bogie. Their primary function is to suppress hunting (sinusoidal) oscillations, ensuring that the wheels remain properly aligned with the track. This significantly enhances ride stability, passenger comfort, and structural safety, especially during high-speed operations.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.10 m/s', 'Force: 11000 N', 'No. of Revolutions: 76 min-1']),
    },
  },
  'vb-primary-vertical-damper': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'VB Primary Vertical Damper',
      paragraphs: [
        VB_DAMPER_INTRO,
        'The Primary Vertical Damper in Vande Bharat Express is a critical hydraulic shock absorber integrated within the primary suspension system, located between the wheelsets and the bogie frame. Its primary function is to dampen vertical vibrations and oscillations generated at the wheel-track interface, ensuring smooth transmission of forces to the bogie structure.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.1 / 0.30 m/s', 'Force: 2000 / 6000 N', 'No. of Revolutions: 38.2 / 114.5 RPM']),
    },
  },
  'vb-secondary-lateral-damper': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'VB Secondary Lateral Damper',
      paragraphs: [
        VB_DAMPER_INTRO,
        'The Secondary Lateral Damper in Vande Bharat Express is a critical component of the secondary suspension system, positioned between the bogie frame and the train undercarriage (coach body). Its primary function is to control and restrict side-to-side (lateral) movements and high-speed oscillations, ensuring superior ride quality, enhanced passenger comfort, and stable train operation.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.1 / 0.30 m/s', 'Force: 4500 / 7800 N', 'No. of Revolutions: 38.2 / 114.5 RPM']),
    },
  },
  'vb-secondary-vertical-damper': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'VB Secondary Vertical Damper',
      paragraphs: [
        VB_DAMPER_INTRO,
        'The Secondary Vertical Damper in Vande Bharat Express is a critical hydraulic shock absorber installed within the secondary suspension system, positioned between the coach body and the bogie frame. Its primary role is to effectively dampen vertical vibrations and oscillations, preventing excessive coach body movement and ensuring superior ride quality.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.1 / 0.30 m/s', 'Force: 2000 / 6000 N', 'No. of Revolutions: 38.2 / 114.5 RPM']),
    },
  },
  'vb-yaw-damper': {
    secondTabLabel: 'Test Parameters',
    overview: {
      title: 'VB Yaw Damper',
      paragraphs: [
        VB_DAMPER_INTRO,
        'The Yaw Dampers used in Vande Bharat Express trains are critical secondary suspension shock absorbers designed to control dynamic lateral behaviour of the bogie. Their primary function is to suppress hunting (sinusoidal) oscillations, ensuring that the wheels remain properly aligned with the track.',
      ],
    },
    secondTab: {
      title: 'Test Parameters',
      paragraphs: [],
      specs: toSpecs(['Velocity: 0.03 / 0.10 m/s', 'Force: 9500 / 11000 N', 'No. of Revolutions: 22.8 / 76.4 RPM']),
    },
  },

  'rmpu-15tr-emu': {
    secondTabLabel: 'Specifications',
    overview: {
      title: 'EMU RMPU (Passengers HVAC - 15TR)',
      paragraphs: [
        'A high-capacity HVAC system for passenger coaches, offering a cooling capacity of 52.5 kW (15 TR). It is designed to operate in ambient temperatures up to 38°C. The system complies with EN 14750 noise standards and IEC 61373 vibration standards. It features SS 304-grade housing and microprocessor-based controls in accordance with RDSO specifications.',
      ],
    },
    secondTab: {
      title: 'Specifications',
      paragraphs: [],
      specs: toSpecs([
        'Cooling capacity: 52.5 kW (15 TR)',
        'Dimensions: 3400 × 2065 × 405 mm',
        'Weight: 890 ± 5% kg approx.',
        'Refrigerant: R-407C',
      ]),
    },
  },
  'heat-exchanger-coil': {
    secondTabLabel: 'Category',
    overview: {
      title: 'Heat Exchanger Coil',
      paragraphs: [
        'Precision-Engineered Coils. Application-Driven Performance. Manufactured with 7 mm and 9.525 mm Tube OD, with geometry Φ7×36R×2P (12.7 × 21) & Φ9.52×24R×2P (22 × 25.4) respectively.',
        'Application-specific solutions designed around exact customer requirements, with disciplined manufacturing and committed timelines that keep projects moving. Proven engineering capabilities across heat exchangers, HVAC systems and railway/mobility RMPUs, backed by rigorous quality processes and compliance with demanding industry standards.',
      ],
    },
    secondTab: {
      title: 'Category',
      paragraphs: ['HVAC Products · Segment Three'],
    },
  },
  'clw-cab-ac-2ton': {
    secondTabLabel: 'Specifications',
    overview: {
      title: 'CLW CAB AC 2Ton',
      paragraphs: [
        'A roof-mounted air conditioning system for electric locomotive cabs, designed for extreme service conditions. It offers 7.0 kW cooling and 2.0 kW heating capacity, operates in ambient temperatures from -4°C to 50°C, and meets IEC 61373 shock and vibration standards. The unit features SS 304 grade housing and microprocessor-based controls as per CLW/RDSO, Indian Railways specifications.',
      ],
    },
    secondTab: {
      title: 'Specifications',
      paragraphs: [],
      specs: toSpecs([
        'Cooling capacity: 7 kW (2 TR)',
        'Dimensions: 1308 × 1061 × 291 mm',
        'Weight: 135 ± 5% kg approx.',
        'Refrigerant: R-407C',
      ]),
    },
  },

  'iv-coupler': basicDetail('IV Coupler', 'Other Products · Segment Four'),

  'main-fiba-aha00601': {
    secondTabLabel: 'Design Features',
    overview: {
      title: 'FIBA (Failure Indication and Brake Application Device)',
      paragraphs: [
        'Failure Indication and Brake Application Device having the feature to actuate the application of brakes in the event of air spring failure, which will immediately reduce the speed of the train and ultimately cause the train to stop. Indicators of the respective failed air spring will turn red and a hissing sound will indicate the location.',
        'The equipment senses the air pressure of the respective air springs of the same bogie and applies brakes across the complete train if the air pressure falls below 1 ± 0.1 Kg/Cm2. When any of the four bellows in a coach ruptures, only the Air Spring Failure Indication Device monitoring that particular bogie will actuate — the FIBA device in other bogies and other coaches will not actuate.',
        'FIBA Indicator: used in the FIBA Device to indicate air spring failure. One coach has 4 indicators which turn from green to red when the device is actuated. The indicator can be reset by closing the isolating cock in the BP line and rotating the resetting knob 90° clockwise, holding for 5 seconds.',
      ],
    },
    secondTab: {
      title: 'Advanced Design Features',
      paragraphs: [
        'Spring-loaded resetting mechanism retains its position if not reset properly, and self-retains after a proper reset.',
        'Made with Aluminum alloy, Stainless steel, and other high-grade engineering materials.',
        'Reliable and low maintenance due to excellent design features.',
        'Light weight, easy to mount and user friendly.',
        'Environment friendly, compact design.',
      ],
    },
  },

  'asce': basicDetail('ASCE', 'Other Products · Segment Five'),
};
