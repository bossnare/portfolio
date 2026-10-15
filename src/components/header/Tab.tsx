import Link from 'next/link';
import { useActivePath } from '../../hooks/useActivePath';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export const tabs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Experience', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
];

export function Tab({
  href = '#',
  label,
  dir = 1,
}: {
  href?: string;
  label?: string;
  dir?: number;
}) {
  const isActive = useActivePath(href);

  return (
    <>
      <Link className="relative flex justify-center" href={href}>
        <span
          className={cn(
            isActive
              ? 'text-primary font-medium'
              : 'text-foreground/90 hover:text-foreground md:transition-colors active:bg-zinc-300 dark:active:bg-white/20 active:opacity-80',
            'px-2 rounded-full'
          )}
        >
          {label}
        </span>
        {isActive && (
          <motion.span
            initial={{ opacity: 0, x: dir > 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute hidden md:block w-1/3 h-0.75 rounded-full -bottom-2 bg-primary"
          ></motion.span>
        )}
      </Link>
    </>
  );
}
