import type { Work } from '@/src/data/works';
import { MoveRight } from 'lucide-react';

type WorkCardProps = {
  work: Work;
};

export function ProjectCard({ work }: WorkCardProps) {
  const Icon = work.icon;

  return (
    <div className="flex flex-col h-full p-8 border rounded-lg shadow-xs has-[.content:hover]:bg-muted/40! has-[.content:hover]:border-border! transition has-[&_.content:active]:bg-muted! border-border/60 bg-background">
      <div className="flex gap-5 pb-8 cursor-pointer grow content">
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
          <span className="text-sm font-medium leading-7 text-[15px] text-muted-foreground line-clamp-3">
            {work.description}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 mt-auto border-t border-border/60 text-muted-foreground">
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
