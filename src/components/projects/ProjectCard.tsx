import type { projects } from '@/src/data/projects';
import { ArrowUpRight } from 'lucide-react';

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-4 p-4 border rounded-md shadow-xs border-zinc-200 dark:border-white/8 bg-background dark:bg-background/80">
      <span
        style={{ background: `${project.color}1a` }}
        className="shrink-0 self-start p-2 rounded-lg"
      >
        <project.icon style={{ color: project.color }} />
      </span>
      <div className="flex flex-col gap-1 grow">
        <span className="font-medium capitalize">{project.type}</span>
        <span className="text-muted-foreground">
          {project.description} {project.name}
        </span>
        <a
          href="#"
          className="flex items-center self-start gap-1 py-2 mt-auto hover:underline text-muted-foreground hover:text-primary"
        >
          <span>View project</span>
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
