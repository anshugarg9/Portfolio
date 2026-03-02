import { useEffect, useState } from "react";

export default function useScrollProgress(targetRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!targetRef?.current) return;

    const handleScroll = () => {
      const rect = targetRef.current.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      const current = window.innerHeight - rect.top;
      const value = Math.min(Math.max(current / total, 0), 1);
      setProgress(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [targetRef]);

  return progress;
}
