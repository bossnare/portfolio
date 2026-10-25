'use client';

import {
  MoveRight,
  FolderKanban,
  GlobeCheck,
  Music,
  PersonStanding,
} from 'lucide-react';
import type { Work } from '@/src/data/works';
import { OpenExternalLink, OpenLink } from '../link';
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

const linkButtonCn =
  'p-4 rounded-full hover:bg-foreground hover:text-background active:text-background active:bg-foreground';

export function ProjectCard({ work }: WorkCardProps) {
  const Icon = workIcons[work.icon as keyof typeof workIcons];
  const { goTo } = useNavigation();

  return (
    <div
      tabIndex={0}
      onClick={() => goTo({ href: `/works/${work.id}` })}
      className="flex flex-col h-full p-8 transition-colors border shadow-sm cursor-pointer rounded-3xl border-border/80 bg-card hover:border-border hover:bg-muted/50 active:border-border active:bg-muted-foreground/40"
    >
      <div className="flex flex-col gap-5">
        <div className="w-full h-40">
          <Image
            src={`/images/${work.cover}`}
            width={800}
            height={600}
            className="object-cover rounded-2xl invert dark:invert-0 size-full"
            alt={work.cover}
          />
        </div>
        <div className="flex gap-5 pb-3 grow">
          <div className="flex flex-col gap-3 grow">
            <div className="flex items-center gap-2">
              <span
                style={{ background: `${work.color}1a` }}
                className="self-start p-2 rounded-full shrink-0"
              >
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-semibold font-display">
                  {work.name}
                </span>
                <span className="text-xs">{work.type}</span>
              </div>
            </div>

            <span className="line-clamp-3 text-[15px] leading-7 text-muted-foreground">
              {work.description}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 mt-auto text-muted-foreground">
        <span className="text-sm">
          {work.personal ? 'View work' : 'View detail'}
        </span>

        {work.personal ? (
          <OpenExternalLink
            onClick={(e) => e.stopPropagation()}
            href={work.link}
            className={linkButtonCn}
          >
            <MoveRight className="size-4" />
          </OpenExternalLink>
        ) : (
          <OpenLink
            className={linkButtonCn}
            onClick={(e) => e.stopPropagation()}
            href={`/works/${work.id}`}
          >
            {' '}
            <MoveRight className="size-4" />
          </OpenLink>
        )}
      </div>
    </div>
  );
}
