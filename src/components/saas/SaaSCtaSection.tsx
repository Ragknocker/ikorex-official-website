import React from 'react';
import { Link } from 'react-router-dom';

export const SaaSCtaSection: React.FC = () => {
  return (
    <section className="saas-final-cta-section" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(0, 136, 255, 0.2) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '28px',
            padding: '64px 40px',
            boxShadow: 'var(--saas-shadow-lg), 0 0 50px rgba(0, 136, 255, 0.15)',
            position: 'relative'
          }}
        >
          <div className="saas-badge-pill" style={{ marginBottom: '20px' }}>
            <span className="saas-dot-pulse" />
            <span>ACCELERATE YOUR OPERATIONS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: 'var(--text-main)'
            }}
          >
            Ready to Transform <br />
            <span className="saas-gradient-text">the Way You Work?</span>
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 auto 36px'
            }}
          >
            Start with the essentials and scale your workflow as your business grows. Join hundreds of Australian teams automating with total confidence.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '28px'
            }}
          >
            <Link
              to="/signup"
              className="btn btn-primary"
              style={{
                padding: '14px 34px',
                fontSize: '1.05rem',
                borderRadius: '12px',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(0, 136, 255, 0.35)'
              }}
            >
              Start Free &rarr;
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline"
              style={{
                padding: '14px 30px',
                fontSize: '1.05rem',
                borderRadius: '12px',
                fontWeight: 600
              }}
            >
              Talk to Sales
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              flexWrap: 'wrap'
            }}
          >
            <span>✓ 14-day free trial</span>
            <span>✓ No credit card required</span>
            <span>✓ Fast setup in under 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
