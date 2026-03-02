import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField.jsx";

export default function HeroCanvas({ scrollProgress }) {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <ParticleField scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
