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
            Built to <span className="gold-underline">perform.</span><br />
            Designed to lead.
          </h2>
        </div>
        <div className="md:col-span-8 md:pt-4">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            Since 2013, <strong className="text-navy">And Hitech Industries Limited</strong> has grown into a trusted manufacturing partner for Indian Railways, Metros and PSUs. Under the leadership of Mr. Angad Singh, a 100-strong team combines engineering discipline with state-of-the-art facilities to deliver components the country's rolling stock depends on.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70">
            From the axle-mounted brake disc that safely stops a Vande Bharat to the RMPU keeping an LHB coach cool at 130 km/h — every AHIL product is engineered, tested and documented against the standards railway operators trust.
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
