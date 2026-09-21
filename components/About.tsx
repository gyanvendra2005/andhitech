'use client';

import React from 'react';

export default function About() {
  return (
    <section className="section about-section">
      <div className="container about-container">
        <div className="about-left fade-in-scroll">
          <div className="about-badge">
            <span className="about-badge-line"></span>
            <span className="about-badge-text">About AHIL</span>
          </div>
          <h2 className="section-title about-title">
            Engineered with <span className="gold-underline">excellence,</span><br />
            Build for future.
          </h2>
        </div>
        <div className="about-right fade-in-scroll fade-in-scroll-delay-1">
          <p className="about-text">
            Established in 2013, <strong className="text-navy">AND Hitech Industries Limited</strong> is an RDSO registered and UIC approved organization has grown from a precision component manufacturer into multidisciplinary railway engineering organization serving Indian Railways, metro network, rolling stock manufacturers and public sector organizations. Our capabilities span product development, precision manufacturing, assembly, testing quality assurance and lifecycle support allowing us to take greater responsibility across the product journey.
          </p>
          <p className="about-text">
            From specialized railway components to increasingly integrated system, our portfolio today spans from Braking, Suspension, HVAC, railway Doors, Electrical, Inter vehicular solution and track maintenance products. AHIL brings together engineering, manufacturing, assembly, testing and quality assurance to support customers from product development and localization through serial production and lifecycle support.
          </p>
          <div className="about-stats fade-in-scroll fade-in-scroll-delay-2">
            <div className="about-stat">
              <div className="about-stat-title">RDSO approved</div>
              <p className="about-stat-text">Products qualified to Indian Railways specifications.</p>
            </div>
            <div className="about-stat">
              <div className="about-stat-title">IRIS-grade quality</div>
              <p className="about-stat-text">Certified 9001 · 14001 · 45001 management systems.</p>
            </div>
            <div className="about-stat">
              <div className="about-stat-title">On-time delivery</div>
              <p className="about-stat-text">Integrated planning and vendor network for schedule reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
