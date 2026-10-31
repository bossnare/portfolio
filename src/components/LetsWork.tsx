import { ArrowUpRight } from 'lucide-react';

export function LetsWork() {
  return (
    <div className="flex items-center justify-between gap-4 p-5 border rounded-lg border-border bg-linear-to-r from-muted/70 to-secondary-foreground dark:to-transparent">
      <div>
        <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
          Current focus
        </p>
        <p className="mt-1 text-lg font-medium text-foreground">
          Building polished user experiences with a strong product mindset.
        </p>
      </div>
      <a
        href="/contact"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition border rounded-full border-border bg-secondary text-secondary-foreground hover:opacity-90 active:opacity-80"
      >
        Let&apos;s work
        <ArrowUpRight className="size-4 shrink-0" />
      </a>
    </div>
  );
}
