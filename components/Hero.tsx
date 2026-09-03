'use client';

import React from 'react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <img
          src="/assets/hero-rail.jpg"
          alt=""
          aria-hidden="true"
          className="hero-motion absolute inset-0 h-full w-full object-cover"
          width="1920"
          height="1088"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent"></div>
        <div className="absolute inset-0 grid-lines opacity-60"></div>
        <div className="rail-streak" style={{ top: '62%', width: '40%', animationDelay: '0s' }}></div>
        <div className="rail-streak" style={{ top: '70%', width: '55%', animationDelay: '0.8s', opacity: 0.6 }}></div>
        <div className="rail-streak" style={{ top: '78%', width: '30%', animationDelay: '1.6s' }}></div>
        <div className="rail-streak" style={{ top: '86%', width: '50%', animationDelay: '2.2s', opacity: 0.5 }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold"></span>
            <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">
              Precision engineering · Established 2013
            </span>
          </div>
          <h1 className="font-display font-extrabold text-white leading-[0.95] text-[clamp(2.75rem,7vw,6rem)]">
            Moving India's <br />
            <span className="text-gold">railways</span> forward.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
            AHIL manufactures high-performance components for rolling stock — brake systems, HVAC, air suspension, pantographs and precision assemblies — engineered for safety, efficiency and a lifetime of service.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-3 bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy hover:brightness-95 transition-all"
            >
              Explore capabilities <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
            >
              Partner with us
            </a>
          </div>
        </div>

        <div className="absolute left-6 lg:left-10 right-6 lg:right-10 bottom-8 md:bottom-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-t border-white/15">
            <div className="bg-navy-deep/70 backdrop-blur-sm px-5 py-5 md:px-8 md:py-6">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">2013</div>
              <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-[0.18em]">Established</div>
            </div>
            <div className="bg-navy-deep/70 backdrop-blur-sm px-5 py-5 md:px-8 md:py-6">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">100+</div>
              <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-[0.18em]">Skilled professionals</div>
            </div>
            <div className="bg-navy-deep/70 backdrop-blur-sm px-5 py-5 md:px-8 md:py-6">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">15+</div>
              <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-[0.18em]">Active programmes</div>
            </div>
            <div className="bg-navy-deep/70 backdrop-blur-sm px-5 py-5 md:px-8 md:py-6">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">ISO</div>
              <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-[0.18em]">9001 · 14001 · 45001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
