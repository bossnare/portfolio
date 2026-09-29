import { Page, PageHeader } from '@/src/components/Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experiences',
};

export default function ExperiencesPage() {
  return (
    <Page>
      <PageHeader title="Experiences"></PageHeader>
    </Page>
  );
}
