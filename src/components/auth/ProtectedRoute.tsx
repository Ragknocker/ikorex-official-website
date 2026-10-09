import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, quickDemoLogin } = useAuth();

  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          background: 'var(--bg-primary, #06080c)',
          color: 'var(--text-main, #fff)'
        }}
      >
        <div
          style={{
            maxWidth: '480px',
            width: '100%',
            background: 'var(--dash-card-bg, rgba(16, 22, 34, 0.8))',
            border: '1px solid var(--dash-card-border, rgba(255, 255, 255, 0.1))',
            borderRadius: '20px',
            padding: '36px',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(0, 136, 255, 0.12)',
              border: '1px solid rgba(0, 136, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '28px'
            }}
          >
            🔒
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '10px' }}>
            Protected Application Area
          </h2>
          <p style={{ color: 'var(--text-muted, #94a3b8)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '28px' }}>
            This section represents the live authenticated iKOREX SaaS workspace. Please sign in with your credentials or explore immediately using demo access.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
              onClick={quickDemoLogin}
            >
              ⚡ Instant 1-Click Demo Login
            </button>
            <Link
              to="/login"
              className="btn btn-outline"
              style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
            >
              Sign In to Your Account &rarr;
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
