'use client';

import React from 'react';

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-bg-layer">
        <img
          src="/assets/hero-rail.jpg"
          alt=""
          aria-hidden="true"
          className="hero-motion hero-bg-img"
          width="1920"
          height="1088"
        />
        <div className="hero-gradient-x"></div>
        <div className="hero-gradient-y"></div>
        <div className="hero-grid-lines grid-lines"></div>
        <div className="rail-streak" style={{ top: '62%', width: '40%', animationDelay: '0s' }}></div>
        <div className="rail-streak" style={{ top: '70%', width: '55%', animationDelay: '0.8s', opacity: 0.6 }}></div>
        <div className="rail-streak" style={{ top: '78%', width: '30%', animationDelay: '1.6s' }}></div>
        <div className="rail-streak" style={{ top: '86%', width: '50%', animationDelay: '2.2s', opacity: 0.5 }}></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-inner">
          <div className="hero-eyebrow-row">
            <span className="hero-eyebrow-line"></span>
            <span className="hero-eyebrow-text">
              Precision engineering · Engineered in India. Built for the world.
            </span>
          </div>
          <h1 className='banner-heading'>
            Engineering Reliability. <br />
            <span className="hero-title-accent">Moving Railways</span> Forward.
          </h1>
          <p className="hero-text">
            AHIL Manufactures- AND Hitech Industries Limited- AHIL is an Indian engineering and manufacturing organization focused on safety critical products and systems for railways and metro applications.
          </p>
        </div>

        <div className="stats-hero">
          <div className="hero-stats-grid">
            <div className="hero-stat-cell">
              <div className="hero-stat-number">2013</div>
              <div className="hero-stat-label">Established</div>
            </div>
            <div className="hero-stat-cell">
              <div className="hero-stat-number">250+</div>
              <div className="hero-stat-label">Skilled professionals</div>
            </div>
            <div className="hero-stat-cell">
              <div className="hero-stat-number">15+</div>
              <div className="hero-stat-label">Active programmes</div>
            </div>
            <div className="hero-stat-cell">
              <div className="hero-stat-number">ISO</div>
              <div className="hero-stat-label">9001 · 14001 · 45001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
