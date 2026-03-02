import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <motion.h2
        className="text-3xl font-semibold tracking-tight text-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-3 max-w-2xl text-sm text-foreground-muted"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-accent via-accent-cyan to-transparent" />
    </div>
  );
}
