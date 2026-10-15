import type { Work } from '@/src/data/works';
import { MoveRight } from 'lucide-react';

type WorkCardProps = {
  work: Work;
};

export function ProjectCard({ work }: WorkCardProps) {
  const Icon = work.icon;

  return (
    <div
      tabIndex={0}
      className="flex h-full flex-col rounded-lg border border-border/60 bg-background p-8 shadow-xs transition-colors hover:border-border hover:bg-muted/40 active:border-border active:bg-muted cursor-pointer"
    >
      <div className="content flex grow gap-5 pb-8">
        <span
          style={{ background: `${work.color}1a` }}
          className="shrink-0 self-start rounded-full p-3"
        >
          <Icon />
        </span>

        <div className="flex grow flex-col gap-3">
          <span style={{ color: work.color }} className="text-sm">
            {work.type}
          </span>

          <span className="font-display text-2xl capitalize">{work.name}</span>

          <span style={{ borderColor: work.color }} className="w-6 border-t" />

          <span className="line-clamp-3 text-[15px] leading-7 text-muted-foreground">
            {work.description}
          </span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-2 text-muted-foreground">
        <span className="text-sm">View work</span>

        <a
          href="#"
          className="flex items-center self-start gap-3 rounded-full p-4 hover:bg-black/4 hover:text-foreground active:text-foreground dark:hover:bg-[#1a1a1a]"
        >
          <MoveRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
