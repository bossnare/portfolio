import { LetsWork } from '@/src/components/LetsWork';
import { Page, PageHeader } from '@/src/components/Page';
import { BriefcaseBusiness, Code2, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experiences',
};

const expertise = [
  {
    title: 'Product design',
    description:
      'User-focused interfaces built around clarity, rhythm, and conversion.',
    icon: Sparkles,
  },
  {
    title: 'Frontend dev',
    description:
      'Modern web experiences with TypeScript, Next.js, and responsive UI patterns.',
    icon: Code2,
  },
  {
    title: 'Digital strategy',
    description:
      'Turning ideas into usable products, polished flows, and measurable outcomes.',
    icon: BriefcaseBusiness,
  },
];

const experiences = [
  {
    period: '2026 — Present',
    type: 'Freelance',
    role: 'Frontend Developer & Product Designer',
    company: 'Independent projects',
    summary:
      'I help startups and personal brands turn ideas into clean, high-impact web experiences with strong storytelling and modern interfaces.',
    highlights: [
      'UX writing',
      'UI systems',
      'React',
      'Next.js builds',
      'TypeScript',
    ],
  },
  {
    period: 'June - October 2026',
    type: 'Stage Web dev',
    role: 'Web integrator',
    company: 'Société Créative',
    summary:
      'Worked on product pages, landing experiences, dashboards, and marketing websites, improving visual coherence and front-end performance. Work in HTML, CSS and JavaScript',
    highlights: [
      'Responsive layouts',
      'Component architecture',
      'CMS integrations',
    ],
  },
  {
    period: '2023 — 2024',
    type: 'Learning path',
    role: 'Self-taught builder',
    company: 'Personal projects',
    summary:
      'Developed a portfolio of experiments and client-ready prototypes focused on clean code, design quality, and practical business value.',
    highlights: ['Design sprints', 'Prototyping', 'Iterative improvement'],
  },
];

export default function ExperiencesPage() {
  return (
    <Page id="experiences-page" className="pb-12 space-y-8">
      <PageHeader
        startTitle="my"
        title="experience"
        description="I design and build digital experiences at the intersection of strategy, interface design, and modern web development."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {expertise.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="p-5 border rounded-lg shadow-sm border-border bg-background/80"
          >
            <div className="mb-4 inline-flex rounded-md border border-border bg-muted/80 p-2.5">
              <Icon className="size-5 text-foreground" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              {title}
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </section>

      <section className="space-y-5">
        {experiences.map((item) => (
          <article
            key={item.role}
            className="grid gap-5 rounded-lg border border-border bg-card/80 p-5 md:grid-cols-[160px_1fr] md:p-6"
          >
            <div className="text-sm font-medium text-muted-foreground">
              {item.period}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xl font-semibold text-foreground font-display">
                    {item.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.company}
                  </p>
                </div>

                <span className="inline-flex w-fit items-center rounded-full border border-border px-2.5 py-1 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                  {item.type}
                </span>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                {item.summary}
              </p>

              <ul className="flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="px-3 py-1 text-xs border rounded-full border-border bg-muted/80 text-foreground"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <LetsWork />
    </Page>
  );
}
