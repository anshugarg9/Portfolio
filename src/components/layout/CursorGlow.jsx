import useCursorGlow from "../../hooks/useCursorGlow.js";
import useMediaQuery from "../../hooks/useMediaQuery.js";

export default function CursorGlow() {
  const isTouch = useMediaQuery("(pointer: coarse)");
  const position = useCursorGlow();

  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-40 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_65%)] blur-2xl"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
}
