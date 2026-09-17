import { FollowMeLinks } from '../FollowMeLinks';

export function HeroFooter() {
  return (
    <div
      id="hero-footer"
      className="items-center justify-between hidden pt-5 text-sm md:flex text-muted-foreground"
    >
      <div className="flex items-center gap-4">
        <span className="uppercase">Follow me</span>
        <FollowMeLinks />
      </div>
      <span>&copy; 2026 Christo Razafimanga. All rights reserved.</span>
    </div>
  );
}
