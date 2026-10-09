import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const DashboardBillingPage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const currentPlan = user?.plan || 'Professional';

  const handlePlanChange = (newPlan: 'Starter' | 'Professional' | 'Enterprise') => {
    updateUser({ plan: newPlan });
    setShowUpgradeModal(false);
    showToast(`Your workspace plan was updated to ${newPlan}.`, 'success');
  };

  const handleDownloadInvoice = (invoiceId: string) => {
    showToast(`Downloading receipt for invoice ${invoiceId}...`, 'info');
  };

  const invoices = [
    { id: 'INV-2026-003', date: '01 Oct 2026', amount: '$79.00 AUD', status: 'Paid' },
    { id: 'INV-2026-002', date: '01 Sep 2026', amount: '$79.00 AUD', status: 'Paid' },
    { id: 'INV-2026-001', date: '01 Aug 2026', amount: '$79.00 AUD', status: 'Paid' }
  ];

  return (
    <div>
      <div className="dash-page-header">
        <div>
          <h1 className="dash-page-title">Billing &amp; Subscription Management</h1>
          <p className="dash-page-subtitle">
            Manage your organization tier, payment methods, usage allocations, and tax receipts.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        {/* CURRENT PLAN CARD */}
        <div className="dash-panel" style={{ margin: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.78rem', color: '#00d2ff', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              CURRENT ACTIVE PLAN
            </span>
            <span className="dash-status-pill dash-status-active">Active</span>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dash-text-main)', marginBottom: '4px' }}>
            {currentPlan} Tier
          </h2>
          <div style={{ fontSize: '0.9rem', color: 'var(--dash-text-muted)', marginBottom: '20px' }}>
            {currentPlan === 'Starter' && '$24 AUD / mo &bull; Billed Annually'}
            {currentPlan === 'Professional' && '$79 AUD / mo &bull; Billed Annually'}
            {currentPlan === 'Enterprise' && '$249 AUD / mo &bull; Billed Annually'}
          </div>

          {/* Usage meters */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '6px' }}>
              <span style={{ color: 'var(--dash-text-muted)' }}>Workflow Capacity</span>
              <span style={{ fontWeight: 600 }}>5 of 25 Used</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: '20%', height: '100%', background: '#0088ff', borderRadius: '999px' }} />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '6px' }}>
              <span style={{ color: 'var(--dash-text-muted)' }}>Monthly API Execution Quota</span>
              <span style={{ fontWeight: 600 }}>148.2k of 250k Used</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: '59%', height: '100%', background: '#10b981', borderRadius: '999px' }} />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
            onClick={() => setShowUpgradeModal(true)}
          >
            Change / Upgrade Plan &rarr;
          </button>
        </div>

        {/* PAYMENT METHOD CARD */}
        <div className="dash-panel" style={{ margin: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.78rem', color: '#00d2ff', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              PAYMENT METHOD
            </span>
            <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>Verified</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '12px', border: '1px solid var(--dash-card-border)', marginBottom: '20px' }}>
            <div style={{ width: '44px', height: '30px', background: '#2563eb', borderRadius: '6px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem' }}>
              VISA
            </div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--dash-text-main)', fontSize: '0.9rem' }}>Corporate Visa ending in &bull;&bull;&bull;&bull; 4242</div>
              <div style={{ fontSize: '0.74rem', color: 'var(--dash-text-muted)' }}>Expires 12/2028 &bull; Default billing method</div>
            </div>
          </div>

          <div style={{ fontSize: '0.84rem', color: 'var(--dash-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
            Invoices are charged automatically on the 1st of each month. GST tax receipts are delivered to <strong>{user?.email || 'accounts@enterprise.com.au'}</strong>.
          </div>

          <button
            type="button"
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
            onClick={() => showToast('Payment method update portal opened.', 'info')}
          >
            Update Payment Details
          </button>
        </div>
      </div>

      {/* BILLING INVOICES HISTORY TABLE */}
      <div className="dash-panel">
        <h2 className="dash-panel-title" style={{ marginBottom: '16px' }}>Invoice History &amp; GST Receipts</h2>
        <div className="dash-table-wrapper">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Billing Date</th>
                <th>Amount (AUD)</th>
                <th>Status</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map(inv => (
                <tr key={inv.id}>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600 }}>{inv.id}</td>
                  <td>{inv.date}</td>
                  <td style={{ fontWeight: 700 }}>{inv.amount}</td>
                  <td>
                    <span className="dash-status-pill dash-status-active">{inv.status}</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDownloadInvoice(inv.id)}
                      className="btn btn-outline btn-sm"
                      style={{ padding: '4px 10px', fontSize: '0.74rem' }}
                    >
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* UPGRADE PLAN MODAL */}
      {showUpgradeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
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
              borderRadius: '20px',
              maxWidth: '680px',
              width: '100%',
              padding: '32px',
              boxShadow: 'var(--saas-shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0 }}>Select Workspace Subscription</h3>
              <button
                type="button"
                onClick={() => setShowUpgradeModal(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {[
                { name: 'Starter' as const, price: '$24/mo', desc: '5 workflows' },
                { name: 'Professional' as const, price: '$79/mo', desc: '25 workflows, API' },
                { name: 'Enterprise' as const, price: '$249/mo', desc: 'Unlimited, SSO' }
              ].map(p => (
                <div
                  key={p.name}
                  onClick={() => handlePlanChange(p.name)}
                  style={{
                    border: `2px solid ${currentPlan === p.name ? 'var(--saas-primary)' : 'var(--dash-card-border)'}`,
                    borderRadius: '12px',
                    padding: '16px',
                    cursor: 'pointer',
                    background: currentPlan === p.name ? 'rgba(0,136,255,0.1)' : 'transparent',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--dash-text-main)' }}>{p.name}</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--saas-primary)', margin: '4px 0' }}>{p.price}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--dash-text-muted)' }}>{p.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'right' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowUpgradeModal(false)}
                style={{ padding: '8px 16px', fontSize: '0.84rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
