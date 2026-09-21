'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Products from '@/components/Products';
import Facility from '@/components/Facility';
import Sustainability from '@/components/Sustainability';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DatasheetModal from '@/components/DatasheetModal';
import QuoteModal from '@/components/QuoteModal';
import { ProductDatasheet } from '@/data/datasheets';

export default function Home() {
  const [selectedDatasheet, setSelectedDatasheet] = useState<ProductDatasheet | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="home-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />
      
      <main>
        <Hero />
        <Ticker />
        <About />
        <Capabilities />
        <Products />
        <Facility />
        {/* <Sustainability /> */}
        <Clients />
        {/* <Contact onOpenQuote={() => setQuoteModalOpen(true)} /> */}
      </main>

      <Footer />

      <DatasheetModal
        datasheet={selectedDatasheet}
        onClose={() => setSelectedDatasheet(null)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
