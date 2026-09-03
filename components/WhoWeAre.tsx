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
    <section ref={sectionRef} className="who-we-are-section">
      <div className="who-we-are-container">
        {/* Left Side Title with Scroll Reveal */}
        <h2 className={`who-we-are-left-title fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
          About AHIL
        </h2>

        {/* Right Side Content with Scroll Reveal */}
        {/* <div className={`who-we-are-right-content fade-in-scroll fade-in-scroll-delay-1 ${isVisible ? 'is-visible' : ''}`}> */}
          
          <div className="who-we-are-img-cont">
            <img className="who-we-are-img" src="https://placehold.co/600x400" alt="AHIL Facility" /> 
           <div className="who-we-are-cont">
            <h2 className="who-we-are-heading">
            Who we are
          </h2>
          <p className="who-we-are-text">
            Established in 2013, AHIL has emerged as a trusted name in precision manufacturing, specializing in high-quality components for Railway Rolling Stock applications, and developing HVAC systems for Railways and Metros. Known for our commitment to engineering excellence, customer satisfaction, and on-time delivery, we have built strong partnerships across multiple industries.
          </p>
          </div>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}
