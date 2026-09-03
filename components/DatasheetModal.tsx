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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-navy-deep border border-gold/40 text-white p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
          Technical Datasheet · {datasheet.category}
        </div>
        <h3 className="font-display text-2xl font-bold mb-4">{datasheet.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">{datasheet.overview}</p>

        <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">Technical Specifications</h4>
        <div className="border border-white/10 divide-y divide-white/10 mb-6 bg-black/30">
          {Object.entries(datasheet.specs).map(([k, v]) => (
            <div key={k} className="grid grid-cols-2 px-4 py-2 text-xs">
              <span className="text-slate-400 font-semibold">{k}</span>
              <span className="text-white">{v}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex gap-2 flex-wrap">
            {datasheet.compliance.map((c, i) => (
              <span key={i} className="text-[10px] bg-gold/10 border border-gold/30 text-gold px-2 py-0.5 uppercase tracking-wider">
                {c}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="bg-gold text-navy px-5 py-2 text-xs font-bold uppercase tracking-wider hover:brightness-95 cursor-pointer"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}
