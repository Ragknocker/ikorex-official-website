import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [active, setActive] = useState(() => {
    try {
      return sessionStorage.getItem('ikx-intro-seen') !== '1';
    } catch {
      return false;
    }
  });
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!active) return;

    try {
      sessionStorage.setItem('ikx-intro-seen', '1');
    } catch {
      // ignore
    }

    const steps = [20, 45, 65, 85, 95, 100];
    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setProgress(steps[stepIndex]);
        stepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setActive(false);
          }, 600);
        }, 200);
      }
    }, 180);

    const fallbackTimeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setActive(false), 500);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div id="preloader" className={fadeOut ? 'fade-out' : ''}>
      <div className="preloader-grid"></div>
      <div className="preloader-orbit orbit-inner"></div>
      <div className="preloader-orbit orbit-outer"></div>
      <div className="loader-content">
        <div className="loader-logo-container">
          <img src="/logo_stacked.png" alt="iKOREX Logo" className="loader-logo-img" />
        </div>
        <div className="loader-progress-bar">
          <div
            className="loader-progress-line"
            style={{
              left: `${-100 + progress}%`,
              transition: 'left 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)'
            }}
          />
        </div>
        <div className="loader-subtitle">INTELLIGENT PROCESS AUTOMATION</div>
      </div>
    </div>
  );
};
