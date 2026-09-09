'use client';

import React from 'react';

interface ContactProps {
  onOpenQuote: () => void;
}

export default function Contact({ onOpenQuote }: ContactProps) {
  return (
    <section id="contact" className="contact-cta-section">
      <div className="contact-cta-grid-lines grid-lines" aria-hidden="true"></div>
      <div className="contact-cta-glow"></div>
      <div className="contact-cta-inner">
        <div className="contact-cta-left">
          <div className="contact-cta-eyebrow-row">
            <span className="contact-cta-eyebrow-line"></span>
            <span className="contact-cta-eyebrow-text">Partner with AHIL</span>
          </div>
          <h2 className="contact-cta-title">
            Let&apos;s engineer <span className="contact-cta-title-accent">what comes next.</span>
          </h2>
          <p className="contact-cta-desc">
            Share your specs, timelines and volumes — our engineering team will respond within one working day with a technical proposal and indicative pricing.
          </p>
        </div>
        <div className="contact-cta-right">
          <div className="contact-cta-card">
            <div className="contact-cta-card-label">Get in touch</div>
            <div className="contact-cta-card-list">
              <a href="mailto:sales@andhitech.in" className="contact-cta-item">
                <div className="contact-cta-item-label">Sales &amp; partnerships</div>
                <div className="contact-cta-item-value">
                  sales@andhitech.in
                </div>
              </a>
              <div className="contact-cta-item">
                <div className="contact-cta-item-label">Corporate office</div>
                <div className="contact-cta-item-value">
                  +91 · Available on request
                </div>
              </div>
              <a href="https://andhitech.in" className="contact-cta-item">
                <div className="contact-cta-item-label">Website</div>
                <div className="contact-cta-item-value">
                  andhitech.in
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
