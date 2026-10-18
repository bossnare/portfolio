import Image from 'next/image';
import { intro } from '@/src/data/abouts';

export const Intro = () => {
  return (
    <section className="relative flex flex-col items-start w-full min-h-screen gap-10 pt-10 md:mt-10 md:gap-10 md:items-center">
      <span className="absolute top-0 w-1/4 border-t border-border" />

      <h3 className="max-w-md text-3xl">Intro</h3>
      <div className="flex flex-col items-center justify-between w-full gap-6 divide-y divide-border">
        <div className="max-w-2xl pb-6 space-y-3">
          <p>{intro.description[0]}</p>
          <p>{intro.description[1]}</p>
        </div>
        <div className="flex flex-col items-start gap-6 md:items-center">
          <div className="flex items-center gap-8">
            <Image
              src={`/icon/${intro.letsgochris.image}`}
              alt="logo-icon"
              width={300}
              height={300}
              className="h-auto w-30 dark:invert"
            />
            <div className="flex flex-col gap-4">
              {intro.letsgochris.info.map((info) => (
                <div key={info.value} className="flex flex-col gap-2">
                  <span className="text-sm text-muted-foreground">
                    {info.label}
                  </span>
                  <span className={`font-${info.font}`}>{info.value}</span>
                </div>
              ))}
            </div>
            <span className="border-t border-border/70" />
          </div>

          <div className="max-w-lg md:text-center">
            <span className="font-display">{intro.letsgochris.name}</span>{' '}
            {intro.letsgochris.description}
          </div>
        </div>
      </div>
    </section>
  );
};
