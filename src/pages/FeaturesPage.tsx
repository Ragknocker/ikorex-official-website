import React from 'react';
import { Link } from 'react-router-dom';
import { SaaSFeaturesSection } from '../components/saas/SaaSFeaturesSection';
import { SaaSIntegrationsSection } from '../components/saas/SaaSIntegrationsSection';
import { SaaSCtaSection } from '../components/saas/SaaSCtaSection';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="features-page-container">
      {/* Header Banner */}
      <section style={{ padding: '120px 0 60px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 10%, rgba(0, 136, 255, 0.12), transparent 70%)' }}>
        <div className="section-container" style={{ maxWidth: '820px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '20px' }}>
            <span>FULL PRODUCT SPECIFICATIONS</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '20px' }}>
            Built for Precision. <br />
            <span className="saas-gradient-text">Engineered for Autonomous Scale.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 32px' }}>
            Explore the architectural foundations, telemetry systems, and machine-verified rules that run inside the iKOREX automation stack.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <Link to="/signup" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '1rem' }}>
              Start 14-Day Free Trial &rarr;
            </Link>
            <Link to="/pricing" className="btn btn-outline" style={{ padding: '12px 24px', fontSize: '1rem' }}>
              View Plans &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* 6 Configurable Core Features */}
      <SaaSFeaturesSection />

      {/* Architectural Specs Comparison Table */}
      <section style={{ padding: '60px 0 80px', borderTop: '1px solid var(--border-color)' }}>
        <div className="section-container" style={{ maxWidth: '980px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }}>
              Technical Architecture &amp; SLA Benchmarks
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Rigorous engineering guarantees verified by SOC 2 and ISO 27001 compliance standards.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', overflow: 'hidden' }}>
            <div className="dash-table-wrapper">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Capability Attribute</th>
                    <th>Standard / Legacy Tools</th>
                    <th>iKOREX Enterprise Platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Invoice &amp; PO Extraction Latency</td>
                    <td style={{ color: 'var(--text-muted)' }}>4 to 24 hours (manual batch)</td>
                    <td style={{ color: '#00d2ff', fontWeight: 700 }}>1.2 seconds (automated OCR)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Reconciliation Accuracy Rate</td>
                    <td style={{ color: 'var(--text-muted)' }}>92% - 96% (human fatigue risk)</td>
                    <td style={{ color: '#10b981', fontWeight: 700 }}>99.98% (multi-pass validation)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Ledger Sync Compatibility</td>
                    <td style={{ color: 'var(--text-muted)' }}>Manual CSV upload / export</td>
                    <td style={{ color: '#00d2ff', fontWeight: 700 }}>Real-time bi-directional REST webhooks</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Audit Trail Immutability</td>
                    <td style={{ color: 'var(--text-muted)' }}>Scattered email approval chains</td>
                    <td style={{ color: '#10b981', fontWeight: 700 }}>Cryptographic event timestamps</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Data Sovereignty</td>
                    <td style={{ color: 'var(--text-muted)' }}>Foreign offshore multi-tenant clouds</td>
                    <td style={{ color: '#00d2ff', fontWeight: 700 }}>Australian sovereign data centers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Integrations */}
      <SaaSIntegrationsSection />

      {/* Final Call to Action */}
      <SaaSCtaSection />
    </div>
  );
};
