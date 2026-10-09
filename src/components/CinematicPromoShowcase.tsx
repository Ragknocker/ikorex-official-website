import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SceneData {
  id: number;
  timeRange: string;
  name: string;
  headline: string;
  subtext?: string;
  description: string;
  camera: string;
  lighting: string;
  audioCue: string;
}

const SCENES: SceneData[] = [
  {
    id: 1,
    timeRange: '00:00 – 00:04',
    name: 'Cinematic Logo Reveal',
    headline: 'INNOVATION STARTS HERE',
    subtext: 'ENTERPRISE PROCESS AUTOMATION',
    description: 'Electric-blue light streaks streak across a deep navy void. Precision metallic 3D elements rotate and assemble into the company logo with specular highlights and volumetric light.',
    camera: 'Controlled push-in with subtle 15° rotational roll',
    lighting: 'Deep Navy background (#0A3D91) with Electric Blue key light (#00A8FF)',
    audioCue: 'Atmospheric low sub-bass drone building into crisp electronic riser & metallic impact'
  },
  {
    id: 2,
    timeRange: '00:04 – 00:08',
    name: 'Global Presence',
    headline: 'A WORLD OF POSSIBILITIES',
    subtext: 'CONNECTED OPERATIONAL INTELLIGENCE',
    description: 'Rotating digital globe surrounded by glowing network connection lines, moving data packet coordinates, and subtle floating cyan particle dust.',
    camera: 'Smooth orbiting dolly from South Pacific to global meridian',
    lighting: 'Atmospheric back-glow with volumetric light shafts from planetary limb',
    audioCue: 'High-frequency telemetry pulses and spatial stereo whoosh transitions'
  },
  {
    id: 3,
    timeRange: '00:08 – 00:12',
    name: 'People and Innovation',
    headline: 'BUILT ON TRUST. DRIVEN BY INNOVATION.',
    subtext: 'CHARTERED ACCOUNTANTS & SYSTEM ARCHITECTS',
    description: 'Cinematic architectural glass structures and enterprise environments with realistic corporate depth-of-field layers and elegant typography tracking.',
    camera: 'Slow lateral tracking shot with natural depth parallax',
    lighting: 'Soft directional daylight diffused through corporate architectural glass',
    audioCue: 'Uplifting harmonic chord progression with rhythmic piano pulses'
  },
  {
    id: 4,
    timeRange: '00:12 – 00:16',
    name: 'Smart Solutions',
    headline: 'SMART SOLUTIONS. REAL RESULTS.',
    subtext: 'AI-POWERED 3-WAY MATCH & WORKFLOW AUTOMATION',
    description: '3D geometric technological structure elevated on a futuristic pedestal. Service metrics appear along dynamic animated laser traces with specular light sweeps.',
    camera: 'Rising low-angle pedestal move with focus shift to core',
    lighting: 'Precision rim lighting (#B0BEC4 Silver) with electric-blue laser accents',
    audioCue: 'Mechanical servo clicks, energetic rhythm cadence, and digital pulse sweeps'
  },
  {
    id: 5,
    timeRange: '00:16 – 00:20',
    name: 'Growth and Impact',
    headline: 'BUILDING A BRIGHTER TOMORROW',
    subtext: 'QUALITY • PERFORMANCE • RELIABILITY',
    description: 'Sweeping city skyline during golden hour with modern glass skyscrapers. Natural warm sunlight blends seamlessly with corporate electric-blue energy vectors.',
    camera: 'High-altitude panoramic crane sweep emphasizing scale and forward momentum',
    lighting: 'Golden-hour warm sunlight (5400K) blended with corporate blue atmospheric haze',
    audioCue: 'Full orchestral swell combined with modern electronic pulse crescendo'
  },
  {
    id: 6,
    timeRange: '00:20 – 00:24',
    name: 'Final Brand End Card',
    headline: 'iKOREX',
    subtext: 'Your Vision. Our Commitment.',
    description: 'Minimalist dark navy environment. Central metallic-blue logo glow resolves with full company branding, website URL, and confident call to action.',
    camera: 'Slow cinematic lock-off with soft breathing focal pull',
    lighting: 'Specular edge glow on metallic silver emblem with deep navy vignette',
    audioCue: 'Decisive resonant brand audio mnemonic with smooth orchestral reverb decay'
  }
];

