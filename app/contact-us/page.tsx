'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import QuoteModal from '@/components/QuoteModal';
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Check,
  FileCheck,
} from 'lucide-react';
import Link from 'next/link';

export default function ContactUsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const [inquiryForm, setInquiryForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    phone: '',
    inquiryType: 'Rolling Stock Components',
    message: '',
  });

  const handleInquiryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const locationCards = [
    {
      title: 'AHIL Saket Executive Office',
      image: '/assets/facility.jpg',
      addressLines: [
        'F-11, Select CITYWALK',
        'District Centre, Saket',
        'New Delhi, Delhi, 110017',
      ],
      hours: 'Open until 6:00 PM IST',
    },
    {
      title: 'AHIL Noida Precision Works',
      image: '/assets/facility.jpg',
      addressLines: [
        'D123-D128, Industrial Sector 18',
        'Noida Precision Tech Zone',
        'Noida, Uttar Pradesh, 201301',
      ],
      hours: 'Open until 6:00 PM IST',
    },
    {
      title: 'AHIL Borivali Transit Hub',
      image: '/assets/facility.jpg',
      addressLines: [
        'G4, Sky City Complex',
        'Off Western Express Highway, Borivali',
        'Mumbai, Maharashtra, 400066',
      ],
      hours: 'Open until 6:00 PM IST',
    },
  ];

  return (
    <div className="contact-us-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Header */}
      <section className="about-hero">
        <div className="grid-lines"></div>
        <div className="about-hero-container">
          <div className="about-hero-badge">
            CONNECT WITH AHIL · GLOBAL MOBILITY ENGINEERING
          </div>
          <h1 className="about-hero-title">
            Let&apos;s Build Your <span>Rail &amp; Transit</span> Future Together.
          </h1>
        </div>
      </section>

      {/* Section 2: Direct Technical Inquiry Form */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-2col">
            
            {/* Left Column: Information & Guarantees */}
            <div className="contact-info-left">
              <div>
                <div className="contact-badge">
                  <Sparkles className="contact-badge-icon" />
                  <span>DIRECT INQUIRY DESK</span>
                </div>
                <h2 className="contact-form-main-title">
                  Have a Custom <span>Technical Requirement?</span>
                </h2>
                <p className="contact-form-main-desc contact-form-main-desc-spaced">
                  Fill out our direct inquiry form and our chief application engineers will analyze your specifications and return a preliminary feasibility review within 24 hours.
                </p>
              </div>

              {/* Highlights List */}
              <div className="contact-highlights-list">
                <div className="contact-highlight-item">
                  <div className="contact-highlight-check">
                    <Check className="contact-highlight-check-icon" />
                  </div>
                  <span>Confidential Non-Disclosure Agreement (NDA) on Request</span>
                </div>

                <div className="contact-highlight-item">
                  <div className="contact-highlight-check">
                    <Check className="contact-highlight-check-icon" />
                  </div>
                  <span>Custom Machining, Fabrication &amp; Sub-Assembly Sourcing</span>
                </div>

                <div className="contact-highlight-item">
                  <div className="contact-highlight-check">
                    <Check className="contact-highlight-check-icon" />
                  </div>
                  <span>Direct RDSO Metrology &amp; Quality Audit Support</span>
                </div>

                <div className="contact-highlight-item">
                  <div className="contact-highlight-check">
                    <Check className="contact-highlight-check-icon" />
                  </div>
                  <span>24/7 Dedicated Online Grievance Escalation</span>
                </div>
              </div>

              {/* Direct Railway Grievance Notice */}
              <div className="contact-grievance-notice">
                <ShieldCheck className="contact-grievance-notice-icon" />
                <div>
                  <h4 className="contact-grievance-notice-title">
                    Railway Depot Grievance or Component Failure?
                  </h4>
                  <p className="contact-grievance-notice-text">
                    For active rolling stock failure logs or warranty claims, please use our{' '}
                    <Link href="/online-complaint" className="contact-grievance-notice-link">
                      Online Complaint Portal
                    </Link>{' '}
                    with 2-hour SLA tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form Card */}
            <div className="contact-inquiry-card">
              <h3 className="contact-inquiry-card-title">
                Send a Message to Engineering
              </h3>

              {inquirySubmitted ? (
                <div className="contact-inquiry-success">
                  <FileCheck className="contact-inquiry-success-icon" />
                  <h4 className="contact-inquiry-success-title">Inquiry Dispatched Successfully!</h4>
                  <p className="contact-inquiry-success-text">
                    Thank you, <strong>{inquiryForm.fullName}</strong>. Our engineering leads have received your request and will follow up at <strong>{inquiryForm.email}</strong> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        fullName: '',
                        email: '',
                        organization: '',
                        phone: '',
                        inquiryType: 'Rolling Stock Components',
                        message: '',
                      });
                    }}
                    className="contact-inquiry-success-reset-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit}>
                  <div className="contact-input-grid">
                    {/* Full Name */}
                    <div className="contact-input-group">
                      <label className="contact-form-label">
                        Full Name <span className="contact-form-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="e.g., Rajesh Sharma"
                        value={inquiryForm.fullName}
                        onChange={handleInquiryChange}
                        required
                        className="contact-field-input"
                      />
                    </div>

                    {/* Email */}
                    <div className="contact-input-group">
                      <label className="contact-form-label">
                        Business Email <span className="contact-form-required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="engineer@rail-enterprise.com"
                        value={inquiryForm.email}
                        onChange={handleInquiryChange}
                        required
                        className="contact-field-input"
                      />
                    </div>

                    {/* Organization */}
                    <div className="contact-input-group">
                      <label className="contact-form-label">
                        Organization / Railway Zone
                      </label>
                      <input
                        type="text"
                        name="organization"
                        placeholder="e.g., Indian Railways / OEM"
                        value={inquiryForm.organization}
                        onChange={handleInquiryChange}
                        className="contact-field-input"
                      />
                    </div>

                    {/* Phone */}
                    <div className="contact-input-group">
                      <label className="contact-form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={inquiryForm.phone}
                        onChange={handleInquiryChange}
                        className="contact-field-input"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="contact-input-group col-span-2">
                      <label className="contact-form-label">
                        Inquiry Focus <span className="contact-form-required">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={inquiryForm.inquiryType}
                        onChange={handleInquiryChange}
                        required
                        className="contact-field-select"
                      >
                        <option value="Rolling Stock Components">Rolling Stock Components &amp; Bogie Assemblies</option>
                        <option value="HVAC & Thermal Solutions">HVAC &amp; Roof-Mounted Thermal Systems</option>
                        <option value="Precision CNC Machining">Heavy Precision CNC Machining &amp; Tooling</option>
                        <option value="Plant Visit / Audit">Schedule a Factory Visit / Quality Audit</option>
                        <option value="Tender / RFP Bid">Tender / RFP Bidding Partnership</option>
                        <option value="Other Inquiries">Other Inquiries</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="contact-input-group col-span-2">
                      <label className="contact-form-label">
                        Project Specifications &amp; Message <span className="contact-form-required">*</span>
                      </label>
                      <textarea
                        name="message"
                        placeholder="Outline component specifications, delivery timelines, expected quantities, or engineering standards..."
                        value={inquiryForm.message}
                        onChange={handleInquiryChange}
                        required
                        className="contact-field-textarea"
                      />
                    </div>
                  </div>

                  <div className="contact-form-submit-wrap">
                    <button type="submit" className="contact-send-btn">
                      <span className="contact-send-btn-text">Send Message</span>
                      <span className="contact-send-btn-icon">
                        <ArrowUpRight className="contact-send-btn-icon-svg" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Regional Engineering Hubs & Offices */}
      <section className="contact-locations-section">
        <div className="contact-locations-container">
          <div className="contact-locations-header">
            <div className="contact-badge">
              <Sparkles className="contact-badge-icon" />
              <span>REGIONAL PRESENCE</span>
            </div>
            <h2 className="contact-locations-title">
              Our Offices &amp; Precision Facilities
            </h2>
            <p className="contact-channels-desc">
              Visit our corporate offices, advanced manufacturing centers and regional mobility support hubs across key transit corridors.
            </p>
          </div>

          <div className="contact-locations-grid">
            {locationCards.map((card, idx) => (
              <div key={idx} className="contact-location-card">
                <div className="contact-location-img-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="contact-location-img"
                  />
                </div>

                <div className="contact-location-content">
                  <div>
                    <h3 className="contact-location-card-title">
                      {card.title}
                    </h3>
                    <div className="contact-location-address">
                      {card.addressLines.map((line, lIdx) => (
                        <div key={lIdx}>{line}</div>
                      ))}
                    </div>
                  </div>

                  <p className="contact-location-hours">
                    {card.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Engineering Milestone CTA Section */}
      <Contact onOpenQuote={() => setQuoteModalOpen(true)} />

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
