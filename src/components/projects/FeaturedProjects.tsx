import { projects } from '@/src/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../Section';
import { ProjectCard } from './ProjectCard';

export function FeaturedProjects() {
  return (
    <Section id="featured-projects" className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">Featured projects</span>
          <button className="flex items-center gap-1 text-muted-foreground">
            <span>
              View all <span className="hidden md:inline-block">projects</span>
            </span>
            <ArrowUpRight className="text-primary size-5" />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.type} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
