import Link from 'next/link';
import { cn } from '../../lib/utils';

const tabs = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Experiences', href: '#' },
  { name: 'Contact', href: '#' },
];

export function Tab({ isActive }: { isActive?: boolean }) {
  return (
    <>
      {tabs.map((tab) => (
        <li
          key={tab.name}
          className={cn(
            isActive
              ? 'relative flex justify-center font-semibold text-primary'
              : 'text-foreground/90'
          )}
        >
          <Link href={tab.href}>{tab.name}</Link>
          {isActive && (
            <span className="absolute w-1/3 h-1 rounded-full -bottom-2 bg-primary"></span>
          )}
        </li>
      ))}
    </>
  );
}
