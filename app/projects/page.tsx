import { Page, PageHeader } from '@/src/components/Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <Page>
      <PageHeader title="Projects"></PageHeader>
    </Page>
  );
}
