import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionParagraphe,
  SectionContent,
  SectionButton,
} from '@/src/components/Section';
import { ChevronRight } from 'lucide-react';

export function AboutMe() {
  return (
    <Section id="about" className="flex flex-col gap-6 min-h-60">
      <SectionHeader>
        <SectionContent>
          <SectionTitle>About me</SectionTitle>
          <SectionParagraphe>
            A brief introduction to who I am, what I build, and how I approach
            software development.
          </SectionParagraphe>
        </SectionContent>
        <SectionButton>
          More about me
          <ChevronRight className="size-5" />
        </SectionButton>
      </SectionHeader>
      <div className="max-w-4xl">
        I&apos;m web developer focused on building modern, scalable web
        applications with{' '}
        <span className="bg-primary text-black font-medium">
          TypeScript, Next.js, and NestJS
        </span>
        . I enjoy turning ideas and business needs into clean, reliable digital
        products.
      </div>
    </Section>
  );
}
