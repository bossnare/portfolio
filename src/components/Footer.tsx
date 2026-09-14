import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="flex flex-col items-center w-full gap-4 px-4 py-8 bg-zinc-200 dark:bg-white/4 md:px-10">
      <span>Christo Razafimanga</span>
      <SocialLinks />
    </footer>
  );
}
