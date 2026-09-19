'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import {
  ArrowUpRight,
  ShieldCheck,
  UploadCloud,
  Rocket,
  Users,
} from 'lucide-react';
// tesing
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

const WHY_JOIN = [
  {
    icon: ShieldCheck,
    title: 'Safety-First Culture',
    text: 'ISO 45001 certified facilities where every process is built around the wellbeing of the people running it.',
  },
  {
    icon: Rocket,
    title: 'Real Engineering Impact',
    text: 'Work on braking, suspension, HVAC and door systems running across Indian Railways and metro networks.',
  },
  {
    icon: Users,
    title: 'Room to Grow',
    text: 'Structured training and mentorship across design, quality and manufacturing teams as you build your career.',
  },
];

export default function CareerPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const formSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (formSectionRef.current) {
      observer.observe(formSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const [formData, setFormData] = useState({
    candidateName: '',
    mobileNumber: '',
    email: '',
    positionAppliedFor: '',
    comments: '',
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === 'candidateName') {
      sanitized = value.replace(/[^A-Za-z\s]/g, '');
    } else if (name === 'mobileNumber') {
      sanitized = value.replace(/[^0-9+\s-]/g, '').slice(0, 15);
    }
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setCvFile(null);
      setFileError('');
      return;
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      setCvFile(null);
      setFileError('Only PDF or Word documents are allowed.');
      e.target.value = '';
      return;
    }
    if (file.size > MAX_SIZE_BYTES) {
      setCvFile(null);
      setFileError('File size must not exceed 5 MB.');
      e.target.value = '';
      return;
    }
    setFileError('');
    setCvFile(file);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.candidateName,
          email: formData.email,
          phone: formData.mobileNumber,
          roleOfInterest: formData.positionAppliedFor,
          notes: formData.comments,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        const randomRef = `AHIL-CAR-${Math.floor(100000 + Math.random() * 900000)}`;
        setReferenceId(randomRef);
        setSubmitted(true);
        window.scrollTo({ top: 350, behavior: 'smooth' });
      } else {
        setErrorMessage(data.error || 'Failed to submit application.');
      }
    } catch (err) {
      setErrorMessage('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      candidateName: '',
      mobileNumber: '',
      email: '',
      positionAppliedFor: '',
      comments: '',
    });
    setCvFile(null);
    setFileError('');
  };

  return (
    <div className="complaint-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero */}
      <section className="career-hero">
        <div className="grid-lines"></div>
        <div className="rail-streak" style={{ top: '68%', width: '40%', animationDelay: '0s' }}></div>
        <div className="rail-streak" style={{ top: '80%', width: '55%', animationDelay: '1s', opacity: 0.5 }}></div>
        <div className="career-hero-container fade-in-scroll">
          <div className="hero-eyebrow-row career-hero-anim career-hero-anim-1">
            <span className="hero-eyebrow-line"></span>
            <span className="hero-eyebrow-text">Careers at AHIL</span>
          </div>
          <h1 className="career-hero-title career-hero-anim career-hero-anim-2">
            Engineer the future of <span className="hero-title-accent">Indian Railways.</span>
          </h1>
          <p className="career-hero-subtitle career-hero-anim career-hero-anim-3">
            We are a multi-disciplinary railway engineering team, built by people who care about precision, safety and long-term impact.
          </p>
          <a href="#join-us" className="career-hero-cta career-hero-anim career-hero-anim-4">
            Join Our Team
            <ArrowUpRight className="career-hero-cta-icon" />
          </a>
        </div>
      </section>

      {/* Why Join */}
      {/* <section className="section career-why">
        <div className="container career-why-container">
          {WHY_JOIN.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`career-why-card fade-in-scroll fade-in-scroll-delay-${index + 1}`}
              >
                <div className="career-why-icon-wrap">
                  <Icon className="career-why-icon" />
                </div>
                <h3 className="career-why-title">{item.title}</h3>
                <p className="career-why-text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* Join Us Application Form */}
      <section id="join-us" ref={formSectionRef} className="section complaint-section career-form-section">
        <div className="container complaint-container career-form-container">
          <div className="complaint-2col-layout">

            {/* Left Column: Simple Intro Info */}
            <div className={`complaint-left-info career-form-intro fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
              <div>
                <div className="complaint-badge career-badge">
                  <span className="career-badge-line"></span>
                  <span>JOIN OUR TEAM</span>
                </div>
                <h2 className="section-title complaint-main-title career-form-title">
                  Apply in <span className="gold-underline">Minutes</span>
                </h2>
                <p className="complaint-main-subtitle">
                  Don&apos;t see an open role that matches you exactly? Send us your details anyway — we keep every application on file and reach out as soon as a fit opens up.
                </p>
              </div>

              <div className="contact-info-divider"></div>
            </div>

            {/* Right Column: Application Form */}
            <div className="complaint-right-form">
              {submitted && (
                <div className="complaint-success-banner is-visible career-form-banner">
                  <ShieldCheck className="complaint-success-banner-icon" />
                  <div>
                    <strong>Application Submitted Successfully! Reference #{referenceId}</strong>
                    <p className="complaint-success-banner-text">
                      Thank you, <strong>{formData.candidateName || 'Candidate'}</strong>. Your application for <strong>{formData.positionAppliedFor || 'the applied position'}</strong> has been received by our HR team and will be reviewed shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="complaint-success-banner-reset-btn"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className={`career-form-wrap fade-in-scroll fade-in-scroll-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                <div className="complaint-card">
                  <h3 className="complaint-card-title">
                    <span>Candidate Details</span>
                  </h3>

                  <div className="complaint-form-grid">
                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Candidate Name <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="candidateName"
                        placeholder="Enter your full name"
                        value={formData.candidateName}
                        onChange={handleChange}
                        pattern="[A-Za-z\s]+"
                        title="Only letters and spaces are allowed"
                        required
                        className="complaint-input"
                      />
                    </div>

                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Mobile Number <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="+91 XXXXX XXXXX"
                        pattern="[0-9+\s]{10,15}"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Email <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        title="Enter a valid email address"
                        required
                        className="complaint-input"
                      />
                    </div>

                    <div className="complaint-form-group">
                      <label className="complaint-label">
                        Position Applied For <span className="complaint-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="positionAppliedFor"
                        placeholder="e.g., Design Engineer / QA Executive"
                        value={formData.positionAppliedFor}
                        onChange={handleChange}
                        required
                        className="complaint-input"
                      />
                    </div>

                    <div className="complaint-form-group col-span-2">
                      <label className="complaint-label">Comments</label>
                      <textarea
                        name="comments"
                        placeholder="Tell us about your experience, availability or anything else relevant..."
                        value={formData.comments}
                        onChange={handleChange}
                        className="complaint-textarea"
                      />
                    </div>

                    <div className="complaint-form-group col-span-2">
                      <label className="complaint-label">
                        Upload CV <span className="complaint-required">*</span>
                      </label>
                      <label htmlFor="cv-upload" className="career-upload-box">
                        <UploadCloud className="career-upload-icon" />
                        <span className="career-upload-text">
                          {cvFile ? cvFile.name : 'Click to upload your CV'}
                        </span>
                        <span className="career-upload-hint">PDF or Word format · 5 MB max</span>
                        <input
                          id="cv-upload"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="career-upload-input"
                        />
                      </label>
                      {fileError && <span className="career-upload-error">{fileError}</span>}
                    </div>
                  </div>

                  {errorMessage && (
                    <div style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 600 }}>
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  <div className="complaint-submit-wrapper">
                    <button type="submit" disabled={isSubmitting} className="contact-form-submit-btn">
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="complaint-corner-accent"></div> */}
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
