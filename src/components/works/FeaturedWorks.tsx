import { ChevronRight } from 'lucide-react';
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionLinkButton,
  SectionParagraphe,
  SectionTitle,
} from '../Section';
import { works } from '@/src/data/works';
import { ProjectCard } from './ProjectCard';
import Link from 'next/link'

export function FeaturedWorks() {
  return (
    <Section id="featured-projects" className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <SectionTitle>Featured works</SectionTitle>
            <Link
            href="/works"
            className="inline-flex items-center gap-1 text-sm rounded md:px-1 text-muted-foreground hover:text-foreground hover:bg-muted active:bg-muted active:opacity-80"
          >
              View all works
          <ChevronRight className="size-5" />
          </Link>
        </div>
        <SectionParagraphe>
            A curated selection of projects I&apos;ve built, explored, and
            brought to life.
        </SectionParagraphe>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {works.slice(0, 3).map((work) => (
          <ProjectCard key={work.id} work={work} />
        ))}
      </div>
    </Section>
  );
}
