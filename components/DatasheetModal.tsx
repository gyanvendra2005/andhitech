'use client';

import React from 'react';
import { X } from 'lucide-react';
import { ProductDatasheet } from '@/data/datasheets';

interface DatasheetModalProps {
  datasheet: ProductDatasheet | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function DatasheetModal({ datasheet, onClose, onOpenQuote }: DatasheetModalProps) {
  if (!datasheet) return null;

  return (
    <div className="datasheet-modal-overlay">
      <div className="datasheet-modal-panel">
        <button
          onClick={onClose}
          className="datasheet-modal-close"
          aria-label="Close modal"
        >
          <X className="datasheet-modal-close-icon" />
        </button>
        <div className="datasheet-modal-eyebrow">
          Technical Datasheet · {datasheet.category}
        </div>
        <h3 className="datasheet-modal-title">{datasheet.title}</h3>
        <p className="datasheet-modal-overview">{datasheet.overview}</p>

        <h4 className="datasheet-modal-specs-heading">Technical Specifications</h4>
        <div className="datasheet-modal-specs-list">
          {Object.entries(datasheet.specs).map(([k, v]) => (
            <div key={k} className="datasheet-modal-spec-row">
              <span className="datasheet-modal-spec-key">{k}</span>
              <span className="datasheet-modal-spec-value">{v}</span>
            </div>
          ))}
        </div>

        <div className="datasheet-modal-footer">
          <div className="datasheet-modal-compliance-list">
            {datasheet.compliance.map((c, i) => (
              <span key={i} className="datasheet-modal-compliance-tag">
                {c}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="datasheet-modal-quote-btn"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}
