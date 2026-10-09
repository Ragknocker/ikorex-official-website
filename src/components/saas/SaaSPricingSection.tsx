import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { CardSpotlight } from '../motion/CardSpotlight';

export const SaaSPricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSelectPlan = (planName: 'Starter' | 'Professional' | 'Enterprise') => {
    if (user) {
      updateUser({ plan: planName });
      showToast(`Your subscription tier has been updated to ${planName}.`, 'success');
      navigate('/dashboard/billing');
    } else {
      showToast(`Selected ${planName} plan. Complete sign up to activate.`, 'info');
      navigate('/signup');
    }
  };

  const plans = [
    {
      name: 'Starter' as const,
      tagline: 'For individuals and small teams automating key tasks.',
      monthlyPrice: 29,
      annualPrice: 24,
      isPopular: false,
      ctaText: 'Start 14-Day Free Trial',
      features: [
        'Up to 5 Active Automation Pipelines',
        'Standard OCR & Document Processing',
        'Email & Slack Event Notifications',
        'Community & Standard Email Support',
        'Australian Data Sovereignty Storage',
        '99.9% Uptime Guarantee'
      ],
      omitted: ['Multi-entity Ledger Sync', 'Custom API Webhooks', 'Dedicated Account Architect']
    },
    {
      name: 'Professional' as const,
      tagline: 'For growing businesses requiring autonomous end-to-end ops.',
      monthlyPrice: 99,
      annualPrice: 79,
      isPopular: true,
      ctaText: 'Get Started with Professional',
      features: [
        'Up to 25 Active Automation Pipelines',
        'High-Speed 3-Way Invoice Reconciliation',
        'Full Xero & MYOB Bi-Directional Sync',
        'Custom Webhooks & REST API Access',
        'Multi-Tier Approval Routing',
        'Priority 24/7 SLA Support',
        'Complete Immutable Audit Trails'
      ],
      omitted: ['Custom On-Premises Deployment', 'Dedicated Account Architect']
    },
    {
      name: 'Enterprise' as const,
      tagline: 'For larger organizations needing bespoke orchestration & SSO.',
      monthlyPrice: 299,
      annualPrice: 249,
      isPopular: false,
      ctaText: 'Talk to Enterprise Sales',
      features: [
        'Unlimited Automation Pipelines & Volume',
        'Custom ERP Integrations (SAP, NetSuite, Oracle)',
        'SAML 2.0 / Okta SSO & Directory Sync',
        'Dedicated Enterprise Solutions Architect',
        'Custom SLA Guarantees (99.99%)',
        'Annual Security Audit Attestation',
        'Executive Quarterly Strategy Reviews'
      ],
      omitted: []
    }
  ];

  return (
    <section className="pricing-section" id="pricing" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '16px' }}>
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-main)' }}>
            Predictable Pricing. <br />
            <span className="saas-gradient-text">Measurable ROI from Day One.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Choose the tier that matches your automation volume. Every plan includes our core accuracy engine and zero setup fees.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px',
              borderRadius: '999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              marginTop: '20px'
            }}
          >
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: 'none',
                background: !isAnnual ? 'var(--saas-primary)' : 'transparent',
                color: !isAnnual ? '#fff' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: 'none',
                background: isAnnual ? 'var(--saas-primary)' : 'transparent',
                color: isAnnual ? '#fff' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s ease'
              }}
            >
              <span>Annual Billing</span>
              <span style={{ fontSize: '0.7rem', padding: '2px 7px', borderRadius: '999px', background: '#10b981', color: '#fff', fontWeight: 700 }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}
        >
          {plans.map(p => {
            const price = isAnnual ? p.annualPrice : p.monthlyPrice;
            const isUserCurrent = user?.plan === p.name;

            return (
              <CardSpotlight
                key={p.name}
                enableTilt={false}
                spotlightColor={p.isPopular ? "rgba(0, 180, 255, 0.22)" : "rgba(0, 180, 255, 0.12)"}
                style={{
                  background: p.isPopular ? 'radial-gradient(ellipse at 50% 0%, rgba(0, 136, 255, 0.12), var(--bg-card))' : 'var(--bg-card)',
                  border: `2px solid ${p.isPopular ? 'var(--saas-primary)' : 'var(--border-color)'}`,
                  borderRadius: '20px',
                  padding: '36px 30px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: p.isPopular ? 'var(--saas-shadow-glow)' : 'var(--saas-shadow-sm)',
                  transform: p.isPopular ? 'scale(1.02)' : 'none',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
              >
                <div>
                  {/* Popular Badge */}
                  {p.isPopular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #0088ff, #6366f1)',
                        color: '#fff',
                        padding: '4px 14px',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        boxShadow: '0 4px 12px rgba(0, 136, 255, 0.4)'
                      }}
                    >
                      MOST POPULAR &bull; RECOMMENDED
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                      {p.name}
                    </h3>
                    {isUserCurrent && (
                      <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                        Current Plan
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, minHeight: '42px', marginBottom: '24px' }}>
                    {p.tagline}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)' }}>$</span>
                    <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.03em' }}>
                      {price}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      AUD / month {isAnnual && '(billed annually)'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectPlan(p.name)}
                    className={p.isPopular ? 'btn btn-primary' : 'btn btn-outline'}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      justifyContent: 'center',
                      marginBottom: '32px'
                    }}
                  >
                    {p.ctaText} &rarr;
                  </button>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-subtle)', marginBottom: '14px' }}>
                      WHAT'S INCLUDED:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {p.features.map((feat, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: 'var(--text-main)' }}>
                          <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                      {p.omitted.map((omit, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: 'var(--text-subtle)', opacity: 0.5 }}>
                          <span style={{ color: 'var(--text-subtle)' }}>✕</span>
                          <span>{omit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
};
