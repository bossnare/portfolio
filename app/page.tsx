import { Hero } from '@/src/components/Hero';
import { Header } from '@/src/components/Header';
import { ArrowUpRight, Grid2X2Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-zinc-50 dark:bg-black">
      <header className="sticky w-full h-16 px-4 border md:px-10 z-1000 border-zinc-300 dark:border-white/6">
        <Header />
      </header>
      <main className="w-full mt-4">
        <Hero />
        <section className="flex flex-col min-h-screen gap-6 p-4 py-8 md:p-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">Featured projects</span>
              <button className="flex items-center gap-1 text-muted-foreground">
                <span>
                  View all{' '}
                  <span className="hidden md:inline-block">projects</span>
                </span>
                <ArrowUpRight className="text-primary" />
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-md min-h-40 bg-background"
                >
                  <span className="shrink-0">
                    <Grid2X2Check />
                  </span>
                  <div className="flex flex-col gap-3 grow">
                    <span>Project {i + 1}</span>
                    <span>
                      Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, this project {i + 1} is
                      amazing
                    </span>
                    <button className="flex items-center gap-1 text-muted-foreground">
                      <span>View project</span>
                      <ArrowUpRight className="text-primary" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// [mask-image:radial-gradient(ellipse_at_center,_#000_25%,_transparent_75%)]
