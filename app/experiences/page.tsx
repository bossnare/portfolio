import { Page, PageHeader } from '@/src/components/Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experiences',
};

export default function ExperiencesPage() {
  return (
    <Page>
      <PageHeader
        title="Experiences"
        description="I'm with 1 years of experiences"
      ></PageHeader>
    </Page>
  );
}
