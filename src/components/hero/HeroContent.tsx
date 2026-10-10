'use client';

import { stacks } from '@/src/data/stacks';
import { stats } from '@/src/data/stats';
import { useNavigation } from '@/src/hooks/use-navigation';
import { handleWait } from '@/src/utils/handle-wait';
import { ChevronRight, Send } from 'lucide-react';
import Link from 'next/link';
import { MaskedIcon } from '../MaskedIcon';

function HeroIntroduction() {
  return (
    <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
      <p className="uppercase text-muted-foreground">Hi, I&apos;m...</p>
      <h1 className="max-w-xl text-black dark:text-zinc-50">
        <span className="uppercase border-r animate-typewriter [word-spacing:0.3rem]">
          Christo Razafimanga
        </span>
      </h1>
      <p className="max-w-xl text-3xl font-medium leading-10 md:text-4xl font-display">
        Full-stack developer & Designer creating scalable products, polished
        interfaces, and{' '}
        <span className="text-muted-foreground">
          reliable experiences from concept to launch.
        </span>
      </p>
    </div>
    // <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
    //   <p className="uppercase font-display">Hi, I&apos;m...</p>
    //   <h1 className="max-w-xl text-[42px] md:text-5xl font-extrabold tracking-tight text-black lg:text-6xl leading-10 md:leading-14 dark:text-zinc-50">
    //     <span className="uppercase">Christo RAZAFIMANGA</span>
    //   </h1>
    //   <p className="typewriter font-display pr-1.5 text-3xl text-foreground/70 font-bold border-r-2 border-freground">
    //     Web Developer
    //   </p>
    //   <p className="max-w-md leading-7 text-muted-foreground">
    //     Full-stack developer creating scalable products, polished interfaces,
    //     and reliable experiences from concept to launch.
    //   </p>
    // </div>
  );
}

function HeroActions() {
  const { goTo } = useNavigation();

  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:w-full sm:flex-row">
      <Link
        className="flex items-center justify-center w-auto h-10 gap-2 px-4 transition-colors rounded-md active:opacity-70 bg-primary text-primary-foreground hover:brightness-110 active:brightness-120"
        href="/works"
        onClick={(e) => {
          e.preventDefault();
          handleWait(() => goTo({ href: '/works' }), 300);
        }}
      >
        View my works
        <ChevronRight />
      </Link>
      <Link
        className="flex h-10 w-auto active:opacity-70 items-center justify-center gap-2 rounded-md border border-solid border-border px-4 transition-colors hover:border-transparent hover:bg-black/4 active:bg-black/4 dark:active:bg-[#1a1a1a] dark:hover:bg-[#1a1a1a]"
        href="/contact"
        onClick={(e) => {
          e.preventDefault();
          handleWait(() => goTo({ href: '/contact' }), 300);
        }}
      >
        Get in touch
        <Send className="size-5" />
      </Link>
    </div>
  );
}

function Technologies() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden md:items-start">
      <span className="uppercase text-muted-foreground font-display">
        Technologies & Tools
      </span>
      <div className="overflow-hidden w-full md:w-[85%] mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex items-center gap-4 mt-4 w-max animate-marquee">
          {[...stacks, ...stacks].map((stack, index) => (
            <li
              title={stack.name}
              key={`${stack}-${index}`}
              className="p-2 rounded-md bg-background"
            >
              <MaskedIcon
                icon={stack.icon}
                className="size-6 bg-muted-foreground"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function HeroStats() {
  return (
    <div>
      <ul className="flex justify-between gap-4 md:gap-10">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex flex-col items-center flex-1 gap-1.5 md:items-start"
          >
            <span className="text-2xl font-bold font-display text-primary">
              {stat.value}
              {stat.suffix}
            </span>
            <span className="text-sm leading-4 text-center md:text-nowrap md:text-start text-muted-foreground">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-between flex-1 w-full max-w-3xl gap-6 px-4 md:px-0 dark:bg-black md:items-start">
      <HeroIntroduction />
      <HeroActions />
      <Technologies />
      <HeroStats />
    </div>
  );
}
