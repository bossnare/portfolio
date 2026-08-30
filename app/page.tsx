import { Hero } from '@/src/components/Hero';
import { Header } from '@/src/components/Header';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-zinc-50 dark:bg-black">
      <header className="sticky w-full h-16 px-4 border md:px-10 z-1000 border-zinc-300 dark:border-white/6">
        <Header />
      </header>
      <main className="w-full mt-4">
        <Hero />
        <section className="flex flex-col min-h-screen p-4 md:p-10">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">Featured projects</span>
            <button className="flex items-center gap-2 text-muted-foreground">
              <span>
                View all{' '}
                <span className="hidden md:inline-block">projects</span>
              </span>
              <ArrowUpRight />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

// [mask-image:radial-gradient(ellipse_at_center,_#000_25%,_transparent_75%)]
