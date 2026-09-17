import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { FeaturedProjects } from '@/src/components/projects/FeaturedProjects';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionParagraphe,
  SectionContent,
  SectionButton,
} from '@/src/components/Section';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-[#F5F5F3] dark:bg-black">
      <header className="fixed inset-x-0 top-0 h-15 px-3 md:px-14 z-1000 bg-[#F5F5F3] dark:bg-black">
        <Header />
      </header>
      <main className="w-full pt-15 space-y-14 sm:pt-18">
        <Hero />
        <FeaturedProjects />
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
      </main>
      <Footer />
    </div>
  );
}

// [mask-image:radial-gradient(ellipse_at_center,_#000_25%,_transparent_75%)]
