import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DAutomationNexusProps {
  className?: string;
  enableControls?: boolean;
}

export const Hero3DAutomationNexus: React.FC<Hero3DAutomationNexusProps> = ({
  className = '',
  enableControls = true
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMode, setActiveMode] = useState<'core' | 'rings' | 'grid'>('core');
  const [stats, setStats] = useState({
    fps: 60,
    opsSec: '14,820',
    accuracy: '99.98%',
    activeBots: 32
  });
  const [isHovered, setIsHovered] = useState(false);

  const burstRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 460;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060c18, 0.0025);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x0088ff, 0.8);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00d2ff, 3, 50);
    pointLightCyan.position.set(10, 10, 10);
    scene.add(pointLightCyan);

    const pointLightBlue = new THREE.PointLight(0x0055ff, 2.5, 50);
    pointLightBlue.position.set(-10, -10, 10);
    scene.add(pointLightBlue);

    const pointLightCore = new THREE.PointLight(0x00ffc8, 4, 25);
    pointLightCore.position.set(0, 0, 0);
    scene.add(pointLightCore);

    // 3. Central 3D Group
    const nexusGroup = new THREE.Group();
    scene.add(nexusGroup);

    // Core 3D Geometry: Glowing Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(3.2, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x002244,
      emissive: 0x0088cc,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.7,
      transparent: true,
      opacity: 0.85,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    nexusGroup.add(coreMesh);

    // Outer Wireframe Core
    const wireGeo = new THREE.IcosahedronGeometry(3.35, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    nexusGroup.add(wireMesh);

    // Internal Octahedron
    const innerGeo = new THREE.OctahedronGeometry(1.8, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00ffc8,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    nexusGroup.add(innerMesh);

    // 4. Concentric Orbital Rings
    const createRing = (radius: number, tube: number, color: number, tiltX: number, tiltY: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.75
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.y = tiltY;
      nexusGroup.add(ring);
      return ring;
    };

    const ring1 = createRing(4.8, 0.04, 0x00b4ff, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(5.6, 0.03, 0x00ffc8, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(6.4, 0.045, 0x0066ff, Math.PI / 6, -Math.PI / 3);

    // 5. Data Node Satellites (Orbiting Spheres)
    const nodeCount = 8;
    const satellites: THREE.Mesh[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00ffc8 });

    for (let i = 0; i < nodeCount; i++) {
      const sat = new THREE.Mesh(nodeGeo, nodeMat);
      satellites.push(sat);
      nexusGroup.add(sat);
    }

    // 6. Particle Cloud Matrix
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00d2ff);
    const color2 = new THREE.Color(0x00ffc8);
    const color3 = new THREE.Color(0x0066ff);

    for (let i = 0; i < particleCount; i++) {
      const r = 7 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Interactive Laser Shockwave Rings (Burst effect)
    const shockwaveGeo = new THREE.RingGeometry(0.1, 0.2, 64);
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0x00ffc8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0
    });
    const shockwave = new THREE.Mesh(shockwaveGeo, shockwaveMat);
    shockwave.rotation.x = Math.PI / 2;
    scene.add(shockwave);

    let shockwaveProgress = 1;
    burstRef.current = () => {
      shockwaveProgress = 0;
      pointLightCore.intensity = 10;
    };

    // 8. Mouse Interactive Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = nx * 1.2;
      mouse.targetY = ny * 1.2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 540;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 10. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 3.5;
      camera.position.y = mouse.y * 3.5;
      camera.lookAt(0, 0, 0);

      // Core rotation
      coreMesh.rotation.x = elapsed * 0.25;
      coreMesh.rotation.y = elapsed * 0.35;
      wireMesh.rotation.x = -elapsed * 0.2;
      wireMesh.rotation.y = -elapsed * 0.3;
      innerMesh.rotation.x = elapsed * 0.6;
      innerMesh.rotation.z = elapsed * 0.5;

      // Concentric orbital rings rotation
      ring1.rotation.z = elapsed * 0.45;
      ring2.rotation.z = -elapsed * 0.35;
      ring3.rotation.z = elapsed * 0.25;

      // Satellites orbiting along rings
      satellites.forEach((sat, idx) => {
        const offset = (idx / nodeCount) * Math.PI * 2;
        const radius = idx % 2 === 0 ? 4.8 : 5.6;
        const speed = idx % 2 === 0 ? 0.6 : -0.5;
        const angle = elapsed * speed + offset;
        sat.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.5,
          Math.sin(angle) * radius * 0.8
        );
      });

      // Background particle cloud gentle drifting
      particles.rotation.y = elapsed * 0.04;
      particles.rotation.x = Math.sin(elapsed * 0.05) * 0.1;

      // Burst Shockwave expansion
      if (shockwaveProgress < 1) {
        shockwaveProgress += 0.02;
        const scale = 0.5 + shockwaveProgress * 14;
        shockwave.scale.set(scale, scale, scale);
        shockwaveMat.opacity = Math.max(0, 1 - shockwaveProgress);
        pointLightCore.intensity = THREE.MathUtils.lerp(pointLightCore.intensity, 4, 0.08);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      shockwaveGeo.dispose();
      shockwaveMat.dispose();
      renderer.dispose();
    };
  }, []);

  const triggerBurst = () => {
    if (burstRef.current) {
      burstRef.current();
    }
    setStats(prev => ({
      ...prev,
      opsSec: (Math.floor(Math.random() * 4000) + 14000).toLocaleString(),
      activeBots: Math.min(48, prev.activeBots + 2)
    }));
  };

  return (
    <div
      className={`hero-3d-nexus-wrapper glass ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid rgba(0, 180, 255, 0.25)',
        background: 'radial-gradient(ellipse at 50% 30%, rgba(10, 25, 48, 0.75), rgba(4, 10, 20, 0.92))',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        minHeight: '480px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* SaaS Top Telemetry Header */}
      <div
        className="nexus-hud-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 22px',
          borderBottom: '1px solid rgba(0, 180, 255, 0.12)',
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(12px)',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00ffc8',
              boxShadow: '0 0 10px #00ffc8'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#00d2ff',
              letterSpacing: '0.08em'
            }}
          >
            3D AUTOMATION NEXUS
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted, #94a3b8)',
              fontFamily: 'var(--font-mono, monospace)',
              background: 'rgba(0, 180, 255, 0.08)',
              padding: '2px 8px',
              borderRadius: '999px',
              border: '1px solid rgba(0, 180, 255, 0.2)'
            }}
          >
            WEBGL 60FPS
          </span>
        </div>

        {/* Action burst button */}
        <button
          type="button"
          onClick={triggerBurst}
          className="nexus-burst-action-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: 'linear-gradient(135deg, rgba(0, 180, 255, 0.2), rgba(0, 102, 255, 0.35))',
            border: '1px solid rgba(0, 210, 255, 0.45)',
            borderRadius: '999px',
            color: '#00d2ff',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.74rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 0 14px rgba(0, 180, 255, 0.2)'
          }}
        >
          <span style={{ fontSize: '0.9rem' }}>⚡</span> Pulse Core
        </button>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          width: '100%',
          minHeight: '380px',
          position: 'relative',
          cursor: 'grab'
        }}
      />

      {/* Floating 3D Telemetry Badges */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '18px',
          right: '18px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '10px',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <div
          style={{
            background: 'rgba(10, 20, 35, 0.82)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 180, 255, 0.2)',
            borderRadius: '12px',
            padding: '8px 12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Throughput
          </div>
          <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem', fontWeight: 700, color: '#00ffc8' }}>
            {stats.opsSec} <span style={{ fontSize: '0.65rem', fontWeight: 400 }}>ops/m</span>
          </div>
        </div>

        <div
          style={{
            background: 'rgba(10, 20, 35, 0.82)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 180, 255, 0.2)',
            borderRadius: '12px',
            padding: '8px 12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Verification
          </div>
          <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem', fontWeight: 700, color: '#00d2ff' }}>
            {stats.accuracy}
          </div>
        </div>

        <div
          style={{
            background: 'rgba(10, 20, 35, 0.82)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 180, 255, 0.2)',
            borderRadius: '12px',
            padding: '8px 12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Active Bots
          </div>
          <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>
            {stats.activeBots} Nodes
          </div>
        </div>

        <div
          style={{
            background: 'rgba(10, 20, 35, 0.82)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 180, 255, 0.2)',
            borderRadius: '12px',
            padding: '8px 12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Status
          </div>
          <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem', fontWeight: 700, color: '#22c55e' }}>
            ● Nominal
          </div>
        </div>
      </div>
    </div>
  );
};
