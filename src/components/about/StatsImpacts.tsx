'use client';

import { stats } from '@/src/data/stats';
import { Counter } from './Counter';
import Link from 'next/link';
import { useReveal } from '@/src/hooks/use-reveal';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { handleWait } from '@/src/utils/handle-wait';
import { useNavigation } from '@/src/hooks/use-navigation';

export function StatsImpacts() {
  const { ref, isInView } = useReveal<HTMLDivElement>({
    once: true,
    amount: 0.8,
  });

  const { goTo } = useNavigation();

  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-screen gap-8 md:gap-10 md:items-center">
      <span className="absolute top-0 w-1/4 border-t border-border" />
      <h3 className="max-w-md text-3xl">My stats & impacts</h3>
      <div className="grid justify-between grid-cols-2 gap-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2 min-w-40 md:min-w-50"
          >
            <span className="text-6xl font-medium font-display">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm font-medium text-foreground/90">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <Link
          className="relative flex items-center justify-center w-auto h-12 gap-2 px-6 mt-20 overflow-hidden font-medium transition-colors duration-300 ease-in-out rounded-full hover:text-primary-foreground hover:outline-transparent sm:duration-1200 group font-display outline outline-foreground/70 active:bg-primary active:opacity-70"
          href="/projects"
          onClick={(e) => {
            e.preventDefault();
            handleWait(() => goTo({ href: '/projects' }), 500);
          }}
        >
          <span className="relative z-5">Go to projects</span>
          <MoveRight className="relative z-5" />
          <span className="absolute rounded-full transition-all z-2 size-8 left-[-30%] ease-in-out duration-300 sm:duration-1200 group-active:size-[100rem] group-hover:size-[100rem] bg-primary" />
        </Link>
      </motion.div>
    </section>
  );
}
