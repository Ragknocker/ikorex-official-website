import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

interface WorkflowRecord {
  id: string;
  name: string;
  trigger: string;
  target: string;
  executions: number;
  accuracy: string;
  status: 'active' | 'running' | 'queued' | 'error';
  lastRun: string;
}

export const DashboardOverviewPage: React.FC = () => {
  const { user } = useAuth();
  const { showToast } = useToast();

  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'running' | 'queued' | 'error'>('all');
  const [showNewModal, setShowNewModal] = useState(false);

  // New Workflow form state
  const [newWfName, setNewWfName] = useState('');
  const [newWfTrigger, setNewWfTrigger] = useState('Email Inbound (OCR)');
  const [newWfTarget, setNewWfTarget] = useState('Xero Accounting');

  const [workflows, setWorkflows] = useState<WorkflowRecord[]>([
    {
      id: 'WF-101',
      name: 'Invoice OCR & 3-Way Match Verification',
      trigger: 'AP Inbound Inbox',
      target: 'Xero Cloud ERP',
      executions: 12450,
      accuracy: '99.99%',
      status: 'active',
      lastRun: '1 min ago'
    },
    {
      id: 'WF-102',
      name: 'Payroll Timesheet Discrepancy Flagging',
      trigger: 'Deputy Clock API',
      target: 'MYOB PayGlobal',
      executions: 3120,
      accuracy: '100.0%',
      status: 'running',
      lastRun: 'Just now'
    },
    {
      id: 'WF-103',
      name: 'High-Value Vendor Payment Approval Gate',
      trigger: 'Bank Batch File',
      target: 'Slack #cfo-approvals',
      executions: 840,
      accuracy: '99.95%',
      status: 'active',
      lastRun: '14 mins ago'
    },
    {
      id: 'WF-104',
      name: 'Daily Ledger Multi-Entity Bank Recon',
      trigger: 'ANZ Open Banking',
      target: 'PostgreSQL DB',
      executions: 450,
      accuracy: '100.0%',
      status: 'queued',
      lastRun: '1 hour ago'
    },
    {
      id: 'WF-105',
      name: 'Salesforce Contract to Billing Bridge',
      trigger: 'Opportunity Closed',
      target: 'Stripe Invoicing',
      executions: 2890,
      accuracy: '99.88%',
      status: 'active',
      lastRun: '3 hours ago'
    }
  ]);

  const handleCreateWorkflow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWfName.trim()) {
      showToast('Please provide a name for the workflow.', 'error');
      return;
    }

    const created: WorkflowRecord = {
      id: `WF-${Math.floor(100 + Math.random() * 900)}`,
      name: newWfName.trim(),
      trigger: newWfTrigger,
      target: newWfTarget,
      executions: 1,
      accuracy: '100.0%',
      status: 'active',
      lastRun: 'Just now'
    };

    setWorkflows([created, ...workflows]);
    setNewWfName('');
    setShowNewModal(false);
    showToast(`Workflow "${created.name}" created and deployed successfully!`, 'success');
  };

  const filteredWorkflows = workflows.filter(wf => {
    const matchesSearch = wf.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          wf.target.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || wf.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Page Title & Quick Actions */}
      <div className="dash-page-header">
        <div>
          <h1 className="dash-page-title">
            Welcome back, {user?.name?.split(' ')[0] || 'Operator'}
          </h1>
          <p className="dash-page-subtitle">
            Enterprise Workspace: <strong>{user?.workspace || 'Melbourne HQ'}</strong> &bull; Continuous Automation Engine v2.4
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            onClick={() => setShowNewModal(true)}
          >
            + Create New Workflow
          </button>
        </div>
      </div>

      {/* KPI METRICS CARDS */}
      <div className="dash-metrics-grid">
        <div className="dash-metric-card">
          <div className="dash-metric-header">
            <span className="dash-metric-label">Active Workflows</span>
            <div className="dash-metric-icon">⚡</div>
          </div>
          <div className="dash-metric-value">{workflows.length} Active</div>
          <div className="dash-metric-trend dash-trend-up">
            <span>↑ +18.4%</span>
            <span style={{ color: 'var(--dash-text-subtle)' }}>vs previous cycle</span>
          </div>
        </div>

        <div className="dash-metric-card">
          <div className="dash-metric-header">
            <span className="dash-metric-label">System Uptime &amp; Accuracy</span>
            <div className="dash-metric-icon">🛡️</div>
          </div>
          <div className="dash-metric-value" style={{ color: '#00d2ff' }}>99.98%</div>
          <div className="dash-metric-trend dash-trend-up">
            <span>✓ Zero Reconciliation Drift</span>
          </div>
        </div>

        <div className="dash-metric-card">
          <div className="dash-metric-header">
            <span className="dash-metric-label">Monthly Savings Realized</span>
            <div className="dash-metric-icon">💰</div>
          </div>
          <div className="dash-metric-value">$42,850</div>
          <div className="dash-metric-trend dash-trend-up">
            <span>↑ 1,840 Hours Automated</span>
          </div>
        </div>

        <div className="dash-metric-card">
          <div className="dash-metric-header">
            <span className="dash-metric-label">Total Processed Events</span>
            <div className="dash-metric-icon">📈</div>
          </div>
          <div className="dash-metric-value">148.2k</div>
          <div className="dash-metric-trend dash-trend-neutral">
            <span>⚡ 410ms Avg Latency</span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE THROUGHPUT CHART PANEL */}
      <div className="dash-panel">
        <div className="dash-panel-header">
          <div>
            <h2 className="dash-panel-title">Automation Execution Velocity &amp; Throughput</h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--dash-text-muted)', margin: '4px 0 0' }}>
              Daily transactional volume processed across connected ERP endpoints
            </p>
          </div>

          {/* Timeframe switch */}
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.04)', padding: '4px', borderRadius: '8px', border: '1px solid var(--dash-card-border)' }}>
            {(['7d', '30d', '90d'] as const).map(range => (
              <button
                key={range}
                type="button"
                onClick={() => setDateRange(range)}
                style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: dateRange === range ? 'var(--saas-primary)' : 'transparent',
                  color: dateRange === range ? '#fff' : 'var(--dash-text-muted)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Interactive SVG Chart */}
        <div style={{ height: '220px', width: '100%', position: 'relative' }}>
          <svg viewBox="0 0 900 220" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="velocityGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0088ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0088ff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="40" x2="900" y2="40" stroke="rgba(255,255,255,0.06)" />
            <line x1="0" y1="100" x2="900" y2="100" stroke="rgba(255,255,255,0.06)" />
            <line x1="0" y1="160" x2="900" y2="160" stroke="rgba(255,255,255,0.06)" />
            <path
              d={
                dateRange === '7d'
                  ? "M 0 180 Q 150 140 300 90 T 600 50 T 900 20 L 900 220 L 0 220 Z"
                  : dateRange === '30d'
                  ? "M 0 190 Q 200 130 450 70 T 750 60 T 900 30 L 900 220 L 0 220 Z"
                  : "M 0 200 Q 220 160 500 110 T 780 70 T 900 40 L 900 220 L 0 220 Z"
              }
              fill="url(#velocityGrad)"
            />
            <path
              d={
                dateRange === '7d'
                  ? "M 0 180 Q 150 140 300 90 T 600 50 T 900 20"
                  : dateRange === '30d'
                  ? "M 0 190 Q 200 130 450 70 T 750 60 T 900 30"
                  : "M 0 200 Q 220 160 500 110 T 780 70 T 900 40"
              }
              fill="none"
              stroke="#00a8ff"
              strokeWidth="3.5"
            />
          </svg>
        </div>
      </div>

      {/* WORKFLOWS DATA TABLE PANEL */}
      <div className="dash-panel">
        <div className="dash-panel-header">
          <div>
            <h2 className="dash-panel-title">Active Enterprise Workflows</h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--dash-text-muted)', margin: '4px 0 0' }}>
              Real-time execution status and schema verification health
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search workflows..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                background: 'var(--dash-input-bg)',
                border: '1px solid var(--dash-input-border)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: 'var(--dash-text-main)',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value as any)}
              style={{
                background: 'var(--dash-input-bg)',
                border: '1px solid var(--dash-input-border)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: 'var(--dash-text-main)',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="running">Running</option>
              <option value="queued">Queued</option>
            </select>
          </div>
        </div>

        <div className="dash-table-wrapper">
          <table className="dash-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Workflow Name</th>
                <th>Trigger Source</th>
                <th>Destination</th>
                <th>Executions</th>
                <th>Accuracy</th>
                <th>Status</th>
                <th>Last Run</th>
              </tr>
            </thead>
            <tbody>
              {filteredWorkflows.map(wf => (
                <tr key={wf.id}>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--dash-text-subtle)' }}>
                    {wf.id}
                  </td>
                  <td style={{ fontWeight: 600 }}>{wf.name}</td>
                  <td>{wf.trigger}</td>
                  <td>{wf.target}</td>
                  <td style={{ fontFamily: 'var(--font-mono)' }}>{wf.executions.toLocaleString()}</td>
                  <td style={{ color: '#00d2ff', fontWeight: 600 }}>{wf.accuracy}</td>
                  <td>
                    <span className={`dash-status-pill dash-status-${wf.status}`}>
                      <span className="saas-dot-pulse" /> {wf.status.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.78rem', color: 'var(--dash-text-muted)' }}>{wf.lastRun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE WORKFLOW MODAL */}
      {showNewModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div
            style={{
              background: 'var(--dash-card-bg)',
              border: '1px solid var(--dash-card-border)',
              borderRadius: '18px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
              boxShadow: 'var(--saas-shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Create Intelligent Workflow</h3>
              <button
                type="button"
                onClick={() => setShowNewModal(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleCreateWorkflow}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                  Workflow Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. End-of-Month Supplier Ledger Reconciliation"
                  value={newWfName}
                  onChange={e => setNewWfName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'var(--dash-input-bg)',
                    border: '1px solid var(--dash-input-border)',
                    color: 'var(--dash-text-main)',
                    fontSize: '0.9rem'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                  Trigger Event Source
                </label>
                <select
                  value={newWfTrigger}
                  onChange={e => setNewWfTrigger(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'var(--dash-input-bg)',
                    border: '1px solid var(--dash-input-border)',
                    color: 'var(--dash-text-main)',
                    fontSize: '0.9rem'
                  }}
                >
                  <option value="Email Inbound (OCR)">Email Inbound (OCR Document Ingestion)</option>
                  <option value="Xero Webhook Event">Xero Webhook Event (New Bill / Invoice)</option>
                  <option value="MYOB AccountRight Feed">MYOB AccountRight Bank Feed</option>
                  <option value="ANZ Direct Bank Batch">ANZ Direct Bank Batch</option>
                  <option value="Scheduled Cron (Every Hour)">Scheduled Cron (Every Hour)</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                  Destination / Target Action
                </label>
                <select
                  value={newWfTarget}
                  onChange={e => setNewWfTarget(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'var(--dash-input-bg)',
                    border: '1px solid var(--dash-input-border)',
                    color: 'var(--dash-text-main)',
                    fontSize: '0.9rem'
                  }}
                >
                  <option value="Xero Accounting">Xero Accounting (Auto-Reconcile)</option>
                  <option value="MYOB Ledger Sync">MYOB Ledger Sync</option>
                  <option value="Slack #finance-approvals">Slack #finance-approvals Alert</option>
                  <option value="PostgreSQL Analytics Warehouse">PostgreSQL Analytics Warehouse</option>
                  <option value="UiPath RPA Trigger">UiPath RPA Trigger</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="btn btn-outline"
                  style={{ padding: '10px 18px', fontSize: '0.86rem' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '10px 20px', fontSize: '0.86rem' }}
                >
                  Deploy Workflow &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
