import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { solutionsList } from '../data/solutionsData';
import { CtaSection } from '../components/CtaSection';
import { ParticleMeshCanvas } from '../components/motion/ParticleMeshCanvas';
import { MotionReveal } from '../components/motion/MotionReveal';
import { CardSpotlight } from '../components/motion/CardSpotlight';
import { LaserFlowBeam } from '../components/motion/LaserFlowBeam';

export const SolutionsPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('o2c');

  const scrollToSolution = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const ids = ['o2c', 'p2p', 'loss-prevention', 'finance'];
      const scrollPos = window.scrollY + 220;

      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(ids[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="solutions-page-container">
      <section className="solutions-section page-hero" id="solutions" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleMeshCanvas className="hero-particle-mesh" particleCount={45} interactive={true} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <MotionReveal direction="up" className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">By business process</span>
            </div>
            <h1 className="page-title">
              Fix the processes that <span className="text-gradient">cost you the most.</span>
            </h1>
            <p className="page-lead">
              Four high-risk areas where manual work leaks time and money, each transformed with
              automation and built-in verification.
            </p>
          </MotionReveal>

          {/* Segmented Sticky Nav */}
          <MotionReveal direction="up" delay={0.1}>
            <nav className="segmented-nav" aria-label="Jump to solution">
              <button
                type="button"
                className={`segmented-btn ${activeId === 'o2c' ? 'active' : ''}`}
                onClick={() => scrollToSolution('o2c')}
              >
                Order to Cash
              </button>
              <button
                type="button"
                className={`segmented-btn ${activeId === 'p2p' ? 'active' : ''}`}
                onClick={() => scrollToSolution('p2p')}
              >
                Procure to Pay
              </button>
              <button
                type="button"
                className={`segmented-btn ${activeId === 'loss-prevention' ? 'active' : ''}`}
                onClick={() => scrollToSolution('loss-prevention')}
              >
                Loss Prevention
              </button>
              <button
                type="button"
                className={`segmented-btn ${activeId === 'finance' ? 'active' : ''}`}
                onClick={() => scrollToSolution('finance')}
              >
                Finance &amp; Accounting
              </button>
            </nav>
          </MotionReveal>

          <div className="solutions-grid">
            {solutionsList.map((sol, index) => (
              <MotionReveal key={sol.id} direction="up" delay={0.1 + index * 0.08}>
                <CardSpotlight className="solution-horizontal-card" id={sol.id} enableTilt={true}>
                  <div className="solution-left">
                    <span className="solution-pill">{sol.pill}</span>
                    <h2 className="solution-card-title">
                      {sol.title} <span className="highlight-blue">{sol.highlight}</span>
                    </h2>
                    <p className="solution-card-desc">
                      <strong>Business Challenge:</strong> {sol.challenge}
                    </p>
                    <p className="solution-card-desc" style={{ marginTop: '10px' }}>
                      <strong>Proposed Approach:</strong> {sol.approach}
                    </p>
                    <div className="solution-considerations">
                      <strong>Implementation Considerations &amp; Prerequisites:</strong>{' '}
                      {sol.considerations}
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <Link
                        to={`/contact?inquiryType=${sol.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        {sol.ctaText}
                      </Link>
                    </div>
                  </div>

                  <div className="solution-right">
                    <ul className="solution-checklist">
                      {sol.checklist.map((item, idx) => (
                        <li key={idx} className="solution-check-item">
                          <div className="solution-check-icon-wrapper">
                            <svg
                              viewBox="0 0 24 24"
                              width="12"
                              height="12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="solution-check-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardSpotlight>
              </MotionReveal>
            ))}
          </div>
        </div>

        <LaserFlowBeam color="#00d2ff" duration={3.5} />
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};
