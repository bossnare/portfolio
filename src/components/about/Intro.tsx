export const Intro = () => {
  return (
    <section className="relative flex flex-col items-start w-full min-h-screen gap-8 pt-10 md:mt-10 md:gap-10 md:items-center">
      <span className="absolute top-0 w-1/4 border-t border-border" />

      <h3 className="max-w-md text-3xl">Intro</h3>
      <div className="flex flex-col justify-between w-full gap-6 divide-y md:divide-x md:divide-y-0 md:flex-row divide-border">
        <div className="flex flex-col gap-3 pb-6">
          <p className="max-w-2xl leading-6 text-muted-foreground">
            Full-stack developer creating scalable products, polished
            interfaces, and reliable experiences from concept to launch.
          </p>
        </div>
        <div className="md:w-[70%] pt-4 md:pt-0 md:pl-4 grid grid-cols-2 justify-between gap-10"></div>
      </div>
    </section>
  );
};
