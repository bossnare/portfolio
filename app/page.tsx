import { AboutMe } from '@/src/components/about/AboutMe';
import { Hero } from '@/src/components/Hero';
import { FeaturedWorks } from '@/src/components/works/FeaturedWorks';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <FeaturedWorks />
    </>
  );
}
