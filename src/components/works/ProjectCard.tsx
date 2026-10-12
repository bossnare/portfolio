import type { Work } from '@/src/data/works';
import { MoveRight } from 'lucide-react';

type WorkCardProps = {
  work: Work;
};

export function ProjectCard({ work }: WorkCardProps) {
  const Icon = work.icon;

  return (
    <div className="flex flex-col h-full gap-8 p-8 border rounded-md shadow-xs border-border/60 bg-background dark:bg-background">
      <div className="flex gap-5">
        <span
          style={{ background: `${work.color}1a` }}
          className="self-start p-3 rounded-full shrink-0"
        >
          <Icon />
        </span>
        <div className="flex flex-col gap-3 grow">
          <span style={{ color: work.color }} className="text-sm">
            {work.type}
          </span>
          <span className="text-2xl capitalize font-display">{work.name}</span>
          <span style={{ borderColor: work.color }} className="w-6 border-t" />
          <span className="text-muted-foreground font-medium text-[15px] leading-7">
            {work.description} {work.name}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto text-muted-foreground">
        <span className="text-sm">View work</span>
        <a
          href="#"
          className="flex items-center self-start gap-3 hover:text-foreground active:text-foreground hover:bg-black/4 p-4 rounded-full dark:hover:bg-[#1a1a1a]"
        >
          <MoveRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
