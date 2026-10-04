import type { Metadata } from 'next';
import { Page, PageHeader } from '@/src/components/Page';
import { LocationMap } from '@/src/components/location-map';
import { Intro } from '@/src/components/about/Intro';
import { PersonalInformation } from '@/src/components/about/PersonalInformation';
import { StatsImpacts } from '@/src/components/about/StatsImpacts';

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
      <Intro />
      <PersonalInformation />
      <StatsImpacts />
      <LocationMap />
    </Page>
  );
}
