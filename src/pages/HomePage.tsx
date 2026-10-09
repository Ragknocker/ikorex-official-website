import React from 'react';
import { SaaSHeroSection } from '../components/saas/SaaSHeroSection';
import { SaaSTrustProofSection } from '../components/saas/SaaSTrustProofSection';
import { SaaSFeaturesSection } from '../components/saas/SaaSFeaturesSection';
import { SaaSProductShowcase } from '../components/saas/SaaSProductShowcase';
import { SaaSHowItWorksSection } from '../components/saas/SaaSHowItWorksSection';
import { SaaSIntegrationsSection } from '../components/saas/SaaSIntegrationsSection';
import { SaaSPricingSection } from '../components/saas/SaaSPricingSection';
import { SaaSTestimonialsSection } from '../components/saas/SaaSTestimonialsSection';
import { SaaSFaqSection } from '../components/saas/SaaSFaqSection';
import { SaaSCtaSection } from '../components/saas/SaaSCtaSection';

// High-tech Motion Graphics
import { SaaS3DPerspectiveConsole } from '../components/motion/SaaS3DPerspectiveConsole';
import { MotionReveal } from '../components/motion/MotionReveal';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      {/* A. Hero Section with Interactive Constellation Mesh & Kinetic Laser Flow */}
      <SaaSHeroSection />

      {/* C. Trust and Social Proof Section */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSTrustProofSection />
      </MotionReveal>

      {/* D. Features Section (6 configurable features with CardSpotlight halos) */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSFeaturesSection />
      </MotionReveal>

      {/* E. Product Showcase (Interactive tabs with AnimatePresence cross-fades) */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSProductShowcase />
      </MotionReveal>

      {/* F. How It Works (3 simple connected steps) */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSHowItWorksSection />
      </MotionReveal>

      {/* Spatial 3D Console Interactive Exploration */}
      <section style={{ padding: '60px 0', position: 'relative' }}>
        <div className="section-container">
          <MotionReveal direction="up" delay={0.05} distance={20}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
              <div className="saas-badge-pill" style={{ marginBottom: '16px' }}>
                <span>SPATIAL 3D ARCHITECTURE</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px', color: 'var(--text-main)' }}>
                Interactive Spatial Depth. <br />
                <span className="saas-gradient-text">Verifiable Ledger Mechanics.</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Interact directly with the spatial 3D control deck to experience real-time tilt, reflection sweeps, and zero-drift automation telemetry.
              </p>
            </div>
          </MotionReveal>
          <SaaS3DPerspectiveConsole />
        </div>
      </section>

      {/* G. Integrations Section (Communication, PM, Analytics, Cloud, Payments, Dev tools) */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSIntegrationsSection />
      </MotionReveal>

      {/* H. Pricing Section (Starter, Professional, Enterprise with CardSpotlight halos) */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSPricingSection />
      </MotionReveal>

      {/* I. Testimonials Section */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSTestimonialsSection />
      </MotionReveal>

      {/* J. FAQ Section (Accessible Accordion with 7 Core Questions) */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSFaqSection />
      </MotionReveal>

      {/* K. Final Call to Action */}
      <MotionReveal direction="up" delay={0.05} distance={20}>
        <SaaSCtaSection />
      </MotionReveal>
    </div>
  );
};
