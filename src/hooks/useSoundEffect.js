import { useCallback, useEffect, useMemo, useState } from "react";

export default function useSoundEffect() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("portfolio-muted");
    if (stored === "false") setMuted(false);
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((value) => !value);
  }, []);

  const play = useCallback(
    (audio) => {
      if (muted || !audio) return;
      audio.currentTime = 0;
      audio.play();
    },
    [muted]
  );

  const load = useMemo(() => {
    return (src) => (src ? new Audio(src) : null);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("portfolio-muted", String(muted));
  }, [muted]);

  return { muted, toggleMute, play, load };
}
