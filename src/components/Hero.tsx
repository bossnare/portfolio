'use client';

import { stacks } from '@/src/data/stacks';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowBigDownDash, Terminal } from 'lucide-react';

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="flex relative overflow-hidden flex-col items-center justify-between mx-auto rounded-lg w-full md:max-w-[94%] sm:p-10 md:pb-0 border border-zinc-200 dark:border-white/6 min-h-screen bg-white dark:bg-black md:min-h-auto md:flex-row md:items-center
        bg-[linear-gradient(to_right,rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.35)_1px,transparent_1px)] bg-size-[40px_40px]"
    >
      <div className="flex flex-col items-center justify-between flex-1 w-full max-w-3xl gap-6 px-8 py-5 bg-white md:px-0 md:py-0 dark:bg-black md:items-start">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <p>
            Hi, I&apos;m <span className="text-primary"> Christo</span>
          </p>
          <h1 className="max-w-md text-5xl font-extrabold tracking-tight text-black lg:text-6xl leading-12 dark:text-zinc-50">
            Building
            <span className="text-primary"> digital experiences</span> that
            <span className="text-primary"> matter.</span>
          </h1>
          <code className="max-w-md font-mono leading-6 text-muted-foreground">
            <span className="text-primary">$</span> <span>git</span>{' '}
            <span>commit</span>
            <span> -m</span>
            <span className="text-primary">
              {' '}
              &quot;building digital experiences&quot;
            </span>
          </code>
          {/* <code className="max-w-md font-mono leading-6 text-zinc-600 dark:text-zinc-500">
                <span className="text-primary">$ whoami</span> <span>&gt;</span>
                <span> full-stack developer</span>
              </code> */}
          <p className="max-w-md text-lg leading-8 text-muted-foreground">
            Full-stack web developer focused on crafting{' '}
            <a className="font-medium text-zinc-950 dark:text-zinc-50">
              modern
            </a>
            <a className="font-medium text-zinc-950 dark:text-zinc-50">
              , performant, and thoughtful{' '}
            </a>{' '}
            web applications.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-background dark:text-background transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc] md:w-44"
            href="/cv/Christo_Razafimanga_Dev_CV.pdf"
            download
          >
            <ArrowBigDownDash />
            Download CV
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-40"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch
          </a>
        </div>
        <div className="flex flex-col items-center pb-4 md:items-start md:pb-0">
          <span className="text-muted-foreground">Tech stack.</span>
          <ul className="flex items-center gap-6 mt-4">
            {stacks.map((stack, i) => (
              <li title={stack.name} key={i}>
                <div
                  className={`${stack.color ? `bg-(--stack-color)` : 'bg-foreground'} size-6`}
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
                      '--stack-color': stack.color,
                    } as React.CSSProperties
                  }
                ></div>
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
            className="relative object-contain h-auto mx-auto w-70 lg:w-105 sm:w-85 xl:w-120 z-12"
            src="/images/profile-1.png"
            alt="Christo Razafimanga"
            width={800}
            height={900}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-primary/10"></div>
        {/* <div className="absolute inset-0 z-9 bg-[radial-gradient(ellipse_at_center,transparent_20%,#fff_70%)]"></div> */}
      </div>

      {/* availability */}
      <div className="absolute flex items-center p-2 border bottom-4 right-8 bg-background/90 z-16 border-zinc-300 dark:border-white/6 rounded-xl">
        <span className="rounded-full size-2.5 bg-primary ml-1"></span>
        <span className="ml-2 text-muted-foreground">
          Available for new opportunities
        </span>
        <span className="p-1.5 border rounded-lg border-zinc-300 dark:border-white/6">
          <Terminal className="text-primary size-5" />
        </span>
      </div>
    </section>
  );
}
