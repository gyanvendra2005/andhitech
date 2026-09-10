'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  UserCheck, 
  Wrench, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  Clock 
} from 'lucide-react';

export default function OnlineComplaintPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const formSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0, rootMargin: '100px' }
    );

    if (formSectionRef.current) {
      observer.observe(formSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const [formData, setFormData] = useState({
    // Basic Information
    date: new Date().toISOString().split('T')[0],
    customerRailway: '',
    depot: '',
    coachNo: '',
    // Complaint Details
    productionUnit: '',
    letterNo: '',
    letterDate: '',
    portalComplaintNo: '',
    product: '',
    failureDescription: '',
    failureDate: '',
    // Contact Information
    contactPersonName: '',
    designation: '',
    contactNo: '',
    emailId: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `AHIL-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);
    setSubmitted(true);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      customerRailway: '',
      depot: '',
      coachNo: '',
      productionUnit: '',
      letterNo: '',
      letterDate: '',
      portalComplaintNo: '',
      product: '',
      failureDescription: '',
      failureDate: '',
      contactPersonName: '',
      designation: '',
      contactNo: '',
      emailId: '',
    });
  };

  return (
    <div className="complaint-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Banner */}
      <section className="about-hero">
        <div className="grid-lines"></div>
        <div className="about-hero-container">
          <div className="about-hero-badge">
            Customer Support &amp; Quality Redressal · 24/7 Rail Service
          </div>
          <h1 className="about-hero-title">
            Customer <span>Online Service</span> &amp; Complaint Portal.
          </h1>
        </div>
      </section>

      {/* Main Complaint 2-Column Section */}
      <section ref={formSectionRef} className="section complaint-section">
        <div className="container complaint-container">
          <div className="complaint-2col-layout">
            
            {/* Left Column: Numbered Commitment List & Helpdesk Card */}
            <div className="complaint-left-info is-visible">
              <div>
                <div className="complaint-badge">
                  <Sparkles className="complaint-badge-icon" />
                  <span>QUALITY COMMITMENT &amp; SLA</span>
                </div>

                <h2 className="section-title complaint-main-title">
                  Rapid Response &amp; <span>Zero-Defect</span> Resolution
                </h2>

                <p className="complaint-main-subtitle">
                  We are dedicated to ensuring maximum reliability and safety across Indian Railways &amp; Metros. Every registered grievance follows a strict engineering SLA.
                </p>
              </div>

              {/* Numbered Process List (Matching Reference Image 01, 02, 03, 04) */}
              <div className="complaint-process-list">
                {/* 01 */}
                <div className="complaint-process-item">
                  <span className="complaint-process-num">01</span>
                  <div className="complaint-process-body">
                    <h4 className="complaint-process-title">Direct QA &amp; Engineering Escalation</h4>
                    <p className="complaint-process-desc">
                      Every logged complaint is directly routed to our Chief Metrology &amp; Rolling Stock Quality Engineers within 2 Hours.
                    </p>
                  </div>
                </div>

                {/* 02 */}
                <div className="complaint-process-item">
                  <span className="complaint-process-num">02</span>
                  <div className="complaint-process-body">
                    <h4 className="complaint-process-title">On-Site Technical Investigation</h4>
                    <p className="complaint-process-desc">
                      For critical depot or coach failures, a certified field service engineer is deployed for physical inspection within 24–48 Hours.
                    </p>
                  </div>
                </div>

                {/* 03 */}
                <div className="complaint-process-item">
                  <span className="complaint-process-num">03</span>
                  <div className="complaint-process-body">
                    <h4 className="complaint-process-title">RDSO &amp; ISO Compliant Root Cause Analysis</h4>
                    <p className="complaint-process-desc">
                      Comprehensive 8D Failure Analysis and corrective action reports provided with material micro-structure validation.
                    </p>
                  </div>
                </div>

                {/* 04 */}
                <div className="complaint-process-item">
                  <span className="complaint-process-num">04</span>
                  <div className="complaint-process-body">
                    <h4 className="complaint-process-title">Guaranteed Component Replacement SLA</h4>
                    <p className="complaint-process-desc">
                      Immediate dispatch of precision replacement components and buffer stock with zero operational transit delay.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rapid Helpdesk Contact Card */}
              <div className="complaint-helpdesk-card">
                <h4 className="complaint-helpdesk-title">
                  <PhoneCall className="complaint-helpdesk-title-icon" />
                  <span>Direct Quality Helpdesk</span>
                </h4>
                <p className="complaint-helpdesk-desc">
                  Need immediate technical clarification or emergency depot support? Contact our 24/7 central desk directly:
                </p>
                <div className="complaint-helpdesk-links">
                  <div className="complaint-helpdesk-item">
                    <PhoneCall className="complaint-helpdesk-item-icon" />
                    <span>Emergency Hotline: <strong>+91 (0) 120-456-7890</strong></span>
                  </div>
                  <div className="complaint-helpdesk-item">
                    <Mail className="complaint-helpdesk-item-icon" />
                    <span>Quality Desk: <strong>service@andhitech.in</strong></span>
                  </div>
                  <div className="complaint-helpdesk-item">
                    <Clock className="complaint-helpdesk-item-icon" />
                    <span>Guaranteed SLA: <strong>&lt; 2 Hours Response</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Complaint Form Cards */}
            <div className="complaint-right-form">
              {/* Submission Success Notification */}
              {submitted && (
                <div className="complaint-success-banner is-visible">
                  <ShieldCheck className="complaint-success-banner-icon" />
                  <div>
                    <strong>Grievance Submitted Successfully! Ticket #{ticketId}</strong>
                    <p className="complaint-success-banner-text">
                      Your complaint regarding <strong>{formData.product || 'the rail component'}</strong> has been routed to the Senior Quality Engineer at AHIL. A confirmation has been logged for Railway/Depot: <strong>{formData.customerRailway || 'Customer'} - {formData.depot || 'N/A'}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="complaint-success-banner-reset-btn"
                    >
                      Submit Another Grievance
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Card 1: Basic Information */}
                <div className="complaint-card is-visible">
                  <h3 className="complaint-card-title">
                    <FileText className="complaint-card-title-icon" />
                    <span>Basic Information</span>
                  </h3>

                  <div className="complaint-form-grid">
                    {/* Date */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Date <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    {/* Customer / Railway */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Customer / Railway <span className="complaint-required">*</span>
                      </label>
                      <select
                        name="customerRailway"
                        value={formData.customerRailway}
                        onChange={handleChange}
                        required
                        className="complaint-select"
                      >
                        <option value="">Please Select</option>
                        <option value="Northern Railway">Northern Railway (NR)</option>
                        <option value="Western Railway">Western Railway (WR)</option>
                        <option value="Central Railway">Central Railway (CR)</option>
                        <option value="Eastern Railway">Eastern Railway (ER)</option>
                        <option value="Southern Railway">Southern Railway (SR)</option>
                        <option value="South Central Railway">South Central Railway (SCR)</option>
                        <option value="South Eastern Railway">South Eastern Railway (SER)</option>
                        <option value="East Coast Railway">East Coast Railway (ECoR)</option>
                        <option value="North Western Railway">North Western Railway (NWR)</option>
                        <option value="North Central Railway">North Central Railway (NCR)</option>
                        <option value="Delhi Metro Rail Corporation">Delhi Metro Rail Corporation (DMRC)</option>
                        <option value="Mumbai Metro Rail Corporation">Mumbai Metro Rail Corporation (MMRC)</option>
                        <option value="Bangalore Metro">Bangalore Metro Rail (BMRCL)</option>
                        <option value="Kolkata Metro Rail">Kolkata Metro Rail Corporation (KMRC)</option>
                        <option value="Other Railway / OEM Partner">Other Railway Zone / OEM</option>
                      </select>
                    </div>

                    {/* Depot */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">Depot</label>
                      <input
                        type="text"
                        name="depot"
                        placeholder="Enter Depot location"
                        value={formData.depot}
                        onChange={handleChange}
                        className="complaint-input"
                      />
                    </div>

                    {/* Coach No */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">Coach No</label>
                      <input
                        type="text"
                        name="coachNo"
                        placeholder="Enter Coach Number"
                        value={formData.coachNo}
                        onChange={handleChange}
                        className="complaint-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2: Complaint Details */}
                <div className="complaint-card is-visible">
                  <h3 className="complaint-card-title">
                    <Wrench className="complaint-card-title-icon" />
                    <span>Complaint Details</span>
                  </h3>

                  <div className="complaint-form-grid">
                    {/* Production Unit */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">Production Unit</label>
                      <input
                        type="text"
                        name="productionUnit"
                        placeholder="e.g., RCF / ICF / MCF"
                        value={formData.productionUnit}
                        onChange={handleChange}
                        className="complaint-input"
                      />
                    </div>

                    {/* Letter No */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Letter No <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="letterNo"
                        placeholder="Enter official letter number"
                        value={formData.letterNo}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    {/* Letter Date */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Letter Date <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="date"
                        name="letterDate"
                        value={formData.letterDate}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    {/* Portal Complaint No */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Portal Complaint No <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="portalComplaintNo"
                        placeholder="Enter Portal Complaint Reference"
                        value={formData.portalComplaintNo}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    {/* Product */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Product <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="product"
                        placeholder="e.g., HVAC Rooftop Unit / Axle Brake Disc / Bogie System"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    {/* Failure Description */}
                    <div className="complaint-form-group col-span-2">
                      <label className="complaint-label">
                        Failure Description <span className="complaint-required">*</span>
                      </label>
                      <textarea
                        name="failureDescription"
                        placeholder="Describe the failure, observed anomalies, test parameters or operating conditions in detail..."
                        value={formData.failureDescription}
                        onChange={handleChange}
                        required
                        className="complaint-textarea"
                      />
                    </div>

                    {/* Failure Date */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Failure Date <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="date"
                        name="failureDate"
                        value={formData.failureDate}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 3: Contact Information */}
                <div className="complaint-card is-visible">
                  <h3 className="complaint-card-title">
                    <UserCheck className="complaint-card-title-icon" />
                    <span>Contact Information</span>
                  </h3>

                  <div className="complaint-form-grid">
                    {/* Contact Person Name */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Contact Person Name <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPersonName"
                        placeholder="Enter contact person's full name"
                        value={formData.contactPersonName}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    {/* Designation */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Designation <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="designation"
                        placeholder="e.g., SSE / Carriage & Wagon / Depot In-Charge"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    {/* Contact No */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Contact No <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contactNo"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.contactNo}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    {/* Email Id */}
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Email Id <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="email"
                        name="emailId"
                        placeholder="engineer@railnet.gov.in"
                        value={formData.emailId}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="complaint-submit-wrapper">
                  <button type="submit" className="complaint-submit-btn">
                    <span className="complaint-submit-text">Submit Grievance</span>
                    <span className="complaint-submit-icon">
                      <ArrowUpRight className="complaint-submit-icon-svg" />
                    </span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* Bottom Right Decorative Gold Accent */}
        <div className="complaint-corner-accent"></div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
