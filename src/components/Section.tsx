import Link from 'next/link';
import { cn } from '../lib/utils';

type SectionProps = React.ComponentProps<'section'>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'mx-auto w-full md:max-w-[94%] px-5 md:px-4 dark:bg-black pt-12 pb-8',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3">{children}</div>
  );
}

export function SectionContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3">{children}</div>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-2xl md:text-3xl font-medium">{children}</h3>;
}

export function SectionParagraphe({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

export function SectionLinkButton({
  href = '#',
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm rounded md:px-1 text-muted-foreground hover:text-foreground hover:bg-muted active:bg-muted active:opacity-80"
    >
      {children}
    </Link>
  );
}
