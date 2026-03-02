import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { projects } from "../../data/projects.js";

export default function ProjectsSection() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <SectionHeading
        title="Projects"
        subtitle="Selected work across Java microservices and core HTTP systems."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} onOpen={setActive} />
        ))}
      </div>
      <AnimatePresence>
        {active ? (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
