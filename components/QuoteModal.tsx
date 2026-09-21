'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            product: '',
            notes: '',
          });
        }, 3500);
      } else {
        setErrorMessage(data.error || 'Failed to submit quote request.');
      }
    } catch (err) {
      setErrorMessage('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-modal-overlay">
      <div className="quote-modal-panel">
        <button
          onClick={onClose}
          className="quote-modal-close"
          aria-label="Close modal"
        >
          <X className="quote-modal-close-icon" />
        </button>
        <div className="quote-modal-eyebrow">Request a Quote</div>
        <h3 className="quote-modal-title">Technical RFQ Form</h3>

        {submitted ? (
          <div className="quote-modal-success">
            <CheckCircle2 className="quote-modal-success-icon" />
            <div className="quote-modal-success-title">RFQ Request Submitted</div>
            <p className="quote-modal-success-text">Our engineering sales team will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="quote-modal-form">
            <div>
              <label className="quote-modal-label">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="quote-modal-input"
              />
            </div>
            <div>
              <label className="quote-modal-label">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="quote-modal-input"
              />
            </div>
            <div>
              <label className="quote-modal-label">Company / Organization</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="quote-modal-input"
              />
            </div>
            <div>
              <label className="quote-modal-label">Product System</label>
              {/* <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="quote-modal-select"
              >
                <option value="Axle & Wheel Mounted Brake Discs">Axle & Wheel Mounted Brake Discs</option>
                <option value="Roof-Mounted Package Units (RMPU)">Roof-Mounted Package Units (RMPU)</option>
                <option value="Air Suspension & LHB Dampers">Air Suspension & LHB Dampers</option>
                <option value="Spring-Type Pantographs">Spring-Type Pantographs</option>
              </select> */}
                <input
                type="text"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="quote-modal-input"
              />
            </div>
            {errorMessage && (
              <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: 600 }}>
                ⚠️ {errorMessage}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="quote-modal-submit-btn"
            >
              <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
              <Send className="quote-modal-submit-icon" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
