'use client';

import { stacks } from '@/src/data/stacks';
import { MoveRight, Send, Terminal } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="hero"
      className="flex relative overflow-hidden flex-col items-center justify-between mx-auto md:rounded-lg w-full md:max-w-[94%] md:pb-0 md:px-4 min-h-screen dark:bg-black md:min-h-auto md:flex-row md:items-center
        "
    >
      <div className="flex flex-col items-center justify-between flex-1 w-full max-w-3xl gap-6 px-8 py-5 md:px-0 md:py-0 dark:bg-black md:items-start">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <p className="uppercase">Hi, I&apos;m...</p>
          <h1 className="max-w-xl text-5xl font-extrabold tracking-tight text-black lg:text-6xl leading-12 dark:text-zinc-50">
            <span className="uppercase">Christo RAZAFIMANGA</span>
            {/* Building
            <span className="text-primary"> digital experiences</span> that
            <span className="text-primary"> matter.</span> */}
          </h1>
          {/* <code className="max-w-md font-mono leading-6 text-muted-foreground">
            <span className="text-primary">$</span> <span>git</span>{' '}
            <span>commit</span>
            <span> -m</span>
            <span className="text-primary">
              {' '}
              &quot;building digital experiences&quot;
            </span>
          </code> */}
          {/* <code className="max-w-md font-mono leading-6 text-zinc-600 dark:text-zinc-500">
                <span className="text-primary">$ whoami</span> <span>&gt;</span>
                <span> full-stack developer</span>
              </code> */}
          <p className="pr-1.5 text-3xl font-extrabold border-r-2 text-primary border-primary">
            Web Developer
          </p>
          <p className="max-w-md text-lg leading-7 text-muted-foreground">
            Full-stack web developer focused on crafting modern, performant, and
            thoughtful web applications.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:w-full sm:flex-row">
          <a
            className="flex h-12 items-center justify-center w-auto gap-2 rounded-md bg-primary px-4 text-white transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc]"
            download
          >
            View my projects
            <MoveRight />
          </a>
          <a
            className="flex h-12 w-auto items-center justify-center gap-2 rounded-md border border-solid border-black/8 px-4 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch <Send className="size-5" />
          </a>
        </div>
        <div className="flex flex-col items-center pb-4 md:items-start md:pb-0">
          <span className="uppercase text-muted-foreground">Technologies</span>
          <ul className="flex items-center gap-4 mt-4">
            {stacks.map((stack, i) => (
              <li
                title={stack.name}
                key={i}
                className="p-2 rounded-md bg-background"
              >
                <div
                  className="bg-foreground size-6"
                  style={
                    {
                      maskImage: `url(/icon/${stack.icon})`,
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      maskSize: 'contain',
                      WebkitMaskImage: `url(/icon/${stack.icon})`,
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      WebkitMaskSize: 'contain',
                    } as React.CSSProperties
                  }
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative overflow-hidden md:w-1/2 bg-[linear-gradient(to_right,rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.35)_1px,transparent_1px)] bg-size-[40px_40px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            className="relative object-contain h-auto mx-auto w-70 lg:w-105 sm:w-85 xl:w-120 z-12"
            src="/images/profile-1.png"
            alt="Christo Razafimanga"
            width={800}
            height={900}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 z-10"></div>
        <Image
          className="absolute top-0 object-contain h-auto -right-10 w-35 lg:w-45 sm:w-40 xl:w-50 z-11"
          src="/icon/graphic-1.svg"
          alt="graphic-1"
          width={600}
          height={600}
          priority
        />
        <Image
          className="absolute left-0 object-contain h-auto -bottom-10 w-35 lg:w-45 sm:w-40 xl:w-50 z-11"
          src="/icon/graphic-2.svg"
          alt="graphic-2"
          width={600}
          height={600}
          priority
        />
        {/* <div className="absolute inset-0 z-9 bg-[radial-gradient(ellipse_at_center,transparent_20%,#fff_70%)]"></div> */}
      </div>

      {/* availability */}
      <div className="absolute flex items-center p-2 border rounded-lg bottom-4 right-8 bg-background/90 z-16 border-zinc-300 dark:border-white/6">
        <span className="rounded-full size-2.5 bg-primary ml-1"></span>
        <span className="ml-2 text-muted-foreground">
          Available for new opportunities
        </span>
        <span className="p-1.5 border rounded-md border-zinc-300 dark:border-white/6">
          <Terminal className="text-primary size-5" />
        </span>
      </div>
    </section>
  );
}
