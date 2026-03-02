import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { AdditiveBlending, Color, Vector3 } from "three";
import useMediaQuery from "../../hooks/useMediaQuery.js";

const colors = ["#6366F1", "#22D3EE", "#A855F7", "#FFFFFF"];

export default function ParticleField({ scrollProgress = 0 }) {
  const pointsRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const count = isMobile ? 800 : 2000;
  const { viewport } = useThree();

  const { basePositions, positions, colorArray, phases } = useMemo(() => {
    const base = new Float32Array(count * 3);
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const ph = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const radius = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      ph[i] = Math.random() * Math.PI * 2;

      const rand = Math.random();
      const colorIndex =
        rand < 0.4 ? 0 : rand < 0.65 ? 1 : rand < 0.85 ? 2 : 3;
      const color = new Color(colors[colorIndex]);
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }

    return { basePositions: base, positions: pos, colorArray: cols, phases: ph };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const cursor = new Vector3(
      state.mouse.x * (viewport.width / 2),
      state.mouse.y * (viewport.height / 2),
      0
    );

    for (let i = 0; i < count; i += 1) {
      const idx = i * 3;
      const drift = Math.sin(time * 0.6 + phases[i]) * 0.08;
      let x = basePositions[idx] + drift;
      let y = basePositions[idx + 1] + drift * 0.6;
      let z = basePositions[idx + 2] + drift * 0.8;

      const dx = x - cursor.x;
      const dy = y - cursor.y;
      const dz = z - cursor.z;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distance < 2.2) {
        const force = (2.2 - distance) * 0.15;
        x += (dx / (distance || 1)) * force;
        y += (dy / (distance || 1)) * force;
        z += (dz / (distance || 1)) * force;
      }

      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
      pointsRef.current.rotation.z = scrollProgress * 0.4;
      pointsRef.current.scale.setScalar(1 + scrollProgress * 0.4);
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      colors={colorArray}
      stride={3}
    >
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </Points>
  );
}
