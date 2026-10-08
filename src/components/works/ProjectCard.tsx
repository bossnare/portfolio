import type {Work} from '@/src/data/works'
import { MoveRight } from 'lucide-react';


type WorkCardProps = {
  work: Work;
};

export function ProjectCard({ work }: WorkCardProps) {
  return (
    <div
      style={{ borderColor: work.color }}
      className="flex gap-4 p-4 rounded-md shadow-xs border-l-3 bg-background dark:bg-background"
    >
      <span
        style={{ background: `${work.color}1a` }}
        className="shrink-0 self-start p-1.5 rounded-lg"
      >
        <work.icon style={{ color: work.color }} />
      </span>
      <div className="flex flex-col gap-1 grow">
        <span className="font-semibold capitalize font-display">
          {work.type}
        </span>
        <span className="text-muted-foreground font-medium text-[15px]">
          {work.description} {work.name}
        </span>
        <a
          href="#"
          className="flex items-center self-start gap-3 py-2 mt-auto text-sm hover:underline text-muted-foreground hover:text-primary"
        >
          <span>View work</span>
          <MoveRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
