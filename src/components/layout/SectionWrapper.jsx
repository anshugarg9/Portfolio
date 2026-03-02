import { motion } from "framer-motion";

export default function SectionWrapper({ id, children }) {
  return (
    <motion.section
      id={id}
      className="mx-auto max-w-5xl px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
