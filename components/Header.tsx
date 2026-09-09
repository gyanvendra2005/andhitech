'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/assets/ahil-logo-light.svg"
            alt="AHIL — And Hitech Industries Limited"
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/about-us" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            About Us
          </Link>
          {/* <a href="/#capabilities" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            Capabilities
          </a> */}
          {/* <a href="/#products" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            Products
          </a> */}
          {/* <a href="/#facility" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            Facility
          </a> */}
          {/* <a href="/#sustainability" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            Sustainability
          </a> */}
          <Link href="/new&media" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            News &amp; Media
          </Link>
          <Link href="/online-complaint" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            Online Complaint
          </Link>
          {/* <a href="/#clients" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            Clients
          </a> */}
          <Link href="/contact-us" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* <button
          onClick={onOpenQuote}
          className="hidden md:inline-flex items-center gap-2 rounded-none border border-white/25 bg-white/5 backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy hover:border-gold transition-all cursor-pointer"
        >
          Request a quote <span aria-hidden="true">→</span>
        </button> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-deep border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">About Us</Link>
            <a href="/#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Capabilities</a>
            <a href="/#products" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Products</a>
            <a href="/#facility" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Facility</a>
            <a href="/#sustainability" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Sustainability</a>
            <Link href="/new&media" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">News &amp; Media</Link>
            <Link href="/online-complaint" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Online Complaint</Link>
            <a href="/#clients" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Clients</a>
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Contact Us</Link>
          </nav>
          {/* <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full bg-gold text-navy py-3 font-bold uppercase tracking-wider text-sm text-center"
          >
            Request a quote →
          </button> */}
        </div>
      )}
    </header>
  );
}
