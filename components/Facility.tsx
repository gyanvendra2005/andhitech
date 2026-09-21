'use client';

import React, { useEffect, useRef, useState } from 'react';

function StatCounter({
  target,
  suffix = '',
  start,
  duration = 1600,
}: {
  target: number;
  suffix?: string;
  start: boolean;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

export default function Facility() {
  const [statVisible, setStatVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="facility" className="section facility-section">
      <img
        src="/assets/MANUFACTURING EXCELLENCE.webp"
        alt=""
        aria-hidden="true"
        className="facility-bg-img"
        loading="lazy"
      />
      <div className="container facility-inner">
        <div className="facility-header fade-in-scroll">
          <div className="facility-eyebrow-row">
            <span className="facility-eyebrow-line"></span>
            <span className="facility-eyebrow-text">MANUFACTURING EXCELLENCE</span>
          </div>
          <h2 className="section-title facility-title">
            Precision manufacturing built for<br />
            <span className="facility-title-accent"> Railway reliability.</span>
          </h2>
          <p className="facility-desc">
            CNC machining matter—Our manufacturing capabilities bring together precision machining, fabrication assembly, inspection and testing for demanding railway applications.
          </p>
        </div>

        <div className="facility-cards-grid fade-in-scroll fade-in-scroll-delay-1">
          <div className="facility-card facility-card-stat" ref={statRef}>
            <div className="facility-stat-number">
              <StatCounter target={50} suffix="k+" start={statVisible} />
            </div>
            <div className="facility-stat-label">Sq. ft. shop floor</div>
          </div>
          <div className="facility-card">
            <h3 className="facility-card-title">Precision Machining</h3>
            <p className="facility-card-text">
              CNC, VTL machining for safety critical railway components.
            </p>
          </div>
          <div className="facility-card">
            <h3 className="facility-card-title">Assembly and Integration</h3>
            <p className="facility-card-text">
              Controlled assembly for components and increasingly complex railway systems.
            </p>
          </div>
          <div className="facility-card">
            <h3 className="facility-card-title">Inspection and Metrology</h3>
            <p className="facility-card-text">
              Dimensional inspection and measurement systems supporting process and final quality control.
            </p>
          </div>
          <div className="facility-card">
            <h3 className="facility-card-title">Testing and Validation</h3>
            <p className="facility-card-text">
              Product specific testing and validation to verify performance before dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
