import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signup, quickDemoLogin } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }
    if (!agreed) {
      showToast('Please accept the Terms of Service to continue.', 'error');
      return;
    }

    setIsLoading(true);
    try {
      await signup(name, email, password, company);
      showToast('Account created successfully! Welcome to iKOREX.', 'success');
      navigate('/dashboard');
    } catch {
      showToast('Error registering account. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '90vh',
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
          maxWidth: '480px',
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
            Start Your 14-Day Free Trial
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
            No credit card required &bull; Full access to the automation engine
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              Your Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Alex Vance"
              required
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '10px',
                background: 'var(--dash-input-bg)',
                border: '1px solid var(--dash-input-border)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              Work Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="alex@enterprise.com.au"
              required
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '10px',
                background: 'var(--dash-input-bg)',
                border: '1px solid var(--dash-input-border)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              Company / Organization Name
            </label>
            <input
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder="Vance Logistics Australia"
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '10px',
                background: 'var(--dash-input-bg)',
                border: '1px solid var(--dash-input-border)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              Create Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              required
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '10px',
                background: 'var(--dash-input-bg)',
                border: '1px solid var(--dash-input-border)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              style={{ marginTop: '3px' }}
            />
            <label htmlFor="agreeTerms" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              I agree to the <Link to="/privacy" style={{ color: 'var(--saas-primary)' }}>Terms of Service</Link> and Australian Data Sovereignty Policy.
            </label>
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
            {isLoading ? 'Creating Workspace...' : 'Create Free Account &rarr;'}
          </button>
        </form>

        <div style={{ textAlign: 'center', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
          Already registered?{' '}
          <Link to="/login" style={{ color: 'var(--saas-primary)', fontWeight: 600, textDecoration: 'none' }}>
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};
