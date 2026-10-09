import React, { useState } from 'react';
import { CardSpotlight } from '../motion/CardSpotlight';

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  preview: string;
  stat: string;
}

export const SaaSFeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('auto');

  const features: FeatureItem[] = [
    {
      id: 'auto',
      icon: '⚡',
      category: 'Autonomous Execution',
      title: 'Intelligent Automation',
      description: 'Deploy rule-based and AI-driven automation pipelines that handle complex repetitive tasks with zero human latency and verifiable precision.',
      preview: 'Auto-detect incoming invoices, validate purchase orders, trigger ERP syncs, and generate audit-ready exceptions in 1.4 seconds.',
      stat: '99.98% Accuracy'
    },
    {
      id: 'analytics',
      icon: '📊',
      category: 'Continuous Telemetry',
      title: 'Real-Time Analytics',
      description: 'Gain instant operational visibility with real-time throughput metrics, cost-savings calculators, cycle-time telemetry, and bottleneck detectors.',
      preview: 'Interactive drill-downs into daily transaction volumes, error frequencies, and direct dollar-value savings across departments.',
      stat: '100% Live Telemetry'
    },
    {
      id: 'collab',
      icon: '👥',
      category: 'Cross-Functional Synergy',
      title: 'Team Collaboration',
      description: 'Empower finance, operations, and IT teams with shared workspace visibility, role-based access controls, and collaborative approval queues.',
      preview: 'Granular multi-tier approval chains with instant Slack/Teams notifications and inline audit history stamps.',
      stat: 'Zero Handoff Friction'
    },
    {
      id: 'dashboard',
      icon: '🎛️',
      category: 'Command Center',
      title: 'Centralized Dashboard',
      description: 'Consolidate multiple legacy systems into a single authoritative control pane designed for speed, clarity, and instant executive decision-making.',
      preview: 'Unified visibility across Xero, MYOB, banking APIs, custom microservices, and internal databases without browser tab clutter.',
      stat: 'Single Pane of Glass'
    },
    {
      id: 'security',
      icon: '🛡️',
      category: 'Governance & Compliance',
      title: 'Secure Data Management',
      description: 'Enterprise-grade security featuring AES-256 encryption at rest and in transit, complete immutable audit trails, and automated compliance reports.',
      preview: 'Role-based access controls (RBAC), SSO via SAML/Okta, local Australian data residency, and real-time anomaly detection.',
      stat: 'SOC 2 Ready'
    },
    {
      id: 'integrations',
      icon: '🔗',
      category: 'Ecosystem Connectors',
      title: 'Workflow Integrations',
      description: 'Seamlessly connect with UiPath, Power Automate, Xero, MYOB, Salesforce, Slack, and cloud storage providers via native pre-built connectors.',
      preview: 'Bi-directional webhooks and REST APIs that bridge cloud SaaS and on-premise legacy desktop software effortlessly.',
      stat: '50+ Connectors'
    }
  ];

  const current = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="features-section" id="features" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '16px' }}>
            <span>ENGINEERED FOR SCALE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-main)' }}>
            Six Core Capabilities. <br />
            <span className="saas-gradient-text">One Unified Engine.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Eliminate operational fragmentation with modular architecture designed to automate, monitor, and scale enterprise workloads effortlessly.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {features.map(f => {
            const isSelected = f.id === activeFeature;
            return (
              <CardSpotlight
                key={f.id}
                enableTilt={true}
                spotlightColor="rgba(0, 180, 255, 0.16)"
                style={{
                  background: isSelected ? 'rgba(0, 136, 255, 0.08)' : 'var(--bg-card)',
                  border: `1px solid ${isSelected ? 'var(--saas-primary)' : 'var(--border-color)'}`,
                  borderRadius: '16px',
                  padding: '28px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? 'var(--saas-shadow-glow)' : 'var(--saas-shadow-sm)',
                  position: 'relative'
                }}
              >
                <div onClick={() => setActiveFeature(f.id)}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: isSelected ? 'var(--saas-primary)' : 'rgba(0, 136, 255, 0.1)',
                        color: isSelected ? '#fff' : 'var(--saas-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.3rem'
                      }}
                    >
                      {f.icon}
                    </div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: isSelected ? 'var(--saas-primary)' : 'var(--text-muted)'
                      }}
                    >
                      {f.stat}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--saas-primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {f.category}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {f.description}
                  </p>
                </div>
              </CardSpotlight>
            );
          })}
        </div>

        {/* Interactive Feature Deep Dive Visualizer */}
        <div
          style={{
            background: 'var(--dash-card-bg, rgba(16, 22, 34, 0.85))',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: 'var(--saas-shadow-md)'
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="saas-dot-pulse" />
              <span style={{ fontSize: '0.78rem', color: '#00d2ff', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                ACTIVE SIMULATION &bull; {current.title.toUpperCase()}
              </span>
            </div>
            <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              {current.category}: {current.title}
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
              {current.preview}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#10b981' }}>{current.stat}</div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Performance Target</div>
            </div>
            <a
              href="/features"
              className="btn btn-outline"
              style={{ alignSelf: 'center', padding: '10px 20px', fontSize: '0.88rem' }}
            >
              Full Feature Specs &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
