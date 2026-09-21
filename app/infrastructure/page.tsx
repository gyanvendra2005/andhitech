'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import {
  Factory,
  FlaskConical,
  ShieldCheck,
  Cog,
  Download,
  X,
} from 'lucide-react';

const GALLERY_MEDIA_BASE = 'https://admin.andhitech.in/media/infrastructure/section_galleries/';

const FEATURES = [
  {
    icon: Factory,
    title: 'State-of-the-Art Manufacturing Plants',
    text: 'Dedicated production lines for high-performance components such as braking systems, HVAC units, and vibration control solutions — ensuring efficiency, scalability, and consistent quality.',
    image: `${GALLERY_MEDIA_BASE}DSC_0008_FZniMtf_5K0nfNN.jpg`,
  },
  {
    icon: FlaskConical,
    title: 'Cutting-Edge R&D Facilities',
    text: 'Full-fledged labs focused on developing advanced materials, designs, and technologies for improved safety, comfort, and durability.',
    image: `${GALLERY_MEDIA_BASE}DSC_0067_rpPaotL.jpg`,
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Quality Labs',
    text: 'Specialized testing equipment and inspection systems to validate performance, reliability, and compliance with Indian and global standards.',
    image: `${GALLERY_MEDIA_BASE}DSC_0261_LuMChnI.jpg`,
  },
  {
    icon: Cog,
    title: 'Advanced Machining & Fabrication',
    text: 'CNC machining, precision fabrication, and specialized processes that enable the production of complex components with exceptional accuracy.',
    image: `${GALLERY_MEDIA_BASE}DSC_0314_b6eN9lv.jpg`,
  },
];

const GALLERY_SECTIONS = [
  {
    title: 'Our Production Units',
    images: [
      'DSC_0008_FZniMtf_5K0nfNN.jpg',
      'DSC_0012_OKgah01_u7Pt4sO.jpg',
      'DSC_0021_AjJt1yE_Cy5WKfA.jpg',
      'DSC_0029_r7OXDAz_Ty6DRrd.jpg',
      'DSC_0037_uSb7qe8_jehoc2F.jpg',
      'DSC_0197_GRQ90Mk_Hkg1VAq.jpg',
      'DSC_0251_IuUlXve_VlVdzmE.jpg',
      'DSC_0362_LVYJkjB.jpg',
      'DSC_0366_M0AAGLo_f75m7ef.jpg',
      'DSC_0396_jFobAf6_WseDipK.jpg',
    ],
  },
  {
    title: 'Precision Machining Center',
    images: [
      'DSC_0314_b6eN9lv.jpg',
      'DSC_0339_qGrCIBA.jpg',
      'DSC_0343_uS94NOw.jpg',
      'DSC_0346_iStWfMM.jpg',
      'DSC_0353_kXEdcJR.jpg',
      'DSC_0356_Zz6eTWV.jpg',
      'DSC_0387_d6dnEe9.jpg',
    ],
  },
  {
    title: 'Assembly, QC, & Testing',
    images: [
      'DSC_0261_LuMChnI.jpg',
      'DSC_0263_8GmVmr7.jpg',
      'DSC_0268_tV3E5ek.jpg',
      'DSC_0288_RJ4C7Rh.jpg',
      'DSC_0299_cBr56px.jpg',
      'DSC_0311_nbd4d4O.jpg',
      'DSC_0321_GUNrGzq.jpg',
      'DSC00934_NdZvShm.JPG',
      'DSC00939_kr17AnB.JPG',
    ],
  },
  {
    title: 'Brake Pads and Brake Blocks Production',
    images: [
      'DSC_0179_T2OqXRt.jpg',
      'DSC_0214_SjlbNeG.jpg',
      'DSC_0224_T6PHrnL.jpg',
      'DSC_0233_6i7j1sq.jpg',
      'DSC_0242_qiAlJI0.jpg',
      'DSC_0274_aN7xyC8.jpg',
      'DSC_0391_UKjXeO4.jpg',
      'DSC_0407_PSPXQaV.jpg',
      'DSC_0412_RLYC7Nk.jpg',
      'DSC_0415_iP3oP7q.jpg',
    ],
  },
  {
    title: 'RMPU Development and Testing',
    images: [
      'DSC_0067_rpPaotL.jpg',
      'DSC_0072_nIgvDRx.jpg',
      'DSC_0073_Z8UW3Kt.jpg',
      'DSC_0114_m491qyM.jpg',
      'DSC_0400_1otHCLe.jpg',
      'DSC_0402_K75Wug8.jpg',
      'DSC_0404_5JKl2os.jpg',
      'DSC00783_gwptb8r.JPG',
    ],
  },
].map((group) => ({
  ...group,
  images: group.images.map(
    (file) => `https://admin.andhitech.in/media/infrastructure/section_galleries/${file}`
  ),
}));

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/n6gsPWA_h1s';
const VIDEO_THUMBNAIL = 'https://admin.andhitech.in/media/infrastructure/video_thumbnails/bgvideo_JAxPwEg_UAttb4k.png';
const BROCHURE_URL = 'https://admin.andhitech.in/media/brochures/Andhitech_Brochure_Brochure.pdf';

