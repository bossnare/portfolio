import { stats } from '@/src/data/stats';
import { Counter } from './Counter';

export function StatsImpacts() {
  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-screen gap-8 md:gap-10 md:items-center">
      <span className="absolute top-0 w-1/4 border-t border-border" />
      <h3 className="max-w-md text-3xl">My stats & impacts</h3>
      <div className="grid justify-between grid-cols-2 gap-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2 min-w-40 md:min-w-50"
          >
            <span className="text-6xl font-medium font-display">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm font-medium text-foreground/90">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
