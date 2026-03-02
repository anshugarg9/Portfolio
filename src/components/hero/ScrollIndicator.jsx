import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="mt-10 flex justify-center"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="h-10 w-6 rounded-full border border-foreground/30">
        <span className="mx-auto mt-2 block h-2 w-2 rounded-full bg-foreground/70" />
      </div>
    </motion.div>
  );
}
