import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      className="not-found-page section-container"
      style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="custom-badge" style={{ marginBottom: '20px' }}>
        <span className="badge-text">404 Error</span>
      </div>
      <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>
        Page Not Found
      </h1>
      <p className="section-subtitle" style={{ maxWidth: '540px', marginBottom: '32px' }}>
        The page you are looking for doesn't exist or may have been moved. Let's get you back on track.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
        <Link to="/contact" className="btn btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  );
};
