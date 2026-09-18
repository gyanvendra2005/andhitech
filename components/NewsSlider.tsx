'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface NewsArticle {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface NewsSliderProps {
  articles: NewsArticle[];
}

export default function NewsSlider({ articles }: NewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [stepPx, setStepPx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1100) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Measure the actual rendered slide width (+gap) in pixels so the
  // translate offset lines up exactly with one slide, regardless of the
  // flex-basis/gap values set in CSS for the current breakpoint.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || track.children.length < 1) return;
      const first = track.children[0] as HTMLElement;
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || '0');
      setStepPx(first.offsetWidth + gap);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [slidesToShow, articles.length]);

  const maxIndex = Math.max(0, articles.length - slidesToShow);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  const translateXPx = -(currentIndex * stepPx);

  return (
    <div className="news-slider-wrapper">
      {/* Viewport & Track */}
      <div
        className="news-slider-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="news-slider-track"
          style={{
            transform: `translateX(${translateXPx}px)`,
          }}
        >
          {articles.map((article, idx) => (
            <div key={idx} className="news-slider-slide">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card"
              >
                <div className="news-card-img-wrap">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="news-card-img"
                  />
                </div>

                <div className="news-card-content">
                  <h3 className="news-card-title">
                    {article.title}
                  </h3>

                  <p className="news-card-description">
                    {article.description}
                  </p>

                  <div className="news-card-footer">
                    <span className="news-card-read-more">
                      Read More <ArrowRight className="news-card-read-more-icon" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls: Dots on Left, Arrows on Right */}
      <div className="news-slider-controls">
        {/* Pagination Dots */}
        <div className="news-slider-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`news-slider-dot ${currentIndex === index ? 'is-active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="news-slider-nav-btns">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="news-slider-arrow-btn"
            aria-label="Previous slide"
          >
            <ChevronLeft className="news-slider-arrow-icon" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="news-slider-arrow-btn"
            aria-label="Next slide"
          >
            <ChevronRight className="news-slider-arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
