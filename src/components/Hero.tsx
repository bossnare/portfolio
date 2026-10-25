import { HeroContent } from './hero/HeroContent';
import { HeroVisual } from './hero/HeroVisual';
import { Section } from './Section';

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen pt-0 pb-0 overflow-hidden border-b md:min-h-auto border-border dark:border-border/70"
    >
      <div className="flex flex-col items-center justify-between space-y-10 md:space-y-0 md:flex-row md:items-center">
        <HeroContent />
        <HeroVisual />
      </div>
    </Section>
  );
}
