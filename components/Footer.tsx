'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <div className="footer-col-brand">
          <Link href="/" className="footer-brand">
            <img
              src="/assets/ahil-logo-light.svg"
              alt="AHIL — And Hitech Industries Limited"
              className="footer-logo"
            />
          </Link>
          <p className="footer-brand-desc">
            And Hitech Industries Limited — precision manufacturing of rolling stock components, HVAC systems and thermal solutions for the world&apos;s railways.
          </p>
          <a
            href="https://www.linkedin.com/company/and-hitech-industries-limited"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AHIL on LinkedIn"
            className="footer-social-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </div>
        <div className="footer-col-explore">
          <div className="footer-col-heading">Explore</div>
          <ul className="footer-link-list">
            <li><Link href="/about-us" className="footer-link">About Us</Link></li>
            <li><Link href="/infrastructure" className="footer-link">Infrastructure</Link></li>
            <li><Link href="/products" className="footer-link">Products</Link></li>
            <li><Link href="/new&media" className="footer-link">News &amp; Media</Link></li>
            <li><Link href="/online-complaint" className="footer-link">Online Complaint</Link></li>
            <li><Link href="/career" className="footer-link">Careers</Link></li>
            <li><Link href="/contact-us" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col-contact">
          <div className="footer-col-heading">Contact-us</div>
          <p className="footer-contact-text">
            +91 1144766444<br />
            info@andhitech.in
          </p>
        </div>
        <div className="footer-bottom-row">
          <div>© 2026 And Hitech Industries Limited. All rights reserved.</div>
          <div>Precision Engineering for Rail &amp; Metro.</div>
        </div>
      </div>
    </footer>
  );
}
