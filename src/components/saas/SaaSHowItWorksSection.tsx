import React from 'react';
import { Link } from 'react-router-dom';

export const SaaSHowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Create Your Account',
      desc: 'Sign up in under 60 seconds with your corporate email. No credit card required, instant access to pre-built automation recipes.',
      badge: 'Immediate Setup',
      icon: '🚀'
    },
    {
      num: '02',
      title: 'Configure Your Workspace',
      desc: 'Connect your financial ledgers (Xero, MYOB), communication tools, and document repositories using native secure API credentials.',
      badge: 'Zero-Code Connectors',
      icon: '⚙️'
    },
    {
      num: '03',
      title: 'Automate & Track Results',
      desc: 'Activate intelligent triggers and watch your data reconcile autonomously with real-time telemetry, audit trails, and measurable ROI.',
      badge: 'Autonomous Scale',
      icon: '📈'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works" style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '16px' }}>
            <span>SEAMLESS ONBOARDING</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-main)' }}>
            From Setup to Production in <span className="saas-gradient-text">Three Simple Steps.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            No months-long implementation cycles or specialized engineering required. iKOREX deploys smoothly into your current tech stack.
          </p>
        </div>

        {/* 3 Connected Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            position: 'relative'
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '18px',
                padding: '32px',
                position: 'relative',
                boxShadow: 'var(--saas-shadow-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Step Number Watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  color: 'var(--border-color)',
                  opacity: 0.5,
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {step.num}
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(0, 136, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '20px'
                }}
              >
                {step.icon}
              </div>

              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: 'var(--saas-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {step.badge}
              </span>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '8px', marginBottom: '12px' }}>
                {step.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/signup" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
            Start Your Free 14-Day Trial &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
