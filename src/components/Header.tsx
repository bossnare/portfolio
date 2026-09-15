import { Code2, Download, Menu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <nav className="flex items-center justify-between h-full">
      <div className="flex items-center gap-2">
        <Code2 className="text-primary" />
        <span className="text-lg font-extrabold">Christo Razafimanga</span>
      </div>

      <ul className="items-center hidden gap-12 font-semibold lg:flex text-foreground/80">
        <li className="relative flex justify-center text-primary">
          <Link href="/">Home</Link>
          <span className="absolute w-1/3 h-1 rounded-full -bottom-2 bg-primary"></span>
        </li>
        <li>
          {' '}
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          {' '}
          <Link href="#">Experience</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <a
          className="hidden lg:flex h-8 w-full items-center justify-center gap-2 rounded-md px-5 bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc] md:w-44"
          href="/cv/Christo_Razafimanga_Dev_CV.pdf"
          download
        >
          Download CV
          <Download className="size-5" />
        </a>
        <div className="p-0.5 border border-zinc-200 overflow-hidden dark:border-white/8 rounded-md flex items-center *:px-2 *:rounded-sm">
          <span className="text-white bg-primary">EN</span>
          <span className="text-muted-foreground">FR</span>
        </div>
        <button className="flex items-center justify-center border rounded-md md:hidden size-7 border-zinc-300 dark:border-white/8">
          <Menu className="size-5 text-zinc-800 dark:text-zinc-100" />
        </button>
      </div>
    </nav>
  );
}
