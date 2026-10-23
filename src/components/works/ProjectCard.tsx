'use client';

import {
  MoveRight,
  FolderKanban,
  GlobeCheck,
  Music,
  PersonStanding,
} from 'lucide-react';
import type { Work } from '@/src/data/works';
import { OpenExternalLink } from '../link';
import { useNavigation } from '@/src/hooks/use-navigation';
import Image from 'next/image';

const workIcons = {
  music: Music,
  'folder-kanban': FolderKanban,
  'globe-check': GlobeCheck,
  'person-standing': PersonStanding,
};

type WorkCardProps = {
  work: Work;
};

export function ProjectCard({ work }: WorkCardProps) {
  const Icon = workIcons[work.icon as keyof typeof workIcons];
  const { goTo } = useNavigation();

  return (
    <div
      tabIndex={0}
      onClick={() => goTo({ href: `/works/${work.id}` })}
      className="flex flex-col h-full p-8 transition-colors border rounded-lg shadow-xs cursor-pointer border-border/80 bg-card dark:bg-card/80 hover:border-border hover:bg-muted/60 active:border-border active:bg-muted"
    >
      <div className="flex flex-col gap-5">
        <div className="w-full h-40">
          <Image
            src={`/images/${work.cover}`}
            width={800}
            height={600}
            className="object-cover size-full rounded-sm"
            alt={work.cover}
          />
        </div>
        <div className="flex gap-5 pb-3 grow">
          <div className="flex flex-col gap-3 grow">
            {/* <span
              style={{ background: `${work.color}1a` }}
              className="self-start p-2 rounded-full shrink-0"
            >
              <Icon />
            </span> */}
            <span className="text-sm">{work.type}</span>

            <span className="line-clamp-3 text-[15px] leading-7 text-muted-foreground">
              {work.description}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 mt-auto text-muted-foreground">
        <span className="text-sm">View work</span>

        <OpenExternalLink
          onClick={(e) => e.stopPropagation()}
          href={work.link}
          className="self-start rounded-full p-4 hover:bg-foreground hover:text-background active:text-background active:bg-foreground"
        >
          <MoveRight className="size-4" />
        </OpenExternalLink>
      </div>
    </div>
  );
}
