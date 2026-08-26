'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ProductDatasheet {
  title: string;
  category: string;
  description: string;
  overview: string;
  specs: Record<string, string>;
  compliance: string[];
}

const DATASHEETS: Record<string, ProductDatasheet> = {
  'brake-discs': {
    title: 'Axle & Wheel Mounted Brake Discs',
    category: 'Braking Systems',
    description: 'Precision-machined discs engineered for LHB coaches, Vande Bharat and metro rolling stock — tested for thermal fatigue and long service life.',
    overview: 'High-performance brake discs designed to absorb extreme kinetic energy during braking cycles at speeds up to 200 km/h. Engineered with optimized thermal ventilation vanes to reduce wear and prevent thermal fatigue cracking.',
    specs: {
      'Material Specification': 'High-alloy Cast Iron / Forged Steel',
      'Diameter': '590 mm / 640 mm standard',
      'Operating Speed': 'Up to 200 km/h',
      'Dynamic Balance': 'ISO 1940 Grade G2.5',
      'Quality Standard': 'RDSO / EN 14535 compliant',
    },
    compliance: ['RDSO Approved', 'EN 14535', 'UIC 541-3'],
  },
  'hvac-rmpu': {
    title: 'Roof-Mounted Package Units (RMPU)',
    category: 'HVAC',
    description: 'Compact HVAC for LHB AC coaches and locomotive cabins — energy-efficient climate control certified for harsh operating environments.',
    overview: 'Fully automatic Roof-Mounted Package Air Conditioning Unit designed for extreme Indian ambient temperatures up to 55°C. Features dual independent refrigeration circuits for 100% operational redundancy.',
    specs: {
      'Cooling Capacity': '7.0 TR to 14.0 TR per coach',
      'Airflow Rate': '4,000 - 5,000 m³/h',
      'Refrigerant': 'R134a / R407C Eco-Friendly',
      'Casing Material': 'Stainless Steel Weatherproof Enclosure',
      'Control System': 'Micro-processor based controller with RS485',
    },
    compliance: ['RDSO Spec EL/7/1/RMPU', 'EN 14750', 'ISO 14001'],
  },
  'suspension': {
    title: 'Air Suspension & LHB Dampers',
    category: 'Ride Comfort',
    description: 'Air suspension control equipment and shock absorbers delivering ride comfort, stability and predictable dynamic response.',
    overview: 'Advanced secondary air suspension systems equipped with automatic leveling valves and high-durability hydraulic dampers engineered to maintain smooth ride index on passenger coaches.',
    specs: {
      'Operating Pressure': '4.5 to 7.0 bar',
      'Max Axle Load': '17.0 Tonnes',
      'Height Control Precision': '± 3 mm under dynamic load',
      'Damping Characteristics': 'Adjustable hydraulic vertical & yaw damping',
    },
    compliance: ['RDSO Spec C-K406', 'UIC 515-4', 'EN 13597'],
  },
  'pantographs': {
    title: 'Spring-Type Pantographs',
    category: 'Traction',
    description: 'High-speed pantographs and IV couplers for reliable current collection and electrical linking between rail cars.',
    overview: 'Aerodynamically optimized single-arm spring pantograph for reliable 25kV OLE current collection at speeds up to 200 km/h, equipped with Auto-Drop Device (ADD) safety mechanism.',
    specs: {
      'Nominal Voltage': '25 kV AC 50 Hz',
      'Continuous Current': '1,000 A',
      'Working Height': '4.8 m - 6.8 m',
      'Collector Head': 'Carbon strip with wear sensor',
    },
    compliance: ['IEC 61133', 'EN 50206-1', 'RDSO Traction Standard'],
  },
};

