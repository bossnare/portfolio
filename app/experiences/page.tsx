import { Page, PageHeader } from '@/src/components/Page';
import { ArrowUpRight, BriefcaseBusiness, Code2, Sparkles } from 'lucide-react';
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
    period: '2025 — Present',
    type: 'Freelance',
    role: 'Frontend Developer & Product Designer',
    company: 'Independent projects',
    summary:
      'I help startups and personal brands turn ideas into clean, high-impact web experiences with strong storytelling and modern interfaces.',
    highlights: ['UX writing', 'UI systems', 'Next.js builds'],
  },
  {
    period: '2024 — 2025',
    type: 'Web dev',
    role: 'Junior Full-Stack Developer',
    company: 'Creative digital studio',
    summary:
      'Worked on product pages, landing experiences, dashboards, and marketing websites, improving visual coherence and front-end performance.',
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
    <Page id="experiences-page" className="space-y-8 pb-12">
      <PageHeader
        title="Experiences"
        description="I design and build digital experiences at the intersection of strategy, interface design, and modern web development."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {expertise.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm"
          >
            <div className="mb-4 inline-flex rounded-xl border border-border bg-muted/60 p-2.5">
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
            className="grid gap-5 rounded-2xl border border-border bg-background/80 p-5 md:grid-cols-[160px_1fr] md:p-6"
          >
            <div className="text-sm font-medium text-muted-foreground">
              {item.period}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xl font-semibold text-foreground">
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
                    className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-foreground"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-gradient-to-r from-muted/70 to-transparent p-5">
        <div>
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
            Current focus
          </p>
          <p className="mt-1 text-lg font-medium text-foreground">
            Building polished user experiences with a strong product mindset.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          Let&apos;s talk
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </Page>
  );
}
