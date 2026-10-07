import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionParagraphe,
  SectionContent,
  SectionLinkButton,
} from '@/src/components/Section';
import { ChevronRight } from 'lucide-react';

export function AboutMe() {
  return (
    <Section
      id="about"
      className="flex flex-col gap-8 pb-8 border-b border-zinc-300 dark:border-white/12"
    >
      <SectionHeader>
        <SectionContent>
          <SectionTitle>About me</SectionTitle>
          <SectionParagraphe>
            A brief introduction to who I am, what I build, and how I approach
            software development.
          </SectionParagraphe>
        </SectionContent>
        <SectionLinkButton href="/about">
          More about me
          <ChevronRight className="size-5" />
        </SectionLinkButton>
      </SectionHeader>
      <div className="max-w-4xl">
        I&apos;m web developer focused on building modern, scalable web
        applications with{' '}
        <span className="font-medium text-black bg-primary">
          TypeScript, Next.js, and NestJS
        </span>
        . I enjoy turning ideas and business needs into clean, reliable digital
        products.
      </div>
    </Section>
  );
}
