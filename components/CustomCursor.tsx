'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHeading, setIsHeading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(canHover);
    if (!canHover) return;

    const ring = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let rafId: number;

    const handleMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setIsHidden(false);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const clickable = el?.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, .product-card, .cv-item, .news-card, .ks-3col-card, .contact-channel-card');
      const heading = el?.closest('h1, h2, h3, h4, .section-title');
      setIsPointer(!!clickable);
      setIsHeading(!!heading && !clickable);
    };

    const handleLeave = () => setIsHidden(true);
    const handleEnter = () => setIsHidden(false);

    const animateRing = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isPointer ? 'is-pointer' : ''} ${isHeading ? 'is-heading' : ''} ${isHidden ? 'is-hidden' : ''}`}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isPointer ? 'is-pointer' : ''} ${isHeading ? 'is-heading' : ''} ${isHidden ? 'is-hidden' : ''}`}
      />
    </>
  );
}
