import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email address.', 'error');
      return;
    }
    setSubmitted(true);
    showToast(`Password recovery link dispatched to ${email}.`, 'info');
  };

  return (
    <div
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        background: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
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
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
            <img src="/logo.png" alt="iKOREX" style={{ height: '32px' }} />
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              iKOREX
            </span>
          </Link>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 8px 0' }}>
            Password Recovery
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
            Enter your corporate email address to receive a secure password reset link.
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '14px' }}>✉️</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              Reset Link Sent
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              If an enterprise account exists for <strong>{email}</strong>, you will receive instructions shortly to reset your password.
            </p>
            <Link to="/login" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
              Return to Sign In &rarr;
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
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

            <button
              type="submit"
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
              Send Reset Link &rarr;
            </button>

            <div style={{ textAlign: 'center', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Remembered your password?{' '}
              <Link to="/login" style={{ color: 'var(--saas-primary)', fontWeight: 600, textDecoration: 'none' }}>
                Sign in
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
