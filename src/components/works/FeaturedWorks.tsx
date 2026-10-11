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

export function FeaturedWorks() {
  return (
    <Section id="featured-projects" className="flex flex-col gap-8">
      <SectionHeader>
        <SectionContent>
          <SectionTitle>Featured works</SectionTitle>
          <SectionParagraphe>
            A curated selection of projects I&apos;ve built, explored, and
            brought to life.
          </SectionParagraphe>
        </SectionContent>
        <SectionLinkButton href="/works">
          View all works
          <ChevronRight className="size-5" />
        </SectionLinkButton>
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {works.slice(0, 3).map((work) => (
          <ProjectCard key={work.type} work={work} />
        ))}
      </div>
    </Section>
  );
}
