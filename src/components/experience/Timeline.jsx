import { useRef } from "react";
import { motion } from "framer-motion";
import { experience } from "../../data/experience.js";
import TimelineItem from "./TimelineItem.jsx";
import useScrollProgress from "../../hooks/useScrollProgress.js";

export default function Timeline() {
  const timelineRef = useRef(null);
  const progress = useScrollProgress(timelineRef);

  return (
    <div ref={timelineRef} className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-border/60" />
      <motion.div
        className="absolute left-4 top-0 h-full w-px origin-top bg-accent"
        style={{ scaleY: progress }}
      />
      <div className="ml-12 space-y-10">
        {experience.map((item, index) => (
          <TimelineItem
            key={`${item.role}-${item.company}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
