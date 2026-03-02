import { motion } from "framer-motion";

const badges = [
  "Microservices Architecture",
  "Event-Driven Systems",
  "Cloud Deployments",
  "Product-minded Engineering",
  "Performance Tuning",
  "Team Collaboration"
];

export default function SkillsBadges() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {badges.map((badge, index) => (
        <motion.span
          key={badge}
          className="rounded-full border border-border/70 px-4 py-2 text-xs text-foreground-muted"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          {badge}
        </motion.span>
      ))}
    </div>
  );
}
