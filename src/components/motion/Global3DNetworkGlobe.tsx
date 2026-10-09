import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Global3DNetworkGlobeProps {
  className?: string;
  height?: number;
}

export const Global3DNetworkGlobe: React.FC<Global3DNetworkGlobeProps> = ({
  className = '',
  height = 420
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeCity, setActiveCity] = useState<string>('Melbourne (HQ)');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const h = height;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / h, 0.1, 1000);
    camera.position.set(0, 3, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the entire rotating globe
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Tilt Earth axis slightly
    globeGroup.rotation.x = 0.25;

    // 1. Globe Base Core Sphere
    const globeRadius = 4.5;
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 36, 36);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x07152b,
      transparent: true,
      opacity: 0.85
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphereMesh);

    // 2. Latitude / Longitude wireframe rings
    const wireGeo = new THREE.SphereGeometry(globeRadius + 0.05, 24, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0088ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // 3. Atmosphere Fresnel Glow Ring
    const atmosphereGeo = new THREE.SphereGeometry(globeRadius * 1.15, 32, 32);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.0, 0.8, 1.0, 1.0) * intensity * 0.45;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphere);

    // 4. Convert Lat/Long to 3D Cartesian coordinates
    const latLongToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    // 5. Hub Cities Definition
    const cities = [
      { name: 'Melbourne (HQ)', lat: -37.8136, lon: 144.9631, isHq: true },
      { name: 'Sydney', lat: -33.8688, lon: 151.2093, isHq: false },
      { name: 'Brisbane', lat: -27.4698, lon: 153.0251, isHq: false },
      { name: 'Perth', lat: -31.9505, lon: 115.8605, isHq: false },
      { name: 'Singapore', lat: 1.3521, lon: 103.8198, isHq: false },
      { name: 'London', lat: 51.5074, lon: -0.1278, isHq: false },
      { name: 'San Francisco', lat: 37.7749, lon: -122.4194, isHq: false }
    ];

    const hqPos = latLongToVector3(cities[0].lat, cities[0].lon, globeRadius + 0.1);

    // Pin markers
    const pinGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const hqPinMat = new THREE.MeshBasicMaterial({ color: 0x00ffc8 });
    const remotePinMat = new THREE.MeshBasicMaterial({ color: 0x00b4ff });

    cities.forEach(city => {
      const pos = latLongToVector3(city.lat, city.lon, globeRadius + 0.08);
      const pin = new THREE.Mesh(pinGeo, city.isHq ? hqPinMat : remotePinMat);
      pin.position.copy(pos);
      globeGroup.add(pin);
    });

    // 6. 3D Transmission Curved Arcs
    const arcs: { curve: THREE.QuadraticBezierCurve3; photon: THREE.Mesh; progress: number }[] = [];
    const photonGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0x00ffc8 });

    cities.slice(1).forEach((dest, idx) => {
      const destPos = latLongToVector3(dest.lat, dest.lon, globeRadius + 0.1);

      // Midpoint pulled outward from sphere center
      const mid = new THREE.Vector3().addVectors(hqPos, destPos).multiplyScalar(0.5);
      const distance = hqPos.distanceTo(destPos);
      mid.normalize().multiplyScalar(globeRadius + distance * 0.35);

      const curve = new THREE.QuadraticBezierCurve3(hqPos, mid, destPos);
      const points = curve.getPoints(50);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x00b4ff,
        transparent: true,
        opacity: 0.45
      });
      const arcLine = new THREE.Line(lineGeo, lineMat);
      globeGroup.add(arcLine);

      // Traveling photon
      const photon = new THREE.Mesh(photonGeo, photonMat);
      globeGroup.add(photon);
      arcs.push({ curve, photon, progress: (idx * 0.2) % 1 });
    });

    // 7. Surface Particle Landmass approximation
    const landCount = 350;
    const landGeo = new THREE.BufferGeometry();
    const landPositions = new Float32Array(landCount * 3);

    for (let i = 0; i < landCount; i++) {
      const lat = (Math.random() - 0.5) * 140;
      const lon = (Math.random() - 0.5) * 360;
      const v = latLongToVector3(lat, lon, globeRadius + 0.05);
      landPositions[i * 3] = v.x;
      landPositions[i * 3 + 1] = v.y;
      landPositions[i * 3 + 2] = v.z;
    }
    landGeo.setAttribute('position', new THREE.BufferAttribute(landPositions, 3));
    const landMat = new THREE.PointsMaterial({
      size: 0.09,
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.6
    });
    const landPoints = new THREE.Points(landGeo, landMat);
    globeGroup.add(landPoints);

    // Initial globe orientation showing Australia
    globeGroup.rotation.y = -Math.PI * 0.7;

    // Mouse drag interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x += deltaY * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 500;
      camera.aspect = newW / h;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Auto slow rotation if not dragging
      if (!isDragging) {
        globeGroup.rotation.y += 0.002;
      }

      // Move photons along arcs
      arcs.forEach(arc => {
        arc.progress = (arc.progress + 0.008) % 1;
        const pt = arc.curve.getPoint(arc.progress);
        arc.photon.position.copy(pt);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
      pinGeo.dispose();
      hqPinMat.dispose();
      remotePinMat.dispose();
      photonGeo.dispose();
      photonMat.dispose();
      landGeo.dispose();
      landMat.dispose();
      renderer.dispose();
    };
  }, [height]);

  return (
    <div
      className={`global-3d-network-card glass ${className}`}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(0, 180, 255, 0.25)',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(10, 22, 42, 0.8), rgba(4, 9, 18, 0.95))',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
        minHeight: `${height}px`,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Top HUD Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          borderBottom: '1px solid rgba(0, 180, 255, 0.12)',
          background: 'rgba(0, 0, 0, 0.25)',
          zIndex: 5
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
              fontSize: '0.76rem',
              fontWeight: 700,
              color: '#00d2ff',
              letterSpacing: '0.06em'
            }}
          >
            MELBOURNE HQ AUTOMATION HUB
          </span>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.7rem',
            color: '#94a3b8'
          }}
        >
          DRAG TO ROTATE 3D GLOBE
        </span>
      </div>

      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          width: '100%',
          height: `${height - 90}px`,
          position: 'relative',
          cursor: 'grab'
        }}
      />

      {/* Bottom Hub Details Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 18px',
          borderTop: '1px solid rgba(0, 180, 255, 0.1)',
          background: 'rgba(0, 0, 0, 0.3)',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.72rem',
          color: '#94a3b8',
          zIndex: 5
        }}
      >
        <span>HQ: 38.1001° S, 145.2819° E</span>
        <span style={{ color: '#00ffc8', fontWeight: 600 }}>6 Telemetry Links Active</span>
        <span>AEST (UTC+10)</span>
      </div>
    </div>
  );
};
