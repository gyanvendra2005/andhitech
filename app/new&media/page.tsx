'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import NewsSlider from '@/components/NewsSlider';

export default function NewAndMediaPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
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

  const newsArticles = [
    {
      image: 'https://admin.andhitech.in/media/news_media_images/newsmedia1.png',
      title: 'रेल सुरक्षा और आराम से जुड़े उपकरण बनें आकर्षण का केंद्र',
      description: 'ग्रेटर नोएडा में ट्रेड शो में इस बार जिले की तमाम कंपनियां अपने इनोवेटिव प्रोडक्ट्स के साथ भाग ले रही हैं।',
      link: 'https://www.amarujala.com/video/delhi-ncr/noida/video-rail-safety-and-comfort-equipment-becomes-the-center-of-attraction-2025-09-26',
    },
    {
      image: 'https://admin.andhitech.in/media/news_media_images/Screenshot_2025-12-19_154029.png',
      title: 'Massive Rail Investments Fuel Indian Industry Boom: AHIL Director Highlights Make in India Gains',
      description: 'As Indian Railways undergoes a transformative overhaul with billions poured into infrastructure.',
      link: 'https://www.facebook.com/NewsStationTV/videos/1543749896979304/?rdid=sVeC8lQ06fgDq4OG',
    },
    {
      image: 'https://admin.andhitech.in/media/news_media_images/SAV_0115_gbJGvZW.JPG',
      title: 'IREE Exhibition 2025',
      description: 'See the Glimpses from Our Booth at International Rail Equipment Exhibition (IREE) 2025.',
      link: 'https://andhitech-my.sharepoint.com/:f:/g/personal/hr_andhitech_in/IgBVNwqrtX3uR5c_LJemo24dAX57nbQCJXnTf6n0GEIc2h4?e=jX3Cuf',
    },
    {
      image: 'https://admin.andhitech.in/media/news_media_images/1_CnRKpeF.JPG',
      title: 'IRCE Exhibition 2026',
      description: 'IRCE Exhibition',
      link: 'https://andhitech-my.sharepoint.com/:f:/g/personal/manishkumar_andhitech_in/IgDZOKBfnTw0Q5vQ6tmcNCNPAeVG2dehQ8mo4yubTdMMDgI?e=ggfxso',
    },
  ];

  return (
    <div className="news-media-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Banner */}
      <section className="about-hero">
        <div className="grid-lines"></div>
        <div className="about-hero-container fade-in-scroll">
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
              <span className="news-badge-line"></span>
              <span>PRESS &amp; MEDIA RELEASES</span>
            </div>

            <h2 className="section-title news-section-title">
              News &amp; Media <span className="gold-underline">Highlights</span>
            </h2>

            <p className="news-section-subtitle">
              Stay updated on AHIL&apos;s latest contracts, manufacturing milestones, technology launches, and corporate developments in rail mobility.
            </p>
          </div>

          {/* News & Media Slider */}
          <div className={`fade-in-scroll fade-in-scroll-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <NewsSlider articles={newsArticles} />
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