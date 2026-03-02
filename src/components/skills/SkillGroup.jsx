import SkillTile from "./SkillTile.jsx";

export default function SkillGroup({ group }) {
  return (
    <div className="glass-card rounded-3xl p-6">
      <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground-muted">
        {group.group}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {group.items.map((skill) => (
          <SkillTile key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
