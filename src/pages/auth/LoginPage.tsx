import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, quickDemoLogin } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please fill in both email and password.', 'error');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      showToast('Welcome back! Signed in successfully.', 'success');
      navigate('/dashboard');
    } catch {
      showToast('Failed to sign in. Please verify your credentials.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoSignIn = () => {
    quickDemoLogin();
    showToast('Signed in with Demo Administrator credentials.', 'success');
    navigate('/dashboard');
  };

  return (
    <div
      style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        background: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(ellipse at center, rgba(0, 136, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          maxWidth: '460px',
          width: '100%',
          background: 'var(--dash-card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: 'var(--saas-shadow-lg)',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
            <img src="/logo.png" alt="iKOREX" style={{ height: '32px' }} />
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              iKOREX
            </span>
          </Link>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 8px 0' }}>
            Sign In to Your Workspace
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
            Enter your credentials to manage active automation pipelines.
          </p>
        </div>

        {/* 1-Click Demo Bypass Pill */}
        <div
          style={{
            background: 'rgba(0, 136, 255, 0.08)',
            border: '1px solid rgba(0, 136, 255, 0.25)',
            borderRadius: '12px',
            padding: '12px 16px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '0.8rem', color: 'var(--text-main)' }}>
            <strong>Demo Evaluator Access</strong>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Skip credentials &amp; inspect dashboard</div>
          </div>
          <button
            type="button"
            onClick={handleDemoSignIn}
            className="btn btn-primary btn-sm"
            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
          >
            ⚡ 1-Click Demo
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              Corporate Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="name@enterprise.com.au"
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                background: 'var(--dash-input-bg)',
                border: '1px solid var(--dash-input-border)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)' }}>
                Password
              </label>
              <Link to="/forgot-password" style={{ fontSize: '0.78rem', color: 'var(--saas-primary)', textDecoration: 'none' }}>
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                background: 'var(--dash-input-bg)',
                border: '1px solid var(--dash-input-border)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              fontWeight: 700,
              justifyContent: 'center',
              marginBottom: '20px'
            }}
          >
            {isLoading ? 'Signing In...' : 'Sign In to Workspace →'}
          </button>
        </form>

        <div style={{ textAlign: 'center', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
          Don't have an enterprise account?{' '}
          <Link to="/signup" style={{ color: 'var(--saas-primary)', fontWeight: 600, textDecoration: 'none' }}>
            Create one free
          </Link>
        </div>
      </div>
    </div>
  );
};
