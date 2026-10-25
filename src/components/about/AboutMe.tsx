import { Section, SectionLinkButton } from '@/src/components/Section';
import { ChevronRight } from 'lucide-react';

export function AboutMe() {
  return (
    <Section
      id="about"
      className="border-b pt-18 border-border dark:border-border/70"
    >
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-medium font-display">About me</h2>
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

        <div className="flex flex-col gap-6">
          <p className="max-w-3xl text-2xl leading-snug font-display md:text-3xl">
            From architecture to interface, I build digital products that
            balance functionality and design.
          </p>

          <div className="grid gap-5 pt-6 border-t border-border dark:border-border/70 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase text-muted-foreground">
                Frontend
              </span>
              <span className="text-sm">TypeScript · React/Next.js</span>
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
