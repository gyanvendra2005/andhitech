'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import WhoWeAre from '@/components/WhoWeAre';
import VisionMission from '@/components/VisionMission';
import Leadership from '@/components/Leadership';
import KeyStrengths from '@/components/KeyStrengths';
import CoreValues from '@/components/CoreValues';

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

export default function AboutUsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-us-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Banner */}
      <section className="about-hero about-hero-navy">
        <div className="grid-lines"></div>
        <div className="about-hero-container fade-in-scroll">
          <h1 className="about-hero-title">
            <span>Engineering Reliability</span> advancing rail mobility.
          </h1>
        </div>
      </section>

      {/* Who We Are Component with Scroll Reveal */}
      <WhoWeAre />

      {/* Dark Navy Metric Stats Bar with Scroll Reveal */}
      <section ref={statsRef} className="section stats-banner">
        <div className="container stats-banner-container">
          <div className={`stat-box fade-in-scroll ${statsVisible ? 'is-visible' : ''}`}>
            <div className="stat-number"><StatCounter target={250} suffix="+" start={statsVisible} /></div>
            <div className="stat-title">Skilled Professionals</div>
            <div className="stat-subtitle">Engineers &amp; manufacturing specialists</div>
          </div>

          <div className={`stat-box fade-in-scroll fade-in-scroll-delay-1 ${statsVisible ? 'is-visible' : ''}`}>
            <div className="stat-number"><StatCounter target={50} suffix="k+" start={statsVisible} /></div>
            <div className="stat-title">Sq. Ft. Shop Floor</div>
            <div className="stat-subtitle">CNC machining &amp; assembly plant</div>
          </div>

          <div className={`stat-box fade-in-scroll fade-in-scroll-delay-2 ${statsVisible ? 'is-visible' : ''}`}>
            <div className="stat-number"><StatCounter target={15} suffix="+" start={statsVisible} /></div>
            <div className="stat-title">Products</div>
            <div className="stat-subtitle">Indian Railways &amp; Metro fleets</div>
          </div>

          <div className={`stat-box fade-in-scroll fade-in-scroll-delay-3 ${statsVisible ? 'is-visible' : ''}`}>
            <div className="stat-number"><StatCounter target={100} suffix="%" start={statsVisible} /></div>
            <div className="stat-title">Traceability &amp; Quality</div>
            <div className="stat-subtitle">RDSO &amp; IRIS standards compliant</div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Component with Scroll Reveal */}
      <VisionMission />

      {/* MD's Desk & Director's Message */}
      <Leadership />

         {/* Core Values Component with Scroll Reveal */}
      <CoreValues />

      {/* Key Strengths Component with Scroll Reveal & Hover Effects */}
      <KeyStrengths />

   

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
