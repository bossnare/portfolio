import type { Work } from '@/src/data/works';
import { MoveRight } from 'lucide-react';
import { OpenExternalLink } from '../link';

type WorkCardProps = {
  work: Work;
};

export function ProjectCard({ work }: WorkCardProps) {
  const Icon = work.icon;

  return (
    <div
      tabIndex={0}
      className="flex flex-col h-full p-8 transition-colors border rounded-lg shadow-xs cursor-pointer border-border/60 bg-background hover:border-border hover:bg-muted/40 active:border-border active:bg-muted"
    >
      <div className="flex gap-5 pb-8 content grow">
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

          <span className="line-clamp-3 text-[15px] leading-7 text-muted-foreground">
            {work.description}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 mt-auto text-muted-foreground">
        <span className="text-sm">View work</span>

        <OpenExternalLink
          href={work.link}
          className="self-start rounded-full p-4 hover:bg-black/4 hover:text-foreground active:text-foreground active:bg-muted dark:hover:bg-[#1a1a1a]"
        >
          <MoveRight className="size-4" />
        </OpenExternalLink>
      </div>
    </div>
  );
}
