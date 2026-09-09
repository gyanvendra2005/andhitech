'use client';

import React from 'react';

export default function About() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-navy"></span>
            <span className="text-xs font-semibold tracking-[0.28em] uppercase text-navy">About AHIL</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] text-navy">
            Engineered with <span className="gold-underline">excellence,</span><br />
            Build for future.
          </h2>
        </div>
        <div className="md:col-span-8 md:pt-4">
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70">
            Established in 2013, <strong className="text-navy">AND Hitech Industries Limited</strong> is an RDSO registered and UIC approved organization has grown from a precision component manufacturer into multidisciplinary railway engineering organization serving Indian Railways, metro network, rolling stock manufacturers and public sector organizations. Our capabilities span product development, precision manufacturing, assembly, testing quality assurance and lifecycle support allowing us to take greater responsibility across the product journey.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70">
            From specialized railway components to increasingly integrated system, our portfolio today spans from Braking, Suspension, HVAC, railway Doors, Electrical, Inter vehicular solution and track maintenance products. AHIL brings together engineering, manufacturing, assembly, testing and quality assurance to support customers from product development and localization through serial production and life cycle support.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            <div className="border-t border-border pt-5">
              <div className="font-display font-bold text-navy">RDSO approved</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Products qualified to Indian Railways specifications.</p>
            </div>
            <div className="border-t border-border pt-5">
              <div className="font-display font-bold text-navy">IRIS-grade quality</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Certified 9001 · 14001 · 45001 management systems.</p>
            </div>
            <div className="border-t border-border pt-5">
              <div className="font-display font-bold text-navy">On-time delivery</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Integrated planning and vendor network for schedule reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
