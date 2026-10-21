import type { Metadata } from 'next';
import { Page, PageHeader } from '@/src/components/Page';
// import { LocationMap } from '@/src/components/location-map';
import { Intro } from '@/src/components/about/Intro';
import { PersonalInformation } from '@/src/components/about/PersonalInformation';
import { StatsImpacts } from '@/src/components/about/StatsImpacts';
import { LetsWork } from '@/src/components/LetsWork';
import { SkillsExpertise } from '@/src/components/about/SkillsExpertise';
import { Education } from '@/src/components/about/Education';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <Page id="about-page">
      <PageHeader
        title="About"
        endTitle="me"
        description="A little bit about me and what I do, highlighting the skills, and expertise I bring to every digital experience I create."
      />
      <Intro />
      <PersonalInformation />
      <StatsImpacts />
      <SkillsExpertise />
      <Education />
      <LetsWork />
    </Page>
  );
}
