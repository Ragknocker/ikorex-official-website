import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    showToast('You have been signed out successfully.', 'info');
    navigate('/login');
  };

  const navItems = [
    { to: '/dashboard', label: 'Overview', icon: '🎛️', end: true },
    { to: '/dashboard/settings', label: 'Settings', icon: '⚙️', end: false },
    { to: '/dashboard/billing', label: 'Billing & Plan', icon: '💳', end: false }
  ];

  const notifications = [
    { id: 1, title: 'Reconciliation Batch Completed', time: '5m ago', unread: true },
    { id: 2, title: 'Weekly Telemetry Summary Ready', time: '1h ago', unread: true },
    { id: 3, title: 'New API Key Generated', time: '1d ago', unread: false }
  ];

  return (
    <div className={`saas-dashboard-app ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* SIDEBAR NAVIGATION */}
      <aside className={`dash-sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="dash-sidebar-header">
          <Link to="/" className="dash-sidebar-logo">
            <img src="/logo.png" alt="iKOREX Logo" />
            {!sidebarCollapsed && <span>iKOREX</span>}
          </Link>
          <button
            type="button"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--dash-text-muted)',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              padding: '6px'
            }}
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-label="Toggle sidebar"
          >
            {sidebarCollapsed ? '⇥' : '⇤'}
          </button>
        </div>

        {/* Workspace Selector */}
        {!sidebarCollapsed && (
          <div className="dash-workspace-box" title="Switch organization workspace">
            <div className="dash-workspace-info">
              <div className="dash-workspace-avatar">
                {user?.workspace?.charAt(0) || 'W'}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  {user?.workspace || 'Enterprise Workspace'}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--dash-text-muted)' }}>
                  {user?.plan || 'Professional'} Tier
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--dash-text-subtle)' }}>▼</span>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="dash-nav-menu">
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--dash-text-subtle)', fontWeight: 700, padding: '8px 12px 4px' }}>
            {!sidebarCollapsed && 'Core App'}
          </div>

          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `dash-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setMobileSidebarOpen(false)}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              {!sidebarCollapsed && <span>{item.label}</span>}
            </NavLink>
          ))}

          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--dash-text-subtle)', fontWeight: 700, padding: '16px 12px 4px' }}>
            {!sidebarCollapsed && 'Portals'}
          </div>

          <Link to="/" className="dash-nav-item" title={sidebarCollapsed ? 'Marketing Site' : undefined}>
            <span style={{ fontSize: '1.1rem' }}>🌐</span>
            {!sidebarCollapsed && <span>Marketing Website</span>}
          </Link>
          <Link to="/contact" className="dash-nav-item" title={sidebarCollapsed ? 'Support' : undefined}>
            <span style={{ fontSize: '1.1rem' }}>💬</span>
            {!sidebarCollapsed && <span>24/7 Support Desk</span>}
          </Link>
        </nav>

        {/* Sidebar Footer User Card */}
        <div className="dash-sidebar-footer">
          <div className="dash-user-chip">
            <div className="dash-user-avatar">
              {user?.avatar || 'AU'}
            </div>
            {!sidebarCollapsed && (
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  {user?.name || 'Authorized User'}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--dash-text-muted)' }}>
                  {user?.role || 'Admin'}
                </div>
              </div>
            )}
          </div>
          {!sidebarCollapsed && (
            <button
              type="button"
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                color: '#ef4444',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '4px'
              }}
              title="Sign Out"
            >
              Sign Out
            </button>
          )}
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="dash-main-content">
        {/* Top Header Bar */}
        <header className="dash-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--dash-text-main)',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'block'
              }}
              aria-label="Open mobile menu"
            >
              ☰
            </button>

            {/* Quick Search */}
            <div className="dash-search-box">
              <span>🔍</span>
              <input type="text" placeholder="Search workflows, logs, or ledgers..." />
              <span className="dash-kbd">⌘K</span>
            </div>
          </div>

          <div className="dash-topbar-actions">
            {/* Live Operational Status Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.74rem',
                color: '#10b981',
                fontWeight: 600
              }}
            >
              <span className="saas-dot-pulse" />
              <span>All Systems Operational</span>
            </div>

            {/* Notifications Popover Toggle */}
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowNotifications(!showNotifications)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--dash-card-border)',
                  color: 'var(--dash-text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                aria-label="Notifications"
              >
                🔔
                <span
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#0088ff'
                  }}
                />
              </button>

              {showNotifications && (
                <div
                  style={{
                    position: 'absolute',
                    top: '48px',
                    right: 0,
                    width: '300px',
                    background: 'var(--dash-card-bg)',
                    border: '1px solid var(--dash-card-border)',
                    borderRadius: '12px',
                    boxShadow: 'var(--saas-shadow-lg)',
                    padding: '12px',
                    zIndex: 200
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px', paddingBottom: '6px', borderBottom: '1px solid var(--dash-card-border)' }}>
                    Recent Notifications
                  </div>
                  {notifications.map(n => (
                    <div key={n.id} style={{ padding: '8px', borderRadius: '6px', background: n.unread ? 'rgba(0, 136, 255, 0.08)' : 'transparent', marginBottom: '4px' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{n.title}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--dash-text-muted)' }}>{n.time}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Dropdown Toggle */}
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowUserMenu(!showUserMenu)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--dash-text-main)'
                }}
              >
                <div className="dash-user-avatar" style={{ width: '32px', height: '32px', fontSize: '0.78rem' }}>
                  {user?.avatar || 'AU'}
                </div>
              </button>

              {showUserMenu && (
                <div
                  style={{
                    position: 'absolute',
                    top: '48px',
                    right: 0,
                    width: '200px',
                    background: 'var(--dash-card-bg)',
                    border: '1px solid var(--dash-card-border)',
                    borderRadius: '12px',
                    boxShadow: 'var(--saas-shadow-lg)',
                    padding: '8px',
                    zIndex: 200
                  }}
                >
                  <div style={{ padding: '8px', borderBottom: '1px solid var(--dash-card-border)', marginBottom: '4px' }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>{user?.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--dash-text-muted)' }}>{user?.email}</div>
                  </div>
                  <Link
                    to="/dashboard/settings"
                    onClick={() => setShowUserMenu(false)}
                    style={{ display: 'block', padding: '8px', fontSize: '0.82rem', color: 'var(--dash-text-main)', textDecoration: 'none', borderRadius: '6px' }}
                  >
                    ⚙️ Account Settings
                  </Link>
                  <Link
                    to="/dashboard/billing"
                    onClick={() => setShowUserMenu(false)}
                    style={{ display: 'block', padding: '8px', fontSize: '0.82rem', color: 'var(--dash-text-main)', textDecoration: 'none', borderRadius: '6px' }}
                  >
                    💳 Billing &amp; Invoices
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '8px',
                      fontSize: '0.82rem',
                      color: '#ef4444',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    🚪 Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Page Content */}
        <main className="dash-viewport">
          {children}
        </main>
      </div>
    </div>
  );
};
