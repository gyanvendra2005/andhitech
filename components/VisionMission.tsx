'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="vision-mission-section">
      <div className="vision-mission-container">
        {/* Header Area with Scroll Reveal */}
        <div className={`vm-header-wrap fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
          {/* <div className="vm-badge-number">
            02
          </div> */}
          <h2 className="vm-main-title">
            VISION &amp; MISSION
          </h2>
          <p className="vm-main-subtitle">
            Defining AHIL&apos;s purpose, engineering precision, and long-term direction — the driving force behind India&apos;s rolling stock and rail innovation.
          </p>
        </div>

        {/* Dual Card Showcase Container with Staggered Scroll Reveal */}
        <div className={`vm-cards-showcase fade-in-scroll fade-in-scroll-delay-1 ${isVisible ? 'is-visible' : ''}`}>
          {/* Card 1: Vision */}
          <div className="vm-showcase-card">
            <div className="vm-card-img-wrap">
              <img
                src="/assets/hero-rail.jpg"
                alt="AHIL Vision — Rail Mobility"
                className="vm-card-img"
              />
            </div>
            <div className="vm-card-body">
              <div className="vm-accent-triangle"></div>
              <h3 className="vm-card-title">
                Our Vision
              </h3>
              <p className="vm-card-text">
                To lead the shift in rail mobility by engineering next-generation, high-speed rolling stock systems — powering Vande Bharat, Indian Railways, and global transit networks with zero-defect precision and reliability.
              </p>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="vm-showcase-card">
            <div className="vm-card-img-wrap">
              <img
                src="/assets/facility.jpg"
                alt="AHIL Mission — Precision Manufacturing"
                className="vm-card-img"
              />
            </div>
            <div className="vm-card-body">
              <div className="vm-accent-triangle"></div>
              <h3 className="vm-card-title">
                Our Mission
              </h3>
              <p className="vm-card-text">
                To manufacture high-reliability, RDSO-certified components and HVAC solutions that maximize passenger safety, comfort, and operational efficiency through continuous innovation, state-of-the-art testing, and strict quality compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Brand Mark */}
        {/* <div className={`vm-brand-mark fade-in-scroll fade-in-scroll-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          AHIL · AND HITECH
        </div> */}
      </div>
    </section>
  );
}
