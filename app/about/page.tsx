import type { Metadata } from 'next';
import { Page, PageHeader } from '@/src/components/Page';
import { LocationMap } from '@/src/components/location-map';
import { stats } from '@/src/data/stats';
import { Counter } from '@/src/components/about/Counter';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <Page id="about-page">
      <PageHeader
        title="About"
        description="A little bit about me and what I do, highlighting the skills, and expertise I bring to every digital experience I create."
      />
      <div className="h-full">
        <p className="max-w-2xl leading-6 text-muted-foreground">
          Full-stack developer creating scalable products, polished interfaces,
          and reliable experiences from concept to launch.
        </p>
        <section className="flex flex-col items-start justify-center w-full h-auto min-h-screen gap-8 md:gap-10 md:items-center">
          <h3 className="max-w-md text-3xl">Personal Information</h3>
          <div className="flex flex-col justify-between w-full gap-6 divide-y md:divide-x md:divide-y-0 md:flex-row divide-zinc-300 dark:divide-white/8">
            <div className="flex flex-col gap-3 pb-8">
              <span className="text-muted-foreground">Full name</span>
              <span className="text-4xl font-medium font-display">
                RAZAFIMANGA Gervais Christo
              </span>
            </div>
            <div className="md:w-[70%] pt-4 md:pt-0 grid grid-cols-2 justify-between gap-10 *:flex *:flex-col *:gap-3">
              <div className="">
                <span className="text-muted-foreground">Born</span>
                <span className="text-lg font-medium font-display">
                  December 03, 2003
                </span>
              </div>
              <div className="">
                <span className="text-muted-foreground">Nationality</span>
                <span className="text-lg font-medium font-display">
                  Malagasy
                </span>
              </div>
              <div className="">
                <span className="text-muted-foreground">Location</span>
                <span className="text-lg font-medium font-display">
                  Antananarivo, Madagascar
                </span>
              </div>
              <div className="">
                <span className="text-muted-foreground">Languages</span>
                <span className="text-lg font-medium font-display">
                  Malagassy - English
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start justify-center w-full h-auto min-h-screen gap-8 md:gap-10 md:items-center">
          <h3 className="max-w-md text-3xl">My states and impacts</h3>
          <div className="grid justify-between grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 min-w-50">
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
        <LocationMap />
      </div>
    </Page>
  );
}
