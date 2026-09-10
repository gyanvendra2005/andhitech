'use client';

import React from 'react';

export default function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities-section">
      <div className="capabilities-grid-lines grid-lines" aria-hidden="true"></div>
      <div className="container capabilities-inner">
        <div className="capabilities-header">
          <div className="capabilities-eyebrow-row">
            <span className="capabilities-eyebrow-line"></span>
            <span className="capabilities-eyebrow-text">What we do</span>
          </div>
          <h2 className="section-title capabilities-title">
            End-to-end engineering, <br />
            <span className="capabilities-title-accent">under one roof.</span>
          </h2>
        </div>
        <div className="capabilities-cards-grid">
          <div className="capabilities-card">
            <h3 className="underroof-card-heading">Engineering and Product Development</h3>
            <p className="capabilities-card-text">
              From customers requirement and design review to product development prototyping and industrialization. Engineering solution built for real railway operating conditions.
            </p>
          </div>

          <div className="capabilities-card">
            <h3 className="underroof-card-heading">Precision Manufacturing</h3>
            <p className="capabilities-card-text">
              Integrated machining, fabrication assembly and controlled manufacturing processes, supported by robust process control and complete traceability
            </p>
          </div>

          <div className="capabilities-card">
            <h3 className="underroof-card-heading">Quality and Validation</h3>
            <p className="capabilities-card-text">
              Rigorous inspection, testing and validation throughout the manufacturing cycle to ensure consistent quality, performance and reliability aligned with RDSO EN-?? Standard and IRIS- grade quality standards.
            </p>
          </div>

          <div className="capabilities-card">
            <h3 className="underroof-card-heading">Supply and Lifecycle Support</h3>
            <p className="capabilities-card-text">
              From serial production and delivery to field support and continuous improvement, we stay connected throughout the product life cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
