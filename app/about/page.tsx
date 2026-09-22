import type { Metadata } from 'next';
import { Page, PageHeader } from '@/src/components/Page';
import { LocationMap } from '@/src/components/location-map';
import { stats } from '@/src/data/stats';

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
        <section className="flex flex-col items-start justify-center w-full h-auto gap-8 py-20 md:items-center md:h-screen">
          <h3 className="max-w-md text-3xl font-display">
            My states and impacts
          </h3>
          <div className="grid justify-between grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat) => (
              <p key={stat.name} className="flex flex-col gap-2">
                <span className="text-6xl font-medium font-display">
                  {stat.stat}
                </span>
                <span className="text-sm font-medium text-foreground/90">
                  {stat.name}
                </span>
              </p>
            ))}
          </div>
        </section>
        <LocationMap />
      </div>
    </Page>
  );
}
