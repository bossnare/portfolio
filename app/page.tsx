import { AboutMe } from '@/src/components/about/AboutMe';
import { Hero } from '@/src/components/Hero';
import { FeaturedProjects } from '@/src/components/projects/FeaturedProjects';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <FeaturedProjects />
    </>
  );
}
