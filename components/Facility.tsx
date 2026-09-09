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
      {/* <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60"></div> */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold"></span>
            <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">MANUFACTURING EXCELLENCE</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02]">
            Precision manufacturing built for<br />
            <span className="text-gold"> Railway reliability.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/75 leading-relaxed">
            CNC machining matter—Our manufacturing capabilities bring together precision machining, fabrication assembly, inspection and testing for demanding railway applications.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 backdrop-blur-sm">
          <div className="group relative bg-ink/60 p-8 flex flex-col justify-center hover:bg-white/[0.04] transition-colors">
            <div className="font-display text-6xl md:text-7xl font-bold text-gold">50k+</div>
            <div className="mt-2 text-xs text-white/60 uppercase tracking-widest">Sq. ft. shop floor</div>
          </div>
          <div className="group relative bg-ink/60 p-8 hover:bg-white/[0.04] transition-colors">
            <h3 className="font-display text-lg font-bold text-white">Precision machining</h3>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              CNC, VT machining for safety critical railway components.
            </p>
          </div>
          <div className="group relative bg-ink/60 p-8 hover:bg-white/[0.04] transition-colors">

            <h3 className="font-display text-lg font-bold text-white">Assembly &amp; Integration</h3>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              Controlled assembly for components and increasingly complex railway systems.
            </p>
          </div>
          <div className="group relative bg-ink/60 p-8 hover:bg-white/[0.04] transition-colors">

            <h3 className="font-display text-lg font-bold text-white">Inspection and Metrology</h3>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              Dimensional inspection and measurement systems supporting process and final quality control.
            </p>
          </div>
          <div className="group relative bg-ink/60 p-8 hover:bg-white/[0.04] transition-colors">

            <h3 className="font-display text-lg font-bold text-white">Testing and validation</h3>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              Product specific testing and validation to verify performance before dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
