import { FollowMeLinks } from '../FollowMeLinks';

export function HeroFooter() {
  return (
    <div
      id="hero-footer"
      className="flex items-center justify-end md:justify-start gap-4 pt-4 text-sm text-muted-foreground"
    >
      <span className="uppercase">Follow me</span>
      <FollowMeLinks />
    </div>
  );
}
