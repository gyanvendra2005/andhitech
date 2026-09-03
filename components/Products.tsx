'use client';

import React from 'react';
import { DATASHEETS, ProductDatasheet } from '@/data/datasheets';

interface ProductsProps {
  onSelectDatasheet: (datasheet: ProductDatasheet) => void;
}

export default function Products({ onSelectDatasheet }: ProductsProps) {
  return (
    <section id="products" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-navy"></span>
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-navy">Product Systems</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] text-navy">
              Every component,<br />
              engineered for the <span className="gold-underline">rail.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-base text-muted-foreground leading-relaxed">
            A focused portfolio of rolling-stock systems — proven on Indian Railways coaches, Vande Bharat trainsets, and metro fleets across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Product 1 */}
          <article className="group relative overflow-hidden border border-border bg-secondary/40 md:col-span-2">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-navy-deep">
                <img
                  src="/assets/product-brake-disc.jpg"
                  alt="Axle & Wheel Mounted Brake Discs"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                  Braking Systems
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                  Axle &amp; Wheel Mounted Brake Discs
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Precision-machined discs engineered for LHB coaches, Vande Bharat and metro rolling stock — tested for thermal fatigue and long service life.
                </p>
                <button
                  onClick={() => onSelectDatasheet(DATASHEETS['brake-discs'])}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy group-hover:text-navy-deep cursor-pointer text-left"
                >
                  Technical datasheet <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>

          {/* Product 2 */}
          <article className="group relative overflow-hidden border border-border bg-secondary/40">
            <div className="grid grid-cols-1">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-navy-deep">
                <img
                  src="/assets/product-hvac.jpg"
                  alt="Roof-Mounted Package Units (RMPU)"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                  HVAC
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                  Roof-Mounted Package Units (RMPU)
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Compact HVAC for LHB AC coaches and locomotive cabins — energy-efficient climate control certified for harsh operating environments.
                </p>
                <button
                  onClick={() => onSelectDatasheet(DATASHEETS['hvac-rmpu'])}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy group-hover:text-navy-deep cursor-pointer text-left"
                >
                  Technical datasheet <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>

          {/* Product 3 */}
          <article className="group relative overflow-hidden border border-border bg-secondary/40">
            <div className="grid grid-cols-1">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-navy-deep">
                <img
                  src="/assets/product-suspension.jpg"
                  alt="Air Suspension & LHB Dampers"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                  Ride Comfort
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                  Air Suspension &amp; LHB Dampers
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Air suspension control equipment and shock absorbers delivering ride comfort, stability and predictable dynamic response.
                </p>
                <button
                  onClick={() => onSelectDatasheet(DATASHEETS['suspension'])}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy group-hover:text-navy-deep cursor-pointer text-left"
                >
                  Technical datasheet <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>

          {/* Product 4 */}
          <article className="group relative overflow-hidden border border-border bg-secondary/40 md:col-span-2">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-navy-deep">
                <img
                  src="/assets/product-pantograph.jpg"
                  alt="Spring-Type Pantographs"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                  Traction
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                  Spring-Type Pantographs
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  High-speed pantographs and IV couplers for reliable current collection and electrical linking between rail cars.
                </p>
                <button
                  onClick={() => onSelectDatasheet(DATASHEETS['pantographs'])}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy group-hover:text-navy-deep cursor-pointer text-left"
                >
                  Technical datasheet <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
