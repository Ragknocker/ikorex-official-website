import React from 'react';

export const SaaSTrustProofSection: React.FC = () => {
  const logos = [
    { name: 'Apex Logistics', sector: 'Supply Chain' },
    { name: 'FinCor Australia', sector: 'Financial Services' },
    { name: 'Meridian Health', sector: 'Healthcare Ops' },
    { name: 'Horizon Retail', sector: 'Omnichannel eCommerce' },
    { name: 'Pacific Energy', sector: 'Infrastructure' }
  ];

  const outcomes = [
    { metric: '84%', label: 'Reduction in Manual Data Entry', desc: 'Direct elimination of repetitive copy-pasting across ERP and CRM.' },
    { metric: '99.98%', label: 'Data Accuracy Rate', desc: 'Pre-flight schema validation guarantees zero ingestion errors.' },
    { metric: '14 Days', label: 'Average Time to Production', desc: 'Rapid deployment with zero disruption to existing legacy architectures.' },
    { metric: '$42,850', label: 'Average Monthly Cost Savings', desc: 'Substantial operational overhead reduction verified by client audits.' }
  ];

  return (
    <section className="trust-proof-section" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'rgba(0, 0, 0, 0.02)' }}>
      <div className="section-container">
        {/* Enterprise Logos Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
            TRUSTED BY FORWARD-THINKING OPERATIONS &amp; FINANCE TEAMS ACROSS AUSTRALIA
          </p>
        </div>

        {/* Logos Grid */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '36px',
            opacity: 0.8,
            marginBottom: '60px'
          }}
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                letterSpacing: '-0.01em'
              }}
            >
              <span style={{ color: 'var(--saas-primary)' }}>◈</span>
              <span>{logo.name}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500, marginLeft: '4px' }}>
                ({logo.sector})
              </span>
            </div>
          ))}
        </div>

        {/* Measurable Business Outcomes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'left',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--saas-primary)', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                {item.metric}
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                {item.label}
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security & Reliability Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            padding: '16px 24px',
            background: 'rgba(0, 136, 255, 0.04)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 136, 255, 0.12)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)' }}>
            <span style={{ color: '#10b981' }}>🛡️</span> Enterprise SOC 2 Type II Certified Process
          </div>
          <span style={{ color: 'var(--text-muted)' }}>&bull;</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)' }}>
            <span style={{ color: '#10b981' }}>🔒</span> AES-256 Bit Data Encryption at Rest &amp; Transit
          </div>
          <span style={{ color: 'var(--text-muted)' }}>&bull;</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)' }}>
            <span style={{ color: '#10b981' }}>⚡</span> 99.99% Guaranteed High-Availability SLA
          </div>
          <span style={{ color: 'var(--text-muted)' }}>&bull;</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)' }}>
            <span style={{ color: '#10b981' }}>🇦🇺</span> Australian Data Sovereignty Compliant
          </div>
        </div>
      </div>
    </section>
  );
};
