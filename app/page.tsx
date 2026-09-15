import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { FeaturedProjects } from '@/src/components/projects/FeaturedProjects';
import { Section } from '@/src/components/Section';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-[#F5F5F3] dark:bg-black">
      <header className="fixed inset-x-0 top-0 h-15 px-3 md:px-14 z-1000 bg-[#F5F5F3] dark:bg-black">
        <Header />
      </header>
      <main className="w-full pt-15 space-y-14 sm:pt-18">
        <Hero />
        <FeaturedProjects />
        <Section id="about" className="flex flex-col gap-6">
          <div className="flex flex-col min-h-screen gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">About me</span>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

// [mask-image:radial-gradient(ellipse_at_center,_#000_25%,_transparent_75%)]
