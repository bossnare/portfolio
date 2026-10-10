import { Page, PageHeader } from '@/src/components/Page';
import { works } from '@/src/data/works';
import { ArrowUpRight, FolderKanban, Layers3, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works',
};

const summaryStats = [
  { value: '03', label: 'Selected projects' },
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
    <Page id="works-page" className="space-y-8 pb-12">
      <PageHeader
        title="Works"
        description="A collection of product ideas, web experiences, and design-driven projects built with clarity and purpose."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {summaryStats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm"
          >
            <p className="text-3xl font-semibold text-foreground">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-border bg-background/80 p-5 md:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
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
              className="rounded-xl border border-border bg-muted/40 p-4"
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
            const Icon = work.icon;

            return (
              <article
                key={work.name}
                style={{ borderColor: work.color }}
                className="flex h-full flex-col gap-4 rounded-2xl border bg-background/80 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    style={{ backgroundColor: `${work.color}1a` }}
                    className="inline-flex rounded-xl p-3"
                  >
                    <Icon style={{ color: work.color }} className="size-6" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {work.type}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {work.name}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {work.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="text-muted-foreground">
                    Explore case study
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-foreground hover:opacity-80"
                  >
                    View
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Page>
  );
}
