import { Code2, Download, Menu } from 'lucide-react';
import { Tab } from './header/Tab';

export function Header() {
  return (
    <nav className="flex items-center justify-between h-full">
      <div className="flex items-center gap-2">
        <Code2 className="text-primary" />
        <span className="text-lg font-bold">CHRISTO ™</span>
      </div>

      <ul className="items-center hidden gap-12 tracking-tight lg:flex">
        <Tab />
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
        <div className="p-0.5 border border-zinc-300 overflow-hidden dark:border-white/12 rounded-sm flex items-center *:px-2 *:rounded-sm">
          <button className="text-white bg-primary">EN</button>
          <button className="text-muted-foreground">FR</button>
        </div>
        <button className="flex items-center justify-center border rounded-md md:hidden size-7 border-zinc-300 dark:border-white/12">
          <Menu className="size-5 text-zinc-800 dark:text-zinc-100" />
        </button>
      </div>
    </nav>
  );
}