export const CinematicPromoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // 0 to 24 seconds
  const [activeTab, setActiveTab] = useState<'theater' | 'storyboard' | 'after-effects'>('theater');
  const [soundEnabled, setSoundEnabled] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Determine current active scene based on currentTime
  const currentSceneIndex = Math.min(5, Math.floor(currentTime / 4));
  const currentScene = SCENES[currentSceneIndex];

  // Playback timer loop
  useEffect(() => {
    let lastTime = performance.now();
    const update = (now: number) => {
      if (isPlaying) {
        const delta = (now - lastTime) / 1000;
        setCurrentTime(prev => {
          const next = prev + delta;
          if (next >= 24) {
            setIsPlaying(false);
            return 24;
          }
          return next;
        });
      }
      lastTime = now;
      animFrameRef.current = requestAnimationFrame(update);
    };

    animFrameRef.current = requestAnimationFrame(update);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  // Audio tone generator for cinematic sound simulation
  const playCinematicBeep = (freq: number, duration: number) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy
    }
  };

  // Trigger audio on scene transitions
  useEffect(() => {
    if (isPlaying) {
      playCinematicBeep(180 + currentSceneIndex * 60, 0.4);
    }
  }, [currentSceneIndex, isPlaying]);

  // Render 2D Canvas Visual simulation for the active scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const t = currentTime; // 0 to 24
    const sceneLocalT = (t % 4); // 0 to 4 inside current scene

    // Background Gradient: Dark Navy to Black
    const grad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.7);
    grad.addColorStop(0, '#0a234e');
    grad.addColorStop(0.5, '#061329');
    grad.addColorStop(1, '#020610');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle Particle Starfield
    ctx.fillStyle = 'rgba(0, 168, 255, 0.4)';
    for (let i = 0; i < 40; i++) {
      const px = (Math.sin(i * 99 + t * 0.2) * 0.5 + 0.5) * width;
      const py = (Math.cos(i * 33 + t * 0.15) * 0.5 + 0.5) * height;
      const pSize = (i % 3) + 1;
      ctx.beginPath();
      ctx.arc(px, py, pSize, 0, Math.PI * 2);
      ctx.fill();
    }

    // SCENE-SPECIFIC VISUAL SIMULATION
    if (currentSceneIndex === 0) {
      // Scene 1: Logo Reveal (0 - 4s)
      const progress = sceneLocalT / 4;
      // Converging light streaks
      ctx.strokeStyle = 'rgba(0, 168, 255, 0.6)';
      ctx.lineWidth = 2;
      for (let k = 0; k < 6; k++) {
        const angle = (k / 6) * Math.PI * 2 + progress * 2;
        const dist = 300 * (1 - Math.min(1, progress * 1.5));
        ctx.beginPath();
        ctx.moveTo(width / 2 + Math.cos(angle) * (dist + 80), height / 2 + Math.sin(angle) * (dist + 80));
        ctx.lineTo(width / 2 + Math.cos(angle) * dist, height / 2 + Math.sin(angle) * dist);
        ctx.stroke();
      }

      // Metallic Logo Center
      const scale = 0.8 + progress * 0.3;
      ctx.save();
      ctx.translate(width / 2, height / 2 - 20);
      ctx.scale(scale, scale);
      ctx.rotate((1 - Math.min(1, progress * 1.2)) * -0.4);

      // Chevron Path
      ctx.fillStyle = '#00a8ff';
      ctx.shadowColor = '#00a8ff';
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.moveTo(-60, -60);
      ctx.lineTo(70, 0);
      ctx.lineTo(-20, 0);
      ctx.lineTo(-60, -25);
      ctx.closePath();
      ctx.fill();

      // Lower chevron
      ctx.fillStyle = '#0a3d91';
      ctx.beginPath();
      ctx.moveTo(-60, 60);
      ctx.lineTo(70, 0);
      ctx.lineTo(-20, 0);
      ctx.lineTo(-60, 25);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

    } else if (currentSceneIndex === 1) {
      // Scene 2: Global Presence (4 - 8s)
      const rot = sceneLocalT * 0.5;
      ctx.save();
      ctx.translate(width / 2, height / 2 - 20);

      // Globe sphere boundary
      ctx.strokeStyle = 'rgba(0, 168, 255, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 120, 0, Math.PI * 2);
      ctx.stroke();

      // Latitude rings
      for (let lat = -2; lat <= 2; lat++) {
        const rY = Math.cos(lat * 0.4) * 120;
        ctx.beginPath();
        ctx.ellipse(0, lat * 35, rY, 20, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Rotating Longitude meridian
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.abs(Math.sin(rot)) * 120, 120, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 255, 200, 0.7)';
      ctx.stroke();

      // Melbourne HQ pulsing pin
      ctx.fillStyle = '#00ffc8';
      ctx.shadowColor = '#00ffc8';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(45, 50, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

    } else if (currentSceneIndex === 2) {
      // Scene 3: People and Innovation (8 - 12s)
      const slide = (sceneLocalT / 4) * 40;
      ctx.save();
      ctx.translate(width / 2, height / 2 - 20);

      // Floating 3D architectural glass plates
      ctx.fillStyle = 'rgba(10, 61, 145, 0.35)';
      ctx.strokeStyle = 'rgba(0, 168, 255, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.fillRect(-220 + slide, -80, 240, 160);
      ctx.strokeRect(-220 + slide, -80, 240, 160);

      ctx.fillStyle = 'rgba(0, 168, 255, 0.2)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fillRect(-20 - slide, -60, 260, 180);
      ctx.strokeRect(-20 - slide, -60, 260, 180);

      // Icon: Verified handshake/shield
      ctx.fillStyle = '#f5f7fa';
      ctx.font = 'bold 16px Inter, sans-serif';
      ctx.fillText('GOVERNANCE & TRUST', -180 + slide, 0);
      ctx.fillText('LEAN SIX SIGMA VERIFIED', 0 - slide, 20);
      ctx.restore();

    } else if (currentSceneIndex === 3) {
      // Scene 4: Smart Solutions (12 - 16s)
      const rot = sceneLocalT * 0.4;
      ctx.save();
      ctx.translate(width / 2, height / 2 - 20);

      // 3D Hexagonal Isometric Pedestal
      ctx.strokeStyle = 'rgba(176, 190, 196, 0.7)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let s = 0; s < 6; s++) {
        const rad = (s / 6) * Math.PI * 2 + rot;
        const hx = Math.cos(rad) * 90;
        const hy = Math.sin(rad) * 50;
        if (s === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();

      // Core Floating Orb
      ctx.fillStyle = '#00a8ff';
      ctx.shadowColor = '#00a8ff';
      ctx.shadowBlur = 35;
      ctx.beginPath();
      ctx.arc(0, -30 + Math.sin(t * 3) * 10, 32, 0, Math.PI * 2);
      ctx.fill();

      // Energy Traces
      ctx.strokeStyle = '#00ffc8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-160, 40);
      ctx.lineTo(-70, 40);
      ctx.lineTo(0, 0);
      ctx.lineTo(70, 40);
      ctx.lineTo(160, 40);
      ctx.stroke();
      ctx.restore();

    } else if (currentSceneIndex === 4) {
      // Scene 5: Growth and Impact (16 - 20s)
      const pan = (sceneLocalT / 4) * 60;
      ctx.save();

      // Warm Golden Horizon Gradient
      const sunGrad = ctx.createLinearGradient(0, height * 0.3, 0, height);
      sunGrad.addColorStop(0, 'rgba(255, 140, 40, 0.15)');
      sunGrad.addColorStop(0.5, 'rgba(0, 168, 255, 0.2)');
      sunGrad.addColorStop(1, 'rgba(10, 61, 145, 0.5)');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, width, height);

      // Stylized Enterprise Towers
      ctx.fillStyle = 'rgba(15, 25, 45, 0.85)';
      ctx.strokeStyle = 'rgba(0, 168, 255, 0.4)';
      ctx.lineWidth = 1;

      const towers = [
        { x: width * 0.2 - pan, w: 80, h: 220 },
        { x: width * 0.32 - pan, w: 100, h: 280 },
        { x: width * 0.48 - pan, w: 120, h: 320 },
        { x: width * 0.65 - pan, w: 90, h: 250 },
        { x: width * 0.78 - pan, w: 110, h: 200 }
      ];

      towers.forEach(tow => {
        ctx.fillRect(tow.x, height - tow.h, tow.w, tow.h);
        ctx.strokeRect(tow.x, height - tow.h, tow.w, tow.h);
      });

      // Growth trendline vector
      ctx.strokeStyle = '#00ffc8';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#00ffc8';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(width * 0.1, height * 0.75);
      ctx.lineTo(width * 0.45, height * 0.55);
      ctx.lineTo(width * 0.7, height * 0.4);
      ctx.lineTo(width * 0.9, height * 0.25);
      ctx.stroke();
      ctx.restore();

    } else if (currentSceneIndex === 5) {
      // Scene 6: Final End Card (20 - 24s)
      const fadeProgress = (sceneLocalT / 4);
      ctx.save();
      ctx.translate(width / 2, height / 2 - 40);

      // Central Hero Logo
      ctx.fillStyle = '#00a8ff';
      ctx.shadowColor = '#00a8ff';
      ctx.shadowBlur = 40;
      ctx.beginPath();
      ctx.moveTo(-50, -50);
      ctx.lineTo(60, 0);
      ctx.lineTo(-15, 0);
      ctx.lineTo(-50, -20);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#0a3d91';
      ctx.beginPath();
      ctx.moveTo(-50, 50);
      ctx.lineTo(60, 0);
      ctx.lineTo(-15, 0);
      ctx.lineTo(-50, 20);
      ctx.closePath();
      ctx.fill();

      // Brand Title
      ctx.fillStyle = '#f5f7fa';
      ctx.shadowBlur = 10;
      ctx.font = '900 48px Montserrat, Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('iKOREX', 0, 75);

      // Tagline
      ctx.fillStyle = '#00a8ff';
      ctx.font = '500 18px Montserrat, Inter, sans-serif';
      ctx.fillText('Your Vision. Our Commitment.', 0, 110);

      // CTA & Web
      ctx.fillStyle = '#b0bec4';
      ctx.font = '600 15px Montserrat, Inter, sans-serif';
      ctx.fillText('www.ikorex.com.au   •   CONTACT US TODAY', 0, 145);

      // Smooth Final Fade to Black on last 0.8s
      if (sceneLocalT > 3.2) {
        const blackAlpha = (sceneLocalT - 3.2) / 0.8;
        ctx.fillStyle = `rgba(0, 0, 0, ${blackAlpha})`;
        ctx.fillRect(-width, -height, width * 2, height * 2);
      }
      ctx.restore();
    }

    // Cinematic Anamorphic Letterbox Bars (Top & Bottom)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, 40);
    ctx.fillRect(0, height - 40, width, 40);

  }, [currentTime, currentSceneIndex]);

  const handleSeek = (newTime: number) => {
    setCurrentTime(Math.max(0, Math.min(24, newTime)));
  };

  const jumpToScene = (sceneIdx: number) => {
    setCurrentTime(sceneIdx * 4);
  };

  return (
    <section className="cinematic-promo-section" id="cinematic-template" style={{ position: 'relative', padding: '60px 0' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-head center">
          <div className="custom-badge">
            <span className="badge-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
                <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
              </svg>
            </span>
            <span className="badge-text">Broadcast Motion Graphics</span>
          </div>
          <h2 className="section-title">
            Cinematic 3D <span className="text-gradient">Corporate Promo Template</span>
          </h2>
          <p className="section-subtitle">
            A 24-second broadcast-ready commercial template engineered with volumetric lighting, 3D camera choreography, metallic reflections, and Adobe After Effects project architecture.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('theater')}
            className={`segmented-btn ${activeTab === 'theater' ? 'active' : ''}`}
          >
            🎬 24-Second Video Theater
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('storyboard')}
            className={`segmented-btn ${activeTab === 'storyboard' ? 'active' : ''}`}
          >
            📋 6-Scene Storyboard
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('after-effects')}
            className={`segmented-btn ${activeTab === 'after-effects' ? 'active' : ''}`}
          >
            ⚡ After Effects .AEP Architecture
          </button>
        </div>

        {/* TAB 1: CINEMATIC THEATER VIEWPORT */}
        {activeTab === 'theater' && (
          <div
            className="theater-container glass"
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 180, 255, 0.3)',
              background: 'radial-gradient(ellipse at 50% 20%, rgba(10, 25, 52, 0.9), rgba(3, 8, 18, 0.98))',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 168, 255, 0.2)'
            }}
          >
            {/* Viewport Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 20px',
                borderBottom: '1px solid rgba(0, 180, 255, 0.15)',
                background: 'rgba(0, 0, 0, 0.4)',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.74rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isPlaying ? '#22c55e' : '#eab308' }} />
                <span style={{ color: '#00d2ff', fontWeight: 700 }}>
                  SCENE {currentScene.id} / 6 &middot; {currentScene.name.toUpperCase()}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#94a3b8' }}>
                <span>1920 &times; 1080 @ 30 FPS</span>
                <span>REC.709 32-BPC</span>
                <button
                  type="button"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(0, 180, 255, 0.3)',
                    borderRadius: '6px',
                    color: soundEnabled ? '#00ffc8' : '#94a3b8',
                    padding: '3px 8px',
                    cursor: 'pointer',
                    fontSize: '0.7rem'
                  }}
                >
                  {soundEnabled ? '🔊 Audio ON' : '🔇 Audio Muted'}
                </button>
              </div>
            </div>

            {/* Canvas Video Monitor */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', maxHeight: '540px' }}>
              <canvas
                ref={canvasRef}
                width={960}
                height={540}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />

              {/* Floating Headline Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '50px',
                  left: '0',
                  right: '0',
                  textAlign: 'center',
                  pointerEvents: 'none',
                  padding: '0 20px'
                }}
              >
                <div
                  style={{
                    fontFamily: 'Montserrat, Inter, sans-serif',
                    fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '0.12em',
                    textShadow: '0 2px 14px rgba(0, 168, 255, 0.8)'
                  }}
                >
                  {currentScene.headline}
                </div>
                {currentScene.subtext && (
                  <div
                    style={{
                      fontFamily: 'Montserrat, Inter, sans-serif',
                      fontSize: 'clamp(0.7rem, 1.2vw, 0.95rem)',
                      fontWeight: 600,
                      color: '#00a8ff',
                      letterSpacing: '0.16em',
                      marginTop: '4px'
                    }}
                  >
                    {currentScene.subtext}
                  </div>
                )}
              </div>
            </div>

            {/* Video Controls & Timeline Scrubber */}
            <div
              style={{
                padding: '16px 20px',
                borderTop: '1px solid rgba(0, 180, 255, 0.15)',
                background: 'rgba(0, 0, 0, 0.45)'
              }}
            >
              {/* Scrubber Bar */}
              <div
                style={{
                  position: 'relative',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '999px',
                  marginBottom: '14px',
                  cursor: 'pointer'
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = (e.clientX - rect.left) / rect.width;
                  handleSeek(pct * 24);
                }}
              >
                {/* Active Progress fill */}
                <div
                  style={{
                    width: `${(currentTime / 24) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #0055cc, #00a8ff, #00ffc8)',
                    borderRadius: '999px',
                    boxShadow: '0 0 10px #00a8ff'
                  }}
                />

                {/* 6 Scene Transition Markers */}
                {[0, 4, 8, 12, 16, 20].map((markerTime, idx) => (
                  <div
                    key={markerTime}
                    style={{
                      position: 'absolute',
                      left: `${(markerTime / 24) * 100}%`,
                      top: '-4px',
                      bottom: '-4px',
                      width: '2px',
                      background: idx === currentSceneIndex ? '#00ffc8' : 'rgba(255, 255, 255, 0.3)',
                      zIndex: 2
                    }}
                    title={`Scene ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Action Buttons & Timecode */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      if (currentTime >= 24) setCurrentTime(0);
                      setIsPlaying(!isPlaying);
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #00a8ff, #0a3d91)',
                      border: '1px solid rgba(0, 210, 255, 0.5)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      padding: '8px 16px',
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 0 12px rgba(0, 168, 255, 0.3)'
                    }}
                  >
                    {isPlaying ? '⏸ PAUSE' : currentTime >= 24 ? '🔄 REPLAY' : '▶ PLAY'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSeek(0)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#94a3b8',
                      padding: '8px 12px',
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    ⏮ Restart
                  </button>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.85rem',
                      color: '#00d2ff',
                      fontWeight: 700,
                      marginLeft: '6px'
                    }}
                  >
                    {currentTime.toFixed(1)}s / 24.0s
                  </span>
                </div>

                {/* Scene Jump Pills */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {SCENES.map((sc, idx) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => jumpToScene(idx)}
                      style={{
                        background: idx === currentSceneIndex ? 'rgba(0, 168, 255, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                        border: idx === currentSceneIndex ? '1px solid #00a8ff' : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        color: idx === currentSceneIndex ? '#00d2ff' : '#94a3b8',
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '0.68rem',
                        padding: '4px 8px',
                        cursor: 'pointer'
                      }}
                    >
                      Sc {sc.id} ({sc.timeRange.split(' ')[0]})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 6-SCENE STORYBOARD CARDS */}
        {activeTab === 'storyboard' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px'
            }}
          >
            {SCENES.map(sc => (
              <div
                key={sc.id}
                className="glass"
                style={{
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(0, 180, 255, 0.2)',
                  background: 'rgba(10, 20, 40, 0.75)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#00ffc8',
                      background: 'rgba(0, 255, 200, 0.1)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      border: '1px solid rgba(0, 255, 200, 0.25)'
                    }}
                  >
                    SCENE 0{sc.id} &middot; {sc.timeRange}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono, monospace)' }}>
                    4.0 SECONDS
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
                  {sc.name}
                </h3>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#00a8ff', marginBottom: '10px' }}>
                  Headline: &ldquo;{sc.headline}&rdquo;
                </div>

                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '14px' }}>
                  {sc.description}
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '10px', fontSize: '0.72rem', color: '#64748b' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <strong style={{ color: '#cbd5e1' }}>🎥 Camera:</strong> {sc.camera}
                  </div>
                  <div style={{ marginBottom: '4px' }}>
                    <strong style={{ color: '#cbd5e1' }}>💡 Lighting:</strong> {sc.lighting}
                  </div>
                  <div>
                    <strong style={{ color: '#cbd5e1' }}>🎵 Sound Design:</strong> {sc.audioCue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: ADOBE AFTER EFFECTS ARCHITECTURE & SCRIPT DOWNLOAD */}
        {activeTab === 'after-effects' && (
          <div
            className="glass"
            style={{
              borderRadius: '20px',
              padding: '28px',
              border: '1px solid rgba(0, 180, 255, 0.25)',
              background: 'rgba(8, 16, 32, 0.85)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
                  Adobe After Effects Modular Automation Project (.jsx)
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Executable ExtendScript builder that generates the entire 24-second modular composition hierarchy, camera rigs, and Essential Graphics controls.
                </p>
              </div>

              <a
                href="/templates/iKOREX_Cinematic_3D_Promo_Builder.jsx"
                download="iKOREX_Cinematic_3D_Promo_Builder.jsx"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>💾</span> Download AE ExtendScript Builder (.jsx)
              </a>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
                marginTop: '16px'
              }}
            >
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.35)',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.74rem'
                }}
              >
                <div style={{ color: '#00ffc8', fontWeight: 700, marginBottom: '8px' }}>
                  📁 PROJECT COMPOSITION HIERARCHY
                </div>
                <div style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                  ├── 00_RENDER_ME<br />
                  │ &nbsp; └── _MAIN_COMP_1080p_24s<br />
                  ├── 01_SCENES<br />
                  │ &nbsp; ├── Scene_01_LogoReveal<br />
                  │ &nbsp; ├── Scene_02_GlobalPresence<br />
                  │ &nbsp; ├── Scene_03_PeopleInnovation<br />
                  │ &nbsp; ├── Scene_04_SmartSolutions<br />
                  │ &nbsp; ├── Scene_05_GrowthImpact<br />
                  │ &nbsp; └── Scene_06_FinalEndCard<br />
                  ├── 02_CUSTOMIZE_HERE<br />
                  │ &nbsp; ├── EDIT_LOGO_HERE<br />
                  │ &nbsp; ├── EDIT_TITLES_HERE<br />
                  │ &nbsp; └── EDIT_COLORS_CONTROLS<br />
                  └── 03_ASSETS_AND_AUDIO
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.35)',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div style={{ color: '#00d2ff', fontWeight: 700, fontFamily: 'var(--font-mono, monospace)', fontSize: '0.74rem', marginBottom: '8px' }}>
                  ⚙️ QUICK SETUP IN ADOBE AFTER EFFECTS
                </div>
                <ol style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.7, paddingLeft: '18px' }}>
                  <li>Open <strong>Adobe After Effects CC 2020+</strong>.</li>
                  <li>Click <strong>File &gt; Scripts &gt; Run Script File...</strong></li>
                  <li>Select <code>iKOREX_Cinematic_3D_Promo_Builder.jsx</code>.</li>
                  <li>The script procedurally creates the entire composition tree, lights, 3D cameras, and keyframes in seconds.</li>
                  <li>Drop your custom logo into <code>EDIT_LOGO_HERE</code> and render via Adobe Media Encoder.</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
