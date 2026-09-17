'use client';

import React from 'react';

const CLIENT_LOGOS = [
  { name: 'Indian Railways', file: 'indian railway.webp' },
  { name: 'DMRC', file: 'DM.webp' },
  { name: 'MCF Raebareli', file: 'MCF.webp' },
  { name: 'BHEL', file: 'BHEL.webp' },
  { name: 'Vande Bharat', file: 'Vande bahrat.webp' },
  { name: 'MEDHA', file: 'MEDHA.webp' },
  { name: 'IRL', file: 'IRL.webp' },
  { name: 'RCG', file: 'RCG.webp' },
];

export default function Clients() {
  return (
    <section id="clients" className="section clients-section">
      <div className="container clients-inner">
        <div className="clients-header fade-in-scroll">
          <h2 className="section-title clients-title">
            Our Customers
          </h2>
          <p className="clients-subtitle">
            Trusted across India&apos;s rail and mobility ecosystem.
          </p>
        </div>
        <div className="clients-slider-viewport fade-in-scroll fade-in-scroll-delay-1">
          <div className="clients-slider-track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
              <div key={`${client.name}-${idx}`} className="clients-slide">
                <img
                  src={`/assets/logo/${encodeURIComponent(client.file)}`}
                  alt={client.name}
                  className="clients-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
