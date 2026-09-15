import { Section } from './Section';
import { FollowMeLinks } from './FollowMeLinks';
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
      <div
        id="hero-footer"
        className="items-center justify-between hidden pt-5 text-sm md:flex text-muted-foreground"
      >
        <div className="flex items-center gap-6">
          <span className="uppercase">Follow me</span>
          <FollowMeLinks />
        </div>
        <span>&copy; 2026 Christo Razafimanga. All rights reserved.</span>
      </div>
    </Section>
  );
}
