'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  UserCheck,
  Award,
  Users,
  Lightbulb,
  HeartHandshake,
  Target
} from 'lucide-react';

export default function CoreValues() {
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

  const valuesList = [
    {
      icon: <UserCheck />,
      title: 'Customer-Centric',
    },
    {
      icon: <Award />,
      title: 'Quality First',
    },
    {
      icon: <Users />,
      title: 'Nurturing Talent',
    },
    {
      icon: <Lightbulb />,
      title: 'Innovating And Increasing The Product Basket',
    },
    {
      icon: <HeartHandshake />,
      title: 'Philanthropic Approach Towards Employees',
    },
  ];

  return (
    <section ref={sectionRef} className="core-values-section">
      <div className="core-values-container">
        {/* Left Column: Timeline & Value Pills */}
        <div className={`cv-left-content fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="cv-badge">
            <span className="cv-badge-dot"></span>
            <span>WHO WE ARE</span>
          </div>

          <h2 className="cv-title">
            Core Values
          </h2>

          <div className="cv-title-underline"></div>

          <p className="cv-desc">
            Our values shape the way we work, collaborate and grow together to create lasting impact for our customers, our people and society.
          </p>

          {/* Timeline List */}
          <div className="cv-timeline-wrap">
            <div className="cv-timeline-line"></div>

            {valuesList.map((item, index) => (
              <div 
                key={index} 
                className={`cv-item fade-in-scroll ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
              >
                <div className="cv-item-dot"></div>
                <div className="cv-item-left">
                  <div className="cv-item-icon-wrap">
                    {item.icon}
                  </div>
                  <span className="cv-item-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Framed Team Photo & Floating Card */}
        <div className={`cv-right-visual fade-in-scroll fade-in-scroll-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          <div className="cv-corner-accent"></div>

          <div className="cv-image-frame">
            <img
              src="/assets/facility.jpg"
              alt="AHIL Team & Manufacturing Engineers"
              className="cv-team-img"
            />

            {/* Floating Purpose Card */}
            <div className="cv-floating-card">
              <div className="cv-floating-left">
                <div className="cv-floating-target-icon">
                  <Target />
                </div>
                <div className="cv-floating-text-wrap">
                  <h4 className="cv-floating-title">
                    Guided by purpose. Driven by people.
                  </h4>
                  <p className="cv-floating-sub">
                    Building a better tomorrow—together.
                  </p>
                </div>
              </div>

              <div className="cv-floating-dots">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className="cv-floating-dot"></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
