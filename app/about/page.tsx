import type { Metadata } from 'next';
import { Page, PageHeader } from '@/src/components/Page';
import { LocationMap } from '@/src/components/location-map';
import { stats } from '@/src/data/stats';
import { Counter } from '@/src/components/about/Counter';
import { personalInfo } from '@/src/data/personal-info';

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
      <section className="relative flex flex-col items-start w-full min-h-screen gap-8 pt-10 md:mt-10 md:gap-10 md:items-center">
        <span className="absolute top-0 w-1/4 border-t border-zinc-200 dark:border-white/20" />

        <h3 className="max-w-md text-3xl">Intro</h3>
        <div className="flex flex-col justify-between w-full gap-6 divide-y md:divide-x md:divide-y-0 md:flex-row divide-zinc-200 dark:divide-white/20">
          <div className="flex flex-col gap-3 pb-6">
            <p className="max-w-2xl leading-6 text-muted-foreground">
              Full-stack developer creating scalable products, polished
              interfaces, and reliable experiences from concept to launch.
            </p>
          </div>
          <div className="md:w-[70%] pt-4 md:pt-0 md:pl-4 grid grid-cols-2 justify-between gap-10"></div>
        </div>
      </section>
      <section className="relative flex flex-col items-start justify-center w-full min-h-screen gap-8 md:gap-10 md:items-center">
        <span className="absolute top-0 w-1/4 border-t border-zinc-200 dark:border-white/20" />

        <h3 className="max-w-md text-3xl">Personal Information</h3>
        <div className="flex flex-col justify-between w-full gap-6 divide-y md:divide-x md:divide-y-0 md:flex-row divide-zinc-200 dark:divide-white/20">
          <div className="flex flex-col gap-3 pb-8">
            <span className="text-muted-foreground">{personalInfo.label}</span>
            <span className="text-3xl font-medium">{personalInfo.value}</span>
          </div>
          <div className="md:w-[70%] pt-4 md:pt-0 md:pl-4 grid grid-cols-2 justify-between gap-10">
            {personalInfo.data.map((info) => (
              <div className="flex flex-col gap-3" key={info.value}>
                <span className="text-muted-foreground">{info.label}</span>
                <span className="text-lg">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-start justify-center w-full min-h-screen gap-8 md:gap-10 md:items-center">
        <span className="absolute top-0 w-1/4 border-t border-zinc-200 dark:border-white/20" />
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
      <LocationMap />
    </Page>
  );
}
