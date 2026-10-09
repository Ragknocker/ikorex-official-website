import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const DashboardSettingsPage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<'profile' | 'workspace' | 'api' | 'security'>('profile');

  // Form states
  const [name, setName] = useState(user?.name || 'Alex Vance');
  const [company, setCompany] = useState(user?.company || 'Vance Logistics Australia');
  const [workspaceName, setWorkspaceName] = useState(user?.workspace || 'Melbourne HQ');
  const [timezone, setTimezone] = useState('Australia/Melbourne (AEST)');

  // API Key state
  const [apiKey, setApiKey] = useState('ik_live_9a87f2e1c4b63890d71a8e');
  const [showKey, setShowKey] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ name, company });
    showToast('Profile settings updated successfully.', 'success');
  };

  const handleSaveWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ workspace: workspaceName });
    showToast('Workspace settings saved.', 'success');
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    showToast('API Key copied to clipboard!', 'info');
  };

  const handleRollKey = () => {
    const fresh = `ik_live_${Math.random().toString(36).substring(2, 12)}${Math.random().toString(36).substring(2, 10)}`;
    setApiKey(fresh);
    showToast('New production API key generated and activated.', 'success');
  };

  return (
    <div>
      <div className="dash-page-header">
        <div>
          <h1 className="dash-page-title">Workspace &amp; Account Settings</h1>
          <p className="dash-page-subtitle">
            Configure member permissions, API tokens, webhooks, and security parameters.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', borderBottom: '1px solid var(--dash-card-border)', paddingBottom: '12px' }}>
        {[
          { id: 'profile', label: '👤 Profile' },
          { id: 'workspace', label: '🏢 Workspace' },
          { id: 'api', label: '🔑 API Keys & Webhooks' },
          { id: 'security', label: '🔒 Security & SSO' }
        ].map(t => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id as any)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              background: activeTab === t.id ? 'var(--saas-primary)' : 'transparent',
              color: activeTab === t.id ? '#fff' : 'var(--dash-text-muted)',
              fontSize: '0.86rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB 1: PROFILE */}
      {activeTab === 'profile' && (
        <div className="dash-panel" style={{ maxWidth: '680px' }}>
          <h2 className="dash-panel-title" style={{ marginBottom: '20px' }}>Personal Profile</h2>
          <form onSubmit={handleSaveProfile}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--dash-input-bg)', border: '1px solid var(--dash-input-border)', color: 'var(--dash-text-main)' }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>Email Address</label>
              <input
                type="email"
                value={user?.email || 'operator@ikorex.com'}
                disabled
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--dash-input-border)', color: 'var(--dash-text-muted)', cursor: 'not-allowed' }}
              />
              <span style={{ fontSize: '0.72rem', color: 'var(--dash-text-subtle)' }}>Contact your workspace administrator to change emails.</span>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>Company Organization</label>
              <input
                type="text"
                value={company}
                onChange={e => setCompany(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--dash-input-bg)', border: '1px solid var(--dash-input-border)', color: 'var(--dash-text-main)' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
              Save Profile Changes
            </button>
          </form>
        </div>
      )}

      {/* TAB 2: WORKSPACE */}
      {activeTab === 'workspace' && (
        <div className="dash-panel" style={{ maxWidth: '680px' }}>
          <h2 className="dash-panel-title" style={{ marginBottom: '20px' }}>Workspace Configuration</h2>
          <form onSubmit={handleSaveWorkspace}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>Workspace Name</label>
              <input
                type="text"
                value={workspaceName}
                onChange={e => setWorkspaceName(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--dash-input-bg)', border: '1px solid var(--dash-input-border)', color: 'var(--dash-text-main)' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>Operating Timezone</label>
              <select
                value={timezone}
                onChange={e => setTimezone(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--dash-input-bg)', border: '1px solid var(--dash-input-border)', color: 'var(--dash-text-main)' }}
              >
                <option value="Australia/Melbourne (AEST)">Australia/Melbourne (AEST)</option>
                <option value="Australia/Sydney (AEST)">Australia/Sydney (AEST)</option>
                <option value="Australia/Brisbane (AEST)">Australia/Brisbane (AEST)</option>
                <option value="Australia/Perth (AWST)">Australia/Perth (AWST)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
              Save Workspace Settings
            </button>
          </form>
        </div>
      )}

      {/* TAB 3: API KEYS */}
      {activeTab === 'api' && (
        <div className="dash-panel" style={{ maxWidth: '780px' }}>
          <h2 className="dash-panel-title" style={{ marginBottom: '12px' }}>REST API Keys &amp; Webhook Credentials</h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--dash-text-muted)', marginBottom: '24px' }}>
            Use these tokens to authenticate programmatic requests from your internal backend, Python scripts, or UiPath robots.
          </p>

          <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '18px', borderRadius: '12px', border: '1px solid var(--dash-card-border)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', color: '#00d2ff', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>PRODUCTION KEY</span>
              <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>Active (Read/Write)</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                readOnly
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: 'var(--dash-input-bg)',
                  border: '1px solid var(--dash-input-border)',
                  color: 'var(--dash-text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem'
                }}
              />
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setShowKey(!showKey)}
                style={{ padding: '10px 14px' }}
              >
                {showKey ? 'Hide' : 'Reveal'}
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleCopyKey}
                style={{ padding: '10px 16px' }}
              >
                Copy
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleRollKey}
              style={{ fontSize: '0.84rem', padding: '8px 16px', color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.4)' }}
            >
              🔄 Roll / Regenerate Secret Key
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: SECURITY */}
      {activeTab === 'security' && (
        <div className="dash-panel" style={{ maxWidth: '680px' }}>
          <h2 className="dash-panel-title" style={{ marginBottom: '16px' }}>Enterprise SSO &amp; Security Attestation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--dash-card-border)' }}>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--dash-text-main)', fontSize: '0.9rem' }}>Two-Factor Authentication (2FA)</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--dash-text-muted)' }}>Enforce authenticator app verification for all workspace operators.</div>
              </div>
              <span className="dash-status-pill dash-status-active">Enforced</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--dash-card-border)' }}>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--dash-text-main)', fontSize: '0.9rem' }}>SAML 2.0 / Okta Directory Sync</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--dash-text-muted)' }}>Corporate single sign-on integration.</div>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#00d2ff', background: 'rgba(0,136,255,0.1)', padding: '4px 10px', borderRadius: '6px' }}>Enterprise Tier</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
