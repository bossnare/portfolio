import { projects } from '@/src/data/projects';
import { ChevronRight } from 'lucide-react';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionParagraphe,
  SectionContent,
  SectionButton,
} from '../Section';
import { ProjectCard } from './ProjectCard';

export function FeaturedProjects() {
  return (
    <Section id="featured-projects" className="flex flex-col gap-6">
      <SectionHeader>
        <SectionContent>
          <SectionTitle>Featured projects</SectionTitle>
          <SectionParagraphe>
            A curated selection of projects I&apos;ve built, explored, and
            brought to life.
          </SectionParagraphe>
        </SectionContent>
        <SectionButton>
          View all projects
          <ChevronRight className="size-5" />
        </SectionButton>
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.type} project={project} />
        ))}
      </div>
    </Section>
  );
}
