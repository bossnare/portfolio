import Image from 'next/image';

export const Intro = () => {
  return (
    <section className="relative flex flex-col items-start w-full min-h-screen gap-8 pt-10 md:mt-10 md:gap-10 md:items-center">
      <span className="absolute top-0 w-1/4 border-t border-border" />

      <h3 className="max-w-md text-3xl">Intro</h3>
      <div className="flex flex-col justify-between w-full gap-6 divide-y md:divide-x md:divide-y-0 md:flex-row divide-border">
        <div className="pb-6">
          <p className="max-w-2xl leading-6 text-muted-foreground">
            Full-stack developer creating scalable products, polished
            interfaces, and reliable experiences from concept to launch.
          </p>
        </div>
        <div className="flex md:w-[70%] items-center gap-6">
          <Image
            src="/icon/icon.svg"
            alt="logo-icon"
            width={300}
            height={300}
            className="h-auto w-30 dark:invert"
          />
          <span className="h-12 border-l border-border/70" />
          <div className="md:w-[70%] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Company</span>
              <span className="font-semibold uppercase font-display">
                Let&apos;s go chris
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Founded</span>
              <span>September 23, 2026 | 23/09/2026</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70"></div>
    </section>
  );
};
