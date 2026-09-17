import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="w-full px-4 py-10 border-t border-zinc-300/70 bg-zinc-200 dark:border-white/4 dark:bg-zinc-950 md:px-8 md:py-12">
      <div className="flex flex-col w-full max-w-6xl gap-8 mx-auto">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-2">
            <p className="text-lg font-extrabold">Christo Razafimanga</p>
            <p className="text-sm leading-6 text-muted-foreground">
              Full-stack web developer crafting modern and thoughtful web
              applications.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Connect
            </span>
            <SocialLinks />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-sm border-t border-zinc-300/70 text-muted-foreground dark:border-white/4 sm:flex-row sm:items-center sm:justify-between">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            <a
              className="transition-colors hover:text-foreground"
              href="#about"
            >
              About
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="#featured-projects"
            >
              Projects
            </a>
            <a className="transition-colors hover:text-foreground" href="#hero">
              Home
            </a>
          </nav>
          <span>© {new Date().getFullYear()} Christo Razafimanga</span>
        </div>
      </div>
    </footer>
  );
}
