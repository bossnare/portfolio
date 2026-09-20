import type { Metadata } from 'next';
import {PageHeader} from '@/src/components/PageHeader'

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (<div className="w-full max-w-6xl px-4 mx-auto space-y-6 md:pt-12 md:p-0">
    <PageHeader title="About" description="A little bit about me and what I do." />
  </div>);
}
