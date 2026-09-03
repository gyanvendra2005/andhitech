'use client';

import React from 'react';

export default function Ticker() {
  const tickerItems = [
    'Brake Discs',
    'RMPU HVAC',
    'Air Suspension',
    'LHB Dampers',
    'Pantographs',
    'IV Couplers',
    'Plug Doors — Vande Bharat',
    'Tungsten Carbide Tamping Tools',
    'Brake Blocks',
  ];

  return (
    <div className="bg-navy text-white overflow-hidden border-y border-white/10">
      <div className="flex ticker-track whitespace-nowrap py-5">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            <span className="font-display text-sm md:text-base font-semibold tracking-wide uppercase">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
