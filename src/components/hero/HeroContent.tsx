import { stacks } from '@/src/data/stacks';
import { stats } from '@/src/data/stats';
import { MoveRight, Send } from 'lucide-react';
import { MaskedIcon } from '../MaskedIcon';

function HeroIntroduction() {
  return (
    <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
      <p className="uppercase font-display">Hi, I&apos;m...</p>
      <h1 className="max-w-xl text-[42px] md:text-5xl font-extrabold tracking-tight text-black lg:text-6xl leading-10 md:leading-14 dark:text-zinc-50">
        <span className="uppercase">Christo RAZAFIMANGA</span>
      </h1>
      <p className="typewriter font-display pr-1.5 text-3xl font-bold border-r-2 text-primary border-primary">
        Web Developer
      </p>
      <p className="max-w-md leading-7 text-muted-foreground">
        Full-stack web developer focused on crafting modern, performant, and
        thoughtful web applications.
      </p>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:w-full sm:flex-row">
      <a
        className="flex h-11 items-center justify-center w-auto gap-2 rounded-md bg-primary px-4 text-primary-foreground transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc]"
        download
      >
        View my projects
        <MoveRight />
      </a>
      <a
        className="flex h-11 w-auto items-center justify-center gap-2 rounded-md border border-solid border-black/12 px-4 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get in touch
        <Send className="size-5" />
      </a>
    </div>
  );
}

function Technologies() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="uppercase text-muted-foreground">Technologies</span>
      <ul className="flex items-center gap-4 mt-4">
        {stacks.map((stack) => (
          <li
            title={stack.name}
            key={stack.name}
            className="p-2 rounded-md bg-background"
          >
            <MaskedIcon icon={stack.icon} className="size-6" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroStats() {
  return (
    <div>
      <ul className="flex justify-between gap-4 md:gap-10">
        {stats.map((stat) => (
          <li
            key={stat.name}
            className="flex flex-col items-center flex-1 gap-1.5 md:items-start"
          >
            <span className="text-2xl font-bold font-display text-primary">
              {stat.stat}
            </span>
            <span className="text-sm leading-4 text-center md:text-nowrap md:text-start text-muted-foreground">
              {stat.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-between flex-1 w-full max-w-3xl gap-6 px-8 py-5 md:px-0 md:py-0 dark:bg-black md:items-start">
      <HeroIntroduction />
      <HeroActions />
      <Technologies />
      <HeroStats />
    </div>
  );
}
