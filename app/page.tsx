import { AboutMe } from '@/src/components/about/AboutMe';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { FeaturedProjects } from '@/src/components/projects/FeaturedProjects';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-[#F5F5F3] dark:bg-black">
      <Header />
      <main className="w-full pb-20 pt-8 md:pt-0">
        <Hero />
        <AboutMe />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}
