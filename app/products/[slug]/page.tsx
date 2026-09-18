'use client';

import React, { useState, useRef } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { PRODUCT_CATALOG } from '@/data/productCatalog';
import { PRODUCT_DETAILS } from '@/data/productDetails';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'second'>('overview');
  const overviewRef = useRef<HTMLElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const product = PRODUCT_CATALOG.find((item) => item.slug === slug);
  const detail = PRODUCT_DETAILS[slug];

  const hasSecondTab = detail?.hasSecondTabContent !== false;

  const handleTabClick = (tab: 'overview' | 'second') => {
    setActiveTab(tab);
    const target = tab === 'overview' ? overviewRef.current : secondRef.current;
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!product || !detail) {
    notFound();
  }

  return (
    <div className="product-detail-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Banner: product name on gradient background */}
      <section className="product-detail-banner">
        <div className="grid-lines"></div>
        <div className="container product-detail-banner-inner">
          <h1 className="product-detail-banner-title">{product.name}</h1>
        </div>

        {/* Tabs bar sits inside the banner section but visually on white */}
        <div className="product-detail-tabs-wrap">
          <div className="container">
            <div className="product-detail-tabs">
              <button
                type="button"
                onClick={() => handleTabClick('overview')}
                className={`product-detail-tab ${activeTab === 'overview' ? 'is-active' : ''}`}
              >
                Overview
              </button>
              {hasSecondTab && (
                <button
                  type="button"
                  onClick={() => handleTabClick('second')}
                  className={`product-detail-tab ${activeTab === 'second' ? 'is-active' : ''}`}
                >
                  {detail.secondTabLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tab 1: Overview — left text, right image */}
      <section ref={overviewRef} className="section product-detail-overview-section">
        <div className="container product-detail-overview-grid">
          <div className="product-detail-overview-text">
            {/* <h2 className="section-title product-detail-overview-title">
              {detail.overview.title}
            </h2> */}
            {detail.overview.paragraphs.map((para, idx) => (
              <p key={idx} className="product-detail-overview-para">
                {para}
              </p>
            ))}
            <button
              type="button"
              className="product-detail-quote-btn"
              onClick={() => setQuoteModalOpen(true)}
            >
              Request a Quote
            </button>
          </div>
          <div className="product-detail-overview-img-wrap">
            <img
              src={product!.image}
              alt={detail.overview.title}
              className="product-detail-overview-img"
            />
          </div>
        </div>
      </section>

      {/* Tab 2: solid blue band, light card overlapping the bottom edge with stat tiles */}
      {hasSecondTab && (
      <div ref={secondRef} className="product-detail-second-wrap">
        <section className="product-detail-second-section">
          <div className="grid-lines"></div>
          <div className="container product-detail-second-heading-wrap">
            <h2 className="section-title product-detail-second-title">
              {detail.secondTab.title}
            </h2>
          </div>
          <div className="container product-detail-second-card-wrap">
            <div className="product-detail-second-card">
              {detail.secondTab.specs ? (
                <div className="product-detail-stats-grid">
                  {detail.secondTab.specs.map((spec, idx) => (
                    <div key={idx} className="product-detail-stat-box">
                      <div className="product-detail-stat-label">{spec.label}</div>
                      <div className="product-detail-stat-value">{spec.value}</div>
                    </div>
                  ))}
                </div>
              ) : (
                detail.secondTab.paragraphs.map((para, idx) => (
                  <p key={idx} className="product-detail-second-para">
                    {para}
                  </p>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
      )}

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
