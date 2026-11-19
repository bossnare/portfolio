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
import {MaskedIcon} from '@/src/components/MaskedIcon'
import {cn} from '@/src/lib/utils'
import Image from 'next/image'

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
    <div tabIndex={0} 
    className="cursor-pointer group hover:bg-muted/50 active:bg-muted-foreground/40">
      <div
      title={work.brandName}
      onClick={() => goTo({ href: `/works/${work.id}` })}
      className="flex flex-col transition-colors shadow-xl group-hover:bg-card/80 bg-card overflow-hidden border rounded-2xl border-border/80 group-hover:border-border group-active:border-border group-active:opacity-60"
    >
      <div className="flex flex-col h-50 gap-5 relative">
        <Image src={`/images/${work.coverImage}`} 
        alt={`christo-razafimanga-${work.coverImage}`} 
        width={1200} height={800}
        className="object-cover size-full" />
        <div className="flex flex-col px-2 backdrop-blur-xs bg-card/80 dark:bg-black/80 absolute bottom-0 inset-x-0 gap-5 py-2">
          <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div style={{backgroundColor: work.color}} className="flex items-center gap-2 justify-center size-8 rounded-full">
                  {work.logoIcon && <MaskedIcon
                  style={{backgroundColor: work.textColor}}
                  icon={work.logoIcon}
                  className="size-5"
                />}
                </div>
        
                <span className="font-semibold">
                  {work.brandName}
                </span>
                </div>
            
            <span className="line-clamp-2 text-[15px] leading-5 text-foreground/80 dark:text-muted-foreground">
              {work.description}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-2 px-2 pb-2 text-">
        <span className="text-sm">
          {work.personal ? 'View work' : 'View details'}
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
    </div>
    
  );
}
