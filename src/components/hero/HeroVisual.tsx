'use client';

import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useReveal } from '@/src/hooks/use-reveal';
import { Availability } from './Availability';

export function HeroVisual() {
  const { ref, isInView } = useReveal<HTMLDivElement>({
    once: true,
    amount: 0.5,
  });

  return (
    <div className="relative overflow-hidden md:w-1/2">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          className="relative object-contain h-auto mx-auto w-80 lg:w-105 sm:w-85 xl:w-140 z-12"
          src="/images/profile.png"
          alt="Christo Razafimanga"
          width={800}
          height={900}
          priority
        />
      </motion.div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(148,163,184,0.6)_1px,transparent_1px)] bg-size-[24px_24px] opacity-50 mask-[radial-gradient(circle_at_center,black_35%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_35%,transparent_100%)]"></div>
      <Image
        className="absolute top-0 object-contain h-auto dark:invert -right-10 w-35 lg:w-45 sm:w-40 xl:w-50 z-11"
        src="/icon/graphic-1.svg"
        alt="graphic-1"
        width={600}
        height={600}
        priority
      />
      <Image
        className="absolute left-0 object-contain h-auto dark:invert -bottom-10 w-35 lg:w-45 sm:w-40 xl:w-50 z-11"
        src="/icon/graphic-2.svg"
        alt="graphic-2"
        width={600}
        height={600}
        priority
      />
      <div className="absolute z-20 rounded-full border-3 size-3 md:size-4 border-primary top-10 left-8 md:top-20 md:left-30"></div>
      <div className="absolute z-20 bg-[#F0785E] rounded-full size-2 bottom-20 right-4 md:size-3 md:bottom-26 md:right-16"></div>
      <div className="absolute z-20 rounded-full text-[#55D5D0] bottom-50 right-14 md:bottom-80 md:right-38">
        <Plus className="size-5" />
      </div>
      <Availability className="absolute right-0 z-16 bottom-4" />
    </div>
  );
}
