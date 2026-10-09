import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WordRotator } from '../components/WordRotator';
import { HeroVisualSwitcher } from '../components/HeroVisualSwitcher';
import { SaaS3DPerspectiveConsole } from '../components/motion/SaaS3DPerspectiveConsole';
import { HomeServicesSection } from '../components/HomeServicesSection';
import { WorkflowShowcase } from '../components/WorkflowShowcase';
import { DiagnosisSection } from '../components/DiagnosisSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { RoiCalculator } from '../components/RoiCalculator';
import { RiskSection } from '../components/RiskSection';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { DeliveryProcessSection } from '../components/DeliveryProcessSection';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { CtaSection } from '../components/CtaSection';
import { blogPosts } from '../data/blogData';

// Motion graphics components
import { ParticleMeshCanvas } from '../components/motion/ParticleMeshCanvas';
import { EngineCoreMotion } from '../components/motion/EngineCoreMotion';
import { MotionReveal } from '../components/motion/MotionReveal';
import { LiveTelemetryPill } from '../components/motion/LiveTelemetryPill';
import { CardSpotlight } from '../components/motion/CardSpotlight';
import { LaserFlowBeam } from '../components/motion/LaserFlowBeam';

export const HomePage: React.FC = () => {
  const [melbourneLiveTime, setMelbourneLiveTime] = useState<string>('--:--:-- AEST');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const timeFmt = new Intl.DateTimeFormat('en-AU', {
          timeZone: 'Australia/Melbourne',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setMelbourneLiveTime(`${timeFmt.format(now)} AEST`);
      } catch {
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const melb = new Date(utc + 3600000 * 10);
        const pad = (n: number) => String(n).padStart(2, '0');
        setMelbourneLiveTime(
          `${pad(melb.getHours())}:${pad(melb.getMinutes())}:${pad(melb.getSeconds())} AEST`
        );
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page-container">
      {/* Hero Section with Interactive Particle Mesh Motion Graphic */}
      <section className="hero-section" id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Interactive Neural Constellation Canvas */}
        <ParticleMeshCanvas className="hero-particle-mesh" interactive={true} />

        <div className="hero-pin" data-hero-pin style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-pin-inner">
            <div className="section-container hero-grid">
              <div className="hero-content">
                <MotionReveal direction="up" delay={0.05}>
                  <LiveTelemetryPill />
                </MotionReveal>

                <MotionReveal direction="up" delay={0.1}>
                  <div className="custom-badge animate-fade-in">
                    <span className="badge-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
                        <defs>
                          <linearGradient
                            id="logo-icon-grad-top"
                            x1="3"
                            y1="3"
                            x2="21"
                            y2="12"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stopColor="#00b4ff" />
                            <stop offset="100%" stopColor="#0088ff" />
                          </linearGradient>
                          <linearGradient
                            id="logo-icon-grad-bottom"
                            x1="3"
                            y1="21"
                            x2="21"
                            y2="12"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stopColor="#0055cc" />
                            <stop offset="100%" stopColor="#0088ff" />
                          </linearGradient>
                        </defs>
                        <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="url(#logo-icon-grad-top)" />
                        <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="url(#logo-icon-grad-bottom)" />
                      </svg>
                    </span>
                    <span className="badge-text">Enterprise Automation • Melbourne, AU</span>
                  </div>
                </MotionReveal>

                <MotionReveal direction="up" delay={0.15}>
                  <h1 className="hero-title">
                    <span className="hero-title-lead">Enterprise Intelligent Process Automation</span>
                    <span className="hero-title-main">
                      Workflows that run with{' '}
                      <span className="hero-title-accent">speed &amp; precision.</span>
                    </span>
                  </h1>
                </MotionReveal>

                <WordRotator />

                <MotionReveal direction="up" delay={0.2}>
                  <p className="hero-description">
                    We help Australian businesses automate complex workflows, eliminate repetitive
                    manual effort, and connect core business systems with verifiable accuracy.
                  </p>
                </MotionReveal>

                <MotionReveal direction="up" delay={0.25}>
                  <ul className="hero-checklist">
                    <li>
                      <svg className="check-icon" viewBox="0 0 24 24" width="20" height="20">
                        <polyline
                          points="20 6 9 17 4 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Eliminate repetitive manual data entry &amp; bottlenecks</span>
                    </li>
                    <li>
                      <svg className="check-icon" viewBox="0 0 24 24" width="20" height="20">
                        <polyline
                          points="20 6 9 17 4 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Seamless integration with UiPath, Power Automate, Xero &amp; MYOB</span>
                    </li>
                    <li>
                      <svg className="check-icon" viewBox="0 0 24 24" width="20" height="20">
                        <polyline
                          points="20 6 9 17 4 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Full audit trails, enterprise data privacy &amp; 24/7 reliability</span>
                    </li>
                  </ul>
                </MotionReveal>

                <MotionReveal direction="up" delay={0.3}>
                  <div className="hero-actions">
                    <Link to="/contact" className="btn btn-primary">
                      Book a Consultation
                    </Link>
                    <Link to="/services" className="btn btn-outline">
                      Explore Our Services
                    </Link>
                  </div>
                </MotionReveal>
              </div>

              {/* Hero visual: interactive 3D WebGL nexus & pipeline switcher */}
              <div className="hero-visual">
                <HeroVisualSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Traveling Laser Light Beam */}
        <LaserFlowBeam color="#00d2ff" duration={3.5} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <ul className="trust-bar" aria-label="Why teams trust iKOREX">
            <li className="trust-item">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <div>
                <strong>Works with your stack</strong>
                <span>Xero, MYOB, UiPath, Power Automate</span>
              </div>
            </li>
            <li className="trust-item">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>
                  Melbourne HQ: <span className="melbourne-live-clock">{melbourneLiveTime}</span>
                </strong>
                <span>Local team, Australia-wide delivery</span>
              </div>
            </li>
            <li className="trust-item">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div>
                <strong>Operator &amp; CA Led</strong>
                <span>20+ yrs leadership &amp; 3 Chartered Accountants</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Overview */}
      <HomeServicesSection />

      {/* Interactive Workflow Showcase */}
      <WorkflowShowcase />

      {/* Interactive Motion Graphic Engine Core Section */}
      <section className="core-engine-section" id="engine-core" style={{ position: 'relative', padding: '60px 0' }}>
        <div className="section-container">
          <MotionReveal direction="up" className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">Interactive Motion Engine</span>
            </div>
            <h2 className="section-title">
              Inside the <span className="text-gradient">iKOREX Automation Core</span>
            </h2>
            <p className="section-subtitle">
              Observe how cognitive AI agents, robotic bots, ERP connectors, and audit guards orchestrate in synchronized orbits.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.15}>
            <EngineCoreMotion />
          </MotionReveal>
        </div>
      </section>

      {/* Interactive 3D SaaS Automation Console */}
      <section className="saas-3d-console-section" id="spatial-console" style={{ position: 'relative', padding: '50px 0 30px' }}>
        <div className="section-container">
          <MotionReveal direction="up" className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">Spatial 3D SaaS Console</span>
            </div>
            <h2 className="section-title">
              Autonomous Orchestration. <span className="text-gradient">Spatial Depth.</span>
            </h2>
            <p className="section-subtitle">
              Move your cursor across the console to experience real-time spatial depth, live transaction logs, and ledger verification metrics.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.15}>
            <SaaS3DPerspectiveConsole />
          </MotionReveal>
        </div>
      </section>

      {/* Diagnosis Section */}
      <DiagnosisSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* Risk Removed */}
      <RiskSection />

      {/* Capabilities */}
      <CapabilitiesSection />

      {/* Delivery Process (How We Work) */}
      <DeliveryProcessSection />

      {/* Integrations */}
      <IntegrationsSection />

      {/* Blog / Insights Section */}
      <section className="blog-section" id="blog">
        <div className="section-container">
          <MotionReveal direction="up" className="custom-badge">
            <span className="badge-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
                <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
              </svg>
            </span>
            <span className="badge-text">Insights</span>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.1}>
            <h2 className="section-title">Latest insights on intelligent automation</h2>
            <p className="section-subtitle">Practical thinking on where automation and AI actually pay off.</p>
          </MotionReveal>

          <div className="blog-grid">
            {blogPosts.map(post => (
              <CardSpotlight key={post.slug} className="blog-card" enableTilt={true}>
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-img-wrap">
                    <img src={post.image} alt={post.imageAlt} className="blog-card-img" loading="lazy" />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-date">{post.date}</span>
                      <span className="blog-card-separator">&bull;</span>
                      <span className="blog-card-read">{post.readTime}</span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                  </div>
                </Link>
              </CardSpotlight>
            ))}
          </div>

          <div className="section-more">
            <Link to="/blog" className="btn btn-outline">
              View all articles <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaSection />
    </div>
  );
};
