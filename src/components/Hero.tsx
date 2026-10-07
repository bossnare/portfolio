import { HeroContent } from './hero/HeroContent';
import { HeroVisual } from './hero/HeroVisual';
import { Section } from './Section';

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen pt-0 overflow-hidden md:min-h-auto"
    >
      <div className="flex flex-col items-center justify-between space-y-10 md:space-y-0 md:flex-row md:items-center">
        <HeroContent />
        <HeroVisual />
      </div>
      {/* line */}
      <div className="w-full border-t border-zinc-200 dark:border-white/12"></div>
    </Section>
  );
}
