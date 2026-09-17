import { Code2, Download, Menu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <nav className="flex items-center justify-between h-full">
      <div className="flex items-center gap-2">
        <Code2 className="text-primary" />
        <span className="text-lg font-extrabold">Christo Razafimanga</span>
      </div>

      <ul className="items-center hidden gap-12 tracking-tighter lg:flex text-foreground/80">
        <li className="relative flex justify-center font-semibold text-primary">
          <Link href="/">Home</Link>
          <span className="absolute w-1/3 h-[3px] rounded-full -bottom-2 bg-primary"></span>
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
          className="hidden lg:flex h-8 items-center justify-center gap-2 rounded-md px-3 bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:text-background dark:hover:bg-[#ccc]"
          href="/cv/Christo_Razafimanga_Dev_CV.pdf"
          download
        >
          Download CV
          <Download className="size-5" />
        </a>
        <div className="p-0.5 border border-zinc-200 overflow-hidden dark:border-white/12 rounded-md flex items-center *:px-2 *:rounded-sm">
          <span className="text-white bg-primary">EN</span>
          <span className="text-muted-foreground">FR</span>
        </div>
        <button className="flex items-center justify-center border rounded-md md:hidden size-7 border-zinc-300 dark:border-white/12">
          <Menu className="size-5 text-zinc-800 dark:text-zinc-100" />
        </button>
      </div>
    </nav>
  );
}