export default function Home() {
  const [selectedDatasheet, setSelectedDatasheet] = useState<ProductDatasheet | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: 'Axle & Wheel Mounted Brake Discs',
    notes: '',
  });

  const tickerItems = [
    'Brake Discs',
    'RMPU HVAC',
    'Air Suspension',
    'LHB Dampers',
    'Pantographs',
    'IV Couplers',
    'Plug Doors — Vande Bharat',
    'Tungsten Carbide Tamping Tools',
    'Brake Blocks',
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuoteModalOpen(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: 'Axle & Wheel Mounted Brake Discs',
        notes: '',
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-gold selection:text-navy">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/andhitech/assets/ahil-logo-light.svg"
              alt="AHIL — And Hitech Industries Limited"
              className="h-9 md:h-10 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            <a href="#capabilities" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
              Capabilities
            </a>
            <a href="#products" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
              Products
            </a>
            <a href="#facility" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
              Facility
            </a>
            <a href="#clients" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
              Clients
            </a>
            <a href="#contact" className="text-sm font-medium text-white/85 hover:text-gold transition-colors">
              Contact
            </a>
          </nav>

          <button
            onClick={() => setQuoteModalOpen(true)}
            className="hidden md:inline-flex items-center gap-2 rounded-none border border-white/25 bg-white/5 backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy hover:border-gold transition-all cursor-pointer"
          >
            Request a quote <span aria-hidden="true">→</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-deep border-b border-white/10 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Capabilities</a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Products</a>
              <a href="#facility" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Facility</a>
              <a href="#clients" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Clients</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold text-base font-medium">Contact</a>
            </nav>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="w-full bg-gold text-navy py-3 font-bold uppercase tracking-wider text-sm text-center"
            >
              Request a quote →
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img
            src="/andhitech/assets/hero-rail.jpg"
            alt=""
            aria-hidden="true"
            className="hero-motion absolute inset-0 h-full w-full object-cover"
            width="1920"
            height="1088"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent"></div>
          <div className="absolute inset-0 grid-lines opacity-60"></div>
          <div className="rail-streak" style={{ top: '62%', width: '40%', animationDelay: '0s' }}></div>
          <div className="rail-streak" style={{ top: '70%', width: '55%', animationDelay: '0.8s', opacity: 0.6 }}></div>
          <div className="rail-streak" style={{ top: '78%', width: '30%', animationDelay: '1.6s' }}></div>
          <div className="rail-streak" style={{ top: '86%', width: '50%', animationDelay: '2.2s', opacity: 0.5 }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-40 pb-24 md:pt-52 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold"></span>
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">
                Precision engineering · Established 2013
              </span>
            </div>
            <h1 className="font-display font-extrabold text-white leading-[0.95] text-[clamp(2.75rem,7vw,6rem)]">
              Moving India's <br />
              <span className="text-gold">railways</span> forward.
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
              AHIL manufactures high-performance components for rolling stock — brake systems, HVAC, air suspension, pantographs and precision assemblies — engineered for safety, efficiency and a lifetime of service.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-3 bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy hover:brightness-95 transition-all"
              >
                Explore capabilities <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
              >
                Partner with us
              </a>
            </div>
          </div>

          <div className="absolute left-6 lg:left-10 right-6 lg:right-10 bottom-8 md:bottom-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-t border-white/15">
              <div className="bg-navy-deep/70 backdrop-blur-sm px-5 py-5 md:px-8 md:py-6">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold">2013</div>
                <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-[0.18em]">Established</div>
              </div>
              <div className="bg-navy-deep/70 backdrop-blur-sm px-5 py-5 md:px-8 md:py-6">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold">100+</div>
                <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-[0.18em]">Skilled professionals</div>
              </div>
              <div className="bg-navy-deep/70 backdrop-blur-sm px-5 py-5 md:px-8 md:py-6">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold">15+</div>
                <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-[0.18em]">Active programmes</div>
              </div>
              <div className="bg-navy-deep/70 backdrop-blur-sm px-5 py-5 md:px-8 md:py-6">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold">ISO</div>
                <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-[0.18em]">9001 · 14001 · 45001</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-navy text-white overflow-hidden border-y border-white/10">
        <div className="flex ticker-track whitespace-nowrap py-5">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-8">
              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              <span className="font-display text-sm md:text-base font-semibold tracking-wide uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-navy"></span>
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-navy">About AHIL</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] text-navy">
              Built to <span className="gold-underline">perform.</span><br />
              Designed to lead.
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-4">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
              Since 2013, <strong className="text-navy">And Hitech Industries Limited</strong> has grown into a trusted manufacturing partner for Indian Railways, Metros and PSUs. Under the leadership of Mr. Angad Singh, a 100-strong team combines engineering discipline with state-of-the-art facilities to deliver components the country's rolling stock depends on.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70">
              From the axle-mounted brake disc that safely stops a Vande Bharat to the RMPU keeping an LHB coach cool at 130 km/h — every AHIL product is engineered, tested and documented against the standards railway operators trust.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <div className="border-t border-border pt-5">
                <div className="font-display font-bold text-navy">RDSO approved</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Products qualified to Indian Railways specifications.</p>
              </div>
              <div className="border-t border-border pt-5">
                <div className="font-display font-bold text-navy">IRIS-grade quality</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Certified 9001 · 14001 · 45001 management systems.</p>
              </div>
              <div className="border-t border-border pt-5">
                <div className="font-display font-bold text-navy">On-time delivery</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Integrated planning and vendor network for schedule reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="capabilities" className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold"></span>
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">What we do</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02]">
              End-to-end engineering, <br />
              <span className="text-gold">under one roof.</span>
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            <div className="group relative bg-navy p-8 md:p-10 hover:bg-navy-deep transition-colors">
              <div className="flex items-start justify-between">
                <span className="font-display text-2xl font-bold text-gold">01</span>
                <span className="h-2 w-2 rounded-full bg-gold mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
              </div>
              <h3 className="mt-16 font-display text-xl md:text-2xl font-bold leading-tight">Design &amp; Simulation</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Customer-centric engineering with FEA, thermal and manufacturability analysis — translating specs into production-ready components.
              </p>
            </div>

            <div className="group relative bg-navy p-8 md:p-10 hover:bg-navy-deep transition-colors">
              <div className="flex items-start justify-between">
                <span className="font-display text-2xl font-bold text-gold">02</span>
                <span className="h-2 w-2 rounded-full bg-gold mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
              </div>
              <h3 className="mt-16 font-display text-xl md:text-2xl font-bold leading-tight">Precision Manufacturing</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                CNC machining, forging and assembly on a controlled shop floor. Traceability at every operation, from raw material to dispatch.
              </p>
            </div>

            <div className="group relative bg-navy p-8 md:p-10 hover:bg-navy-deep transition-colors">
              <div className="flex items-start justify-between">
                <span className="font-display text-2xl font-bold text-gold">03</span>
                <span className="h-2 w-2 rounded-full bg-gold mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
              </div>
              <h3 className="mt-16 font-display text-xl md:text-2xl font-bold leading-tight">Quality &amp; Testing</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                In-house metrology, NDT and endurance testing. Aligned with RDSO, EN 13674 and IRIS-grade quality standards.
              </p>
            </div>

            <div className="group relative bg-navy p-8 md:p-10 hover:bg-navy-deep transition-colors">
              <div className="flex items-start justify-between">
                <span className="font-display text-2xl font-bold text-gold">04</span>
                <span className="h-2 w-2 rounded-full bg-gold mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
              </div>
              <h3 className="mt-16 font-display text-xl md:text-2xl font-bold leading-tight">Supply &amp; Aftermarket</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Strategic procurement, tier-1 vendor network and lifecycle support for Indian Railways, Metros and PSU operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-navy"></span>
                <span className="text-xs font-semibold tracking-[0.28em] uppercase text-navy">Product Systems</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02] text-navy">
                Every component,<br />
                engineered for the <span className="gold-underline">rail.</span>
              </h2>
            </div>
            <p className="md:max-w-sm text-base text-muted-foreground leading-relaxed">
              A focused portfolio of rolling-stock systems — proven on Indian Railways coaches, Vande Bharat trainsets, and metro fleets across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Product 1 */}
            <article className="group relative overflow-hidden border border-border bg-secondary/40 md:col-span-2">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-navy-deep">
                  <img
                    src="/andhitech/assets/product-brake-disc.jpg"
                    alt="Axle & Wheel Mounted Brake Discs"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                    Braking Systems
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                    Axle &amp; Wheel Mounted Brake Discs
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Precision-machined discs engineered for LHB coaches, Vande Bharat and metro rolling stock — tested for thermal fatigue and long service life.
                  </p>
                  <button
                    onClick={() => setSelectedDatasheet(DATASHEETS['brake-discs'])}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy group-hover:text-navy-deep cursor-pointer text-left"
                  >
                    Technical datasheet <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Product 2 */}
            <article className="group relative overflow-hidden border border-border bg-secondary/40">
              <div className="grid grid-cols-1">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-navy-deep">
                  <img
                    src="/andhitech/assets/product-hvac.jpg"
                    alt="Roof-Mounted Package Units (RMPU)"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                    HVAC
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                    Roof-Mounted Package Units (RMPU)
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Compact HVAC for LHB AC coaches and locomotive cabins — energy-efficient climate control certified for harsh operating environments.
                  </p>
                  <button
                    onClick={() => setSelectedDatasheet(DATASHEETS['hvac-rmpu'])}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy group-hover:text-navy-deep cursor-pointer text-left"
                  >
                    Technical datasheet <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Product 3 */}
            <article className="group relative overflow-hidden border border-border bg-secondary/40">
              <div className="grid grid-cols-1">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-navy-deep">
                  <img
                    src="/andhitech/assets/product-suspension.jpg"
                    alt="Air Suspension & LHB Dampers"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                    Ride Comfort
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                    Air Suspension &amp; LHB Dampers
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Air suspension control equipment and shock absorbers delivering ride comfort, stability and predictable dynamic response.
                  </p>
                  <button
                    onClick={() => setSelectedDatasheet(DATASHEETS['suspension'])}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy group-hover:text-navy-deep cursor-pointer text-left"
                  >
                    Technical datasheet <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Product 4 */}
            <article className="group relative overflow-hidden border border-border bg-secondary/40 md:col-span-2">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-navy-deep">
                  <img
                    src="/andhitech/assets/product-pantograph.jpg"
                    alt="Spring-Type Pantographs"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                    Traction
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                    Spring-Type Pantographs
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    High-speed pantographs and IV couplers for reliable current collection and electrical linking between rail cars.
                  </p>
                  <button
                    onClick={() => setSelectedDatasheet(DATASHEETS['pantographs'])}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy group-hover:text-navy-deep cursor-pointer text-left"
                  >
                    Technical datasheet <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section id="facility" className="relative bg-ink text-white py-24 md:py-32 overflow-hidden">
        <img
          src="/andhitech/assets/facility.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60"></div>
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold"></span>
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">Inside the plant</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02]">
              A shop floor built for<br />
              <span className="text-gold">tolerance and trust.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-white/75 leading-relaxed">
              CNC machining centres, precision forging, dedicated NDT and metrology labs. Every operation is traceable — from raw material heat-number to the serialised component leaving our dispatch bay.
            </p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="border-t border-white/15 pt-4">
                <div className="font-display text-3xl font-bold text-gold">50k+</div>
                <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">sq. ft. shop floor</div>
              </div>
              <div className="border-t border-white/15 pt-4">
                <div className="font-display text-3xl font-bold text-gold">24/7</div>
                <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">Production capability</div>
              </div>
              <div className="border-t border-white/15 pt-4">
                <div className="font-display text-3xl font-bold text-gold">100%</div>
                <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">Component traceability</div>
              </div>
              <div className="border-t border-white/15 pt-4">
                <div className="font-display text-3xl font-bold text-gold">3-shift</div>
                <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">Quality inspection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-navy leading-[1.05]">
              Trusted by the operators<br />who move the nation.
            </h2>
            <p className="md:max-w-sm text-sm text-muted-foreground">
              Delivering to Indian Railways, ICF Chennai, RCF Kapurthala, MCF Raebareli, DMRC and BHEL — with certifications aligned to global rail standards.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 border-t border-l border-border">
            <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">Indian Railways</span>
            </div>
            <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">ICF Chennai</span>
            </div>
            <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">RCF Kapurthala</span>
            </div>
            <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">MCF Raebareli</span>
            </div>
            <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">DMRC</span>
            </div>
            <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">BHEL</span>
            </div>
            <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">Vande Bharat</span>
            </div>
            <div className="border-r border-b border-border aspect-[3/1] flex items-center justify-center px-6 text-center">
              <span className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-navy/80">Kolkata Metro</span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-1.5 bg-gold"></span> ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-1.5 bg-gold"></span> ISO 14001:2015
            </span>
            <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-1.5 bg-gold"></span> ISO 45001:2018
            </span>
            <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-1.5 bg-gold"></span> RDSO Approved
            </span>
            <span className="inline-flex items-center gap-2 border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-1.5 bg-gold"></span> RoHS Compliant
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true"></div>
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold"></span>
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">Start a programme</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.02]">
              Let's engineer your <br />
              next <span className="text-gold">rolling stock</span> milestone.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Share your specs, timelines and volumes — our engineering team will respond within one working day with a technical proposal and indicative pricing.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="border border-white/15 bg-white/[0.03] backdrop-blur-sm p-8">
              <div className="text-xs font-semibold tracking-[0.28em] uppercase text-white/60">Get in touch</div>
              <div className="mt-6 space-y-5">
                <a href="mailto:sales@andhitech.in" className="block border-t border-white/10 pt-4 group">
                  <div className="text-[11px] uppercase tracking-widest text-white/50">Sales &amp; partnerships</div>
                  <div className="mt-1 font-display text-lg font-semibold text-white group-hover:text-gold transition-colors">
                    sales@andhitech.in
                  </div>
                </a>
                <div className="block border-t border-white/10 pt-4 group">
                  <div className="text-[11px] uppercase tracking-widest text-white/50">Corporate office</div>
                  <div className="mt-1 font-display text-lg font-semibold text-white group-hover:text-gold transition-colors">
                    +91 · Available on request
                  </div>
                </div>
                <a href="https://andhitech.in" className="block border-t border-white/10 pt-4 group">
                  <div className="text-[11px] uppercase tracking-widest text-white/50">Website</div>
                  <div className="mt-1 font-display text-lg font-semibold text-white group-hover:text-gold transition-colors">
                    andhitech.in
                  </div>
                </a>
              </div>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="mt-8 inline-flex items-center justify-center w-full gap-3 bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wider text-navy pulse-gold cursor-pointer"
              >
                Request a quote <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white/70 py-14">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <img src="/andhitech/assets/ahil-logo-dark.svg" alt="AHIL" className="h-10 w-auto bg-white p-2" />
            <p className="mt-6 text-sm max-w-md leading-relaxed">
              And Hitech Industries Limited — precision manufacturing of rolling stock components, HVAC systems and thermal solutions for the world's railways.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#capabilities" className="hover:text-gold">Capabilities</a></li>
              <li><a href="#products" className="hover:text-gold">Products</a></li>
              <li><a href="#facility" className="hover:text-gold">Facility</a></li>
              <li><a href="#clients" className="hover:text-gold">Clients</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Registered</div>
            <p className="text-sm leading-relaxed">
              AHIL — And Hitech Industries Limited<br />
              info@andhitech.in · andhitech.in
            </p>
          </div>
          <div className="md:col-span-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/45">
            <div>© 2026 And Hitech Industries Limited. All rights reserved.</div>
            <div>Precision Engineering for Rail & Metro.</div>
          </div>
        </div>
      </footer>

      {/* Datasheet Modal */}
      {selectedDatasheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-navy-deep border border-gold/40 text-white p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDatasheet(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
              Technical Datasheet · {selectedDatasheet.category}
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">{selectedDatasheet.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedDatasheet.overview}</p>

            <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">Technical Specifications</h4>
            <div className="border border-white/10 divide-y divide-white/10 mb-6 bg-black/30">
              {Object.entries(selectedDatasheet.specs).map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 px-4 py-2 text-xs">
                  <span className="text-slate-400 font-semibold">{k}</span>
                  <span className="text-white">{v}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex gap-2">
                {selectedDatasheet.compliance.map((c, i) => (
                  <span key={i} className="text-[10px] bg-gold/10 border border-gold/30 text-gold px-2 py-0.5 uppercase tracking-wider">
                    {c}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedDatasheet(null);
                  setQuoteModalOpen(true);
                }}
                className="bg-gold text-navy px-5 py-2 text-xs font-bold uppercase tracking-wider hover:brightness-95 cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote RFQ Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-navy-deep border border-white/15 p-8 text-white">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
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
      )}
    </div>
  );
}
