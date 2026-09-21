import type { Metadata } from 'next';
import {Page, PageHeader} from '@/src/components/Page'

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (<Page id="about-page" className="min-h-100">
    <PageHeader title="About" description="A little bit about me and what I do." />
    <div className="h-full flex item-center jusitfy-center text-lg animate-pulse">
      Loading...
    </div>
  </Page>);
}
