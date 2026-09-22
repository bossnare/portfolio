import Link from 'next/link';
import { cn } from '../../lib/utils';
import { useActivePath } from '../../hooks/useActivePath';

export const tabs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
];

export function Tab({ href = '#', label }: { href?: string; label?: string }) {
  const isActive = useActivePath(href);

  return (
    <>
      <Link className="relative flex justify-center" href={href}>
        <span
          className={cn(
            isActive ? 'text-primary font-medium' : 'text-foreground/90'
          )}
        >
          {label}
        </span>
        {isActive && (
          <span className="absolute hidden md:block w-1/3 h-0.75 rounded-full -bottom-2 bg-primary"></span>
        )}
      </Link>
    </>
  );
}
