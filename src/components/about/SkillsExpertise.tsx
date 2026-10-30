import { expertiseLevel, skills } from '@/src/data/skills';
import { Gauge } from 'lucide-react'

export function SkillsExpertise() {
  return (
    <section className="flex flex-col items-start justify-center w-full min-h-screen pb-10 md:pb-0 gap-10 md:gap-10 md:items-center">
      <div className="space-y-5 md:text-center">
        <h3 className="max-w-md text-3xl">Skills & Expertise</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Technologies and tools I use to build modern, scalable and beautiful
          digital experiences.
        </p>
      </div>
      <div className="grid w-full gap-3 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col gap-4 p-4 border rounded-lg bg-card border-border"
          >
            <div className="flex items-center gap-3">
              <span className="p-1.5 border rounded-md bg-background border-border">
                <skill.icon className="size-5" aria-hidden={true} />
              </span>
              <span className="font-medium font-display text-xl">{skill.name}</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skill.skillItems.map((item) => (
                <li
                  key={item}
                  className="p-1 px-4 text-sm border rounded text-foreground border-border bg-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4 p-4 border rounded-lg md:col-span-2 bg-card border-border">
          <div className="flex items-center gap-3">
              <span className="p-1.5 border rounded-md bg-background border-border">
                <Gauge className="size-5" aria-hidden={true} />
              </span>
              <span className="font-medium font-display text-xl">Expertise Level</span>
            </div>
          <div className="grid items-center w-full gap-3 md:gap-6 md:grid-cols-2">
            {expertiseLevel.map((level) => (
              <div key={level.name} className="flex items-center gap-4 text-sm">
                <span className="min-w-22">{level.name}</span>
                <div className="relative h-2 overflow-hidden grow bg-muted">
                  <span
                    className="absolute inset-y-0 top-0 left-0 bg-foreground"
                    style={{ width: `${level.percent}%` }}
                  />
                </div>
                <span className="min-w-10">
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
