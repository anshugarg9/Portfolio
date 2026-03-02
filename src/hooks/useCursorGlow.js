import { useEffect, useRef, useState } from "react";

export default function useCursorGlow() {
  const frameRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      target.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.1,
        y: prev.y + (target.current.y - prev.y) * 0.1
      }));
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return position;
}
