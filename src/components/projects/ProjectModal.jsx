import { useEffect } from "react";
import { motion } from "framer-motion";
import TechIcon from "./TechIcon.jsx";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card max-w-xl rounded-3xl p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-foreground-muted">
              {project.description}
            </p>
          </div>
          <button
            className="text-xs uppercase tracking-[0.3em] text-foreground-muted hover:text-foreground"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>
        <p className="mt-6 text-sm text-foreground-muted">{project.highlight}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-xs text-foreground-muted"
            >
              <TechIcon name={item} />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
