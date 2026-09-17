'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import QuoteModal from '@/components/QuoteModal';
import {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInquiryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryForm),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setInquirySubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const locationCards = [
    {
      title: 'Corporate Office',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448194.8284599452!2d77.178097!3d28.644082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c1ac2a06ed%3A0x9fd61c4eea0cef69!2sAND%20Hitech%20Industries%20Limited.%20(Corporate%20Office)!5e0!3m2!1sen!2sin!4v1748424146134!5m2!1sen!2sin',
    },
    {
      title: 'Manufacturing Plant (Unit-1)',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14033.641263915197!2d77.565772!3d28.437045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf0c1568576d%3A0xb72dcf64114b3f39!2sAND%20HITECH%20INDUSTRIES%20LTD.%20(UNIT-2)!5e0!3m2!1sen!2sin!4v1760082843630!5m2!1sen!2sin',
    },
    {
      title: 'Manufacturing Plant (Unit-2)',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d877.1034046751665!2d77.5685434!3d28.4369454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf007bb28929%3A0x5a94ea0bef6aceef!2sSPHERE%20THERMAL%20SYSTEM%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1760082902805!5m2!1sen!2sin',
    },
    {
      title: 'Manufacturing Plant (Unit-3)',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14033.641263915197!2d77.565772!3d28.437045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf0c1568576d%3A0xb72dcf64114b3f39!2sAND%20HITECH%20INDUSTRIES%20LTD.%20(UNIT-2)!5e0!3m2!1sen!2sin!4v1760082967590!5m2!1sen!2sin',
    },
  ];

  return (
    <div className="contact-us-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Header */}
      <section className="about-hero">
        <div className="grid-lines"></div>
        <div className="about-hero-container fade-in-scroll">
          <div className="about-hero-badge">
            CONNECT WITH AHIL · GLOBAL MOBILITY ENGINEERING
          </div>
          <h1 className="about-hero-title">
            Let&apos;s Build Your <span>Rail &amp; Transit</span> Future Together.
          </h1>
        </div>
      </section>

      {/* Section 2: Direct Technical Inquiry Form */}
      <section className="section contact-form-section">
        <div className="container contact-form-container">
          <div className="contact-form-2col">
            
            {/* Left Column: Information & Guarantees */}
            <div className="contact-info-left fade-in-scroll">
              <div>
                <div className="contact-badge">
                  <span className="contact-badge-line"></span>
                  <span>DIRECT INQUIRY DESK</span>
                </div>
                <h2 className="contact-form-simple-title">
                  Contact our <span className="gold-underline">team</span>
                </h2>
                <p className="contact-form-simple-subtitle">
                  Let&apos;s help you get started.
                </p>
              </div>

              <div className="contact-info-divider"></div>

              {/* Plain Contact Details List */}
              <div className="contact-info-phone-list">
                <div className="contact-info-phone-row">
                  <span className="contact-info-phone-label">Engineering Desk</span>
                  <span className="contact-info-phone-value">+91 (0) 120-456-7890</span>
                </div>
                <div className="contact-info-phone-row">
                  <span className="contact-info-phone-label">Business Email</span>
                  <span className="contact-info-phone-value">service@andhitech.in</span>
                </div>
                <div className="contact-info-phone-row">
                  <span className="contact-info-phone-label">Grievance SLA</span>
                  <span className="contact-info-phone-value">&lt; 2 Hours Response</span>
                </div>
              </div>

              {/* Address / Info Card */}
              <div className="contact-info-address-card">
                <h4 className="contact-info-address-title">AHIL Saket Executive Office</h4>
                <p className="contact-info-address-text">
                  F-11, Select CITYWALK<br />
                  District Centre, Saket<br />
                  New Delhi, Delhi, 110017
                </p>
              </div>

              {/* Direct Railway Grievance Notice */}
              <div className="contact-info-address-card">
                <h4 className="contact-info-address-title">
                  Railway Depot Grievance or Component Failure?
                </h4>
                <p className="contact-info-address-text">
                  For active rolling stock failure logs or warranty claims, please use our{' '}
                  <Link href="/online-complaint" className="contact-info-address-link">
                    Online Complaint Portal
                  </Link>{' '}
                  with 2-hour SLA tracking.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form Card */}
            <div className="contact-inquiry-card fade-in-scroll fade-in-scroll-delay-1">
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

                  <p className="contact-form-disclaimer">
                    Upon submitting this form, we will contact you using the information provided.
                    I agree to the processing and international transfer of my personal data by AHIL as described in the{' '}
                    <Link href="/" className="contact-form-disclaimer-link">Privacy Policy</Link>.
                    You may unsubscribe at any time by clicking the unsubscribe link on any emails you receive.
                  </p>

                  {errorMessage && (
                    <div style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 600 }}>
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  <div className="contact-form-submit-wrap">
                    <button type="submit" disabled={isSubmitting} className="contact-form-submit-btn">
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Regional Engineering Hubs & Offices */}
      <section className="section contact-locations-section">
        <div className="container contact-locations-container">
          <div className="contact-locations-header fade-in-scroll">
            <div className="contact-badge">
              <span className="contact-badge-line"></span>
              <span>REGIONAL PRESENCE</span>
            </div>
            <h2 className="section-title contact-locations-title">
              Our Offices &amp; <span className="gold-underline">Precision Facilities</span>
            </h2>
            <p className="contact-channels-desc">
              Visit our corporate offices, advanced manufacturing centers and regional mobility support hubs across key transit corridors.
            </p>
          </div>

          <div className="contact-locations-grid fade-in-scroll fade-in-scroll-delay-1">
            {locationCards.map((card, idx) => (
              <div key={idx} className="contact-location-card">
                <div className="contact-location-img-wrap">
                  <iframe
                    src={card.mapEmbedUrl}
                    title={card.title}
                    className="contact-location-map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="contact-location-content">
                  <h3 className="contact-location-card-title">
                    {card.title}
                  </h3>
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
