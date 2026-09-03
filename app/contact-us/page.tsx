'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import QuoteModal from '@/components/QuoteModal';
import { 
  Building2, 
  Factory, 
  Mail, 
  Phone, 
  Sparkles, 
  ArrowUpRight, 
  ArrowRight,
  ShieldCheck, 
  Check, 
  FileCheck, 
  Clock, 
  Send 
} from 'lucide-react';
import Link from 'next/link';

export default function ContactUsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const channelsRef = useRef<HTMLElement>(null);

  const [inquiryForm, setInquiryForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    phone: '',
    inquiryType: 'Rolling Stock Components',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (channelsRef.current) {
      observer.observe(channelsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const contactChannels = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Corporate Headquarters',
      desc: 'Executive management, strategic procurement, global partnerships and tender division.',
      details: [
        { label: 'Location', val: 'New Delhi / NCR, India' },
        { label: 'Email', val: 'info@andhitech.in' },
        { label: 'Working Hours', val: 'Mon - Sat: 9 AM - 6 PM' },
      ],
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: 'Manufacturing & Tech Center',
      desc: 'Precision CNC machining, fabrication, cleanroom HVAC assembly & metrology inspection.',
      details: [
        { label: 'Plant Scale', val: '50,000+ Sq. Ft. Unit' },
        { label: 'Direct Desk', val: 'plant@andhitech.in' },
        { label: 'Compliance', val: 'RDSO & ISO 9001:2015' },
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Sales & Engineering Bids',
      desc: 'Send RFP/RFQ specs, CAD models, drawing packages and schedule technical alignment calls.',
      details: [
        { label: 'Sales Email', val: 'sales@andhitech.in' },
        { label: 'Response SLA', val: '< 24 Hours Guaranteed' },
        { label: 'Grievance Desk', val: 'Online Redressal Portal' },
      ],
    },
  ];

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

      {/* Section 1: Quick Connect Channels */}
      {/* <section ref={channelsRef} className="contact-channels-section">
        <div className="contact-channels-container">
          <div className={`contact-channels-header fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
            <div className="contact-badge">
              <Sparkles className="w-4 h-4" />
              <span>DIRECT CHANNELS</span>
            </div>
            <h2 className="contact-channels-title">
              Reach the Right Engineering Department
            </h2>
            <p className="contact-channels-desc">
              Whether you are looking to start a new rolling stock programme, request technical component quotes, or schedule a physical plant visit, our team is ready to assist.
            </p>
          </div>

          <div className="contact-channels-grid">
            {contactChannels.map((channel, idx) => (
              <div 
                key={idx}
                className={`contact-channel-card fade-in-scroll ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${0.15 + idx * 0.15}s` }}
              >
                <div>
                  <div className="contact-channel-icon-wrap">
                    {channel.icon}
                  </div>
                  <h3 className="contact-channel-title">
                    {channel.title}
                  </h3>
                  <p className="contact-channel-summary">
                    {channel.desc}
                  </p>
                </div>

                <div className="contact-channel-details">
                  {channel.details.map((detail, dIdx) => (
                    <div key={dIdx} className="contact-detail-row">
                      <span className="contact-detail-label">{detail.label}</span>
                      <span className="contact-detail-val">{detail.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section 2: Direct Technical Inquiry Form */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-2col">
            
            {/* Left Column: Information & Guarantees */}
            <div className="contact-info-left">
              <div>
                <div className="contact-badge">
                  <Sparkles className="w-4 h-4" />
                  <span>DIRECT INQUIRY DESK</span>
                </div>
                <h2 className="contact-form-main-title">
                  Have a Custom <span>Technical Requirement?</span>
                </h2>
                <p className="contact-form-main-desc mt-3">
                  Fill out our direct inquiry form and our chief application engineers will analyze your specifications and return a preliminary feasibility review within 24 hours.
                </p>
              </div>

              {/* Highlights List */}
              <div className="contact-highlights-list">
                <div className="contact-highlight-item">
                  <div className="contact-highlight-check">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Confidential Non-Disclosure Agreement (NDA) on Request</span>
                </div>

                <div className="contact-highlight-item">
                  <div className="contact-highlight-check">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Custom Machining, Fabrication &amp; Sub-Assembly Sourcing</span>
                </div>

                <div className="contact-highlight-item">
                  <div className="contact-highlight-check">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Direct RDSO Metrology &amp; Quality Audit Support</span>
                </div>

                <div className="contact-highlight-item">
                  <div className="contact-highlight-check">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>24/7 Dedicated Online Grievance Escalation</span>
                </div>
              </div>

              {/* Direct Railway Grievance Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Railway Depot Grievance or Component Failure?
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    For active rolling stock failure logs or warranty claims, please use our{' '}
                    <Link href="/online-complaint" className="text-amber-700 font-bold underline">
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
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-6 text-center">
                  <FileCheck className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-1">Inquiry Dispatched Successfully!</h4>
                  <p className="text-sm text-emerald-700 mb-4">
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
                    className="text-xs font-bold uppercase tracking-wider text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
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
                        Full Name <span className="text-amber-600 font-bold">*</span>
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
                        Business Email <span className="text-amber-600 font-bold">*</span>
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
                        Inquiry Focus <span className="text-amber-600 font-bold">*</span>
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
                        Project Specifications &amp; Message <span className="text-amber-600 font-bold">*</span>
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
                        <ArrowUpRight className="w-5 h-5" />
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
              <Sparkles className="w-4 h-4" />
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

          {/* Grievance Quick Banner */}
          {/* <div className="contact-grievance-banner">
            <div className="contact-grievance-left">
              <div className="contact-grievance-icon">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="contact-grievance-title">
                  Railway Grievance Redressal &amp; Warranty Assistance
                </h3>
                <p className="contact-grievance-sub">
                  Submit technical component observation reports directly to our chief quality engineers.
                </p>
              </div>
            </div>

            <Link href="/online-complaint" className="contact-grievance-btn">
              <span>Open Grievance Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div> */}
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
