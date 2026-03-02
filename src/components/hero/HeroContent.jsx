import { motion } from "framer-motion";
import AnimatedText from "../ui/AnimatedText.jsx";
import GlowButton from "../ui/GlowButton.jsx";

export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
      <motion.span
        className="font-mono text-xs uppercase tracking-[0.4em] text-foreground-muted"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cinematic Portfolio
      </motion.span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
        <AnimatedText text="Anshu Garg" />
      </h1>
      <motion.p
        className="mt-6 max-w-2xl text-lg text-foreground-muted"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Software Developer Engineer (Infosys • Apple Client Projects) | Java • Spring
        Boot • Microservices • Angular
      </motion.p>
      <motion.div
        className="mt-8 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <GlowButton href="#projects">View Projects</GlowButton>
        <GlowButton href="#contact" variant="outline">
          Contact Me
        </GlowButton>
      </motion.div>
    </div>
  );
}
