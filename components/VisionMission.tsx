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
    <section ref={sectionRef} className="section vision-mission-section">
      <div className="container vision-mission-container">
        {/* Header Area with Scroll Reveal */}
        <div className={`vm-header-wrap fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
          {/* <div className="vm-badge-number">
            02
          </div> */}
          <h2 className="section-title vm-main-title">
            Vision &amp; Mission
          </h2>
          <p className="vm-main-subtitle">
            Defining AHIL&apos;s purpose, engineering precision, and long-term direction — the driving force behind India&apos;s rolling stock and rail innovation.
          </p>
        </div>

        {/* Dual Card Showcase Container with Staggered Scroll Reveal */}
        <div className={`vm-cards-showcase fade-in-scroll fade-in-scroll-delay-1 ${isVisible ? 'is-visible' : ''}`}>
          {/* Card 1: Vision */}
          <div className="vm-showcase-card">
            {/* <div className="vm-card-img-wrap">
              <img
                src="/assets/about/Vision.webp"
                alt="AHIL Vision — Rail Mobility"
                className="vm-card-img"
              />
            </div> */}
            <div className="vm-card-body">
              {/* <div className="vm-accent-triangle"></div> */}
              <h3 className="vm-card-title">
                Our Vision
              </h3>
              <p className="vm-card-text">
                To build globally competitive railway technologies from India and become a trusted engineering partner for the future of rail mobility.
              </p>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="vm-showcase-card">
            {/* <div className="vm-card-img-wrap">
              <img
                src="/assets/about/Mission.webp"
                alt="AHIL Mission — Precision Manufacturing"
                className="vm-card-img"
              />
            </div> */}
            <div className="vm-card-body">
              {/* <div className="vm-accent-triangle"></div> */}
              <h3 className="vm-card-title">
                Our Mission
              </h3>
              <p className="vm-card-text">
                To engineer and manufacture reliable railway products and systems through innovation, disciplined manufacturing and uncompromising quality — by continuously strengthening our people, technology and engineering capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Brand Mark */}
        <div className={`vm-brand-mark fade-in-scroll fade-in-scroll-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          <span>ENGINEER</span>
          <span>MANUFACTURE</span>
          <span>INNOVATE</span>
          <span>DELIVER</span>
        </div>
      </div>
    </section>
  );
}
