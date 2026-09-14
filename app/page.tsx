import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { Section } from '@/src/components/Section';
import { projects } from '@/src/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-[#F5F5F3] dark:bg-black">
      <header className="fixed inset-x-0 top-0 h-16 px-3 md:px-14 z-1000 bg-[#F5F5F3] dark:bg-black">
        <Header />
      </header>
      <main className="w-full pt-16 space-y-14 sm:pt-20">
        <Hero />
        <Section id="featured-projects" className="flex flex-col gap-6">
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
                  className="flex gap-4 p-4 border rounded-md shadow-md border-zinc-200 dark:border-white/8 bg-background dark:bg-background/80"
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
                      {project.description} {project.name}
                    </span>
                    <a
                      href="#"
                      className="flex items-center self-start gap-1 py-2 mt-auto hover:underline text-muted-foreground hover:text-primary"
                    >
                      <span>View project</span>
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section id="about" className="flex flex-col gap-6">
          <div className="flex flex-col min-h-screen gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">About me</span>
            </div>
          </div>
        </Section>
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
