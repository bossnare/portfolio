import Image from 'next/image';
import { ArrowBigDownDash, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 font-sans bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-between flex-1 w-full max-w-6xl bg-white min-h-dvh sm:flex-row dark:bg-black sm:items-start">
        <Image
          className="h-full"
          src="/images/profile.webp"
          alt="Christo-profile"
          width={590}
          height={600}
          priority
        />
        <div className="flex flex-col items-center justify-between flex-1 w-full max-w-3xl gap-2 px-16 bg-white py-28 dark:bg-black sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-sm text-5xl font-black leading-12 tracking-tight text-black dark:text-zinc-50">
              Welcome to
              <span className="text-red-500"> Christo Razafimanga</span>{' '}
              Universe.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-500 animate-pulse">
              &gt; Enter password for bossnare...🕸️🕷️
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Full-stack web developer and passionate focused on building{' '}
              <a className="font-medium text-zinc-950 dark:text-zinc-50">
                modern
              </a>
              , scalable and{' '}
              <a className="font-medium text-zinc-950 dark:text-zinc-50">
                user-friendly
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
      </main>
    </div>
  );
}
