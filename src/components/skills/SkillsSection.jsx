import SectionHeading from "../ui/SectionHeading.jsx";
import SkillGroup from "./SkillGroup.jsx";
import { skills } from "../../data/skills.js";

export default function SkillsSection() {
  return (
    <div>
      <SectionHeading
        title="Skills"
        subtitle="Technologies I use to ship scalable, reliable products."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <SkillGroup key={group.group} group={group} />
        ))}
      </div>
    </div>
  );
}
