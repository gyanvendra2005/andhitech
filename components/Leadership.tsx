'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Leadership() {
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
    <section ref={sectionRef} className="leadership-section">
      <div className="leadership-container">
        <div className={`leadership-block fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="leadership-heading">MD&apos;s Desk</h2>
          <div className="leadership-row">
            <div className="leadership-photo-wrap">
              <img src="https://placehold.co/400x480" alt="Mr. Angad Singh, Managing Director" className="leadership-photo" />
              <div className="leadership-caption">
                <div className="leadership-name">Mr. Angad Singh</div>
                <div className="leadership-title">Managing Director</div>
              </div>
            </div>
            <div className="leadership-text-wrap">
              <h3 className="leadership-quote">
                Advancing Mobility with Dependable Solutions.
              </h3>
              <p className="leadership-text">
                At AHIL, our strength lies in combining precision engineering, ethical practices, and customer-focused manufacturing to deliver products that meet the highest standards. Step by step, we continue to expand our capabilities while staying committed to excellence and long-term partnerships.
              </p>
              <p className="leadership-text">
                This spirit of growth also led to the creation of our sister company, Sphere Thermal Systems Pvt. Ltd. (STSPL), which specializes in advanced HVAC solutions for Railways and Metros. Together, AHIL and STSPL complement each other&apos;s expertise — enabling us to offer integrated, end-to-end mobility solutions and strengthen our role in shaping the future of India&apos;s transportation sector.
              </p>
              <p className="leadership-text">
                We have grown into a dynamic organization known for delivering innovative and efficient engineering solutions.
              </p>
            </div>
          </div>
        </div>

        <div className={`leadership-block fade-in-scroll fade-in-scroll-delay-1 ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="leadership-heading">Director&apos;s Message</h2>
          <div className="leadership-row leadership-row-reverse">
            <div className="leadership-photo-wrap">
              <img src="https://placehold.co/400x480" alt="Ms. Neha Singh, Director" className="leadership-photo" />
              <div className="leadership-caption">
                <div className="leadership-name">Ms. Neha Singh</div>
                <div className="leadership-title">Director</div>
              </div>
            </div>
            <div className="leadership-text-wrap">
              <p className="leadership-text">
                At AND Hitech Industries Ltd., we believe that true progress is built on the pillars of innovation, trust and responsibility. Since our inception, our journey has been guided by a relentless pursuit of excellence in railway rolling stock solutions and a deep commitment to contributing to India&apos;s vision of a modern, self-reliant and safe transportation ecosystem.
              </p>
              <p className="leadership-text">
                The road ahead excites us. Together, with resilience and purpose, we will continue to craft solutions that stand the test of time.
              </p>
            </div>
          </div>

          <div className={`leadership-row fade-in-scroll fade-in-scroll-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <div className="leadership-photo-wrap">
              <img src="https://placehold.co/400x480" alt="Ms. Asha, Director" className="leadership-photo" />
              <div className="leadership-caption">
                <div className="leadership-name">Ms. Asha</div>
                <div className="leadership-title">Director</div>
              </div>
            </div>
            <div className="leadership-text-wrap">
              <p className="leadership-text">
                At AND Hitech Industries Ltd., we believe financial stewardship is the foundation of sustainable growth. Our focus has always been on balancing ambition with responsibility — investing in innovation while ensuring transparency, trust and long-term value creation. This balance is what enables us to honor commitments, strengthen partnerships and ensure that every milestone we achieve adds lasting value to the ecosystem we serve.
              </p>
              <p className="leadership-text">
                As we expand into new domains and global markets, our focus remains on ensuring that every step of growth is supported by sound financial stewardship and aligned with our larger vision of building a resilient, self-reliant, and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
