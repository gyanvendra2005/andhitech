'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ShieldAlert, Cpu, Factory } from 'lucide-react';

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
    <section ref={sectionRef} className="key-strengths-section">
      <div className="key-strengths-container">
        {/* Header Area with Scroll Animation */}
        <div className={`ks-header-area fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="ks-badge">
            <Sparkles />
            <span>OUR KEY STRENGTHS</span>
          </div>

          <h2 className="ks-title">
            Core strengths in <strong>industrial innovation</strong>
          </h2>

          <p className="ks-desc">
            At AHIL, our strength lies in combining precision engineering, ethical practices, and customer-focused manufacturing to deliver products that meet the highest standards of reliability. We approach growth step by step, expanding our capabilities while staying committed to excellence and long-term partnerships.
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
              High Reliability And Dependability
            </h3>
            <p className="ks-3col-text">
              Years of experience in railway rolling stock components and HVAC systems enable us to deliver high-performance, dependable products for critical applications.
            </p>
          </div>

          {/* Card 2: Precision Manufacturing & Quality Assurance */}
          <div className={`ks-3col-card fade-in-scroll fade-in-scroll-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <div className="ks-icon-wrap">
              <Cpu className="ks-icon" />
            </div>
            <h3 className="ks-3col-title">
              Precision Manufacturing &amp; Quality Assurance
            </h3>
            <p className="ks-3col-text">
              Our state-of-the-art facilities and strict quality control processes ensure every component meets the highest reliability and safety standards.
            </p>
          </div>

          {/* Card 3: Customer-Centric & Growth-Oriented Approach */}
          <div className={`ks-3col-card fade-in-scroll fade-in-scroll-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            <div className="ks-icon-wrap">
              <Factory className="ks-icon" />
            </div>
            <h3 className="ks-3col-title">
              Customer-Centric &amp; Growth-Oriented Approach
            </h3>
            <p className="ks-3col-text">
              We focus on building lasting relationships by delivering on time, supporting evolving client needs, and expanding into new markets like metros and heat exchangers. Continuous R&amp;D and Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
