'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import NewsSlider from '@/components/NewsSlider';
import { Sparkles, ArrowRight, Download, Mail, Calendar, Clock } from 'lucide-react';

export default function NewAndMediaPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const categories = [
    'All',
    'Contracts & Awards',
    'Product Innovations',
    'Infrastructure & R&D',
    'Quality & Certifications',
  ];

  const newsArticles = [
    {
      category: 'Quality & Standards',
      date: 'December 18, 2023',
      image: '/assets/facility.jpg',
      title: 'RDSO Certification Renewed with 100% Quality & Metrology Compliance',
      description: 'AHIL successfully completes comprehensive RDSO audits, reinforcing our zero-defect quality benchmark for railway bogie and HVAC components.',
    },
    {
      category: 'Infrastructure & R&D',
      date: 'January 24, 2024',
      image: '/assets/facility.jpg',
      title: 'New 50,000 Sq. Ft. Precision CNC Machining & Assembly Plant Operational',
      description: 'The state-of-the-art facility expands manufacturing capacity by 40%, dedicated to high-precision machining and automated testing rigs.',
    },
    {
      category: 'Product Innovation',
      date: 'February 10, 2024',
      image: '/assets/product-hvac.jpg',
      title: 'Next-Gen Eco-Friendly Rooftop HVAC Units Launched for Metro Fleets',
      description: 'Engineered for energy efficiency, low acoustic footprint, and reliable performance in tropical ambient operating temperatures.',
    },
    {
      category: 'Contracts & Awards',
      date: 'March 05, 2024',
      image: '/assets/product-brake-disc.jpg',
      title: 'AHIL Awarded Supply Mandate for LHB High-Speed Axle Brake Disc Systems',
      description: 'Continuing our partnership with Indian Railways rolling stock divisions, delivering high-temperature thermal-dissipating brake assemblies.',
    },
    {
      category: 'Events & Expo',
      date: 'November 14, 2023',
      image: '/assets/hero-rail.jpg',
      title: 'AHIL Demonstrates Advanced Transit Solutions at International Rail Expo',
      description: 'Showcasing our indigenous pantograph mechanisms, suspension linkages, and lightweight aluminium rolling stock solutions.',
    },
    {
      category: 'Media Coverage',
      date: 'October 28, 2023',
      image: '/assets/facility.jpg',
      title: 'Pioneering Rail Engineering: AHIL Featured in Indian Industrial Review',
      description: 'An exclusive feature highlighting AHIL’s journey from precision tier-2 vendor to leading tier-1 mobility engineering partner.',
    },
  ];

  const filteredArticles = activeTab === 'All' 
    ? newsArticles 
    : newsArticles.filter(item => item.category.toLowerCase().includes(activeTab.toLowerCase().split(' ')[0]));

  return (
    <div className="news-media-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Banner */}
      <section className="about-hero">
        <div className="grid-lines"></div>
        <div className="about-hero-container">
          <div className="about-hero-badge">
            Media Center · Press &amp; Announcements
          </div>
          <h1 className="about-hero-title">
            Latest News, <span>Press Releases</span> &amp; Industry Insights.
          </h1>
        </div>
      </section>

      {/* Main News Section */}
      <section ref={sectionRef} className="section news-section">
        <div className="container news-section-container">
          {/* Header & Filter Tabs */}
          <div className={`news-header-area fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
            <div className="news-badge">
              <Sparkles />
              <span>PRESS &amp; MEDIA RELEASES</span>
            </div>

            <h2 className="section-title news-section-title">
              News &amp; Media Highlights
            </h2>

            <p className="news-section-subtitle">
              Stay updated on AHIL&apos;s latest contracts, manufacturing milestones, technology launches, and corporate developments in rail mobility.
            </p>

            {/* Category Tabs */}
            {/* <div className="news-tabs-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`news-tab-btn ${activeTab === cat ? 'is-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div> */}
          </div>

          {/* Featured Headline News Card */}
          <div className={`news-featured-card fade-in-scroll fade-in-scroll-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className="news-featured-img-wrap">
              <img
                src="/assets/hero-rail.jpg"
                alt="Vande Bharat Trainset Project"
                className="news-featured-img"
              />
              <span className="news-featured-tag">Featured Announcement</span>
            </div>

            <div className="news-featured-body">
              <div className="news-meta-row">
                <span className="news-meta-item">
                  <Calendar className="w-4 h-4" /> March 15, 2024
                </span>
                <span>·</span>
                <span className="news-meta-item">
                  <Clock className="w-4 h-4" /> 4 Min Read
                </span>
              </div>

              <h3 className="news-featured-title">
                AHIL Wins Major Supply Contract for Next-Generation Vande Bharat Fleets
              </h3>

              <p className="news-featured-desc">
                AHIL has been awarded a prestigious contract to manufacture and deliver precision-machined suspension components, braking subsystems, and specialized HVAC assemblies for upcoming high-speed trainsets across Indian Railways.
              </p>

              <span className="news-read-more-btn">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Slick-Style Horizontal News Slider (Matching Image 2) */}
          <div className={`fade-in-scroll fade-in-scroll-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <NewsSlider articles={filteredArticles.length > 0 ? filteredArticles : newsArticles} />
          </div>

          {/* Press Kit & Media Inquiries Box */}
          {/* <div className={`media-kit-box fade-in-scroll fade-in-scroll-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            <div className="media-kit-left">
              <span className="media-kit-badge">FOR JOURNALISTS &amp; EDITORS</span>
              <h3 className="media-kit-title">
                Media Kit &amp; Press Resources
              </h3>
              <p className="media-kit-desc">
                Download official AHIL brand guidelines, vector logos, executive photography, and high-resolution plant imagery for publication.
              </p>
            </div>

            <div className="media-kit-actions">
              <a
                href="#download-kit"
                className="media-kit-btn"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Media Kit downloaded successfully.');
                }}
              >
                <Download className="w-5 h-5" /> Download Press Kit (.ZIP)
              </a>

              <div className="media-contact-card">
                <div>Media Relations Office:</div>
                <a href="mailto:media@andhitech.com" className="flex items-center gap-2 mt-1">
                  <Mail className="w-4 h-4" /> media@andhitech.com
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}