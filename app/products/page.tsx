'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_CATALOG, PRODUCT_CATEGORIES } from '@/data/productCatalog';

export default function ProductsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts = activeCategory === 'All'
    ? PRODUCT_CATALOG
    : PRODUCT_CATALOG.filter((item) => item.category === activeCategory);

  return (
    <div className="product-catalog-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Banner */}
      <section className="about-hero about-hero-navy">
        <div className="grid-lines"></div>
        <div className="about-hero-container">
          <div className="about-hero-badge">
            FULL RANGE · RDSO &amp; IRIS APPROVED
          </div>
          <h1 className="about-hero-title">
            <span>Product</span> Catalogue.
          </h1>
        </div>
      </section>

      {/* Category Tabs & Grid */}
      <section className="section product-catalog-section">
        <div className="container product-catalog-container">
          <div className="product-catalog-header">
            <div className="infra-badge">
              <span className="infra-badge-line"></span>
              <span>OUR PRODUCTS</span>
            </div>
            <h2 className="section-title product-catalog-title">
              Engineered for every <span className="gold-underline">segment</span>
            </h2>
          </div>

          <div className="product-catalog-tabs">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`product-catalog-tab ${activeCategory === cat ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="product-catalog-grid">
            {filteredProducts.map((item) => {
              return (
                <Link key={item.slNo} href={`/products/${item.slug}`} className="product-catalog-card">
                  <div className="product-catalog-card-img-wrap">
                    <img src={item.image} alt={item.name} className="product-catalog-card-img" loading="lazy" />
                  </div>
                  <div className="product-catalog-card-body">
                    <span className="product-catalog-card-tag">
                      {item.category} · Segment {item.segment}
                    </span>
                    <h3 className="product-catalog-card-title">
                      {item.name}
                    </h3>
                    <span className="product-catalog-card-btn" aria-hidden="true">
                      <ArrowRight className="product-catalog-card-btn-icon" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
