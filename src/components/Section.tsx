import { cn } from '../lib/utils';

type SectionProps = React.ComponentProps<'section'>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'mx-auto w-full md:max-w-[94%] px-5 md:px-4 dark:bg-black pt-14',
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
    <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
      {children}
    </div>
  );
}

export function SectionContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3">{children}</div>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-3xl font-semibold">{children}</h3>;
}

export function SectionParagraphe({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground">{children}</p>;
}

export function SectionButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-1 md:px-1 rounded text-muted-foreground hover:text-foreground hover:bg-black/4 dark:hover:bg-[#1a1a1a] active:opacity-80">
      {children}
    </button>
  );
}
