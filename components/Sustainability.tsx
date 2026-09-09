'use client';

import React from 'react';

export default function Sustainability() {
  return (
    <section id="sustainability" className="sustainability-section">
      <div className="sustainability-inner">
        <div className="sustainability-grid">
          {/* Left Column: Quality Assurance */}
          <div className="sustainability-left">
            {/* Quality Image */}
            <div className="sustainability-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop"
                alt="Quality Assurance Automotive Testing"
                className="sustainability-img"
              />
            </div>

            {/* Content Area */}
            <div className="sustainability-left-content">
              <div className="sustainability-eyebrow">
                QUALITY ASSURANCE
              </div>

              <h2 className="sustainability-left-title">
                Zero-Defect Quality Control &amp; Precision Inspection Systems.
              </h2>

              <div>
                <a href="#contact" className="btn-red-pill">
                  <span className="btn-circle-icon">
                    &rsaquo;
                  </span>
                  <span>Know more</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sustainability Dark Navy Card */}
          <div className="sustainability-card">
            <div className="sustainability-card-content">
              <h2 className="sustainability-card-title">
                Sustainability
              </h2>

              <p className="sustainability-card-text">
                Our processes and techniques are designed to minimize the energy and resource consumption as well as minimize the waste produced as part of the moulding process.
              </p>

              <div>
                <a href="#contact" className="btn-red-pill">
                  <span className="btn-circle-icon">
                    &rsaquo;
                  </span>
                  <span>Know more</span>
                </a>
              </div>
            </div>

            {/* Bottom Accent Border Line inside Card */}
            <div className="sustainability-card-divider" />
          </div>
        </div>
      </div>
    </section>
  );
}
