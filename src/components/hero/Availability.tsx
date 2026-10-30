import { cn } from '@/src/lib/utils';
// import { Terminal } from 'lucide-react';

export function Availability({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <span className="rounded-full size-2.5 bg-primary ml-1"></span>
      <span className="ml-2 text-sm text-muted-foreground">
        Open to new challenges
      </span>
      {/* <span className="p-1 border rounded-md border-border">
        <Terminal className="text-muted-foreground size-5" />
      </span> */}
    </div>
  );
}
