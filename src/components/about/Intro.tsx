import Image from 'next/image';
import { intro } from '@/src/data/abouts';

export const Intro = () => {
  return (
    <section className="relative flex flex-col items-start w-full min-h-screen gap-8 pt-10 md:mt-10 md:gap-10 md:items-center">
      <span className="absolute top-0 w-1/4 border-t border-border" />

      <h3 className="max-w-md text-3xl">Intro</h3>
      <div className="flex flex-col justify-between w-full gap-6 divide-y md:divide-x md:divide-y-0 md:flex-row divide-border">
        <div className="pb-6 pr-6">
          <p className="max-w-2xl leading-6">{intro.description}</p>
        </div>
        <div className="flex md:w-[70%] items-center flex-wrap md:flex-nowrap gap-6">
          <Image
            src={`/icon/${intro.letsgochris.image}`}
            alt="logo-icon"
            width={300}
            height={300}
            className="h-auto w-30 dark:invert"
          />
          <span className="h-20 border-l border-border/70" />
          <div className="md:w-[70%] flex flex-col justify-between gap-5">
            {intro.letsgochris.info.map((info) => (
              <div key={info.value} className="flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">
                  {info.label}
                </span>
                <span className={`font-${info.font}`}>{info.value}</span>
              </div>
            ))}
          </div>
          <span className="h-20 border-l border-border/70" />
          <div className="max-w-lg">
            <span className="font-display">{intro.letsgochris.name}</span>{' '}
            {intro.letsgochris.description}
          </div>
        </div>
      </div>
    </section>
  );
};
