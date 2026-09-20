import type { Metadata } from 'next';
import {Page, PageHeader} from '@/src/components/Page'

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (<Page id="about-page">
    <PageHeader title="About" description="A little bit about me and what I do." />
  </Page>);
}
