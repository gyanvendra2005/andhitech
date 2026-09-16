'use client';

import React from 'react';

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
        <div className="clients-grid fade-in-scroll fade-in-scroll-delay-1">
          <div className="clients-cell">
            <span className="clients-name">Indian Railways</span>
          </div>
          <div className="clients-cell">
            <span className="clients-name">ICF Chennai</span>
          </div>
          <div className="clients-cell">
            <span className="clients-name">RCF Kapurthala</span>
          </div>
          <div className="clients-cell">
            <span className="clients-name">MCF Raebareli</span>
          </div>
          <div className="clients-cell">
            <span className="clients-name">DMRC</span>
          </div>
          <div className="clients-cell">
            <span className="clients-name">BHEL</span>
          </div>
          <div className="clients-cell">
            <span className="clients-name">Vande Bharat</span>
          </div>
          <div className="clients-cell">
            <span className="clients-name">Kolkata Metro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
