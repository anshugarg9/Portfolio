import SectionHeading from "../ui/SectionHeading.jsx";
import PersonalStory from "./PersonalStory.jsx";
import SkillsBadges from "./SkillsBadges.jsx";

export default function AboutSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <SectionHeading
          title="About"
          subtitle="A snapshot of my work across Java microservices and Angular enterprise apps."
        />
        <PersonalStory />
      </div>
      <div className="glass-card rounded-3xl p-8">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground-muted">
          Core Strengths
        </h3>
        <SkillsBadges />
      </div>
    </div>
  );
}
