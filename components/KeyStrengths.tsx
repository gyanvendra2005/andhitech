'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ShieldAlert, Cpu, Factory } from 'lucide-react';

export default function KeyStrengths() {
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
    <section ref={sectionRef} className="section key-strengths-section">
      <div className="container key-strengths-container">
        {/* Header Area with Scroll Animation */}
        <div className={`ks-header-area fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="ks-badge">
            <span className="ks-badge-line"></span>
            <span>OUR KEY STRENGTHS</span>
          </div>

          <h2 className="section-title ks-title">
            What drives our engineering <span className="gold-underline">excellence</span>
          </h2>

          <p className="ks-desc">
            At AHIL, our strength comes from combining railway focused engineering, disciplined manufacturing and rigorous quality practices. We continuously strengthen our capabilities to deliver reliable products, develop new solutions and build long-term partnership with our customers.
          </p>
        </div>

        {/* 3-Column Capsule Box Container with Staggered Scroll Animation */}
        <div className="ks-3col-box">
          {/* Card 1: High Reliability And Dependability */}
          <div className={`ks-3col-card fade-in-scroll fade-in-scroll-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className="ks-icon-wrap">
              <ShieldAlert className="ks-icon" />
            </div>
            <h3 className="ks-3col-title">
              Railway Engineering Expertise
            </h3>
            <p className="ks-3col-text">
              Our experience across railway components and systems gives us a strong understanding of demanding operating conditions, performance requirements and the reliability expected throughout the product service life.
            </p>
          </div>

          {/* Card 2: Precision Manufacturing & Quality Assurance */}
          <div className={`ks-3col-card fade-in-scroll fade-in-scroll-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <div className="ks-icon-wrap">
              <Cpu className="ks-icon" />
            </div>
            <h3 className="ks-3col-title">
              Manufacturing and Quality Excellence
            </h3>
            <p className="ks-3col-text">
              Integrated manufacturing, process control, inspection and testing capabilities enable us to translate engineering requirements into consistent, production ready products with a strong focus on quality and traceability.
            </p>
          </div>

          {/* Card 3: Customer-Centric & Growth-Oriented Approach */}
          <div className={`ks-3col-card fade-in-scroll fade-in-scroll-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            <div className="ks-icon-wrap">
              <Factory className="ks-icon" />
            </div>
            <h3 className="ks-3col-title">
              Innovation and Customer Partnership
            </h3>
            <p className="ks-3col-text">
              We work closely with customers on new product development, localization and continuous improvement — combining engineering and manufacturing expertise to develop solutions for rail and mobility requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
