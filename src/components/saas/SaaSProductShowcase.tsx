import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type ShowcaseTab = 'overview' | 'analytics' | 'workflows' | 'users' | 'activity';

export const SaaSProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('overview');

  const tabs: { id: ShowcaseTab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Dashboard Overview', icon: '🎛️' },
    { id: 'analytics', label: 'Analytics & Reporting', icon: '📊' },
    { id: 'workflows', label: 'Workflow Management', icon: '⚡' },
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'activity', label: 'Notifications & Feed', icon: '🔔' }
  ];

  return (
    <section className="product-showcase-section" id="showcase" style={{ padding: '80px 0', background: 'rgba(0, 136, 255, 0.02)' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '16px' }}>
            <span>LIVE INTERACTIVE PREVIEW</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-main)' }}>
            Experience the <span className="saas-gradient-text">iKOREX Platform.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Switch between functional application screens to see how enterprise workflows, telemetry graphs, and team permissions operate in practice.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}
        >
          {tabs.map(t => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  border: `1px solid ${isActive ? 'var(--saas-primary)' : 'var(--border-color)'}`,
                  background: isActive ? 'var(--saas-primary)' : 'var(--bg-card)',
                  color: isActive ? '#fff' : 'var(--text-main)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(0, 136, 255, 0.3)' : 'none'
                }}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Screen Display Container */}
        <div
          style={{
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            background: 'var(--dash-card-bg, rgba(16, 22, 34, 0.95))',
            boxShadow: 'var(--saas-shadow-lg)',
            overflow: 'hidden'
          }}
        >
          {/* Mock Window Top Bar */}
          <div
            style={{
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '0.76rem', color: '#00d2ff', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                ENVIRONMENT: PRODUCTION &bull; REGION: AU-EAST-MELBOURNE
              </span>
            </div>
            <Link to="/dashboard" className="btn btn-outline btn-sm" style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
              Launch Full App &rarr;
            </Link>
          </div>

          <div style={{ padding: '28px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* TAB 1: OVERVIEW */}
                {activeTab === 'overview' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Processed Records Today</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>4,921</div>
                    <div style={{ fontSize: '0.72rem', color: '#10b981', marginTop: '2px' }}>+12% vs yesterday</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Failed Transactions</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#00d2ff', marginTop: '4px' }}>0</div>
                    <div style={{ fontSize: '0.72rem', color: '#10b981', marginTop: '2px' }}>100% clean ledger rate</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Active Integrations</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>8 / 8 Active</div>
                    <div style={{ fontSize: '0.72rem', color: '#00d2ff', marginTop: '2px' }}>UiPath, Xero, MYOB, Slack</div>
                  </div>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', borderRadius: '12px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: '14px', fontSize: '0.95rem' }}>
                    Live Automation Pipeline Status
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'AP Invoice Extraction & OCR Verification', trigger: 'Gmail AP Inbox', speed: '1.2s', status: 'Healthy' },
                      { name: 'Xero Ledger 3-Way Match & Bank Reconciliation', trigger: 'Xero API Webhook', speed: '0.8s', status: 'Healthy' },
                      { name: 'Inventory Reorder Threshold Auto-Trigger', trigger: 'Stock DB Event', speed: '2.1s', status: 'Healthy' }
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
                        <div>
                          <div style={{ color: '#fff', fontSize: '0.86rem', fontWeight: 600 }}>{row.name}</div>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>{row.trigger} &bull; Execution time: {row.speed}</div>
                        </div>
                        <span className="dash-status-pill dash-status-active">{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ANALYTICS & REPORTING */}
            {activeTab === 'analytics' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Operational Throughput &amp; Error Rate Telemetry</h3>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '4px 0 0' }}>Hourly automation cycle density across all regional endpoints</p>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#00d2ff', background: 'rgba(0, 136, 255, 0.1)', padding: '4px 10px', borderRadius: '6px' }}>
                    Updated 2 seconds ago
                  </span>
                </div>

                {/* Simulated SVG Velocity Chart */}
                <div style={{ height: '180px', width: '100%', position: 'relative', marginBottom: '20px' }}>
                  <svg viewBox="0 0 800 180" style={{ width: '100%', height: '100%' }}>
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0088ff" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#0088ff" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(255,255,255,0.06)" />
                    <line x1="0" y1="90" x2="800" y2="90" stroke="rgba(255,255,255,0.06)" />
                    <line x1="0" y1="140" x2="800" y2="140" stroke="rgba(255,255,255,0.06)" />
                    {/* Area */}
                    <path
                      d="M 0 160 Q 100 130 200 80 T 400 60 T 600 30 T 800 20 L 800 180 L 0 180 Z"
                      fill="url(#chartGrad)"
                    />
                    {/* Line */}
                    <path
                      d="M 0 160 Q 100 130 200 80 T 400 60 T 600 30 T 800 20"
                      fill="none"
                      stroke="#00a8ff"
                      strokeWidth="3"
                    />
                  </svg>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Average Processing Latency</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#10b981', marginTop: '2px' }}>410 ms</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Reconciliation Accuracy</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#00d2ff', marginTop: '2px' }}>99.99%</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>API Rate Limit Health</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>Optimal (28%)</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: WORKFLOW MANAGEMENT */}
            {activeTab === 'workflows' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Workflow Automation Matrix</h3>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>3 of 12 workflows shown</span>
                </div>
                <div className="dash-table-wrapper">
                  <table className="dash-table">
                    <thead>
                      <tr>
                        <th>Workflow Name</th>
                        <th>Trigger Source</th>
                        <th>Target System</th>
                        <th>Frequency</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 600 }}>Invoice OCR &amp; Routing</td>
                        <td>Inbound Email</td>
                        <td>Xero Cloud</td>
                        <td>Instant / Event</td>
                        <td><span className="dash-status-pill dash-status-active">Active</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600 }}>Payroll Timesheet Cross-Check</td>
                        <td>Deputy Timeclock</td>
                        <td>MYOB PayGlobal</td>
                        <td>Every Monday 06:00</td>
                        <td><span className="dash-status-pill dash-status-active">Active</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600 }}>Exception Resolution Alerts</td>
                        <td>Reconciliation Engine</td>
                        <td>Slack #ops-finance</td>
                        <td>On Mismatch</td>
                        <td><span className="dash-status-pill dash-status-active">Active</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 4: USER MANAGEMENT */}
            {activeTab === 'users' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Team Members &amp; RBAC Roles</h3>
                  <button type="button" className="btn btn-outline btn-sm" style={{ padding: '6px 12px', fontSize: '0.78rem' }}>
                    + Invite Member
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { name: 'Alex Vance', email: 'alex.vance@enterprise.com.au', role: 'Workspace Owner', badge: 'Admin' },
                    { name: 'Sarah Jenkins', email: 'sarah.j@enterprise.com.au', role: 'Finance Controller', badge: 'Approver' },
                    { name: 'Marcus Bell', email: 'marcus.bell@enterprise.com.au', role: 'Lead DevOps Engineer', badge: 'Developer' }
                  ].map((user, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.85rem' }}>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>{user.name}</div>
                          <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{user.email}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{user.role}</span>
                        <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(0, 136, 255, 0.15)', color: '#00a8ff', fontWeight: 700 }}>
                          {user.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: NOTIFICATIONS & FEED */}
            {activeTab === 'activity' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>System Telemetry &amp; Audit Trail</h3>
                  <span style={{ fontSize: '0.78rem', color: '#10b981' }}>Live stream connected</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { time: 'Just now', event: 'Invoice #INV-9821 matched against PO-4412 with $0.00 variance.', level: 'success' },
                    { time: '2m ago', event: 'Bank balance batch feed verified against ANZ corporate API.', level: 'info' },
                    { time: '14m ago', event: 'Scheduled MYOB daily journal entry synchronized successfully.', level: 'info' },
                    { time: '1h ago', event: 'New team API key generated with read-only access for reporting service.', level: 'warning' }
                  ].map((act, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', fontSize: '0.84rem' }}>
                      <span style={{ color: '#94a3b8', fontSize: '0.74rem', minWidth: '65px', fontFamily: 'var(--font-mono)' }}>
                        {act.time}
                      </span>
                      <span style={{ color: act.level === 'success' ? '#10b981' : act.level === 'warning' ? '#f59e0b' : '#00a8ff' }}>
                        &bull;
                      </span>
                      <span style={{ color: '#e2e8f0', flex: 1 }}>{act.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
