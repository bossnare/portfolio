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
          <SectionParagraphe>Explore more about me</SectionParagraphe>
        </SectionContent>
        <SectionButton>
          Explore more
          <ChevronRight className="size-5" />
        </SectionButton>
      </SectionHeader>
    </Section>
  );
}
