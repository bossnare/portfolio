import { intro } from '@/src/data/abouts';
import Image from 'next/image';

export const Intro = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-8">
      <h2 className="max-w-md text-3xl">Intro</h2>

      <div className="grid w-full gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        <div className="flex flex-col justify-center gap-5 md:py-5">
          <p className="max-w-2xl font-display text-2xl leading-snug">
            {intro.description[0]}
          </p>
          <p className="max-w-xl leading-7 text-muted-foreground">
            {intro.description[1]}
          </p>
        </div>

        <div className="flex flex-col gap-5 border-t-2 border-primary bg-card p-5 md:border-l-2 md:border-t-0 md:p-7">
          <div className="flex items-center gap-4">
            <Image
              src={`/icon/${intro.letsgochris.image}`}
              alt={`${intro.letsgochris.name} mark`}
              width={60}
              height={60}
              className="size-12 shrink-0 dark:"
            />
            <div>
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Independent studio
              </p>
              <p className="mt-1 font-display text-xl">
                {intro.letsgochris.name}
              </p>
            </div>
          </div>

          <p className="leading-7 text-muted-foreground">
            {intro.letsgochris.description}
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
            {intro.letsgochris.info.map((info) => (
              <div key={info.label} className="flex flex-col gap-1.5">
                <span className="text-xs uppercase text-muted-foreground">
                  {info.label}
                </span>
                <span className={info.font ? `font-${info.font}` : undefined}>
                  {info.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
