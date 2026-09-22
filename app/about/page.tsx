import type { Metadata } from 'next';
import { Page, PageHeader } from '@/src/components/Page';
import { LocationMap } from '@/src/components/location-map';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <Page id="about-page">
      <PageHeader
        title="About"
        description="A little bit about me and what I do, highlighting the skills, creativity, and expertise I bring to every digital experience I create."
      />
      <div className="h-full">
        <h2 className="font-medium mb-3">
          I&apos;m a full-stack web developer & Designer
        </h2>
        <p className="leading-6 max-w-2xl text-muted-foreground mb-8">
          Full-stack developer creating scalable products, polished interfaces,
          and reliable experiences from concept to launch.
        </p>
        <LocationMap />
      </div>
    </Page>
  );
}
