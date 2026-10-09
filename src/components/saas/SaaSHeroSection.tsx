import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ParticleMeshCanvas } from '../motion/ParticleMeshCanvas';
import { LaserFlowBeam } from '../motion/LaserFlowBeam';

export const SaaSHeroSection: React.FC = () => {
  return (
    <section className="hero-section" id="hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: '120px', paddingBottom: '80px' }}>
      {/* Interactive Constellation Particle Mesh Background Motion Graphic */}
      <ParticleMeshCanvas particleCount={40} interactive={true} />

      {/* Background Radial Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(0, 136, 255, 0.15) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 80%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="saas-badge-pill"
            style={{ marginBottom: '24px' }}
          >
            <span className="saas-dot-pulse" />
            <span>THE SMARTER WAY TO WORK</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              color: 'var(--text-main)'
            }}
          >
            Everything Your Team Needs to <br />
            <span className="saas-gradient-text">Work Smarter.</span>
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 36px'
            }}
          >
            Bring your workflows, insights, and collaboration together in one powerful platform designed to help your business grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '24px'
            }}
          >
            <Link
              to="/signup"
              className="btn btn-primary"
              style={{
                padding: '14px 32px',
                fontSize: '1.05rem',
                borderRadius: '12px',
                fontWeight: 600,
                boxShadow: '0 8px 24px rgba(0, 136, 255, 0.35)'
              }}
            >
              Get Started Free &rarr;
            </Link>
            <a
              href="#showcase"
              className="btn btn-outline"
              style={{
                padding: '14px 28px',
                fontSize: '1.05rem',
                borderRadius: '12px',
                fontWeight: 600
              }}
            >
              Explore the Platform
            </a>
          </motion.div>

          {/* Trust statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              No credit card required
            </span>
            <span>&bull;</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              14-day free trial
            </span>
            <span>&bull;</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Cancel anytime
            </span>
          </motion.div>
        </div>

        {/* Polished SaaS Dashboard Mockup with Floating Analytics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            marginTop: '60px',
            position: 'relative',
            borderRadius: '20px',
            border: '1px solid rgba(0, 136, 255, 0.25)',
            background: 'linear-gradient(180deg, rgba(16, 24, 40, 0.95) 0%, rgba(8, 12, 22, 0.98) 100%)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 136, 255, 0.2)',
            overflow: 'hidden'
          }}
        >
          {/* Top Browser Bar */}
          <div
            style={{
              height: '44px',
              background: 'rgba(0, 0, 0, 0.4)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px'
            }}
          >
            <div style={{ display: 'flex', gap: '7px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '3px 20px',
                fontSize: '0.74rem',
                color: '#94a3b8',
                fontFamily: 'var(--font-mono)'
              }}
            >
              https://app.ikorex.com/workspace/overview
            </div>
            <div style={{ display: 'flex', gap: '10px', color: '#64748b', fontSize: '0.78rem' }}>
              <span>Live v2.4</span>
            </div>
          </div>

          {/* Kinetic Laser Flow Beam Motion Graphic */}
          <LaserFlowBeam duration={4} color="#00d2ff" height={2} />

          {/* Mockup Dashboard Content */}
          <div style={{ padding: '24px', position: 'relative' }}>
            {/* Top Stats Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '24px'
              }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Active Workflows</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>148 Active</div>
                <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '4px', fontWeight: 600 }}>↑ +24.8% vs last mo</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Execution Accuracy</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#00d2ff', marginTop: '4px' }}>99.98%</div>
                <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '4px', fontWeight: 600 }}>Zero reconciliation drift</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Operational Hours Saved</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>1,840 hrs</div>
                <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '4px', fontWeight: 600 }}>$112,000 equivalent ROI</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Ledger Integrations</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>12 Connected</div>
                <div style={{ fontSize: '0.75rem', color: '#00d2ff', marginTop: '4px', fontWeight: 600 }}>Xero, MYOB, UiPath, Slack</div>
              </div>
            </div>

            {/* Visual Workflow Canvas Simulation */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0, 136, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0088ff', fontWeight: 700 }}>
                  ⚡
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Invoice Extraction &amp; 3-Way Match Auto-Reconciliation</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Trigger: New PDF in AP Inbox &rarr; Extract OCR &rarr; Match PO &rarr; Post to ERP</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="dash-status-pill dash-status-active">
                  <span className="saas-dot-pulse" /> Running Continuously
                </span>
                <Link to="/dashboard" className="btn btn-primary btn-sm" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                  Open Dashboard &rarr;
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
