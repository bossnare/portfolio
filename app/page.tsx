import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { projects } from '@/src/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-zinc-50 dark:bg-black">
      <header className="sticky w-full h-16 px-3 border md:px-10 z-1000 border-b-zinc-300 dark:border-b-white/8">
        <Header />
      </header>
      <main className="w-full mt-4 space-y-8 md:space-y-10">
        <Hero />
        <section
          id="featured-projects"
          className="flex flex-col gap-6 px-4 md:px-10"
        >
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
              {projects.map((project) => (
                <div
                  key={project.type}
                  className="flex gap-4 p-4 border rounded-md shadow-md border-zinc-200 dark:border-white/8 bg-background dark:bg-background/60"
                >
                  <span
                    style={{ background: `${project.color}1a` }} // 1a = HEX alpha chanel(opacity), 1a = 10% opacity
                    className={`shrink-0 self-start p-2 rounded-lg`}
                  >
                    <project.icon style={{ color: project.color }} />
                  </span>
                  <div className="flex flex-col gap-1 grow">
                    <span className="font-medium capitalize">
                      {project.type}
                    </span>
                    <span className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, this {project.type} is
                      amazing, called {project.name}
                    </span>
                    <a
                      href="#"
                      className="flex items-center self-start gap-1 py-2 mt-auto hover:underline text-primary"
                    >
                      <span>View project</span>
                      <ArrowUpRight className="text-primary" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="flex flex-col gap-6 px-4 md:px-10">
          <div className="flex flex-col min-h-screen gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">About me</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center w-full gap-4 px-4 py-8 bg-zinc-200 dark:bg-white/4 md:px-10">
        <span>Christo Razafimanga</span>
        <div className="flex gap-4">
          <div
            className="bg-foreground size-6"
            style={
              {
                maskImage: `url(/icon/instagram.svg)`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskImage: `url(/icon/instagram.svg)`,
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
              } as React.CSSProperties
            }
          ></div>
          <div
            className="bg-foreground size-6"
            style={
              {
                maskImage: `url(/icon/facebook.svg)`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskImage: `url(/icon/facebook.svg)`,
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
              } as React.CSSProperties
            }
          ></div>
          <div
            className="bg-foreground size-6"
            style={
              {
                maskImage: `url(/icon/whatsapp.svg)`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskImage: `url(/icon/whatsapp.svg)`,
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
              } as React.CSSProperties
            }
          ></div>
        </div>
      </footer>
    </div>
  );
}

// [mask-image:radial-gradient(ellipse_at_center,_#000_25%,_transparent_75%)]
