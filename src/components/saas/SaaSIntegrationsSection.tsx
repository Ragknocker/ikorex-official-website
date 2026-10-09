import React, { useState } from 'react';

interface IntegrationItem {
  name: string;
  category: 'Communication' | 'Project Management' | 'Analytics' | 'Cloud Storage' | 'Payments' | 'Developer Tools';
  description: string;
  status: 'Ready' | 'Coming Soon';
  badge: string;
}

export const SaaSIntegrationsSection: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const integrations: IntegrationItem[] = [
    { name: 'Xero Accounting', category: 'Payments', description: 'Bi-directional bank feeds, bills, invoices, and journal ledger reconciliation.', status: 'Ready', badge: 'Accounting & AP' },
    { name: 'MYOB Business', category: 'Payments', description: 'Native sync with MYOB AccountRight and Business ledger entries.', status: 'Ready', badge: 'Ledger Sync' },
    { name: 'UiPath Automation Cloud', category: 'Developer Tools', description: 'Trigger RPA robots and receive execution status payloads via webhooks.', status: 'Ready', badge: 'RPA Connector' },
    { name: 'Microsoft Power Automate', category: 'Developer Tools', description: 'Direct Azure Logic Apps & Power Platform flow bridge.', status: 'Ready', badge: 'Enterprise Flow' },
    { name: 'Slack Notifications', category: 'Communication', description: 'Instant exception alerts, approval buttons, and daily digest reports.', status: 'Ready', badge: 'Messaging' },
    { name: 'Microsoft Teams', category: 'Communication', description: 'Adaptive cards for manager sign-offs and workflow error telemetry.', status: 'Ready', badge: 'Enterprise Chat' },
    { name: 'Jira Software', category: 'Project Management', description: 'Automatic bug creation when validation thresholds fail repeatedly.', status: 'Ready', badge: 'Issue Tracker' },
    { name: 'Asana', category: 'Project Management', description: 'Create task handoffs and assign operational review tickets.', status: 'Ready', badge: 'Task Ops' },
    { name: 'Google Cloud Storage & Drive', category: 'Cloud Storage', description: 'Secure OCR document ingestion and long-term PDF archiving.', status: 'Ready', badge: 'Storage' },
    { name: 'AWS S3 Vault', category: 'Cloud Storage', description: 'Encrypted bucket sync for compliance-grade financial attachments.', status: 'Ready', badge: 'Secure Bucket' },
    { name: 'Stripe Billing', category: 'Payments', description: 'Automatic subscription revenue recognition and chargeback workflows.', status: 'Ready', badge: 'Merchant Gate' },
    { name: 'HubSpot CRM', category: 'Analytics', description: 'Sync sales orders and client contract data automatically.', status: 'Coming Soon', badge: 'CRM Connector' },
    { name: 'Snowflake Data Cloud', category: 'Analytics', description: 'Push high-volume normalized execution telemetry directly into warehouse.', status: 'Coming Soon', badge: 'Data Warehouse' },
    { name: 'PostgreSQL Direct Driver', category: 'Developer Tools', description: 'Connect directly to your private relational database via secure SSH tunnel.', status: 'Ready', badge: 'SQL Driver' }
  ];

  const categories = ['All', 'Communication', 'Project Management', 'Analytics', 'Cloud Storage', 'Payments', 'Developer Tools'];

  const filtered = selectedCat === 'All' ? integrations : integrations.filter(i => i.category === selectedCat);

  return (
    <section className="integrations-section" id="integrations" style={{ padding: '80px 0', background: 'rgba(0, 0, 0, 0.02)' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '16px' }}>
            <span>ECOSYSTEM INTEGRATIONS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-main)' }}>
            Connects With the Tools <br />
            <span className="saas-gradient-text">Your Team Already Uses.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Plug iKOREX directly into your existing ERP, accounting, communication, and developer toolkits with verified API security.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: 600,
                border: `1px solid ${selectedCat === cat ? 'var(--saas-primary)' : 'var(--border-color)'}`,
                background: selectedCat === cat ? 'var(--saas-primary)' : 'var(--bg-card)',
                color: selectedCat === cat ? '#fff' : 'var(--text-main)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {filtered.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                padding: '22px',
                boxShadow: 'var(--saas-shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: 'rgba(0, 136, 255, 0.1)', color: 'var(--saas-primary)' }}>
                    {item.badge}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: item.status === 'Ready' ? '#10b981' : '#f59e0b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.status === 'Ready' ? '#10b981' : '#f59e0b' }} />
                    {item.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {item.description}
                </p>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                Category: <strong>{item.category}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
