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
    <div className="ticker-section">
      <div className="ticker-track ticker-inner">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="ticker-item">
            <span className="ticker-dot"></span>
            <span className="ticker-label">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
