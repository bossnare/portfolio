import { Page, PageHeader } from '@/src/components/Page';
import { ProjectCard } from '@/src/components/works/ProjectCard';
import { works } from '@/src/data/works';
import { FolderKanban, Layers3, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works',
};

const summaryStats = [
  { value: '04', label: 'Selected projects' },
  { value: '08+', label: 'Design iterations' },
  { value: '100%', label: 'Care and detail' },
];

const process = [
  {
    title: 'Discover',
    description:
      'I frame the product problem, audience needs, and business objective before designing a solution.',
    icon: Sparkles,
  },
  {
    title: 'Design',
    description:
      'I shape the interface with clear structure, modern visuals, and a cohesive user journey.',
    icon: Layers3,
  },
  {
    title: 'Build',
    description:
      'I turn the experience into a performant, maintainable product with thoughtful implementation.',
    icon: FolderKanban,
  },
];

export default function WorksPage() {
  return (
    <Page id="works-page" className="pb-12 space-y-8">
      <PageHeader
        title="Works"
        description="A collection of product ideas, web experiences, and design-driven projects built with clarity and purpose."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {summaryStats.map((item) => (
          <div
            key={item.label}
            className="p-5 border shadow-sm rounded-xl border-border bg-background/80"
          >
            <p className="text-3xl font-semibold text-foreground font-display">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="p-5 border rounded-2xl border-border bg-background/80 md:p-6">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
              Method
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              How I work
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {process.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="p-4 border rounded-lg border-border bg-muted/60"
            >
              <div className="mb-3 inline-flex rounded-lg border border-border bg-background p-2.5">
                <Icon className="size-5 text-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Selected projects
          </h2>
          <span className="text-sm text-muted-foreground">
            3 featured builds
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {works.map((work) => {
            return (
              <article key={work.name}>
                <ProjectCard work={work} />
              </article>
            );
          })}
        </div>
      </section>
    </Page>
  );
}
