import { motion } from "framer-motion";

export default function SkillTile({ skill }) {
  return (
    <motion.div
      className="rounded-2xl border border-border/70 bg-background-tertiary/60 p-4"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white">{skill.name}</span>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-4 rounded-full ${
                index < skill.level ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="mt-2 text-xs text-foreground-muted">
        Delivery level {skill.level} of 5
      </p>
    </motion.div>
  );
}
