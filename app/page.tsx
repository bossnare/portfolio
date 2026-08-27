import Image from 'next/image';
import { ArrowBigDownDash, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-zinc-50 dark:bg-black">
      <header className="sticky w-full px-1 md:px-10 h-16 z-1000 border border-zinc-300 dark:border-white/6">
        <nav className="flex items-center justify-between h-full">
         <div className="font-black text-lg">Christo Razafimanga</div>

          <ul className=" items-center gap-6 hidden lg:flex">
            <li className="relative font-bold text-primary">
              Home
              <span className="absolute inset-x-0 h-1 rounded-full -bottom-2 bg-primary"></span>
            </li>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <a
                className="hidden lg:flex h-11 w-full items-center justify-center gap-2 rounded-full border border-primary px-5 text-primary transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc] md:w-44"
                href="/cv/Christo_Razafimanga_Dev_CV.pdf"
                download
              >
                <ArrowBigDownDash />
                Download CV
              </a>
        </nav>
      </header>
      <main className="w-full mt-5">
        <section className="flex flex-col items-center justify-between mx-auto rounded-lg w-full max-w-[94%] sm:p-10 md:pb-0 border border-zinc-300 dark:border-white/6 min-h-screen bg-white dark:bg-black md:min-h-auto md:flex-row md:items-center">
          <div className="flex flex-col items-center justify-between flex-1 w-full max-w-3xl gap-4 px-16 py-16 bg-white lg:px-0 lg:py-0 dark:bg-black md:items-start">
            <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
              <p>Hi, I&apos;m <span className="text-primary"> Christo</span></p>
              <h1 className="max-w-md text-4xl font-extrabold leading-10 tracking-tight text-black md:text-2xl lg:text-6xl lg:leading-12 dark:text-zinc-50">
                Building
                <span className="text-primary"> digital experiences</span> that
                <span className="text-primary"> matter.</span>
              </h1>
              <code className="max-w-md font-mono leading-6 text-zinc-600 dark:text-zinc-500">
               <span className="text-primary">$</span> <span>git</span> <span>commit</span>
                <span> -m</span>
                <span className="text-primary">
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
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-background dark:text-background transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc] md:w-44"
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
                          <div className="h-20">Tech stack.</div>

          </div>
            <div className="relative overflow-hidden md:w-1/2">
              <Image
              className="object-contain relative h-auto w-[280px] mx-auto lg:w-[420px] sm:w-[340px] xl:w-[480px]
               z-12"
              src="/images/profile-1.png"
              alt="Christo Razafimanga"
              width={800}
              height={900}
              priority
            />
                        <div className="absolute inset-0 z-10 bg-primary/10 [background-image:linear-gradient(to_right,_rgba(148,_163,_184,_0.35)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(148,_163,_184,_0.35)_1px,_transparent_1px)] [background-size:40px_40px] "></div>
                        {/* <div className="absolute inset-0 z-9 bg-[radial-gradient(ellipse_at_center,transparent_20%,#fff_70%)]"></div> */}

            </div>
        </section>
      </main>
    </div>
  );
}

// [mask-image:radial-gradient(ellipse_at_center,_#000_25%,_transparent_75%)]