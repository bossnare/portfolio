import { Section, SectionLinkButton } from '@/src/components/Section';
import { ChevronRight } from 'lucide-react';

export function AboutMe() {
  return (
    <Section
      id="about"
      className="border-b border-zinc-300 dark:border-white/12"
    >
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="flex flex-col items-start gap-5">
          <span className="text-xs font-medium uppercase text-primary">
            About / 01
          </span>
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display text-3xl font-medium">About me</h2>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              A full-stack developer focused on thoughtful, dependable digital
              products.
            </p>
          </div>
          <SectionLinkButton href="/about">
            More about me
            <ChevronRight className="size-4" />
          </SectionLinkButton>
        </div>

        <div className="flex flex-col gap-8">
          <p className="max-w-3xl font-display text-2xl leading-snug md:text-3xl">
            I turn ideas and business needs into clean, reliable web
            applications and design with{' '}
            <span className="text-muted-foreground">
              TypeScript, Next.js, and NestJS. Adobe suite
            </span>
          </p>

          <div className="grid gap-5 border-t border-border/70 pt-5 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase text-muted-foreground">
                Frontend
              </span>
              <span className="text-sm">TypeScript · Next.js</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase text-muted-foreground">
                Backend
              </span>
              <span className="text-sm">NestJS · APIs</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase text-muted-foreground">
                Design
              </span>
              <span className="text-sm">Adobe suite</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
