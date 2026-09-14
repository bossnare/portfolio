'use client';

import { stacks } from '@/src/data/stacks';
import { MoveRight, Plus, Send, Terminal } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { Section } from './Section';
import { infoProvisors } from '../data/infoProvisors';

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Section
      id="hero"
      className="relative min-h-screen overflow-hidden md:min-h-auto"
    >
      <div className="flex flex-col items-center justify-between md:flex-row md:items-center">
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
              Full-stack web developer focused on crafting modern, performant,
              and thoughtful web applications.
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
              className="flex h-12 w-auto items-center justify-center gap-2 rounded-md border border-solid border-black/12 px-4 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
              <Send className="size-5" />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start md:pb-0">
            <span className="uppercase text-muted-foreground">
              Technologies
            </span>
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
          <div>
            <ul className="flex justify-between gap-4 md:gap-10">
              {infoProvisors.map((info) => (
                <li
                  key={info.name}
                  className="flex flex-col items-center md:items-start"
                >
                  <span className="text-2xl font-bold text-primary">
                    {info.stat}
                  </span>
                  <span className="text-sm leading-4 text-center md:text-start text-muted-foreground">
                    {info.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden md:w-1/2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              className="relative object-contain h-auto mx-auto w-80 lg:w-105 sm:w-85 xl:w-130 z-12"
              src="/images/profile-1.png"
              alt="Christo Razafimanga"
              width={800}
              height={900}
              priority
            />
          </motion.div>
          {/* dot grid */}
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(148,163,184,0.6)_1px,transparent_1px)] bg-size-[24px_24px] opacity-50 mask-[radial-gradient(circle_at_center,black_35%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_35%,transparent_100%)]"></div>
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
          <div className="absolute z-20 rounded-full border-3 size-4 md:size-5 border-primary top-10 left-8 md:top-20 md:left-30"></div>
          <div className="absolute z-20 bg-[#F0785E] rounded-full size-2 bottom-20 right-4 md:size-4 md:bottom-26 md:right-16"></div>
          <div className="absolute z-20 rounded-full text-[#55D5D0] bottom-50 right-14 md:bottom-80 md:right-40">
            <Plus className="size-5" />
          </div>
          {/* availability */}
          <div className="absolute right-0 flex items-center p-2 border rounded-lg bottom-4 bg-background/90 z-16 border-zinc-300 dark:border-white/6">
            <span className="rounded-full size-2.5 bg-primary ml-1"></span>
            <span className="ml-2 text-sm md:text-base text-muted-foreground">
              Available for new opportunities
            </span>
            <span className="p-1 border rounded-md border-zinc-400 dark:border-white/6">
              <Terminal className="text-primary size-5" />
            </span>
          </div>
        </div>
      </div>
      {/* line */}
      <div className="w-full border-t border-zinc-200 dark:border-white/8"></div>
      <div className="flex justify-between py-5 text-muted-foreground">
        <div></div>
        <span>&copy; 2026 Christo Razafimanga. All rights reserved.</span>
      </div>
    </Section>
  );
}
