'use client';

import React from 'react';

export default function ImpactGrid() {
  return (
    <section className="impact-grid-section">
      <div className="impact-grid-container">
        {/* Top Row: 2 Large Cards */}
        <div className="impact-row-top">
          <div className="impact-card">
            <h3 className="impact-metric">100+</h3>
            <p className="impact-text">
              Skilled engineers, technicians, and precision manufacturing specialists dedicated to rail engineering excellence.
            </p>
          </div>

          <div className="impact-card">
            <h3 className="impact-metric">50k+ sq. ft.</h3>
            <p className="impact-text">
              State-of-the-art manufacturing plant equipped with CNC machining centers, NDT testing labs, and assembly lines.
            </p>
          </div>
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="impact-row-bottom">
          <div className="impact-card">
            <h3 className="impact-metric">15+</h3>
            <p className="impact-text">
              Active railway and metro programmes delivered across India.
            </p>
          </div>

          <div className="impact-card">
            <h3 className="impact-metric">500k+</h3>
            <p className="impact-text">
              Precision components delivered for LHB coaches &amp; Vande Bharat fleets.
            </p>
          </div>

          <div className="impact-card">
            <h3 className="impact-metric">100%</h3>
            <p className="impact-text">
              RDSO approved quality compliance &amp; complete component traceability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
