import { cn } from '@/src/lib/utils';
import { Terminal } from 'lucide-react';

export function Availability({ className }: { className: string }) {
  return (
    <div
      className={cn(
        'flex items-center p-1.5 border rounded-lg bg-background/90 border-black/10 dark:border-white/6',
        className
      )}
    >
      <span className="rounded-full size-2.5 bg-primary ml-1"></span>
      <span className="ml-2 text-sm md:text-base text-muted-foreground">
        Available for new opportunities
      </span>
      <span className="p-1 border rounded-md border-black/10 dark:border-white/6">
        <Terminal className="text-primary size-5" />
      </span>
    </div>
  );
}
