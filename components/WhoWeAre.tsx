'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section who-we-are-section">
      <div className="container who-we-are-container">
        {/* Left Side Eyebrow Badge with Scroll Reveal */}
        <div className={`about-badge who-we-are-left-title fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
          <span className="about-badge-line"></span>
          <span className="about-badge-text">About AHIL</span>
        </div>

        {/* Right Side Content with Scroll Reveal */}
        <div className="who-we-are-img-cont">
          <div className="who-we-are-img-wrap">
            <img className="who-we-are-img" src="/assets/about/Who%20we%20are.webp" alt="AHIL Facility" />
          </div>
          <div className="who-we-are-cont">
            <h2 className="section-title who-we-are-heading">
              Who we are
            </h2>
            <p className="who-we-are-text">
              Established in 2013, AND Hitech Industries Limited, AHIL has evolved from a specialized railway components manufacturer into a multi-disciplinary engineering and manufacturing organization serving the railway and mobility sector.
            </p>
            <p className="who-we-are-text">
              Our portfolio spans braking systems, suspension and ride control components, HVAC systems and railway doors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
