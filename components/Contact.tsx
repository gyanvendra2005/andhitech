'use client';

import React from 'react';

interface ContactProps {
  onOpenQuote: () => void;
}

export default function Contact({ onOpenQuote }: ContactProps) {
  return (
    <section id="contact" className="relative bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true"></div>
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"></div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold"></span>
            <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">Start a programme</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02]">
            Let's engineer your <br />
            next <span className="text-gold">rolling stock</span> milestone.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Share your specs, timelines and volumes — our engineering team will respond within one working day with a technical proposal and indicative pricing.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="border border-white/15 bg-white/[0.03] backdrop-blur-sm p-8">
            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-white/60">Get in touch</div>
            <div className="mt-6 space-y-5">
              <a href="mailto:sales@andhitech.in" className="block border-t border-white/10 pt-4 group">
                <div className="text-[11px] uppercase tracking-widest text-white/50">Sales &amp; partnerships</div>
                <div className="mt-1 font-display text-lg font-semibold text-white group-hover:text-gold transition-colors">
                  sales@andhitech.in
                </div>
              </a>
              <div className="block border-t border-white/10 pt-4 group">
                <div className="text-[11px] uppercase tracking-widest text-white/50">Corporate office</div>
                <div className="mt-1 font-display text-lg font-semibold text-white group-hover:text-gold transition-colors">
                  +91 · Available on request
                </div>
              </div>
              <a href="https://andhitech.in" className="block border-t border-white/10 pt-4 group">
                <div className="text-[11px] uppercase tracking-widest text-white/50">Website</div>
                <div className="mt-1 font-display text-lg font-semibold text-white group-hover:text-gold transition-colors">
                  andhitech.in
                </div>
              </a>
            </div>
            <button
              onClick={onOpenQuote}
              className="mt-8 inline-flex items-center justify-center w-full gap-3 bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wider text-navy pulse-gold cursor-pointer"
            >
              Request a quote <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
