export interface CatalogProduct {
  slNo: number;
  slug: string;
  name: string;
  category: 'Braking Products' | 'Suspension Products' | 'HVAC Products' | 'Other Products';
  segment: 'One' | 'Two' | 'Three' | 'Four' | 'Five';
  image: string;
}

export const PRODUCT_CATEGORIES = [
  'All',
  'Braking Products',
  'Suspension Products',
  'HVAC Products',
  'Other Products',
] as const;

export const PRODUCT_CATALOG: CatalogProduct[] = [
  { slNo: 1, slug: 'axle-mounted-brake-disc-lhb', name: 'Axle Mounted Brake Disc - LHB', category: 'Braking Products', segment: 'One', image: '/assets/products/axle-mounted-brake-disc-lhb.jpg' },
  { slNo: 2, slug: 'split-axle-mounted-brake-disc-lhb', name: 'Split Axle Mounted Brake Disc - LHB', category: 'Braking Products', segment: 'One', image: '/assets/products/split-axle-mounted-brake-disc-lhb.jpg' },
  { slNo: 3, slug: 'wheel-mounted-brake-disc-vande-bharat', name: 'Wheel Mounted Brake Disc - Vande Bharat', category: 'Braking Products', segment: 'One', image: '/assets/products/wheel-mounted-brake-disc-vande-bharat.jpg' },
  { slNo: 4, slug: 'wheel-mounted-brake-disc-dmrc', name: 'Wheel Mounted Brake Disc - DMRC', category: 'Braking Products', segment: 'One', image: '/assets/products/wheel-mounted-brake-disc-dmrc.jpg' },
  { slNo: 5, slug: 'brake-pads-per-pair', name: 'Brake Pads Per Pair (200cm2) (LHB Coaches, VB & Metro)', category: 'Braking Products', segment: 'One', image: '/assets/products/brake-pads-per-pair.jpg' },
  { slNo: 6, slug: 'l-loco-brake-block', name: 'L-LOCO Brake Block', category: 'Braking Products', segment: 'One', image: '/assets/products/l-loco-brake-block.jpg' },
  { slNo: 7, slug: 'k-freight-brake-block', name: 'K-Freight Brake Block', category: 'Braking Products', segment: 'One', image: '/assets/products/k-freight-brake-block.webp' },
  { slNo: 8, slug: 'k-coaches-bmbs-brake-block', name: 'K-Coaches BMBS Brake Block', category: 'Braking Products', segment: 'One', image: '/assets/products/k-coaches-bmbs-brake-block.webp' },
  { slNo: 9, slug: 'k-emu-coaches-brake-block', name: 'K-EMU Coaches Brake Block', category: 'Braking Products', segment: 'One', image: '/assets/products/k-emu-coaches-brake-block.webp' },
  { slNo: 10, slug: 'l-freight-coaches-brake-block', name: 'L-Freight Coaches (BLC) Brake Block', category: 'Braking Products', segment: 'One', image: '/assets/products/l-freight-coaches-brake-block.webp' },
  { slNo: 11, slug: 'lhb-damper-primary-vertical', name: 'LHB Damper - Primary Vertical', category: 'Suspension Products', segment: 'Two', image: '/assets/products/lhb-damper-primary-vertical.jpg' },
  { slNo: 12, slug: 'lhb-damper-secondary-vertical-ac', name: 'LHB Damper - Secondary Vertical AC', category: 'Suspension Products', segment: 'Two', image: '/assets/products/lhb-damper-secondary-vertical-ac.jpg' },
  { slNo: 13, slug: 'lhb-damper-secondary-vertical-non-ac', name: 'LHB Damper - Secondary Vertical Non-AC', category: 'Suspension Products', segment: 'Two', image: '/assets/products/lhb-damper-secondary-vertical-non-ac.jpg' },
  { slNo: 14, slug: 'lhb-damper-sec-lateral-air-spring', name: 'LHB Damper - Sec Lateral Air Spring', category: 'Suspension Products', segment: 'Two', image: '/assets/products/lhb-damper-sec-lateral-air-spring.jpg' },
  { slNo: 15, slug: 'lhb-damper-sec-lateral-all-coils', name: 'LHB Damper - Sec Lateral All Coils', category: 'Suspension Products', segment: 'Two', image: '/assets/products/lhb-damper-sec-lateral-all-coils.jpg' },
  { slNo: 16, slug: 'lhb-damper-yaw', name: 'LHB Damper - Yaw', category: 'Suspension Products', segment: 'Two', image: '/assets/products/lhb-damper-yaw.jpg' },
  { slNo: 17, slug: 'vb-primary-vertical-damper', name: 'VB Primary Vertical Damper', category: 'Suspension Products', segment: 'Two', image: '/assets/products/vb-primary-vertical-damper.jpg' },
  { slNo: 18, slug: 'vb-secondary-lateral-damper', name: 'VB Secondary Lateral Damper', category: 'Suspension Products', segment: 'Two', image: '/assets/products/vb-secondary-lateral-damper.jpg' },
  { slNo: 19, slug: 'vb-secondary-vertical-damper', name: 'VB Secondary Vertical Damper', category: 'Suspension Products', segment: 'Two', image: '/assets/products/vb-secondary-vertical-damper.jpg' },
  { slNo: 20, slug: 'vb-yaw-damper', name: 'VB Yaw Damper', category: 'Suspension Products', segment: 'Two', image: '/assets/products/vb-yaw-damper.jpg' },
  { slNo: 21, slug: 'rmpu-15tr-emu', name: 'RMPU 15TR (EMU)', category: 'HVAC Products', segment: 'Three', image: '/assets/products/rmpu-15tr-emu.jpg' },
  { slNo: 22, slug: 'heat-exchanger-coil', name: 'Heat Exchanger Coil', category: 'HVAC Products', segment: 'Three', image: '/assets/products/heat-exchanger-coil.jpg' },
  { slNo: 23, slug: 'clw-cab-ac-2ton', name: 'CLW CAB AC 2Ton', category: 'HVAC Products', segment: 'Three', image: '/assets/products/clw-cab-ac-2ton.jpg' },
  { slNo: 24, slug: 'iv-coupler', name: 'IV Coupler', category: 'Other Products', segment: 'Four', image: '/assets/products/iv-coupler.webp' },
  { slNo: 25, slug: 'main-fiba-aha00601', name: 'Main FIBA (AHA00601)', category: 'Other Products', segment: 'Five', image: '/assets/products/main-fiba-aha00601.webp' },
  { slNo: 26, slug: 'asce', name: 'ASCE', category: 'Other Products', segment: 'Five', image: '/assets/products/asce.webp' },
];
