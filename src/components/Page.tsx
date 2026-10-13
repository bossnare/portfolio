'use client';

import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

type PageProps = React.ComponentProps<'div'>;

export const Page = ({ className, children, ...props }: PageProps) => {
  return (
    <div
      className={cn(
        'w-full max-w-6xl px-4 mx-auto space-y-6 md:pt-14 md:px-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export function PageHeader({
  startTitle = '',
  endTitle = '',
  title = '',
  description = '',
}: {
  startTitle?: string;
  endTitle?: string;
  title?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="pb-4 space-y-6"
    >
      {/* <h1 className="px-2 border rounded-sm w-fit border-border text-muted-foreground">
        {title}
      </h1> */}
      <h1 className="text-4xl capitalize w-fit text-muted-foreground mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <span className="text-foreground">{startTitle} </span>
        <span>{title} </span>
        <span className="text-foreground">{endTitle}</span>
      </h1>
      <p className="max-w-2xl text-3xl leading-10 font-display">
        {description}
      </p>
    </motion.div>
  );
}
