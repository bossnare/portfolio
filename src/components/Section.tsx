import { cn } from '../lib/utils';

type SectionProps = React.ComponentProps<'section'>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'mx-auto w-full md:max-w-[94%] px-4 dark:bg-black py-',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
