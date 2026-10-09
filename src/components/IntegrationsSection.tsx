import React from 'react';

const integrations = [
  {
    name: 'UiPath',
    badge: 'Confirmed Core',
    badgeClass: 'confirmed',
    desc: 'Enterprise robotic process automation orchestration, unattended bots, and work queue automation.'
  },
  {
    name: 'MS Power Automate',
    badge: 'Confirmed Core',
    badgeClass: 'confirmed',
    desc: 'Cloud flows, desktop RPA, and Microsoft 365 business process automation pipelines.'
  },
  {
    name: 'Xero',
    badge: 'Confirmed Core',
    badgeClass: 'confirmed',
    desc: 'Automated bill creation, debtor reconciliation, and cloud accounting API synchronization.'
  },
  {
    name: 'MYOB',
    badge: 'Confirmed Core',
    badgeClass: 'confirmed',
    desc: 'Australian business ledger balancing, payroll verification, and direct general ledger posting.'
  },
  {
    name: 'SAP & ERP',
    badge: 'Ecosystem Connector',
    badgeClass: 'illustrative',
    desc: 'Enterprise resource planning sync, purchase order matching, and inventory database updates.'
  },
  {
    name: 'Slack & Teams',
    badge: 'Ecosystem Connector',
    badgeClass: 'illustrative',
    desc: 'Instant real-time escalation alerts, video proof push notifications, and one-click manager approvals.'
  },
  {
    name: 'Google Workspace',
    badge: 'Ecosystem Connector',
    badgeClass: 'illustrative',
    desc: 'Automated PDF attachment parsing, spreadsheet reconciliation, and cloud document indexing.'
  },
  {
    name: 'Cloud APIs & Webhooks',
    badge: 'Ecosystem Connector',
    badgeClass: 'illustrative',
    desc: 'Secure REST APIs, database webhooks, and custom endpoints hosted in Australian cloud regions.'
  }
];

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="integrations-section" id="integrations">
      <div className="section-container">
        <div className="section-head center">
          <div className="custom-badge">
            <span className="badge-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
              </svg>
            </span>
            <span className="badge-text">Integration Ecosystem</span>
          </div>
          <h2 className="section-title">
            Works Seamlessly With <span className="text-gradient">Your Software Stack</span>
          </h2>
          <p className="section-subtitle">
            We build automation that connects into your existing systems without requiring costly
            infrastructure replacements.
          </p>
        </div>

        <div className="integrations-grid">
          {integrations.map(item => (
            <div key={item.name} className="integration-card card-spotlight">
              <div className="integration-head">
                <span className="integration-name">{item.name}</span>
                <span className={`integration-badge ${item.badgeClass}`}>{item.badge}</span>
              </div>
              <p className="integration-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="integration-disclaimer">
          * Note: iKOREX connects with existing business applications through standard public APIs,
          enterprise webhooks, and robotic automation interfaces. Mentions of third-party platforms
          reflect technical integration capability and do not imply an official partnership or direct
          certification unless explicitly confirmed.
        </p>
      </div>
    </section>
  );
};
