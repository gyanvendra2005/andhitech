'use client';

import React from 'react';

export default function Facility() {
  return (
    <section id="facility" className="section facility-section">
      <img
        src="/assets/MANUFACTURING EXCELLENCE.webp"
        alt=""
        aria-hidden="true"
        className="facility-bg-img"
        loading="lazy"
      />
      <div className="container facility-inner">
        <div className="facility-header fade-in-scroll">
          <div className="facility-eyebrow-row">
            <span className="facility-eyebrow-line"></span>
            <span className="facility-eyebrow-text">MANUFACTURING EXCELLENCE</span>
          </div>
          <h2 className="section-title facility-title">
            Precision manufacturing built for<br />
            <span className="facility-title-accent"> Railway reliability.</span>
          </h2>
          <p className="facility-desc">
            CNC machining matter—Our manufacturing capabilities bring together precision machining, fabrication assembly, inspection and testing for demanding railway applications.
          </p>
        </div>

        <div className="facility-cards-grid fade-in-scroll fade-in-scroll-delay-1">
          <div className="facility-card facility-card-stat">
            <div className="facility-stat-number">50k+</div>
            <div className="facility-stat-label">Sq. ft. shop floor</div>
          </div>
          <div className="facility-card">
            <h3 className="facility-card-title">Precision machining</h3>
            <p className="facility-card-text">
              CNC, VT machining for safety critical railway components.
            </p>
          </div>
          <div className="facility-card">
            <h3 className="facility-card-title">Assembly &amp; Integration</h3>
            <p className="facility-card-text">
              Controlled assembly for components and increasingly complex railway systems.
            </p>
          </div>
          <div className="facility-card">
            <h3 className="facility-card-title">Inspection and Metrology</h3>
            <p className="facility-card-text">
              Dimensional inspection and measurement systems supporting process and final quality control.
            </p>
          </div>
          <div className="facility-card">
            <h3 className="facility-card-title">Testing and validation</h3>
            <p className="facility-card-text">
              Product specific testing and validation to verify performance before dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
