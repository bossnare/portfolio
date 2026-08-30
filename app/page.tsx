import { Hero } from '@/src/components/Hero';
import { Header } from '@/src/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-zinc-50 dark:bg-black">
      <header className="sticky w-full h-16 px-6 border md:px-10 z-1000 border-zinc-300 dark:border-white/6">
        <Header />
      </header>
      <main className="w-full mt-4">
        <Hero />
      </main>
    </div>
  );
}

// [mask-image:radial-gradient(ellipse_at_center,_#000_25%,_transparent_75%)]
