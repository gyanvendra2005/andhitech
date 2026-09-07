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
