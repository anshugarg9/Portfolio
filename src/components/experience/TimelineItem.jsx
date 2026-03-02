import { motion } from "framer-motion";

export default function TimelineItem({ item, index }) {
  return (
    <motion.div
      className="glass-card rounded-3xl p-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{item.role}</h3>
          <p className="text-sm text-foreground-muted">{item.company}</p>
        </div>
        <span className="rounded-full border border-border/70 px-3 py-1 text-xs text-foreground-muted">
          {item.period}
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
        {item.impact.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}
