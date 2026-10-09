import React from 'react';
import { SaaSPricingSection } from '../components/saas/SaaSPricingSection';
import { SaaSFaqSection } from '../components/saas/SaaSFaqSection';
import { SaaSCtaSection } from '../components/saas/SaaSCtaSection';

export const PricingPage: React.FC = () => {
  return (
    <div className="pricing-page-container">
      {/* Header Banner */}
      <section style={{ padding: '120px 0 20px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 10%, rgba(0, 136, 255, 0.12), transparent 70%)' }}>
        <div className="section-container" style={{ maxWidth: '800px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '20px' }}>
            <span>TRANSPARENT PLANS &amp; ROI</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '20px' }}>
            Simple, Transparent Pricing <br />
            <span className="saas-gradient-text">for High-Performance Teams.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
            Every plan includes our 99.98% accuracy guarantee, continuous audit logging, and Australian-hosted infrastructure. No hidden setup costs.
          </p>
        </div>
      </section>

      {/* Main Pricing Section with monthly/annual controls */}
      <SaaSPricingSection />

      {/* Enterprise Add-ons Matrix */}
      <section style={{ padding: '60px 0 80px', borderTop: '1px solid var(--border-color)', background: 'rgba(0, 0, 0, 0.02)' }}>
        <div className="section-container" style={{ maxWidth: '980px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }}>
              Full Plan Feature Comparison
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Detailed breakdown of usage limits, enterprise integrations, and support SLAs.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', overflow: 'hidden' }}>
            <div className="dash-table-wrapper">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Feature Capability</th>
                    <th>Starter</th>
                    <th>Professional</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Active Automation Pipelines</td>
                    <td>Up to 5</td>
                    <td style={{ color: '#00d2ff', fontWeight: 700 }}>Up to 25</td>
                    <td style={{ color: '#10b981', fontWeight: 700 }}>Unlimited</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Monthly Transaction Volume</td>
                    <td>25,000 events</td>
                    <td>250,000 events</td>
                    <td>Custom / Unmetered</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Ledger Integrations (Xero, MYOB)</td>
                    <td>1 Connected Org</td>
                    <td>Up to 5 Connected Orgs</td>
                    <td>Unlimited Multi-Entity</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Custom REST API &amp; Webhooks</td>
                    <td style={{ color: 'var(--text-subtle)' }}>✕</td>
                    <td style={{ color: '#10b981' }}>✓ Included</td>
                    <td style={{ color: '#10b981' }}>✓ High-Frequency SLA</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Single Sign-On (SAML 2.0 / Okta)</td>
                    <td style={{ color: 'var(--text-subtle)' }}>✕</td>
                    <td style={{ color: 'var(--text-subtle)' }}>✕</td>
                    <td style={{ color: '#10b981' }}>✓ Included</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Support SLA</td>
                    <td>Standard Email (48h)</td>
                    <td style={{ color: '#00d2ff', fontWeight: 700 }}>Priority SLA (4h)</td>
                    <td style={{ color: '#10b981', fontWeight: 700 }}>24/7 Dedicated Architect (15m)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <SaaSFaqSection />

      {/* CTA */}
      <SaaSCtaSection />
    </div>
  );
};
