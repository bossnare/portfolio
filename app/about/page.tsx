import type { Metadata } from 'next';
import {Page, PageHeader} from '@/src/components/Page'
import {Locate} from 'lucide-react'
import {LocationMap} from '@/src/components/location-map'

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (<Page id="about-page" className="min-h-100">
    <PageHeader title="About" description="A little bit about me and what I do, highlighting the skills, creativity, and expertise I bring to every digital experience I create." />
    <div className="h-full">
      <h2 className="font-medium mb-3">I&apos;m a full-stack web developer & Designer</h2>
      <p className="text-muted-foreground mb-4 text-sm flex gap-2 items-center"><Locate /><span>Live in Antananarivo - Madagascar</span></p>
      <p className="leading-6 max-w-2xl">
              Full-stack developer creating scalable products, polished
              interfaces, and reliable experiences from concept to launch.
      </p>
      <LocationMap />
    </div>
  </Page>);
}
