import { Section } from './Section';
import { HeroContent } from './hero/HeroContent';
import { HeroVisual } from './hero/HeroVisual';

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen overflow-hidden md:min-h-auto"
    >
      <div className="flex flex-col items-center justify-between md:flex-row md:items-center">
        <HeroContent />
        <HeroVisual />
      </div>
      {/* line */}
      <div className="w-full border-t border-zinc-200 dark:border-white/8"></div>
      <div className="flex justify-between py-5 text-muted-foreground">
        <div></div>
        <span className="text-sm">
          &copy; 2026 Christo Razafimanga. All rights reserved.
        </span>
      </div>
    </Section>
  );
}
