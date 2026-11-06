import Link from 'next/link';
import Image from 'next/image';
import { SocialLinks } from './SocialLinks';
import {cn} from '@/src/lib/utils'

export function Footer() {
  return (
    <footer className="w-full mt-auto px-4 py-10 overflow-x-hidden bg-linear-to-b from-transparent via-black via-30% to-black text-background dark:text-foreground dark:bg-linear-to-b from-transparent to-zinc-950 md:px-0 md:py-12">
      <div className="flex flex-col w-full max-w-6xl gap-8 mx-auto">
        <div className="flex mt-10 md:mt-8 w-full">
          {Array.from({ length: 15 }).map((box, i) => (
              <div
                key={i}
                className={cn(i % 2 ? 'bg-linear-to-b from-[#242424]/60 dark:from-#242424]/90 to-transparent' : 'bg-[#242424]/2 bg-linear-to-b from-transparent to-[#242424]/20 dark:to-[#242424]/80 -mt-20', 'size-20 shrink-0')}
              />
            ))}
        </div>

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm flex flex-col items-center text-center sm:items-start sm:text-start gap-2">
            <p className="text-lg font-semibold font-display flex items-center gap-3">
              <Image width={800} height={850} alt="logo icon" className="size-5 invert" src='/icon/letsgochris.svg' />
              <Image src="/icon/lgc.svg" width={400} height={200} className="w-30" alt="lgc_wordmark" />
            </p>
            <p className="text-sm leading-6 text-[#a1a1aa]">
              Full-stack web developement & design. Creating scalable products,
              polished interfaces, and reliable experiences from concept to
              launch.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 sm:items-end">
            <span className="text-xs font-semibold tracking-wider font-display uppercase text-[#a1a1aa]">
              Connect
            </span>
            <SocialLinks />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-5 text-sm border-t text-[#a1a1aa] border-[#ffffff0a] sm:flex-row sm:items-center sm:justify-between">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            <Link
              className="transition-colors hover:text-white active:text-white active:bg-muted"
              href="/about"
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-white active:text-white active:bg-muted"
              href="/works"
            >
              Works
            </Link>
            <Link
              className="transition-colors hover:text-white active:text-white active:bg-muted"
              href="/"
            >
              Home
            </Link>
          </nav>
          <span>© {new Date().getFullYear()} Christo Razafimanga</span>
        </div>
      </div>
    </footer>
  );
}
