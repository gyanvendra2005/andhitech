'use client';

import React from 'react';

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold"></span>
            <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">What we do</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02]">
            End-to-end engineering, <br />
            <span className="text-gold">under one roof.</span>
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          <div className="group relative bg-navy p-8 md:p-10 hover:bg-navy-deep transition-colors">
            {/* <div className="flex items-start justify-between">
              <span className="font-display text-2xl font-bold text-gold">01</span>
              <span className="h-2 w-2 rounded-full bg-gold mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
            </div> */}
            <h3 className="underroof-card-heading">Engineering and Product Development</h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              From customers requirement and design review to product development prototyping and industrialization. Engineering solution built for real railway operating conditions.
            </p>
          </div>

          <div className="group relative bg-navy p-8 md:p-10 hover:bg-navy-deep transition-colors">
            {/* <div className="flex items-start justify-between">
              <span className="font-display text-2xl font-bold text-gold">02</span>
              <span className="h-2 w-2 rounded-full bg-gold mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
            </div> */}  
            <h3 className="underroof-card-heading">Precision Manufacturing</h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Integrated machining, fabrication assembly and controlled manufacturing processes, supported by robust process control and complete traceability
            </p>
          </div>

          <div className="group relative bg-navy p-8 md:p-10 hover:bg-navy-deep transition-colors">
            {/* <div className="flex items-start justify-between">
              <span className="font-display text-2xl font-bold text-gold">03</span>
              <span className="h-2 w-2 rounded-full bg-gold mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
            </div> */}
            <h3 className="underroof-card-heading">Quality and Validation</h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Rigorous inspection, testing and validation throughout the manufacturing cycle to ensure consistent quality, performance and reliability aligned with RDSO EN-?? Standard and IRIS- grade quality standards.
            </p>
          </div>

          <div className="group relative bg-navy p-8 md:p-10 hover:bg-navy-deep transition-colors">
            {/* <div className="flex items-start justify-between">
              <span className="font-display text-2xl font-bold text-gold">04</span>
              <span className="h-2 w-2 rounded-full bg-gold mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
            </div> */}
            <h3 className="underroof-card-heading">Supply and Lifecycle Support</h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              From serial production and delivery to field support and continuous improvement, we stay connected throughout the product life cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
