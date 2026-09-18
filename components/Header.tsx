'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-header-brand">
          <img
            src="/assets/ahil-logo-light.svg"
            alt="AHIL — And Hitech Industries Limited"
            className="site-header-logo"
          />
        </Link>

        <nav className="site-header-nav">
          <Link href="/about-us" className="site-header-link">
            About Us
          </Link>
          <Link href="/infrastructure" className="site-header-link">
            Infrastructure
          </Link>
          <Link href="/products" className="site-header-link">
            Products
          </Link>
          <Link href="/new&media" className="site-header-link">
            News &amp; Media
          </Link>
          <Link href="/online-complaint" className="site-header-link">
            Online Complaint
          </Link>
          <Link href="/career" className="site-header-link">
            Careers
          </Link>
          <Link href="/contact-us" className="site-header-link">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="site-header-mobile-toggle"
          aria-label="Toggle menu"
        >
          <span className="site-header-mobile-toggle-icon">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`site-header-mobile-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      <div className={`site-header-mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="site-header-mobile-close"
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="site-header-mobile-nav">
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="site-header-mobile-link">About Us</Link>
          <Link href="/infrastructure" onClick={() => setMobileMenuOpen(false)} className="site-header-mobile-link">Infrastructure</Link>
          <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="site-header-mobile-link">Products</Link>
          <Link href="/new&media" onClick={() => setMobileMenuOpen(false)} className="site-header-mobile-link">News &amp; Media</Link>
          <Link href="/online-complaint" onClick={() => setMobileMenuOpen(false)} className="site-header-mobile-link">Online Complaint</Link>
          <Link href="/career" onClick={() => setMobileMenuOpen(false)} className="site-header-mobile-link">Careers</Link>
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="site-header-mobile-link">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
