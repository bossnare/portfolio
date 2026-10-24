import { expertiseLevel, skills } from '@/src/data/skills';

export function SkillsExpertise() {
  return (
    <section className="flex flex-col items-start justify-center w-full min-h-screen gap-10 md:gap-10 md:items-center">
      <div className="space-y-5 md:text-center">
        <h3 className="max-w-md text-3xl">Skills & Expertise</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Texhnologies and tools I use to build modern, scalable and beautiful
          digital experiences.
        </p>
      </div>
      <div className="grid w-full gap-3 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col gap-4 p-4 border rounded-lg bg-card/80 border-border"
          >
            <div className="flex items-center gap-3">
              <span className="p-1.5 border rounded-md bg-background border-border">
                <skill.icon />
              </span>
              <span className="font-medium font-display">{skill.name}</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skill.skillItems.map((item) => (
                <li
                  key={item}
                  className="p-1 px-4 text-sm border rounded-sm text-foreground/80 border-border bg-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4 p-4 border rounded-lg md:col-span-2 bg-card/80 border-border">
          <span className="font-medium font-display">Expertise Level</span>
          <div className="grid items-center w-full gap-3 md:gap-6 md:grid-cols-2">
            {expertiseLevel.map((level) => (
              <div key={level.name} className="flex items-center gap-4">
                <span className="min-w-18">{level.name}</span>
                <div className="relative h-2 overflow-hidden rounded-full grow bg-muted">
                  <span
                    className="absolute inset-y-0 top-0 left-0 rounded-full bg-primary"
                    style={{ width: `${level.percent}%` }}
                  />
                </div>
                <span className="min-w-10 text-muted-foreground">
                  {level.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
