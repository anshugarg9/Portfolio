import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      className="glass-card group flex h-full flex-col items-start gap-4 rounded-3xl p-6 text-left"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpen(project)}
      type="button"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <span className="text-lg font-semibold">{project.title[0]}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-foreground-muted">
          {project.description}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2 text-xs text-foreground-muted">
        {project.tech.map((item) => (
          <span key={item} className="rounded-full border border-border/70 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
      <span className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">
        View details
      </span>
    </motion.button>
  );
}
