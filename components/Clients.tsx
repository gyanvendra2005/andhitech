'use client';

import React from 'react';

export default function Clients() {
  return (
    <section id="clients" className="bg-white py-24 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy leading-[1.05]">
            Trusted by the operators<br />who move the nation.
          </h2>
          <p className="md:max-w-sm text-sm text-muted-foreground">
            Delivering to Indian Railways, ICF Chennai, RCF Kapurthala, MCF Raebareli, DMRC and BHEL — with certifications aligned to global rail standards.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 border-t border-l border-border">
          <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
            <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">Indian Railways</span>
          </div>
          <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
            <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">ICF Chennai</span>
          </div>
          <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
            <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">RCF Kapurthala</span>
          </div>
          <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
            <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">MCF Raebareli</span>
          </div>
          <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
            <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">DMRC</span>
          </div>
          <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
            <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">BHEL</span>
          </div>
          <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
            <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">Vande Bharat</span>
          </div>
          <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
            <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">Kolkata Metro</span>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
            <span className="h-1.5 w-1.5 bg-gold"></span> ISO 9001:2015
          </span>
          <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
            <span className="h-1.5 w-1.5 bg-gold"></span> ISO 14001:2015
          </span>
          <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
            <span className="h-1.5 w-1.5 bg-gold"></span> ISO 45001:2018
          </span>
          <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
            <span className="h-1.5 w-1.5 bg-gold"></span> RDSO Approved
          </span>
          <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
            <span className="h-1.5 w-1.5 bg-gold"></span> RoHS Compliant
          </span>
        </div>
      </div>
    </section>
  );
}