export default function InfrastructurePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [videoActive, setVideoActive] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoActive(true);
        }
      },
      { threshold: 0.4 }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="infra-page">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Banner */}
      <section className="about-hero about-hero-navy">
        <div className="grid-lines"></div>
        <div className="about-hero-container">
          <div className="about-hero-badge">
            FACILITIES &amp; MANUFACTURING CAPABILITY
          </div>
          <h1 className="about-hero-title">
            <span>Manufacturing</span> Facilities.
          </h1>
        </div>
      </section>

      {/* Infrastructure Capabilities Showcase (tabbed list + swapping image) */}
      <section className="section infra-showcase-section">
        <div className="container infra-showcase-container">
          <div className="infra-showcase-left">
            <div className="infra-badge">
              <span className="infra-badge-line"></span>
              <span>OUR INFRASTRUCTURE</span>
            </div>
            <h2 className="section-title infra-intro-title">
              Precision-engineered <span className="gold-underline">facilities</span>
            </h2>
            <p className="infra-intro-text">
              At AHIL, our infrastructure is designed to deliver precision-engineered solutions for the railway and HVAC industries. From braking systems to climate control units and critical safety components, our facilities combine advanced technology, skilled expertise, and rigorous quality control to ensure reliability and performance in every product.
            </p>

            <div className="infra-showcase-tabs">
              {FEATURES.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeFeature;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveFeature(index)}
                    className={`infra-showcase-tab ${isActive ? 'is-active' : ''}`}
                  >
                    <span className="infra-showcase-tab-icon-wrap">
                      <Icon className="infra-showcase-tab-icon" />
                    </span>
                    <span className="infra-showcase-tab-body">
                      <span className="infra-showcase-tab-title">{item.title}</span>
                      {isActive && (
                        <span className="infra-showcase-tab-text">{item.text}</span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="infra-showcase-right">
            <div className="infra-showcase-corner-accent"></div>
            <div className="infra-showcase-image-frame">
              <img
                key={FEATURES[activeFeature].image}
                src={FEATURES[activeFeature].image}
                alt={FEATURES[activeFeature].title}
                className="infra-showcase-image"
              />
              <div className="infra-showcase-caption">
                <span className="infra-showcase-caption-icon-wrap">
                  {(() => {
                    const ActiveIcon = FEATURES[activeFeature].icon;
                    return <ActiveIcon className="infra-showcase-caption-icon" />;
                  })()}
                </span>
                <span>
                  <span className="infra-showcase-caption-title">{FEATURES[activeFeature].title}</span>
                  <span className="infra-showcase-caption-sub">{FEATURES[activeFeature].text}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Video (autoplays once scrolled into view) */}
      <section className="section infra-video-section">
        <div className="container infra-video-container">
          <div className="infra-badge">
            <span className="infra-badge-line"></span>
            <span>VIRTUAL TOUR</span>
          </div>
          <h2 className="section-title infra-video-title">
            See our <span className="gold-underline">plant floor</span> in motion
          </h2>

          <div ref={videoSectionRef} className="infra-video-frame">
            {videoActive ? (
              <iframe
                className="infra-video-iframe"
                src={`${VIDEO_EMBED_URL}?autoplay=1&mute=1&rel=0`}
                title="AHIL Virtual Facility Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                className="infra-video-thumbnail"
                src={VIDEO_THUMBNAIL}
                alt="AHIL Virtual Facility Tour"
              />
            )}
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      {GALLERY_SECTIONS.map((group, idx) => (
        <section
          key={group.title}
          className={`section infra-gallery-section ${idx % 2 === 1 ? 'infra-gallery-section-alt' : ''}`}
        >
          <div className="container infra-gallery-container">
            <h3 className="infra-gallery-title">{group.title}</h3>
            <div className="infra-gallery-grid">
              {group.images.map((src) => (
                <button
                  key={src}
                  type="button"
                  className="infra-gallery-item"
                  onClick={() => setLightboxImage(src)}
                  aria-label={`View larger image: ${group.title}`}
                >
                  <img className="infra-gallery-img" src={src} alt={group.title} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Brochure CTA */}
      <section className="section infra-brochure-section">
        <div className="container infra-brochure-inner">
          <div>
            <h3 className="infra-brochure-title">Our Brochures</h3>
            <p className="infra-brochure-text">
              Download our facility brochure for a complete overview of AHIL&apos;s manufacturing capabilities, quality systems and product lines.
            </p>
          </div>
          <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="infra-brochure-btn"
          >
            <Download className="infra-brochure-btn-icon" />
            Download Brochure
          </a>
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      {/* Gallery Image Lightbox */}
      {lightboxImage && (
        <div className="infra-lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <button
            type="button"
            className="infra-lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image"
          >
            <X className="infra-lightbox-close-icon" />
          </button>
          <img
            src={lightboxImage}
            alt="Facility"
            className="infra-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
