import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [melbourneTime, setMelbourneTime] = useState<string>('--:-- AEST');
  const location = useLocation();

  // Melbourne live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const timeFmt = new Intl.DateTimeFormat('en-AU', {
          timeZone: 'Australia/Melbourne',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setMelbourneTime(`${timeFmt.format(now)} AEST`);
      } catch {
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const melb = new Date(utc + 3600000 * 10);
        const pad = (n: number) => String(n).padStart(2, '0');
        setMelbourneTime(`${pad(melb.getHours())}:${pad(melb.getMinutes())}:${pad(melb.getSeconds())} AEST`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Glass blur state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled is-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" aria-label="iKOREX Home">
          <img className="logo-img" src="/logo.png" alt="iKOREX Logo" />
        </Link>

        <nav
          className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}
          id="primaryNav"
          aria-label="Primary"
        >
          <NavLink
            to="/features"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Solutions
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Resources
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>

          <div className="mobile-cta">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="btn btn-primary btn-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Go to Dashboard &rarr;
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline btn-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-primary btn-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="nav-cta">
          <div
            className="live-clock-badge"
            id="navMelbourneBadge"
            title="Live Melbourne HQ local time & system status"
          >
            <span className="live-pulse-dot"></span>
            <span className="clock-label">Melbourne:</span>
            <span className="clock-time melbourne-live-clock">{melbourneTime}</span>
          </div>

          <button
            className="theme-toggle-btn"
            id="themeToggleBtn"
            aria-label="Toggle theme"
            type="button"
            onClick={toggleTheme}
          >
            <svg
              className="sun-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              className="moon-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          {isAuthenticated ? (
            <Link to="/dashboard" className="btn-get-started">
              Dashboard &rarr;
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn-sign-in">
                Sign In
              </Link>
              <Link to="/signup" className="btn-get-started">
                Get Started Free
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <button
          className="mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="primaryNav"
          id="mobileMenuBtn"
          type="button"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};
