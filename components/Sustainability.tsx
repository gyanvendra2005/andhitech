'use client';

import React from 'react';

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Quality Assurance */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {/* Quality Image */}
            <div className="relative w-full h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop" 
                alt="Quality Assurance Automotive Testing" 
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />
            </div>

            {/* Content Area */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                QUALITY ASSURANCE
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug max-w-lg">
                Zero-Defect Quality Control &amp; Precision Inspection Systems.
              </h2>

              <div>
                <a href="#contact" className="btn-red-pill">
                  <span className="btn-circle-icon">
                    &rsaquo;
                  </span>
                  <span>Know more</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sustainability Dark Navy Card */}
          <div className="lg:col-span-5 bg-[#17263c] rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl border border-slate-800 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Sustainability
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our processes and techniques are designed to minimize the energy and resource consumption as well as minimize the waste produced as part of the moulding process.
              </p>

              <div>
                <a href="#contact" className="btn-red-pill">
                  <span className="btn-circle-icon">
                    &rsaquo;
                  </span>
                  <span>Know more</span>
                </a>
              </div>
            </div>

            {/* Bottom Accent Border Line inside Card */}
            <div className="w-full border-b border-slate-700/60 pt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
