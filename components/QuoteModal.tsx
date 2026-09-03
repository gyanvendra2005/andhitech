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
    product: 'Axle & Wheel Mounted Brake Discs',
    notes: '',
  });

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: 'Axle & Wheel Mounted Brake Discs',
        notes: '',
      });
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-navy-deep border border-white/15 p-8 text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="text-xs font-semibold tracking-[0.28em] uppercase text-gold mb-1">Request a Quote</div>
        <h3 className="font-display text-2xl font-bold mb-6">Technical RFQ Form</h3>

        {submitted ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 p-6 text-center space-y-3">
            <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
            <div className="font-display text-lg font-bold">RFQ Request Submitted</div>
            <p className="text-xs text-slate-300">Our engineering sales team will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">Company / Organization</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1">Product System</label>
              <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full bg-navy-deep border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-gold"
              >
                <option value="Axle & Wheel Mounted Brake Discs">Axle & Wheel Mounted Brake Discs</option>
                <option value="Roof-Mounted Package Units (RMPU)">Roof-Mounted Package Units (RMPU)</option>
                <option value="Air Suspension & LHB Dampers">Air Suspension & LHB Dampers</option>
                <option value="Spring-Type Pantographs">Spring-Type Pantographs</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-navy py-3 text-xs font-bold uppercase tracking-wider hover:brightness-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Submit Inquiry</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
