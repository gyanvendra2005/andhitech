'use client';

import React from 'react';
import { DATASHEETS, ProductDatasheet } from '@/data/datasheets';

interface ProductsProps {
  onSelectDatasheet: (datasheet: ProductDatasheet) => void;
}

export default function Products({ onSelectDatasheet }: ProductsProps) {
  return (
    <section id="products" className="section products-section">
      <div className="container products-inner">
        <div className="products-header">
          <div className="products-header-content">
            <div className="products-eyebrow-row">
              <span className="products-eyebrow-line"></span>
              <span className="products-eyebrow-text">Product Systems</span>
            </div>
            <h2 className="section-title products-title">
              Every component,<br />
              engineered for the <span className="gold-underline">rail.</span>
            </h2>
          </div>
        </div>

        <div className="products-grid">
          {/* Product 1 */}
          <article className="product-card product-card-wide">
            <div className="product-card-split">
              <div className="product-card-media">
                <img
                  src="/assets/product-brake-disc.jpg"
                  alt="Axle & Wheel Mounted Brake Discs"
                  loading="lazy"
                  className="product-card-img"
                />
                <div className="product-card-tag">
                  Braking Systems
                </div>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  Axle &amp; Wheel Mounted Brake Discs
                </h3>
                <p className="product-card-desc">
                  Precision-machined discs engineered for LHB coaches, Vande Bharat and metro rolling stock — tested for thermal fatigue and long service life.
                </p>
                <button
                  onClick={() => onSelectDatasheet(DATASHEETS['brake-discs'])}
                  className="product-card-link"
                >
                  Technical datasheet <span className="product-card-link-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>

          {/* Product 2 */}
          <article className="product-card">
            <div className="product-card-single">
              <div className="product-card-media">
                <img
                  src="/assets/product-hvac.jpg"
                  alt="Roof-Mounted Package Units (RMPU)"
                  loading="lazy"
                  className="product-card-img"
                />
                <div className="product-card-tag">
                  HVAC
                </div>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  Roof-Mounted Package Units (RMPU)
                </h3>
                <p className="product-card-desc">
                  Compact HVAC for LHB AC coaches and locomotive cabins — energy-efficient climate control certified for harsh operating environments.
                </p>
                <button
                  onClick={() => onSelectDatasheet(DATASHEETS['hvac-rmpu'])}
                  className="product-card-link"
                >
                  Technical datasheet <span className="product-card-link-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>

          {/* Product 3 */}
          <article className="product-card">
            <div className="product-card-single">
              <div className="product-card-media">
                <img
                  src="/assets/product-suspension.jpg"
                  alt="Air Suspension & LHB Dampers"
                  loading="lazy"
                  className="product-card-img"
                />
                <div className="product-card-tag">
                  Ride Comfort
                </div>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  Air Suspension &amp; LHB Dampers
                </h3>
                <p className="product-card-desc">
                  Air suspension control equipment and shock absorbers delivering ride comfort, stability and predictable dynamic response.
                </p>
                <button
                  onClick={() => onSelectDatasheet(DATASHEETS['suspension'])}
                  className="product-card-link"
                >
                  Technical datasheet <span className="product-card-link-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>

          {/* Product 4 */}
          <article className="product-card product-card-wide">
            <div className="product-card-split">
              <div className="product-card-media">
                <img
                  src="/assets/product-pantograph.jpg"
                  alt="Spring-Type Pantographs"
                  loading="lazy"
                  className="product-card-img"
                />
                <div className="product-card-tag">
                  Traction
                </div>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  Spring-Type Pantographs
                </h3>
                <p className="product-card-desc">
                  High-speed pantographs and IV couplers for reliable current collection and electrical linking between rail cars.
                </p>
                <button
                  onClick={() => onSelectDatasheet(DATASHEETS['pantographs'])}
                  className="product-card-link"
                >
                  Technical datasheet <span className="product-card-link-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
