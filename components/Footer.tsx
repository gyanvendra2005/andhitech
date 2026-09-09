'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-14">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <Link href="/">
            <img src="/assets/ahil-logo-dark.svg" alt="AHIL" className="h-10 w-auto bg-white p-2" />
          </Link>
          <p className="mt-6 text-sm max-w-md leading-relaxed">
            And Hitech Industries Limited — precision manufacturing of rolling stock components, HVAC systems and thermal solutions for the world&apos;s railways.
          </p>
          <a
            href="https://www.linkedin.com/company/and-hitech-industries-limited"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AHIL on LinkedIn"
            className="mt-6 inline-flex items-center justify-center h-9 w-9 border border-white/15 hover:border-gold hover:text-gold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about-us" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/new&media" className="hover:text-gold">News &amp; Media</Link></li>
            <li><Link href="/online-complaint" className="hover:text-gold">Online Complaint</Link></li>
            <li><Link href="/contact-us" className="hover:text-gold">Contact Us</Link></li>
            <li><a href="/#capabilities" className="hover:text-gold">Capabilities</a></li>
            <li><a href="/#products" className="hover:text-gold">Products</a></li>
            <li><a href="/#facility" className="hover:text-gold">Facility</a></li>
            <li><a href="/#sustainability" className="hover:text-gold">Sustainability</a></li>
            <li><a href="/#clients" className="hover:text-gold">Clients</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Contact-us</div>
          <p className="text-sm leading-relaxed">
            011-25710064<br />
            info@andhitech.in
          </p>
        </div>
        <div className="md:col-span-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/45">
          <div>© 2026 And Hitech Industries Limited. All rights reserved.</div>
          <div>Precision Engineering for Rail &amp; Metro.</div>
        </div>
      </div>
    </footer>
  );
}
