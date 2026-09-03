'use client';

import React from 'react';

export default function Facility() {
  return (
    <section id="facility" className="relative bg-ink text-white py-24 md:py-32 overflow-hidden">
      <img
        src="/assets/facility.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60"></div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold"></span>
            <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">Inside the plant</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02]">
            A shop floor built for<br />
            <span className="text-gold">tolerance and trust.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/75 leading-relaxed">
            CNC machining centres, precision forging, dedicated NDT and metrology labs. Every operation is traceable — from raw material heat-number to the serialised component leaving our dispatch bay.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="border-t border-white/15 pt-4">
              <div className="font-display text-3xl font-bold text-gold">50k+</div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">sq. ft. shop floor</div>
            </div>
            <div className="border-t border-white/15 pt-4">
              <div className="font-display text-3xl font-bold text-gold">24/7</div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">Production capability</div>
            </div>
            <div className="border-t border-white/15 pt-4">
              <div className="font-display text-3xl font-bold text-gold">100%</div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">Component traceability</div>
            </div>
            <div className="border-t border-white/15 pt-4">
              <div className="font-display text-3xl font-bold text-gold">3-shift</div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">Quality inspection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
