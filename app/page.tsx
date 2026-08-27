import Image from 'next/image';
import { ArrowBigDownDash, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-zinc-50 dark:bg-black">
      <header>
        <nav></nav>
      </header>
      <main>
        <section className="flex flex-col items-center justify-between flex-1 w-full max-w-6xl min-h-screen bg-white dark:bg-black md:h-screen md:flex-row md:items-center">
          <div className="relative w-full h-full md:w-1/2">
            <Image
              className="object-cover size-full"
              src="/images/profile.webp"
              alt="Christo-profile"
              width={400}
              height={400}
              priority
            />
            <div className="absolute inset-x-0 bottom-0 md:hidden h-1/3 bg-linear-to-b from-transparent to-primary/20"></div>
          </div>
          <div className="flex flex-col items-center justify-between flex-1 w-full max-w-3xl gap-4 px-16 py-16 bg-white md:py-0 dark:bg-black md:items-start">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="max-w-sm text-5xl font-black tracking-tight text-black leading-12 dark:text-zinc-50">
                Building
                <span className="text-primary"> digital experiences</span> that
                matter.
              </h1>
              <code className="max-w-md font-mono leading-6 text-zinc-600 dark:text-zinc-500">
                <span className="text-primary">$ git</span> <span>commit</span>
                <span> -m</span>
                <span className="text-yellow-300">
                  {' '}
                  &quot;building digital experiences&quot;
                </span>
              </code>
              {/* <code className="max-w-md font-mono leading-6 text-zinc-600 dark:text-zinc-500">
                <span className="text-primary">$ whoami</span> <span>&gt;</span>
                <span> full-stack developer</span>
              </code> */}
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Full-stack web developer focused on crafting{' '}
                <a className="font-medium text-zinc-950 dark:text-zinc-50">
                  modern
                </a>
                <a className="font-medium text-zinc-950 dark:text-zinc-50">
                  , performant, and thoughtful{' '}
                </a>{' '}
                web applications.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-background dark:text-foreground transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc] md:w-44"
                href="/cv/Christo_Razafimanga_Dev_CV.pdf"
                download
              >
                <ArrowBigDownDash />
                Download CV
              </a>
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-40"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="size-5" />
                Contact me
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
